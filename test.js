import { assertEquals, assert } from "https://deno.land/std@0.137.0/testing/asserts.ts";
import { run, runWithEnv, fetchRemote } from "./mod.js";


// Building for node and web:
// deno run -A --unstable scripts/build.js 0.1.0

// Publishing:
// deno run -A --unstable scripts/build.js 0.1.2 && git commit -am 'tag' && git tag 0.1.2 && && npm publish --access=public npm/ && git push && git push origin --tags

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

Deno.test("run", async () => {
  let resp = run();
  assertEquals(resp, "<html><head></head><body></body></html>");
});

Deno.test("run with env", async () => {
  let resp = runWithEnv();
  assertEquals(resp, "HELLO WORLD");
});

Deno.test("fetch in node", async() => {
  let text = await fetchRemote("https://example.com");
  assert(text, "Fetch worked")
});
