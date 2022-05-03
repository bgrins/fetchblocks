"use strict";
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = exports.removeEmptyValues = void 0;
function removeEmptyValues(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value]) => {
        if (value === null)
            return false;
        if (value === undefined)
            return false;
        if (value === "")
            return false;
        return true;
    }));
}
exports.removeEmptyValues = removeEmptyValues;
function difference(arrA, arrB) {
    return arrA.filter((a) => arrB.indexOf(a) < 0);
}
exports.difference = difference;
