const CONFIG = {};

export { CONFIG };
export { Liquid } from "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js";

// See pull_deps.js. Would be great to use the WASM DOM parser so it can be used from a Worker,
// but it doesn't compile out the box yet. So for now disable the feature in that case.
let DOMParser;
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
  DOMParser = function() {
    throw new Error("Not currently supported in workers");
  };
} else {
  DOMParser = window.DOMParser;
}
export { DOMParser };

export { builtinsString } from "../builtins/builtins-bundle-string.js";

// https://github.com/ai/nanoid/:
export let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-"),"");
