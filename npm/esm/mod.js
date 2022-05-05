import * as dntShim from "./_dnt.shims.js";
import { CONFIG, Liquid, DOMParser, builtinsString, } from "./deps.js";
const LIQUID_ENGINE = new Liquid();
function run() {
    let doc = new DOMParser().parseFromString(`<html></html>`, "text/html");
    return doc.documentElement.outerHTML;
}
function runWithEnv() {
    return `HELLO ${CONFIG["HELLO"]}`;
}
async function fetchRemote(url) {
    let resp = await dntShim.fetch(url);
    let text = await resp.text();
    return text;
}
export { run, runWithEnv, fetchRemote };
export function jsEval(str, input, options) {
    // The intent is for this to run in a sandbox, but for now eval it:
    let fn = new Function("input", "options", builtinsString + str);
    return fn(input, options);
}
const builtins = {
    noop(data, transform) {
        return jsEval("return builtins.noop(input, options)", data, transform);
    },
    jmespath(data, transform) {
        return jsEval("return builtins.jmespath(input, options)", data, transform);
    },
    async script(data, transform) {
        // TODO: Use sandbox
        if (transform.value) {
            return jsEval(transform.value, data, transform);
        }
        else if (transform.src) {
            // TODO: Parse out the module to get the function body. Or get the new interpreter
            // to just handle and call modules
            throw new Error(`Remote module load not implemented yet - ${transform.src}`);
        }
    },
};
// TODO: implement write-back to text from a block (i.e. to convert from html to json
// or to get the flattened version)
const loaders = new Map();
loaders.set("js", async () => {
    return;
});
loaders.set("html", async (input) => {
    let dom = new DOMParser().parseFromString(input, "text/html");
    // TODO: handle fragment ids
    let htmlBlock = dom.querySelector("fetch-block");
    if (!htmlBlock) {
        throw new Error("Can't find a fetchblock");
    }
    function gatherAttributes(el) {
        let ret = {};
        // Deno dom parser seems to have a bug with NamedNodeMap (no length prop and diff return values
        // when keying by string). So do something a little different
        if (typeof el.attributes.length !== "number") {
            for (let name of Object.keys(el.attributes)) {
                ret[name] = el.getAttribute(name);
            }
        }
        else {
            for (let i = 0; i < el.attributes.length; i++) {
                var attrib = el.attributes.item(i);
                ret[attrib.name] = attrib.value;
            }
        }
        return ret;
    }
    let initialBlock = gatherAttributes(htmlBlock);
    // TODO: Examples that i.e. put headers in child elements
    let blocks = [initialBlock];
    for (let transform of htmlBlock.querySelectorAll("fetch-block-transform, script[type='text/fetch-block-transform']")) {
        let transformBlock = Object.assign(gatherAttributes(transform));
        // TODO: Handle remote scripts as well
        if (transform.tagName == "SCRIPT") {
            transformBlock.type = "script";
            transformBlock.value = transform.textContent;
        }
        blocks.push(transformBlock);
    }
    return blocks;
    // if url, do a fetch
    // parse HTML. Copy stuff from import-components.js
});
loaders.set("json", async (input) => {
    let ret = JSON.parse(input);
    if (!Array.isArray(ret)) {
        throw new Error(`JSON must be an array for now: ${input}`);
    }
    return ret;
});
const fetchblocks = (() => {
    return {
        loaders,
        // By default this will read from dotenv. If you want more you can set:
        env: new Map(Object.entries(CONFIG)),
        async loadFromText(text, loader) {
            // TODO: detect
            console.log(loader);
            if (!loader || !loaders.has(loader)) {
                throw new Error(`Missing loader ${loader}`);
            }
            console.log(text);
            let l = loaders.get(loader);
            let obj = await l.call(null, text);
            try {
                return new fetchblock(...obj);
            }
            catch (e) { }
            throw new Error(`Loader ${loader} returned an empty object`);
        },
        // We'll attempt to detect the appropriate loader, else you can
        // pass them in (default values "js", "html", "json" or you can
        // make your own with `fetchblocks.loader.set("foo", async (input) => {}))`
        load(uri, loader) {
            if (!loader) {
                let detectedLoader;
                if (!detectedLoader) {
                    throw new Error(`Could not detect loader for ${uri}. If this seems wrong then please pass one in.`);
                }
                loader = detectedLoader;
            }
        },
        run(steps, dataset, options = {}) {
            if (!Array.isArray(steps)) {
                throw new Error("fetchblocks.run expects an array of steps");
            }
            let fb = new fetchblock(...steps);
            return fb.run(dataset, options);
        },
    };
})();
class fetchblock {
    constructor(...args) {
        if (args.length === 0) {
            throw new Error("Must provide an initial `fetch` or `block` step as the first parameter");
        }
        this.request = args[0];
        this.transforms = args.slice(1);
        if (!this.type) {
            throw new Error("The request must be either `fetch` or `block`");
        }
    }
    get type() {
        if (this.request.resource) {
            return "fetch";
        }
        if (this.request.block) {
            return "block";
        }
    }
    async fetchData(fetchOptions = {}, options = {}) {
        // To avoid too much nesting in JS/JSON we pass all the fetch options
        // flattened along with the uri instead of two params. So cherry pick
        // only the valid opts to pass into the second param
        // https://developer.mozilla.org/en-US/docs/Web/API/fetch
        let { resource, method, headers, body, mode, credentials, cache, redirect, referrer, integrity, keepalive, signal, } = fetchOptions;
        if (!resource) {
            throw new Error("No URL passed in");
        }
        if (options.verbose) {
            console.log(`Fetching ${resource}`);
        }
        let resp = await dntShim.fetch(resource, {
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
        let type = resp.headers.get("Content-Type");
        if (options.verbose) {
            console.log(` Content-Type ${type}`);
        }
        if (type.startsWith("text/")) {
            let text = await resp.text();
            if (options.verbose) {
                console.log(` Response: ${text}`);
            }
            return text;
        }
        let json = await resp.json();
        if (options.verbose) {
            console.log(" ", json);
        }
        return json;
    }
    // Run the whole block from start to finish
    async run(options = {}) {
        let { plan, step } = await this.plan(options);
        if (options.verbose) {
            console.log(`Starting run (${plan.length} steps)`);
        }
        while (plan.currentStep < plan.length) {
            await step();
            let stepValue = plan[plan.currentStep - 1].stepValue;
            if (options.verbose) {
                console.log(` Step #${plan.currentStep} complete`);
                console.log(` Value: ${JSON.stringify(stepValue)}`);
            }
        }
        return plan[plan.length - 1].stepValue;
    }
    // Apply liquid templates to finalize plan with actual values
    liquify(plan, dataset) {
        for (var property in plan) {
            if (plan.hasOwnProperty(property)) {
                if (typeof plan[property] == "object") {
                    plan[property] = this.liquify(plan[property], dataset);
                }
                else {
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
        if (this.type == "block") {
            // Or in HTML world go fetch and parse:
            this.parent = this.request.block;
            // Todo: Cycle check
            let parentFlattened = await this.parent.flatten();
            // Todo: Handle empty or other errors
            flattened.push(...parentFlattened);
            flattened.push(...this.transforms);
        }
        else {
            flattened.push(this.request, ...this.transforms);
        }
        return flattened;
    }
    // Call flatten and return the steps. This returns the plan itself,
    // and a handle to step through it. You can call this multiple times and
    // get a new one each time.
    async plan(options = {}) {
        let plan = await this.flatten();
        let dataset = options.dataset || {};
        let secrets = Object.entries(dataset).filter(([k, v]) => typeof v == "object" && v.hasOwnProperty("value"));
        // We have to first liquify to get the accurate URL.
        // Then check to see if a secret was used inappropriately.
        // If so, then remove the secret and re-liquify
        for (let [k, v] of secrets) {
            dataset[k] = v.value;
        }
        plan = this.liquify(structuredClone(plan), dataset);
        if (secrets.length) {
            let requestURL = new URL(plan[0].resource);
            for (let [k, v] of secrets) {
                if (v.allowedOrigins && !v.allowedOrigins.includes(requestURL.origin)) {
                    throw new Error(`Aborting. Attempted to use a disallowed key: ${k} at origin ${requestURL.origin}. Allowed origins: ${v.allowedOrigins.join()}`);
                }
                else {
                    dataset[k] = v.value;
                }
            }
        }
        plan.currentStep = 0;
        let step = async () => {
            // TODO: Maintain state here and do the actual run through
            // such that `run` just needs to loop through until this returns null
            // Callers are likely checking this, but just in case
            if (plan.currentStep >= plan.length) {
                return;
            }
            if (options.verbose) {
                console.log(` Single step`, plan[plan.currentStep]);
            }
            let stepValue;
            let thisStep = plan[plan.currentStep];
            if (plan.currentStep == 0) {
                if (options.stubResponse) {
                    stepValue = options.stubResponse;
                }
                else {
                    if (this.type !== "fetch") {
                        throw new Error("Unexpected top level request");
                    }
                    stepValue = await this.fetchData(thisStep, options);
                }
            }
            else {
                let lastStep = plan[plan.currentStep - 1];
                let incomingValue = lastStep.stepValue;
                let transform = thisStep;
                if (!builtins[transform.type]) {
                    throw new Error(`Unrecognized builtin: ${transform.type}`);
                }
                stepValue = await builtins[transform.type].call(null, incomingValue, transform);
            }
            thisStep.stepValue = stepValue;
            plan.currentStep = plan.currentStep + 1;
        };
        return {
            plan,
            step,
        };
    }
}
export { fetchblock, fetchblocks };
