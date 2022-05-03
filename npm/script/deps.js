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
exports.jmespath = exports.CONFIG = exports.DOMParser = exports.Liquid = void 0;
const mod_js_1 = require("./deps/deno.land/std@0.137.0/dotenv/mod.js");
const dom = __importStar(require("jsdom"));
var liquidjs_1 = require("liquidjs");
Object.defineProperty(exports, "Liquid", { enumerable: true, get: function () { return liquidjs_1.Liquid; } });
const jmespath_js_1 = __importDefault(require("./deps/esm.sh/jmespath.js"));
exports.jmespath = jmespath_js_1.default;
let DOMParser = dom.DOMParser;
exports.DOMParser = DOMParser;
let CONFIG = (0, mod_js_1.configSync)();
exports.CONFIG = CONFIG;
// Node:
if (!DOMParser) {
    const { window } = new dom.JSDOM(``);
    exports.DOMParser = DOMParser = window.DOMParser;
}
