export { Liquid } from "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js";
import jmespath from "https://esm.sh/jmespath";

// export { execInSandbox } from "https://raw.githubusercontent.com/bgrins/js-sandbox/main/mod.js";
export {execInSandbox } from "../js-sandbox/mod.js";

import * as _jsdom from "./jsdom-module.js";
const jsdom = _jsdom.default;
class DOMParser {
  parseFromString(string, mimeType) {
    // TODO: if we exposed this from the browserified thing instead could we tree shake and make this
    // smaller
    const { window: jsdomwindow } = new jsdom.JSDOM(``);
    const jsdomparser = new jsdomwindow.DOMParser();
    return jsdomparser.parseFromString(string, mimeType);
  }
}

export { DOMParser };
export { jmespath };

// https://github.com/ai/nanoid/:
export let nanoid = (t = 21) =>
  crypto
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
