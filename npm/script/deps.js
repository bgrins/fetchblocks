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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nanoid = exports.jmespath = exports.CONFIG = exports.DOMParser = exports.quickjs = exports.builtinsString = exports.Liquid = void 0;
const dntShim = __importStar(require("./_dnt.shims.js"));
const mod_js_1 = require("./deps/deno.land/std@0.137.0/dotenv/mod.js");
var liquidjs_1 = require("liquidjs");
Object.defineProperty(exports, "Liquid", { enumerable: true, get: function () { return liquidjs_1.Liquid; } });
const jmespath_js_1 = __importDefault(require("./deps/esm.sh/jmespath.js"));
exports.jmespath = jmespath_js_1.default;
var builtins_bundle_string_js_1 = require("./builtins/builtins-bundle-string.js");
Object.defineProperty(exports, "builtinsString", { enumerable: true, get: function () { return builtins_bundle_string_js_1.builtinsString; } });
var quickjs_module_js_1 = require("./quickjs-module.js");
Object.defineProperty(exports, "quickjs", { enumerable: true, get: function () { return __importDefault(quickjs_module_js_1).default; } });
let CONFIG = (0, mod_js_1.configSync)();
exports.CONFIG = CONFIG;
const jsdom = __importStar(require("./jsdom-module.js"));
class DOMParser {
    constructor() {
        const { window } = new jsdom.default.JSDOM(``);
        this._parser = new window.DOMParser();
    }
    parseFromString(string, mimeType) {
        return this._parser.parseFromString(string, mimeType);
    }
}
exports.DOMParser = DOMParser;
// https://github.com/ai/nanoid/:
let nanoid = (t = 21) => dntShim.crypto
    .getRandomValues(new Uint8Array(t))
    .reduce((t, e) => (t +=
    (e &= 63) < 36
        ? e.toString(36)
        : e < 62
            ? (e - 26).toString(36).toUpperCase()
            : e < 63
                ? "_"
                : "-"), "");
exports.nanoid = nanoid;
