import {
  Liquid,
  DOMParser,
  nanoid,
  execInSandbox,
  UTILS_IMPORT_BASE,
  acornParse,
} from "./deps.js";

export function parseTransformAttribute(value, base) {
  let inlineScriptText;
  let externalScriptURL;

  // Allow for passing "transform": "{{ utils.jmespath }}"
  if (typeof value === "string") {
    value = LIQUID_ENGINE.parseAndRenderSync(value, {
      utils: UTILS,
    });
  }

  try {
    externalScriptURL = new URL(value, base);
  } catch (_) {}

  if (!externalScriptURL) {
    let scriptParses = true;
    try {
      acornParse(value, {
        ecmaVersion: 2022,
        sourceType: "script",
        allowReturnOutsideFunction: true,
      });
    } catch (e) {
      try {
        acornParse(value, {
          ecmaVersion: 2022,
          sourceType: "module",
        });
      } catch (e) {
        scriptParses = false;
      }
    }

    if (scriptParses) {
      inlineScriptText = value;
    }
  }

  return {
    inlineScriptText,
    externalScriptURL,
  };
}

const UTILS = {
  noop: new URL("./utils/noop.js", UTILS_IMPORT_BASE).toString(),
  md_to_json: new URL("./utils/md_to_json.js", UTILS_IMPORT_BASE).toString(),
  jmespath: new URL("./utils/jmespath.js", UTILS_IMPORT_BASE).toString(),
  csv_to_json: new URL("./utils/csv_to_json.js", UTILS_IMPORT_BASE).toString(),
  json_to_csv: new URL("./utils/json_to_csv.js", UTILS_IMPORT_BASE).toString(),
};

const LIQUID_ENGINE = new Liquid();
const IS_WORKER =
  typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;

if (typeof CustomEvent == "undefined") {
  // Node:
  global.CustomEvent = class CustomEvent extends Event {
    constructor(message, data) {
      super(message, data);
      this.detail = data.detail;
    }
  };
}

export function jsEval(
  str,
  input,
  options,
  { importMap = {}, verbose = false } = {}
) {
  return execInSandbox(str, {
    verbose,
    importMap,
    exposed: {
      input,
      options,
    },
    // Todo: configure based on env:
    allowFileModuleLoads: true,
  });
  // TODO: expose a debugging only mode that does normal eval:
  // let fn = new Function("obj", str);
  // return fn({input, options});
}

function textIsJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch (e) {}
  return false;
}

export function getScriptForSrc(src) {
  return `
  import mod from "${src}";
  export default function(opts) {
    return mod(opts);
  }
`;
}

const networkLoaders = new Map();

// Todo: integrate with APIs like this?
// networkLoaders.set("gist", {
//   shouldHandle(uri) {
//     return uri.host == "gist.github.com"; // && uri.pathname looks like a gist;
//   },
//   async getContent(uri) {
//     let raw = new URL("https://gist.githubusercontent.com" + uri.pathname + "/tip/" + uri.hash.substr(1));
//     console.log(raw);
//     let resp = await fetch(raw);
//     return resp;
//   },
// });

// TODO: implement write-back to text from a block (i.e. to convert from html to json
// or to get the flattened version)
const blockLoaders = new Map();
blockLoaders.set("json", {
  shouldHandle(content) {
    try {
      JSON.parse(content);
      return true;
    } catch (e) {}
  },
  getLikelyBlocks(content) {
    try {
      let obj = JSON.parse(content);
      if (Array.isArray(obj)) {
        return ["default"];
      }
      if (typeof obj == "object") {
        return Object.keys(obj).filter((key) => {
          return Array.isArray(obj[key]);
        });
      }
      return true;
    } catch (e) {}
  },
  async getBlock(content, options) {
    let ret = JSON.parse(content);

    let base;
    let id;
    if (options?.base) {
      base = new URL(options?.base);
      id = base && base.hash.substr(1);
    }
    if (options?.id) {
      id = options.id;
    }

    // Accept multiple blocks like so:
    // { "one": [{ }],"two": [{ }] }
    if (id && ret.hasOwnProperty(id)) {
      ret = ret[id];
    }

    if (!Array.isArray(ret)) {
      throw new Error(
        `JSON must be an array for now: ${content}. Did you mean to pass an id in the URL hash?`
      );
    }

    if (base) {
      for (let step of ret) {
        if (step.resource) {
          step.resource = decodeURI(new URL(step.resource, base).toString());
        }
        if (step.block) {
          step.block = decodeURI(new URL(step.block, base).toString());
        }
        if (step.transform) {
          let { externalScriptURL } = parseTransformAttribute(
            step.transform,
            base
          );
          if (externalScriptURL) {
            step.transform = decodeURI(externalScriptURL.toString());
          }
        }
      }
    }

    return ret;
  },
  blockToString(block) {
    return JSON.stringify(block);
  },
});

