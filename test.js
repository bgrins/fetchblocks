import { assertEquals, assert } from "https://deno.land/std@0.137.0/testing/asserts.ts";
import { run, runWithEnv, fetchRemote } from "./mod.js";


// Building for node and web:
// deno run -A --unstable scripts/build.js 0.1.0
// npm publish --dry-run npm/

// Testing:
// deno test -A test.js 
// npm --prefix npm test

// Running:
// deno run --allow-read --allow-net cmd.js


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
