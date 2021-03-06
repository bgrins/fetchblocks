const CONFIG = {};

export { CONFIG };
export { Liquid } from "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js";
export { parse as acornParse } from "https://esm.sh/acorn@8.7.1";

export { execInSandbox } from "https://deno.land/x/esm_sandbox_eval@0.1.0/mod.js";
// export { execInSandbox } from "../../js-sandbox/mod.js";

// export { DOMParser } from "https://unpkg.com/linkedom/worker";
// export { DOMParser } from "https://esm.sh/linkedom?target=es2022&bundle";
export { DOMParser } from "https://esm.sh/linkedom";

// Todo: ship these on localhost or just bundle them up and ship them as importMap to eval for web
export const UTILS_IMPORT_BASE = "https://deno.land/x/fetchblocks/";

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
