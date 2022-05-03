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
exports.MissingEnvVarsError = exports.config = exports.configSync = exports.parse = void 0;
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
const dntShim = __importStar(require("../../../../_dnt.shims.js"));
const util_js_1 = require("./util.js");
function parse(rawDotenv) {
    const env = {};
    for (const line of rawDotenv.split("\n")) {
        if (!isVariableStart(line))
            continue;
        const key = line.slice(0, line.indexOf("=")).trim();
        let value = line.slice(line.indexOf("=") + 1).trim();
        if (hasSingleQuotes(value)) {
            value = value.slice(1, -1);
        }
        else if (hasDoubleQuotes(value)) {
            value = value.slice(1, -1);
            value = expandNewlines(value);
        }
        else
            value = value.trim();
        env[key] = value;
    }
    return env;
}
exports.parse = parse;
const defaultConfigOptions = {
    path: `.env`,
    export: false,
    safe: false,
    example: `.env.example`,
    allowEmptyValues: false,
    defaults: `.env.defaults`,
};
function configSync(options = {}) {
    const o = { ...defaultConfigOptions, ...options };
    const conf = parseFile(o.path);
    if (o.defaults) {
        const confDefaults = parseFile(o.defaults);
        for (const key in confDefaults) {
            if (!(key in conf)) {
                conf[key] = confDefaults[key];
            }
        }
    }
    if (o.safe) {
        const confExample = parseFile(o.example);
        assertSafe(conf, confExample, o.allowEmptyValues);
    }
    if (o.export) {
        for (const key in conf) {
            if (dntShim.Deno.env.get(key) !== undefined)
                continue;
            dntShim.Deno.env.set(key, conf[key]);
        }
    }
    return conf;
}
exports.configSync = configSync;
async function config(options = {}) {
    const o = { ...defaultConfigOptions, ...options };
    const conf = await parseFileAsync(o.path);
    if (o.defaults) {
        const confDefaults = await parseFileAsync(o.defaults);
        for (const key in confDefaults) {
            if (!(key in conf)) {
                conf[key] = confDefaults[key];
            }
        }
    }
    if (o.safe) {
        const confExample = await parseFileAsync(o.example);
        assertSafe(conf, confExample, o.allowEmptyValues);
    }
    if (o.export) {
        for (const key in conf) {
            if (dntShim.Deno.env.get(key) !== undefined)
                continue;
            dntShim.Deno.env.set(key, conf[key]);
        }
    }
    return conf;
}
exports.config = config;
function parseFile(filepath) {
    try {
        // Avoid errors that occur in deno deploy
        // https://github.com/denoland/deno_std/issues/1957
        if (typeof dntShim.Deno.readFileSync !== "function") {
            return {};
        }
        return parse(new TextDecoder("utf-8").decode(dntShim.Deno.readFileSync(filepath)));
    }
    catch (e) {
        if (e instanceof dntShim.Deno.errors.NotFound)
            return {};
        throw e;
    }
}
async function parseFileAsync(filepath) {
    try {
        return parse(new TextDecoder("utf-8").decode(await dntShim.Deno.readFile(filepath)));
    }
    catch (e) {
        if (e instanceof dntShim.Deno.errors.NotFound)
            return {};
        throw e;
    }
}
function isVariableStart(str) {
    return /^\s*[a-zA-Z_][a-zA-Z_0-9 ]*\s*=/.test(str);
}
function hasSingleQuotes(str) {
    return /^'([\s\S]*)'$/.test(str);
}
function hasDoubleQuotes(str) {
    return /^"([\s\S]*)"$/.test(str);
}
function expandNewlines(str) {
    return str.replaceAll("\\n", "\n");
}
function assertSafe(conf, confExample, allowEmptyValues) {
    const currentEnv = dntShim.Deno.env.toObject();
    // Not all the variables have to be defined in .env, they can be supplied externally
    const confWithEnv = Object.assign({}, currentEnv, conf);
    const missing = (0, util_js_1.difference)(Object.keys(confExample), 
    // If allowEmptyValues is false, filter out empty values from configuration
    Object.keys(allowEmptyValues ? confWithEnv : (0, util_js_1.removeEmptyValues)(confWithEnv)));
    if (missing.length > 0) {
        const errorMessages = [
            `The following variables were defined in the example file but are not present in the environment:\n  ${missing.join(", ")}`,
            `Make sure to add them to your env file.`,
            !allowEmptyValues &&
                `If you expect any of these variables to be empty, you can set the allowEmptyValues option to true.`,
        ];
        throw new MissingEnvVarsError(errorMessages.filter(Boolean).join("\n\n"));
    }
}
class MissingEnvVarsError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingEnvVarsError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.MissingEnvVarsError = MissingEnvVarsError;
