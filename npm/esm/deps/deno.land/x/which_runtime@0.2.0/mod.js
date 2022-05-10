const inner = {
    // dnt-shim-ignore
    // deno-lint-ignore no-explicit-any
    isNode: globalThis.process?.versions?.node != null,
    // dnt-shim-ignore
    // deno-lint-ignore no-explicit-any
    isDeno: globalThis.Deno?.version?.deno != null,
};
export const isNode = inner.isNode && !inner.isDeno;
export const isDeno = inner.isDeno && !isNode;
