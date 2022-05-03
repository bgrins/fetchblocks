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
exports.fetchRemote = exports.runWithEnv = exports.run = void 0;
const dntShim = __importStar(require("./_dnt.shims.js"));
const deps_js_1 = require("./deps.js");
const LIQUID_ENGINE = new deps_js_1.Liquid();
function run() {
    let doc = new deps_js_1.DOMParser().parseFromString(`<html></html>`, "text/html");
    return doc.documentElement.outerHTML;
}
exports.run = run;
function runWithEnv() {
    console.log(deps_js_1.CONFIG);
    return `HELLO ${deps_js_1.CONFIG["HELLO"]}`;
}
exports.runWithEnv = runWithEnv;
async function fetchRemote(url) {
    let resp = await dntShim.fetch(url);
    let text = await resp.text();
    return text;
}
exports.fetchRemote = fetchRemote;
