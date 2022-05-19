import * as dntShim from "./_dnt.shims.js";
import { configSync } from "./deps/deno.land/std@0.137.0/dotenv/mod.js";
export { Liquid } from "liquidjs";
import jmespath from "./deps/esm.sh/jmespath.js";
export { builtinsString } from "./builtins/builtins-bundle-string.js";

export { default as quickjs } from "./quickjs-module.js";

let CONFIG = configSync();

import * as jsdom from "./jsdom-module.js";

class DOMParser {
  parseFromString(string, mimeType) {
    // TODO: if we exposed this from the browserified thing instead could we tree shake and make this
    // smaller
    const { window: jsdomwindow } = new jsdom.default.JSDOM(``);
    const jsdomparser = new jsdomwindow.DOMParser();
    return jsdomparser.parseFromString(string, mimeType);
  }
}

export { DOMParser };
export { CONFIG };
export { jmespath };

// https://github.com/ai/nanoid/:
export let nanoid = (t = 21) =>
  dntShim.crypto
    .getRandomValues(new Uint8Array(t))
    .reduce(
      (t, e) =>
        (t +=
          (e &= 63) < 36
            ? e.toString(36)
            : e < 62
            ? (e - 26).toString(36).toUpperCase()
            : e < 63
            ? "_"
            : "-"),
      ""
    );
