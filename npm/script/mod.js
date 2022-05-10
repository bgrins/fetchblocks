"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchblocks = exports.fetchblock = exports.jsEval = void 0;
const dntShim = __importStar(require("./_dnt.shims.js"));
const deps_js_1 = require("./deps.js");
const LIQUID_ENGINE = new deps_js_1.Liquid();
if (typeof CustomEvent == "undefined") {
    // node:
    global.CustomEvent = class CustomEvent extends Event {
        constructor(message, data) {
            super(message, data);
            this.detail = data.detail;
        }
    };
}
function jsEval(str, input, options) {
    // The intent is for this to run in a sandbox, but for now eval it:
    let fn = new Function("input", "options", deps_js_1.builtinsString + str);
    return fn(input, options);
}
exports.jsEval = jsEval;
function textIsJSON(text) {
    try {
        JSON.parse(text);
        return true;
    }
    catch (e) {
    }
    return false;
}
const builtins = {
    noop(data, transform) {
        return jsEval("return builtins.noop(input, options)", data, transform);
    },
    jmespath(data, transform) {
        return jsEval("return builtins.jmespath(input, options)", data, transform);
    },
    md_to_json(data, transform) {
        return jsEval("return builtins.md_to_json(input, options)", data, transform);
    },
    csv_to_json(data, transform) {
        return jsEval("return builtins.csv_to_json(input, options)", data, transform);
    },
    json_to_csv(data, transform) {
        return jsEval("return builtins.json_to_csv(input, options)", data, transform);
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
const networkLoaders = new Map();
// Todo: integrate with API?
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
        }
        catch (e) {
        }
    },
    async getBlock(content) {
        let ret = JSON.parse(content);
        if (!Array.isArray(ret)) {
            throw new Error(`JSON must be an array for now: ${content}`);
        }
        return ret;
    },
});
blockLoaders.set("js", {
    shouldHandle(content) { },
    async getBlock() {
        // Todo: Should this be an ESM?
        return;
    },
});
blockLoaders.set("html", {
    shouldHandle(content) {
        return content.indexOf("<fetch-block") != -1;
    },
    async getBlock(content, options) {
        let dom = new deps_js_1.DOMParser().parseFromString(content, "text/html");
        let base;
        if (options?.base) {
            base = new URL(options?.base);
        }
        let id = base && base.hash.substr(1);
        console.log("Getting block", base, id);
        let htmlBlock;
        if (id) {
            htmlBlock = dom.getElementById(id);
        }
        else {
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
        console.log(initialBlock);
        // TODO: if the initial block references a URL make sure we set the proper base
        if (base) {
            if (initialBlock.resource) {
                initialBlock.resource = new URL(initialBlock.resource, base).toString();
            }
            if (initialBlock.block) {
                // TODO: do some pre-flattening here once we figure out how to represent this in
                // the native format (i.e. nested). This would be an optimization to avoid reloading
                // the same html file again.
                // Could also look into caching the source per-block.
                initialBlock.block = new URL(initialBlock.block, base).toString();
            }
        }
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
    },
});
const fetchblocks = (() => {
    return {
        blockLoaders,
        // By default this will read from dotenv. If you want more you can set:
        env: new Map(Object.entries(deps_js_1.CONFIG)),
        // We'll attempt to detect the appropriate loader, else you can
        // pass them in (default values "js", "html", "json" or you can
        // make your own with `fetchblocks.loader.set("foo", async (input) => {}))`
        async loadFromText(text, loader, options) {
            if (!loader) {
                for (let [key, value] of blockLoaders.entries()) {
                    if (value.shouldHandle(text)) {
                        loader = key;
                        break;
                    }
                }
            }
            if (!blockLoaders.has(loader)) {
                throw new Error(`Missing loader ${loader}`);
            }
            let l = blockLoaders.get(loader);
            let obj = await l.getBlock(text, options);
            try {
                return new fetchblock(...obj);
            }
            catch (e) { }
            throw new Error(`Loader ${loader} returned an empty object`);
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
                response = await dntShim.fetch(uri);
            }
            if (response.status !== 200) {
                // Todo: tests. How do handle redirect?
                throw new Error(`Fetchblock couldn't be loaded from ${uri.toString()} - status ${response.status}`);
            }
            let text = await response.text();
            let block = await this.loadFromText(text, loader, {
                base: uri,
                response
            });
            return block;
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
exports.fetchblocks = fetchblocks;
class fetchblock extends EventTarget {
    constructor(...args) {
        // Todo: only accept an array
        super();
        if (args.length === 0) {
            throw new Error("Must provide an initial `fetch` or `block` step as the first parameter");
        }
        // Make sure the blocks are sane (no local functions etc)
        // args = structuredClone(args);
        this.request = args[0];
        this.transforms = args.slice(1);
        if (!this.type) {
            throw new Error("The request must be either `fetch` or `block`");
        }
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
    }
    get type() {
        if (this.request.resource || this.request.stubResponse) {
            return "fetch";
        }
        if (this.request.block) {
            return "block";
        }
    }
    async fetchData(fetchOptions = {}, options = {}) {
        if (fetchOptions.stubResponse) {
            return fetchOptions.stubResponse;
        }
        // To avoid too much nesting in JS/JSON we pass all the fetch options
        // flattened along with the uri instead of two params. So cherry pick
        // only the valid opts to pass into the second param
        // https://developer.mozilla.org/en-US/docs/Web/API/fetch
        let { resource, method, headers, body, mode, credentials, cache, redirect, referrer, integrity, keepalive, signal, } = fetchOptions;
        if (!resource) {
            throw new Error("No URL passed in");
        }
        if (options.verbose) {
            console.log(`Fetching`, resource);
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
        if (options.verbose) {
            console.log(`Starting run (${plan.length} steps)`);
        }
        while (plan.currentStep < plan.length) {
            await step();
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
            // Todo: we should probably expect to accept just steps here
            // i.e. with actual cross link in declarative we need to fetch and parse anyway
            this.parent = this.request.block;
            if (typeof this.parent == "string" || this.parent instanceof URL) {
                this.parent = await fetchblocks.loadFromURI(this.parent);
            }
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
        this.dispatchEvent(new CustomEvent("PlanReady", { detail: { plan, options } }));
        let step = async () => {
            // TODO: Maintain state here and do the actual run through
            // such that `run` just needs to loop through until this returns null
            // Callers are likely checking this, but just in case
            if (plan.currentStep >= plan.length) {
                return;
            }
            let stepValue;
            let thisStep = plan[plan.currentStep];
            this.dispatchEvent(new CustomEvent("StepStarting", {
                detail: { stepNum: plan.currentStep + 1, step: thisStep, options },
            }));
            if (plan.currentStep == 0) {
                if (options.stubResponse) {
                    stepValue = options.stubResponse;
                }
                else {
                    stepValue = await this.fetchData(thisStep, options);
                }
                thisStep.stepValue = stepValue;
            }
            else {
                let lastStep = plan[plan.currentStep - 1];
                let incomingValue = lastStep.stepValue;
                let transform = thisStep;
                if (!builtins[transform.type]) {
                    throw new Error(`Unrecognized builtin: ${transform.type}`);
                }
                stepValue = await builtins[transform.type].call(null, incomingValue, transform);
                thisStep.stepValue = stepValue;
            }
            plan.currentStep = plan.currentStep + 1;
            this.dispatchEvent(new CustomEvent("StepComplete", {
                detail: { stepNum: plan.currentStep, step: thisStep, options },
            }));
        };
        return {
            plan,
            step,
        };
    }
}
exports.fetchblock = fetchblock;