// Todo: fetch this and parse AST looking for some known export like FETCHBLOCKS
// blockLoaders.set("js", {
//   shouldHandle(content) {},
//   getLikelyBlocks(text) {
//     return;
//   },
//   async getBlock() {
//     // Todo: Should this be an ESM?
//     throw new Error("JS Loader unimplemented");
//   },
// });

blockLoaders.set("html", {
  shouldHandle(content) {
    return content.indexOf("<fetch-block") != -1;
  },
  getLikelyBlocks(content) {
    let dom = new DOMParser().parseFromString(content, "text/html");
    let allBlocks = dom.querySelectorAll("fetch-block");
    if (allBlocks.length == 1) {
      return ["default"];
    }

    return [...allBlocks]
      .filter((block) => !!block.id)
      .map((block) => block.id);
  },
  async getBlock(content, options) {
    let dom = new DOMParser().parseFromString(content, "text/html");

    let base;
    let id;
    if (options?.base) {
      base = new URL(options?.base);
      id = base && base.hash.substr(1);
    }
    if (options?.id) {
      id = options.id;
    }

    let htmlBlock;
    if (id) {
      htmlBlock = dom.getElementById(id);
    } else {
      htmlBlock = dom.querySelector("fetch-block");
    }

    if (!htmlBlock) {
      throw new Error(`Can't find a fetchblock ${base?.toString()}`);
    }

    function gatherAttributes(el) {
      let ret = {};
      // Deno dom parser seems to have a bug with NamedNodeMap (no length prop and diff return values
      // when keying by string). So do something a little different
      if (typeof el.attributes.length !== "number") {
        for (let name of Object.keys(el.attributes)) {
          ret[name] = el.getAttribute(name);
        }
      } else {
        for (let i = 0; i < el.attributes.length; i++) {
          var attrib = el.attributes.item(i);
          ret[attrib.name] = attrib.value;
        }
      }
      return ret;
    }

    let initialBlock = gatherAttributes(htmlBlock);
    if (base) {
      if (initialBlock.resource) {
        // TODO: there must be a better way to handle this but for now
        // decode the URI to avoid URL encoding liquid templates. For example:
        // "resource": "example.com/{{ dataset.foo }}" shouldn't become
        // "resource": "example.com/{{%20dataset.foo%20}}" because liquid will complain at
        // ParseError: unexpected token at "%20dataset.pa..."
        initialBlock.resource = decodeURI(
          new URL(initialBlock.resource, base).toString()
        );
      }
      if (initialBlock.block) {
        initialBlock.block = decodeURI(
          new URL(initialBlock.block, base).toString()
        );
      }
    }

    // TODO: Examples that i.e. put headers in child elements
    let blocks = [initialBlock];

    for (let transform of htmlBlock.querySelectorAll(
      "fetch-block-transform, script[type='text/fetch-block-transform']"
    )) {
      let transformBlock = Object.assign(gatherAttributes(transform));
      let externalScriptURL;
      if (transform.getAttribute("src")) {
        externalScriptURL = parseTransformAttribute(
          transform.getAttribute("src"),
          base
        ).externalScriptURL;
      }

      if (externalScriptURL) {
        transformBlock.transform = decodeURI(externalScriptURL);
      } else {
        transformBlock.transform = transform.textContent;
      }

      // Todo: remove this when the migration from type to transform is done:
      // transformBlock.type = "script";
      // transformBlock.value = transform.textContent;

      blocks.push(transformBlock);
    }

    return blocks;
  },
});

