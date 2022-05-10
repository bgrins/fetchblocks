"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeno = exports.isNode = void 0;
const inner = {
    // dnt-shim-ignore
    // deno-lint-ignore no-explicit-any
    isNode: globalThis.process?.versions?.node != null,
    // dnt-shim-ignore
    // deno-lint-ignore no-explicit-any
    isDeno: globalThis.Deno?.version?.deno != null,
};
exports.isNode = inner.isNode && !inner.isDeno;
exports.isDeno = inner.isDeno && !exports.isNode;
