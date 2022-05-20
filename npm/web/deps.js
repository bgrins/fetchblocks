const CONFIG = {};

export { CONFIG };
export { Liquid } from "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js";

export { default as quickjs } from "../quickjs-module.js";
import * as jsdom from "../jsdom-module.js";

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

export { builtinsString } from "../builtins/builtins-bundle-module-string.js";

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