const fetchblocks = (() => {
  return {
    blockLoaders,

    getLoaderForText(text) {
      let loader;
      for (let [key, value] of blockLoaders.entries()) {
        if (value.shouldHandle(text)) {
          loader = key;
          break;
        }
      }
      return loader;
    },
    getLikelyBlocksFromText(text, loader) {
      if (!loader) {
        loader = this.getLoaderForText(text);
      }
      if (!blockLoaders.has(loader)) {
        return [];
      }
      let blockLoader = blockLoaders.get(loader);
      let obj = blockLoader.getLikelyBlocks(text);

      return obj || [];
    },

    // We'll attempt to detect the appropriate loader, else you can
    // pass them in (default values "js", "html", "json" or you can
    // make your own with `fetchblocks.loader.set("foo", async (input) => {}))`
    async loadFromText(text, options = {}) {
      let { loader } = options;
      if (!loader) {
        loader = this.getLoaderForText(text);
      }

      if (!blockLoaders.has(loader)) {
        throw new Error(`Couldn't find a valid fetchblock`);
      }

      let blockLoader = blockLoaders.get(loader);
      let obj = await blockLoader.getBlock(text, options);
      try {
        return new fetchblock(obj, {
          sourceText: text,
          loader: loader,
        });
      } catch (e) {
        throw new Error(
          `Loader ${loader} returned an empty object. Error: ${e}`
        );
      }
    },

    async loadFromURI(uri, loader) {
      if (typeof uri == "string") {
        uri = new URL(uri);
      }

      if (!(uri instanceof URL)) {
        throw new Error(`Invalid URI passed in to loadFromURI ${uri}`);
      }

      let response;
      for (let [key, value] of networkLoaders.entries()) {
        if (value.shouldHandle(uri)) {
          response = await value.getContent(uri);
          break;
        }
      }
      if (!response) {
        response = await fetch(uri);
      }

      if (response.status !== 200) {
        // Todo: tests. How do handle redirect?
        throw new Error(
          `Fetchblock couldn't be loaded from ${uri.toString()} - status ${
            response.status
          }`
        );
      }
      let text = await response.text();
      let block = await this.loadFromText(text, {
        loader,
        base: uri,
        response,
      });

      return block;
    },

    run(steps, dataset, options = {}) {
      if (!Array.isArray(steps)) {
        throw new Error("fetchblocks.run expects an array of steps");
      }
      let fb = new fetchblock(steps);

      return fb.run(dataset, options);
    },
  };
})();

class fetchblock extends EventTarget {
  constructor(steps, options = {}) {
    // Todo: only accept an array
    super();
    if (!Array.isArray(steps) || steps.length === 0) {
      throw new Error(
        "Must provide an array with steps to create a fetchblock"
      );
    }

    this.id = nanoid();

    if (options.sourceText) {
      Object.defineProperty(this, "sourceText", {
        value: options.sourceText,
        writable: false,
      });
    }
    if (options.loader) {
      Object.defineProperty(this, "loader", {
        value: options.loader,
        writable: false,
      });
    }
    // If we wanted to make sure the blocks are sane (no local functions etc)
    // if (args[0].block instanceof fetchblock) {
    //   args[0] = { block: args[0].block.steps };
    // }
    // args = JSON.parse(JSON.stringify(args));

    this.remoteBlocks = new Set();
    this.steps = steps;

    this.addEventListener("PlanReady", (e) => {
      if (e.detail?.options?.verbose) {
        console.log(`Plan is ready - ${e.detail.plan.length} steps:`);
        console.table(e.detail.plan.map((step) => [step]));
      }
    });
    this.addEventListener("StepStarting", (e) => {
      if (e.detail?.options?.verbose) {
        console.log(`Step #${e.detail.stepNum} starting`, e.detail.step);
      }
    });
    this.addEventListener("StepComplete", (e) => {
      if (e.detail?.options?.verbose) {
        console.log(`Step #${e.detail.stepNum} complete`, e.detail.step);
      }
    });
    this.addEventListener("RunStarting", (e) => {
      if (e.detail?.options?.verbose) {
        console.log(`Run complete`, e.detail.value);
      }
    });
    this.addEventListener("RunComplete", (e) => {
      if (e.detail?.options?.verbose) {
        console.log(`Run complete`, e.detail.value);
      }
    });
  }

  stringify(type) {}

  async fetchData(fetchOptions = {}, options = {}) {
    if (fetchOptions.stubResponse) {
      return fetchOptions.stubResponse;
    }
    // To avoid too much nesting in JS/JSON we pass all the fetch options
    // flattened along with the uri instead of two params. So cherry pick
    // only the valid opts to pass into the second param
    // https://developer.mozilla.org/en-US/docs/Web/API/fetch
    let {
      resource,
      method,
      headers,
      body,
      mode,
      credentials,
      cache,
      redirect,
      referrer,
      integrity,
      keepalive,
      signal,
    } = fetchOptions;

    if (!resource) {
      throw new Error("No URL passed in");
    }
    if (options.verbose) {
      console.log(`Fetching`, resource);
    }
    let resp = await fetch(resource, {
      method,
      headers,
      body,
      mode,
      credentials,
      cache,
      redirect,
      referrer,
      integrity,
      keepalive,
      signal,
    });

    let type = resp.headers.get("Content-Type") || "";
    if (options.verbose) {
      console.log("Response received - headers:");
      console.table([...resp.headers]);
    }
    if (type.startsWith("application/json")) {
      let json = await resp.json();
      return json;
    }
    // Todo: what to do with non text / non json data?
    let text = await resp.text();
    if (options.verbose) {
      console.log(` Response - text.length: ${text.length}`);
    }
    if (textIsJSON(text)) {
      return JSON.parse(text);
    }

    return text;
  }

