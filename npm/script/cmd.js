"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mod_js_1 = require("./mod.js");
console.log((0, mod_js_1.run)());
// No top level await since this is cross compiled to cjs:
(async () => {
    console.log(await (0, mod_js_1.fetchRemote)("https://example.com"));
})();
