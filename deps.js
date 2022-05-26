// export { Liquid } from "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js";
export { Liquid } from "https://esm.sh/liquidjs";
import jmespath from "https://esm.sh/jmespath";

// export { execInSandbox } from "https://raw.githubusercontent.com/bgrins/js-sandbox/main/mod.js";
export { execInSandbox } from "../js-sandbox/mod.js";

import { configSync } from "https://deno.land/std@0.137.0/dotenv/mod.ts";

const CONFIG = configSync();

// Set
// USE_RELATIVE_IMPORTS_FOR_DEVELOPMENT=true
// Todo: change this to a remote endpoint - env USE_RELATIVE_IMPORTS_FOR_DEVELOPMENT
export const UTILS_IMPORT_BASE =
  CONFIG.USE_RELATIVE_IMPORTS_FOR_DEVELOPMENT === "true"
    ? import.meta.url
    : "https://raw.githubusercontent.com/bgrins/fetchblocks/wip/";

// export { DOMParser } from "https://unpkg.com/linkedom/worker";
// export { DOMParser } from "https://esm.sh/linkedom?target=es2022&bundle";
export { DOMParser } from "https://esm.sh/linkedom";
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