  // Run the whole block from start to finish
  async run(options = {}) {
    let { plan, step } = await this.plan(options);
    this.dispatchEvent(
      new CustomEvent("RunStarting", {
        detail: { fbid: this.id, plan, options },
      })
    );
    while (plan.currentStep < plan.length) {
      await step();
    }

    let value = plan[plan.length - 1].stepValue;
    this.dispatchEvent(
      new CustomEvent("RunComplete", {
        detail: { fbid: this.id, value, plan, options },
      })
    );
    return value;
  }

  // Apply liquid templates to finalize plan with actual values
  liquify(plan, dataset) {
    for (var property in plan) {
      if (plan.hasOwnProperty(property)) {
        if (typeof plan[property] == "object") {
          plan[property] = this.liquify(plan[property], dataset);
        } else {
          plan[property] = LIQUID_ENGINE.parseAndRenderSync(plan[property], {
            dataset,
          });
        }
      }
    }
    return plan;
  }

  // Traverse all parents and flatten into a single block
  async flatten() {
    let flattened = [];
    for (let step of this.steps) {
      if (step.block) {
        // Todo: we should probably expect to accept just steps here
        // i.e. with actual cross link in declarative we need to fetch and parse anyway
        let parent = step.block;

        if (typeof parent == "string" || parent instanceof URL) {
          let key = parent.toString().toLowerCase();

          // Prevent cycles
          if (this.remoteBlocks.has(key)) {
            throw new Error(`Duplicate block detected: ${key}`);
          }

          this.remoteBlocks.add(key);
          if (key.startsWith("#") && this.sourceText) {
            // Optimization - if we have a local link within the same file then reuse
            // the same text rather than hitting the network again.
            parent = await fetchblocks.loadFromText(this.sourceText, {
              loader: this.loader,
              id: key.substr(1),
            });
          } else {
            parent = await fetchblocks.loadFromURI(parent);
          }

          parent.remoteBlocks.add(...this.remoteBlocks.keys());
        }

        let parentFlattened = await parent.flatten();

        // Todo: Handle empty or other errors
        flattened.push(...parentFlattened);
      } else if (step.resource) {
        if (step.resource instanceof URL) {
          step.resource = step.resource.toString();
        }
        flattened.push(step);
      } else if (step.transform) {
        let { inlineScriptText, externalScriptURL } = parseTransformAttribute(
          step.transform
        );
        let scriptToRun;
        if (externalScriptURL) {
          scriptToRun = getScriptForSrc(externalScriptURL.toString());
        } else if (inlineScriptText) {
          scriptToRun = inlineScriptText;
        }

        if (!scriptToRun) {
          throw new Error(
            `No valid URL or script in transform step. Value: ${step.transform}`
          );
        }
        step.transform = scriptToRun;
        flattened.push(step);
      } else {
        // Todo: throw an error when the migration is complete
        console.error(
          "Unexpected step - should have either `resource`, `block`, or `transform` set."
        );
        flattened.push(step);
      }
    }
    return flattened;
  }

