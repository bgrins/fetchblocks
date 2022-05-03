// deno run --unstable -A scripts/pull_deps.js
const { files, diagnostics } = await Deno.emit("https://deno.land/x/deno_dom/deno-dom-wasm.ts", {
  bundle: "module",
});

console.log(files, diagnostics);

Deno.writeTextFileSync("./deps/deno-dom-wasm.js", files["deno:///bundle.js"]);
Deno.writeTextFileSync("./deps/deno-dom-wasm.js.map", files["deno:///bundle.js.map"]);
