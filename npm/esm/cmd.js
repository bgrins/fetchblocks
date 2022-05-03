import { run, fetchRemote } from "./mod.js";
console.log(run());
// No top level await since this is cross compiled to cjs:
(async () => {
    console.log(await fetchRemote("https://example.com"));
})();
