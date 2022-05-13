import { configSync } from "https://deno.land/std@0.137.0/dotenv/mod.ts";
import * as dom from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
export { Liquid } from "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js";
import jmespath from "https://esm.sh/jmespath";
export { builtinsString } from "./builtins/builtins-bundle-string.js";

let DOMParser = dom.DOMParser;
let CONFIG = configSync();

// Node:
if (!DOMParser) {
  const { window } = new dom.JSDOM(``);
  DOMParser = window.DOMParser;
}

export { DOMParser };
export { CONFIG };
export { jmespath };

// https://github.com/ai/nanoid/:
export let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-"),"");