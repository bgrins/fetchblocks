"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dntShim = __importStar(require("./_dnt.test_shims.js"));
const asserts_js_1 = require("./deps/deno.land/std@0.137.0/testing/asserts.js");
const mod_js_1 = require("./mod.js");
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
    let resp = (0, mod_js_1.run)();
    (0, asserts_js_1.assertEquals)(resp, "<html><head></head><body></body></html>");
});
dntShim.Deno.test("run with env", async () => {
    let resp = (0, mod_js_1.runWithEnv)();
    (0, asserts_js_1.assertEquals)(resp, "HELLO WORLD");
});
dntShim.Deno.test("fetch in node", async () => {
    let text = await (0, mod_js_1.fetchRemote)("https://example.com");
    (0, asserts_js_1.assert)(text, "Fetch worked");
});
