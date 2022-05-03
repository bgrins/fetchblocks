import { configSync } from "./deps/deno.land/std@0.137.0/dotenv/mod.js";
import * as dom from "jsdom";
export { Liquid } from "liquidjs";
import jmespath from "./deps/esm.sh/jmespath.js";
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
