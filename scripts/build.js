// deno run --unstable -A scripts/build.js 0.1.3

import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";
import { ensureDir, copySync } from "https://deno.land/std@0.78.0/fs/mod.ts";

import { bundleBuiltins, bundleWeb } from "./tasks.js";

await bundleBuiltins();

await emptyDir("./npm");
await ensureDir("./npm/script"); // void
await ensureDir("./npm/esm"); // void
await Deno.copyFile(".env", "npm/script/.env");
await Deno.copyFile(".env", "npm/esm/.env");
await Deno.copyFile(".env", "npm/script/.env");
await copySync("testdata", "npm/src/testdata");
await copySync("testdata", "npm/script/testdata");
await copySync("utils", "npm/script/fetchblocks/utils");
await copySync("utils", "npm/esm/fetchblocks/utils");

await build({
  entryPoints: ["./mod.js"],
  outDir: "./npm",
  testPattern: "test.js",
  shims: {
    // see JS docs for overview and more options
    deno: true,
    crypto: true,
    undici: true,
  },
  mappings: {
    "https://cdn.jsdelivr.net/npm/liquidjs@9.37.0/dist/liquid.browser.esm.js": {
      name: "liquidjs",
      version: "^9.37.0",
    },
  },
  package: {
    // package.json properties
    name: "@bgrins/fetchblocks",
    version: Deno.args[0],
    description: "Experimental - library cross compiled to node/web/deno",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/bgrins/fetchblocks.git",
      bugs: {},
      url: "https://github.com/bgrins/fetchblocks/issues",
    },
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");


await bundleWeb();

await copySync("./web", "npm/web");
// ensure data is ignored in the `.npmignore` file so it doesn't get published
await Deno.writeTextFile("npm/.npmignore", ".env", { append: true });
