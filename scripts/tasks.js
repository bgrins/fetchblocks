// TODO: Bundle the node_deps with browserify/esbuild/etc
// import { emit, bundle } from "https://deno.land/x/emit/mod.ts";

export async function bundleBuiltins() {
  const { files, diagnostics } = await Deno.emit(
    new URL("../builtins/exports.js", import.meta.url),
    {
      bundle: "classic",
      compilerOptions: {
        // checkJs: true,
      },
    }
  );

  console.log(files, diagnostics);

  let script = files["deno:///bundle.js"];
  Deno.writeTextFileSync("./builtins/builtins-bundle-iife.js", script);

  // This is weird, but once we can properly wasmbox the srcipts we can probably have it
  // just load the builtin modules as esm. For now export the iife as a global since we will just concat the
  // code to eval.
  let iifeStart = script.indexOf("(function() {");
  script =
    script.substring(0, iifeStart) +
    "const builtins = " +
    script.substring(iifeStart, script.length);

  Deno.writeTextFileSync(
    "./builtins/builtins-bundle-string.js",
    "const builtinsString = " +
      JSON.stringify(script) +
      "; export { builtinsString }"
  );
  const p = Deno.run({
    cmd: [
      "npx",
      "esbuild",
      "./builtins/exports.js",
      "--format=esm",
      "--bundle=true",
    ],
    stdout: "piped",
    stderr: "piped",
    stdin: "null",
  });
  await p.status();
  let esm = new TextDecoder().decode(await p.output());
  // console.log();
  // console.log(p);

  Deno.writeTextFileSync("./builtins/builtins-bundle-module.js", esm);
  const esmFile = (await Deno.emit(
    new URL("../builtins/builtins-bundle-module.js", import.meta.url),
    {
      bundle: "module",
      compilerOptions: {
        // checkJs: true,
      },
    }
  )).files["deno:///bundle.js"];
  Deno.writeTextFileSync("./builtins/builtins-bundle-module-deps.js", esmFile);
  Deno.writeTextFileSync(
    "./builtins/builtins-bundle-module-string.js",
    "const builtinsString = " +
      JSON.stringify(esmFile) +
      "; export { builtinsString }"
  );
}

export async function bundleWeb() {
  await (async () => {
    const { files, diagnostics } = await Deno.emit(
      new URL("../web/mod.js", import.meta.url),
      {
        bundle: "module",
      }
    );

    console.log(files, diagnostics);

    let script = files["deno:///bundle.js"];
    Deno.writeTextFileSync(`./web/bundle-module.js`, script);
  })();
  await (async () => {
    const { files, diagnostics } = await Deno.emit(
      new URL("../web/mod.js", import.meta.url),
      {
        bundle: "classic",
      }
    );

    console.log(files, diagnostics);
    let script = files["deno:///bundle.js"];

    // This is weird, but once we can properly wasmbox the srcipts we can probably have it
    // just load the builtin modules as esm. For now export the iife as a global since we will just concat the
    // code to eval.
    let iifeStart = script.indexOf("(function() {");

    script;
    script =
      script.substring(0, iifeStart) +
      "const root = typeof self !== 'undefined' ? self : this; root.fetchblocks = " +
      script.substring(iifeStart, script.length);
    Deno.writeTextFileSync(`./web/bundle-classic.js`, script);
  })();
}
