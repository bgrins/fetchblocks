// deno run --unstable -A scripts/pull_deps.js

/*
The goal here is to use the same DOMParser in node (no typescript)
But this doesn't work yet. There's an error changing deps.js to use
import { DOMParser } from "./deps/deno-dom-wasm.js";

error: Uncaught SyntaxError: Duplicate export of 'Attr'
export { Attr as Attr };
         ^
*/

const { files, diagnostics } = await Deno.emit("https://deno.land/x/deno_dom/deno-dom-wasm.ts", {
  bundle: "module",
});

console.log(files, diagnostics);

Deno.writeTextFileSync("./deps/deno-dom-wasm.js", files["deno:///bundle.js"]);
Deno.writeTextFileSync("./deps/deno-dom-wasm.js.map", files["deno:///bundle.js.map"]);
