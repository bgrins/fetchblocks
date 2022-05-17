import * as dntShim from "./_dnt.shims.js";
import { configSync } from "./deps/deno.land/std@0.137.0/dotenv/mod.js";
export { Liquid } from "liquidjs";
import jmespath from "./deps/esm.sh/jmespath.js";
export { builtinsString } from "./builtins/builtins-bundle-string.js";
export { default as quickjs } from "./quickjs-module.js";
let CONFIG = configSync();
import * as jsdom from "./jsdom-module.js";
class DOMParser {
    constructor() {
        const { window } = new jsdom.default.JSDOM(``);
        this._parser = new window.DOMParser();
    }
    parseFromString(string, mimeType) {
        return this._parser.parseFromString(string, mimeType);
    }
}
export { DOMParser };
export { CONFIG };
export { jmespath };
// https://github.com/ai/nanoid/:
export let nanoid = (t = 21) => dntShim.crypto
    .getRandomValues(new Uint8Array(t))
    .reduce((t, e) => (t +=
    (e &= 63) < 36
        ? e.toString(36)
        : e < 62
            ? (e - 26).toString(36).toUpperCase()
            : e < 63
                ? "_"
                : "-"), "");