  // Call flatten and return the steps. This returns the plan itself,
  // and a handle to step through it. You can call this multiple times and
  // get a new one each time.
  async plan(options = {}) {
    let plan = await this.flatten();
    let dataset = options.dataset || {};
    let { verbose } = options;

    let secrets = Object.entries(dataset).filter(
      ([k, v]) => typeof v == "object" && v.hasOwnProperty("value")
    );
    // We have to first liquify to get the accurate URL.
    // Then check to see if a secret was used inappropriately and throw.
    for (let [k, v] of secrets) {
      dataset[k] = v.value;
    }

    plan = this.liquify(structuredClone(plan), dataset);

    if (secrets.length) {
      let requestURL = new URL(plan[0].resource);
      for (let [k, v] of secrets) {
        if (
          !v.allowedOrigins ||
          !v.allowedOrigins.includes(requestURL.origin)
        ) {
          throw new Error(
            `Aborting. Attempted to use a disallowed key: ${k} at origin ${
              requestURL.origin
            }. Allowed origins: ${v.allowedOrigins?.join() || "none"}`
          );
        } else {
          dataset[k] = v.value;
        }
      }
    }

    plan.currentStep = 0;
    this.dispatchEvent(
      new CustomEvent("PlanReady", { detail: { fbid: this.id, plan, options } })
    );

    let step = async () => {
      // TODO: Maintain state here and do the actual run through
      // such that `run` just needs to loop through until this returns null

      // Callers are likely checking this, but just in case
      if (plan.currentStep >= plan.length) {
        return;
      }

      let stepValue;
      let thisStep = plan[plan.currentStep];
      this.dispatchEvent(
        new CustomEvent("StepStarting", {
          detail: {
            fbid: this.id,
            stepNum: plan.currentStep + 1,
            step: thisStep,
            plan,
            options,
          },
        })
      );
      if (options.runInWorker && !IS_WORKER) {
        // TODO: create a worker pool with import.meta.url and call fetchblocks.run with prepoluated data
      }

      // Todo: clean this mess up
      if (
        plan.currentStep == 0 &&
        !thisStep.resource &&
        !options.stubResponse
      ) {
        throw new Error("Invalid run - no data source");
      }
      let incomingValue;
      if (plan.currentStep == 0) {
        if (options.stubResponse) {
          if (thisStep.resource) {
            stepValue = options.stubResponse;
          } else {
            incomingValue = options.stubResponse;
          }
        } else {
          stepValue = await this.fetchData(thisStep, options);
        }
      } else {
        let lastStep = plan[plan.currentStep - 1];
        incomingValue = lastStep.stepValue;
      }

      let { transform } = thisStep;
      if (!stepValue && !transform) {
        console.error("TODO: Clean this up");
        throw new Error(
          "Invalid step - this should be thrown before we start running though"
        );
      }

      if (transform) {
        stepValue = await jsEval(transform, incomingValue, thisStep, {
          verbose,
        });
      }
      // Todo: rename "type" to "transform" and make handling src etc more consistent
      // else if (thisStep.type) {
      //   if (!incomingValue) {
      //     let lastStep = plan[plan.currentStep - 1];
      //     incomingValue = lastStep.stepValue;
      //   }
      //   let transform = thisStep;
      //   let scriptToRun;
      //   if (getURLForUtil(transform.type)) {
      //     transform.src = getURLForUtil(transform.type).toString();
      //   }

      //   if (transform.src) {
      //     scriptToRun = getScriptForSrc(transform.src);
      //   } else if (transform.value) {
      //     scriptToRun = transform.value;
      //   } else {
      //     throw new Error("No script detected in " + JSON.stringify(transform));
      //   }

      //   stepValue = await jsEval(scriptToRun, incomingValue, transform);
      // }
      thisStep.stepValue = stepValue;
      plan.currentStep = plan.currentStep + 1;
      this.dispatchEvent(
        new CustomEvent("StepComplete", {
          detail: {
            fbid: this.id,
            stepNum: plan.currentStep,
            step: thisStep,
            plan,
            options,
          },
        })
      );
    };
    return {
      plan,
      step,
    };
  }
}

if (IS_WORKER) {
  const HEALTHCHECK_INTERVAL = 100;
  self.onmessage = async function (e) {
    console.log(e, e.data);

    // TODO: Run single step

    if (e.data.type == "fetchblocks.runstep") {
      try {
        let block = new fetchblock(e.data.blocks);
        let healthcheck = null;
        block.addEventListener("PlanReady", (e) => {
          console.log(e);
          self.postMessage({
            type: e.type,
            detail: e.detail,
          });
        });
        block.addEventListener("StepStarting", (e) => {
          self.postMessage({
            type: e.type,
            detail: e.detail,
          });
        });
        block.addEventListener("StepComplete", (e) => {
          self.postMessage({
            type: e.type,
            detail: e.detail,
          });
        });
        block.addEventListener("RunComplete", (e) => {
          clearInterval(healthcheck);
          self.postMessage({
            type: e.type,
            detail: e.detail,
          });
        });
        block.addEventListener("RunStarting", (e) => {
          healthcheck = setInterval(() => {
            self.postMessage({
              type: "healthcheck",
              detail: performance.now(),
            });
          }, HEALTHCHECK_INTERVAL);

          self.postMessage({
            type: e.type,
            detail: e.detail,
          });
        });

        await block.run(e.data.options);
      } catch (e) {
        self.postMessage({
          type: "Error",
          detail: {
            e: e.toString(),
          },
        });
      }
    }
  };
}

export { fetchblock, fetchblocks };
