import * as dntShim from "./_dnt.test_shims.js";
import { assertEquals, assert } from "./deps/deno.land/std@0.137.0/testing/asserts.js";
import { run, runWithEnv, fetchRemote } from "./mod.js";
// Building for node and web:
// deno run -A --unstable scripts/build.js 0.1.0
// npm publish --dry-run npm/
// Testing:
// deno test -A test.js 
// npm --prefix npm test
// Running:
// deno run --allow-read --allow-net cmd.js
// Importing:
/*
Deno:
import { run } from "https://deno.land/x/fetchblocks/mod.js";

Web:
<script type="module">
  import { run } from "https://esm.sh/@bgrins/fetchblocks/web/mod.js";
</script>

Node (TODO):
cjs: require("@bgrins/fetchblocks")
esm import { run } from "@bgrins/fetchblocks"
*/
dntShim.Deno.test("run", async () => {
    let resp = run();
    assertEquals(resp, "<html><head></head><body></body></html>");
});
dntShim.Deno.test("run with env", async () => {
    let resp = runWithEnv();
    assertEquals(resp, "HELLO WORLD");
});
dntShim.Deno.test("fetch in node", async () => {
    let text = await fetchRemote("https://example.com");
    assert(text, "Fetch worked");
});
