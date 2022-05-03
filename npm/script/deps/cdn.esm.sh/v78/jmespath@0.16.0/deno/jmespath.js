"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = exports.strictDeepEqual = exports.search = exports.default = exports.compile = void 0;
/* esm.sh - esbuild bundle(jmespath@0.16.0) deno production */
var Ue = Object.create;
var Re = Object.defineProperty;
var Ye = Object.getOwnPropertyDescriptor;
var De = Object.getOwnPropertyNames;
var Je = Object.getPrototypeOf, ze = Object.prototype.hasOwnProperty;
var Qe = (f, o) => () => (o || f((o = { exports: {} }).exports, o), o.exports);
var qe = (f, o, T, O) => { if (o && typeof o == "object" || typeof o == "function")
    for (let E of De(o))
        !ze.call(f, E) && E !== T && Re(f, E, { get: () => o[E], enumerable: !(O = Ye(o, E)) || O.enumerable }); return f; };
var Pe = (f, o, T) => (T = f != null ? Ue(Je(f)) : {}, qe(o || !f || !f.__esModule ? Re(T, "default", { value: f, enumerable: !0 }) : T, f));
var ve = Qe(V => { (function (f) {
    "use strict";
    function o(e) { return e !== null ? Object.prototype.toString.call(e) === "[object Array]" : !1; }
    function T(e) { return e !== null ? Object.prototype.toString.call(e) === "[object Object]" : !1; }
    function O(e, t) { if (e === t)
        return !0; var r = Object.prototype.toString.call(e); if (r !== Object.prototype.toString.call(t))
        return !1; if (o(e) === !0) {
        if (e.length !== t.length)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (O(e[n], t[n]) === !1)
                return !1;
        return !0;
    } if (T(e) === !0) {
        var i = {};
        for (var s in e)
            if (hasOwnProperty.call(e, s)) {
                if (O(e[s], t[s]) === !1)
                    return !1;
                i[s] = !0;
            }
        for (var h in t)
            if (hasOwnProperty.call(t, h) && i[h] !== !0)
                return !1;
        return !0;
    } return !1; }
    function E(e) { if (e === "" || e === !1 || e === null)
        return !0; if (o(e) && e.length === 0)
        return !0; if (T(e)) {
        for (var t in e)
            if (e.hasOwnProperty(t))
                return !1;
        return !0;
    }
    else
        return !1; }
    function Le(e) { for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++)
        r.push(e[t[n]]); return r; }
    function $e(e, t) { var r = {}; for (var n in e)
        r[n] = e[n]; for (var i in t)
        r[i] = t[i]; return r; }
    var ee;
    typeof String.prototype.trimLeft == "function" ? ee = function (e) { return e.trimLeft(); } : ee = function (e) { return e.match(/^\s*(.*)/)[1]; };
    var y = 0, S = 1, _ = 2, v = 3, L = 4, ye = 5, M = 6, te = 7, R = 8, j = 9, de = { 0: "number", 1: "any", 2: "string", 3: "array", 4: "object", 5: "boolean", 6: "expression", 7: "null", 8: "Array<number>", 9: "Array<string>" }, re = "EOF", F = "UnquotedIdentifier", C = "QuotedIdentifier", d = "Rbracket", K = "Rparen", w = "Comma", P = "Colon", z = "Rbrace", A = "Number", g = "Current", B = "Expref", H = "Pipe", ne = "Or", ie = "And", Q = "EQ", q = "GT", G = "LT", W = "GTE", $ = "LTE", X = "NE", N = "Flatten", I = "Star", U = "Filter", Y = "Dot", se = "Not", D = "Lbrace", b = "Lbracket", J = "Lparen", ae = "Literal", Te = { ".": Y, "*": I, ",": w, ":": P, "{": D, "}": z, "]": d, "(": J, ")": K, "@": g }, Me = { "<": !0, ">": !0, "=": !0, "!": !0 }, je = { " ": !0, "	": !0, "\n": !0 };
    function Ke(e) { return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_"; }
    function ke(e) { return e >= "0" && e <= "9" || e === "-"; }
    function Fe(e) { return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_"; }
    function ue() { }
    ue.prototype = { tokenize: function (e) { var t = []; this._current = 0; for (var r, n, i; this._current < e.length;)
            if (Ke(e[this._current]))
                r = this._current, n = this._consumeUnquotedIdentifier(e), t.push({ type: F, value: n, start: r });
            else if (Te[e[this._current]] !== void 0)
                t.push({ type: Te[e[this._current]], value: e[this._current], start: this._current }), this._current++;
            else if (ke(e[this._current]))
                i = this._consumeNumber(e), t.push(i);
            else if (e[this._current] === "[")
                i = this._consumeLBracket(e), t.push(i);
            else if (e[this._current] === '"')
                r = this._current, n = this._consumeQuotedIdentifier(e), t.push({ type: C, value: n, start: r });
            else if (e[this._current] === "'")
                r = this._current, n = this._consumeRawStringLiteral(e), t.push({ type: ae, value: n, start: r });
            else if (e[this._current] === "`") {
                r = this._current;
                var s = this._consumeLiteral(e);
                t.push({ type: ae, value: s, start: r });
            }
            else if (Me[e[this._current]] !== void 0)
                t.push(this._consumeOperator(e));
            else if (je[e[this._current]] !== void 0)
                this._current++;
            else if (e[this._current] === "&")
                r = this._current, this._current++, e[this._current] === "&" ? (this._current++, t.push({ type: ie, value: "&&", start: r })) : t.push({ type: B, value: "&", start: r });
            else if (e[this._current] === "|")
                r = this._current, this._current++, e[this._current] === "|" ? (this._current++, t.push({ type: ne, value: "||", start: r })) : t.push({ type: H, value: "|", start: r });
            else {
                var h = new Error("Unknown character:" + e[this._current]);
                throw h.name = "LexerError", h;
            } return t; }, _consumeUnquotedIdentifier: function (e) { var t = this._current; for (this._current++; this._current < e.length && Fe(e[this._current]);)
            this._current++; return e.slice(t, this._current); }, _consumeQuotedIdentifier: function (e) { var t = this._current; this._current++; for (var r = e.length; e[this._current] !== '"' && this._current < r;) {
            var n = this._current;
            e[n] === "\\" && (e[n + 1] === "\\" || e[n + 1] === '"') ? n += 2 : n++, this._current = n;
        } return this._current++, JSON.parse(e.slice(t, this._current)); }, _consumeRawStringLiteral: function (e) { var t = this._current; this._current++; for (var r = e.length; e[this._current] !== "'" && this._current < r;) {
            var n = this._current;
            e[n] === "\\" && (e[n + 1] === "\\" || e[n + 1] === "'") ? n += 2 : n++, this._current = n;
        } this._current++; var i = e.slice(t + 1, this._current - 1); return i.replace("\\'", "'"); }, _consumeNumber: function (e) { var t = this._current; this._current++; for (var r = e.length; ke(e[this._current]) && this._current < r;)
            this._current++; var n = parseInt(e.slice(t, this._current)); return { type: A, value: n, start: t }; }, _consumeLBracket: function (e) { var t = this._current; return this._current++, e[this._current] === "?" ? (this._current++, { type: U, value: "[?", start: t }) : e[this._current] === "]" ? (this._current++, { type: N, value: "[]", start: t }) : { type: b, value: "[", start: t }; }, _consumeOperator: function (e) { var t = this._current, r = e[t]; if (this._current++, r === "!")
            return e[this._current] === "=" ? (this._current++, { type: X, value: "!=", start: t }) : { type: se, value: "!", start: t }; if (r === "<")
            return e[this._current] === "=" ? (this._current++, { type: $, value: "<=", start: t }) : { type: G, value: "<", start: t }; if (r === ">")
            return e[this._current] === "=" ? (this._current++, { type: W, value: ">=", start: t }) : { type: q, value: ">", start: t }; if (r === "=" && e[this._current] === "=")
            return this._current++, { type: Q, value: "==", start: t }; }, _consumeLiteral: function (e) { this._current++; for (var t = this._current, r = e.length, n; e[this._current] !== "`" && this._current < r;) {
            var i = this._current;
            e[i] === "\\" && (e[i + 1] === "\\" || e[i + 1] === "`") ? i += 2 : i++, this._current = i;
        } var s = ee(e.slice(t, this._current)); return s = s.replace("\\`", "`"), this._looksLikeJSON(s) ? n = JSON.parse(s) : n = JSON.parse('"' + s + '"'), this._current++, n; }, _looksLikeJSON: function (e) { var t = '[{"', r = ["true", "false", "null"], n = "-0123456789"; if (e === "")
            return !1; if (t.indexOf(e[0]) >= 0)
            return !0; if (r.indexOf(e) >= 0)
            return !0; if (n.indexOf(e[0]) >= 0)
            try {
                return JSON.parse(e), !0;
            }
            catch {
                return !1;
            }
        else
            return !1; } };
    var u = {};
    u[re] = 0, u[F] = 0, u[C] = 0, u[d] = 0, u[K] = 0, u[w] = 0, u[z] = 0, u[A] = 0, u[g] = 0, u[B] = 0, u[H] = 1, u[ne] = 2, u[ie] = 3, u[Q] = 5, u[q] = 5, u[G] = 5, u[W] = 5, u[$] = 5, u[X] = 5, u[N] = 9, u[I] = 20, u[U] = 21, u[Y] = 40, u[se] = 45, u[D] = 50, u[b] = 55, u[J] = 60;
    function he() { }
    he.prototype = { parse: function (e) { this._loadTokens(e), this.index = 0; var t = this.expression(0); if (this._lookahead(0) !== re) {
            var r = this._lookaheadToken(0), n = new Error("Unexpected token type: " + r.type + ", value: " + r.value);
            throw n.name = "ParserError", n;
        } return t; }, _loadTokens: function (e) { var t = new ue, r = t.tokenize(e); r.push({ type: re, value: "", start: e.length }), this.tokens = r; }, expression: function (e) { var t = this._lookaheadToken(0); this._advance(); for (var r = this.nud(t), n = this._lookahead(0); e < u[n];)
            this._advance(), r = this.led(n, r), n = this._lookahead(0); return r; }, _lookahead: function (e) { return this.tokens[this.index + e].type; }, _lookaheadToken: function (e) { return this.tokens[this.index + e]; }, _advance: function () { this.index++; }, nud: function (e) { var t, r, n; switch (e.type) {
            case ae: return { type: "Literal", value: e.value };
            case F: return { type: "Field", name: e.value };
            case C:
                var i = { type: "Field", name: e.value };
                if (this._lookahead(0) === J)
                    throw new Error("Quoted identifier not allowed for function names.");
                return i;
            case se: return r = this.expression(u.Not), { type: "NotExpression", children: [r] };
            case I: return t = { type: "Identity" }, r = null, this._lookahead(0) === d ? r = { type: "Identity" } : r = this._parseProjectionRHS(u.Star), { type: "ValueProjection", children: [t, r] };
            case U: return this.led(e.type, { type: "Identity" });
            case D: return this._parseMultiselectHash();
            case N: return t = { type: N, children: [{ type: "Identity" }] }, r = this._parseProjectionRHS(u.Flatten), { type: "Projection", children: [t, r] };
            case b: return this._lookahead(0) === A || this._lookahead(0) === P ? (r = this._parseIndexExpression(), this._projectIfSlice({ type: "Identity" }, r)) : this._lookahead(0) === I && this._lookahead(1) === d ? (this._advance(), this._advance(), r = this._parseProjectionRHS(u.Star), { type: "Projection", children: [{ type: "Identity" }, r] }) : this._parseMultiselectList();
            case g: return { type: g };
            case B: return n = this.expression(u.Expref), { type: "ExpressionReference", children: [n] };
            case J:
                for (var s = []; this._lookahead(0) !== K;)
                    this._lookahead(0) === g ? (n = { type: g }, this._advance()) : n = this.expression(0), s.push(n);
                return this._match(K), s[0];
            default: this._errorToken(e);
        } }, led: function (e, t) { var r; switch (e) {
            case Y:
                var n = u.Dot;
                return this._lookahead(0) !== I ? (r = this._parseDotRHS(n), { type: "Subexpression", children: [t, r] }) : (this._advance(), r = this._parseProjectionRHS(n), { type: "ValueProjection", children: [t, r] });
            case H: return r = this.expression(u.Pipe), { type: H, children: [t, r] };
            case ne: return r = this.expression(u.Or), { type: "OrExpression", children: [t, r] };
            case ie: return r = this.expression(u.And), { type: "AndExpression", children: [t, r] };
            case J:
                for (var i = t.name, s = [], h, c; this._lookahead(0) !== K;)
                    this._lookahead(0) === g ? (h = { type: g }, this._advance()) : h = this.expression(0), this._lookahead(0) === w && this._match(w), s.push(h);
                return this._match(K), c = { type: "Function", name: i, children: s }, c;
            case U:
                var p = this.expression(0);
                return this._match(d), this._lookahead(0) === N ? r = { type: "Identity" } : r = this._parseProjectionRHS(u.Filter), { type: "FilterProjection", children: [t, r, p] };
            case N:
                var x = { type: N, children: [t] }, l = this._parseProjectionRHS(u.Flatten);
                return { type: "Projection", children: [x, l] };
            case Q:
            case X:
            case q:
            case W:
            case G:
            case $: return this._parseComparator(t, e);
            case b:
                var a = this._lookaheadToken(0);
                return a.type === A || a.type === P ? (r = this._parseIndexExpression(), this._projectIfSlice(t, r)) : (this._match(I), this._match(d), r = this._parseProjectionRHS(u.Star), { type: "Projection", children: [t, r] });
            default: this._errorToken(this._lookaheadToken(0));
        } }, _match: function (e) { if (this._lookahead(0) === e)
            this._advance();
        else {
            var t = this._lookaheadToken(0), r = new Error("Expected " + e + ", got: " + t.type);
            throw r.name = "ParserError", r;
        } }, _errorToken: function (e) { var t = new Error("Invalid token (" + e.type + '): "' + e.value + '"'); throw t.name = "ParserError", t; }, _parseIndexExpression: function () { if (this._lookahead(0) === P || this._lookahead(1) === P)
            return this._parseSliceExpression(); var e = { type: "Index", value: this._lookaheadToken(0).value }; return this._advance(), this._match(d), e; }, _projectIfSlice: function (e, t) { var r = { type: "IndexExpression", children: [e, t] }; return t.type === "Slice" ? { type: "Projection", children: [r, this._parseProjectionRHS(u.Star)] } : r; }, _parseSliceExpression: function () { for (var e = [null, null, null], t = 0, r = this._lookahead(0); r !== d && t < 3;) {
            if (r === P)
                t++, this._advance();
            else if (r === A)
                e[t] = this._lookaheadToken(0).value, this._advance();
            else {
                var n = this._lookahead(0), i = new Error("Syntax error, unexpected token: " + n.value + "(" + n.type + ")");
                throw i.name = "Parsererror", i;
            }
            r = this._lookahead(0);
        } return this._match(d), { type: "Slice", children: e }; }, _parseComparator: function (e, t) { var r = this.expression(u[t]); return { type: "Comparator", name: t, children: [e, r] }; }, _parseDotRHS: function (e) { var t = this._lookahead(0), r = [F, C, I]; if (r.indexOf(t) >= 0)
            return this.expression(e); if (t === b)
            return this._match(b), this._parseMultiselectList(); if (t === D)
            return this._match(D), this._parseMultiselectHash(); }, _parseProjectionRHS: function (e) { var t; if (u[this._lookahead(0)] < 10)
            t = { type: "Identity" };
        else if (this._lookahead(0) === b)
            t = this.expression(e);
        else if (this._lookahead(0) === U)
            t = this.expression(e);
        else if (this._lookahead(0) === Y)
            this._match(Y), t = this._parseDotRHS(e);
        else {
            var r = this._lookaheadToken(0), n = new Error("Sytanx error, unexpected token: " + r.value + "(" + r.type + ")");
            throw n.name = "ParserError", n;
        } return t; }, _parseMultiselectList: function () { for (var e = []; this._lookahead(0) !== d;) {
            var t = this.expression(0);
            if (e.push(t), this._lookahead(0) === w && (this._match(w), this._lookahead(0) === d))
                throw new Error("Unexpected token Rbracket");
        } return this._match(d), { type: "MultiSelectList", children: e }; }, _parseMultiselectHash: function () { for (var e = [], t = [F, C], r, n, i, s;;) {
            if (r = this._lookaheadToken(0), t.indexOf(r.type) < 0)
                throw new Error("Expecting an identifier token, got: " + r.type);
            if (n = r.value, this._advance(), this._match(P), i = this.expression(0), s = { type: "KeyValuePair", name: n, value: i }, e.push(s), this._lookahead(0) === w)
                this._match(w);
            else if (this._lookahead(0) === z) {
                this._match(z);
                break;
            }
        } return { type: "MultiSelectHash", children: e }; } };
    function Ee(e) { this.runtime = e; }
    Ee.prototype = { search: function (e, t) { return this.visit(e, t); }, visit: function (e, t) { var r, n, i, s, h, c, p, x, l, a; switch (e.type) {
            case "Field": return t !== null && T(t) ? (c = t[e.name], c === void 0 ? null : c) : null;
            case "Subexpression":
                for (i = this.visit(e.children[0], t), a = 1; a < e.children.length; a++)
                    if (i = this.visit(e.children[1], i), i === null)
                        return null;
                return i;
            case "IndexExpression": return p = this.visit(e.children[0], t), x = this.visit(e.children[1], p), x;
            case "Index":
                if (!o(t))
                    return null;
                var m = e.value;
                return m < 0 && (m = t.length + m), i = t[m], i === void 0 && (i = null), i;
            case "Slice":
                if (!o(t))
                    return null;
                var He = e.children.slice(0), ce = this.computeSliceParams(t.length, He), xe = ce[0], me = ce[1], oe = ce[2];
                if (i = [], oe > 0)
                    for (a = xe; a < me; a += oe)
                        i.push(t[a]);
                else
                    for (a = xe; a > me; a += oe)
                        i.push(t[a]);
                return i;
            case "Projection":
                var k = this.visit(e.children[0], t);
                if (!o(k))
                    return null;
                for (l = [], a = 0; a < k.length; a++)
                    n = this.visit(e.children[1], k[a]), n !== null && l.push(n);
                return l;
            case "ValueProjection":
                if (k = this.visit(e.children[0], t), !T(k))
                    return null;
                l = [];
                var Oe = Le(k);
                for (a = 0; a < Oe.length; a++)
                    n = this.visit(e.children[1], Oe[a]), n !== null && l.push(n);
                return l;
            case "FilterProjection":
                if (k = this.visit(e.children[0], t), !o(k))
                    return null;
                var le = [], we = [];
                for (a = 0; a < k.length; a++)
                    r = this.visit(e.children[2], k[a]), E(r) || le.push(k[a]);
                for (var fe = 0; fe < le.length; fe++)
                    n = this.visit(e.children[1], le[fe]), n !== null && we.push(n);
                return we;
            case "Comparator":
                switch (s = this.visit(e.children[0], t), h = this.visit(e.children[1], t), e.name) {
                    case Q:
                        i = O(s, h);
                        break;
                    case X:
                        i = !O(s, h);
                        break;
                    case q:
                        i = s > h;
                        break;
                    case W:
                        i = s >= h;
                        break;
                    case G:
                        i = s < h;
                        break;
                    case $:
                        i = s <= h;
                        break;
                    default: throw new Error("Unknown comparator: " + e.name);
                }
                return i;
            case N:
                var _e = this.visit(e.children[0], t);
                if (!o(_e))
                    return null;
                var Z = [];
                for (a = 0; a < _e.length; a++)
                    n = _e[a], o(n) ? Z.push.apply(Z, n) : Z.push(n);
                return Z;
            case "Identity": return t;
            case "MultiSelectList":
                if (t === null)
                    return null;
                for (l = [], a = 0; a < e.children.length; a++)
                    l.push(this.visit(e.children[a], t));
                return l;
            case "MultiSelectHash":
                if (t === null)
                    return null;
                l = {};
                var pe;
                for (a = 0; a < e.children.length; a++)
                    pe = e.children[a], l[pe.name] = this.visit(pe.value, t);
                return l;
            case "OrExpression": return r = this.visit(e.children[0], t), E(r) && (r = this.visit(e.children[1], t)), r;
            case "AndExpression": return s = this.visit(e.children[0], t), E(s) === !0 ? s : this.visit(e.children[1], t);
            case "NotExpression": return s = this.visit(e.children[0], t), E(s);
            case "Literal": return e.value;
            case H: return p = this.visit(e.children[0], t), this.visit(e.children[1], p);
            case g: return t;
            case "Function":
                var Ne = [];
                for (a = 0; a < e.children.length; a++)
                    Ne.push(this.visit(e.children[a], t));
                return this.runtime.callFunction(e.name, Ne);
            case "ExpressionReference":
                var Se = e.children[0];
                return Se.jmespathType = B, Se;
            default: throw new Error("Unknown node type: " + e.type);
        } }, computeSliceParams: function (e, t) { var r = t[0], n = t[1], i = t[2], s = [null, null, null]; if (i === null)
            i = 1;
        else if (i === 0) {
            var h = new Error("Invalid slice, step cannot be 0");
            throw h.name = "RuntimeError", h;
        } var c = i < 0; return r === null ? r = c ? e - 1 : 0 : r = this.capSliceRange(e, r, i), n === null ? n = c ? -1 : e : n = this.capSliceRange(e, n, i), s[0] = r, s[1] = n, s[2] = i, s; }, capSliceRange: function (e, t, r) { return t < 0 ? (t += e, t < 0 && (t = r < 0 ? -1 : 0)) : t >= e && (t = r < 0 ? e - 1 : e), t; } };
    function ge(e) { this._interpreter = e, this.functionTable = { abs: { _func: this._functionAbs, _signature: [{ types: [y] }] }, avg: { _func: this._functionAvg, _signature: [{ types: [R] }] }, ceil: { _func: this._functionCeil, _signature: [{ types: [y] }] }, contains: { _func: this._functionContains, _signature: [{ types: [_, v] }, { types: [S] }] }, ends_with: { _func: this._functionEndsWith, _signature: [{ types: [_] }, { types: [_] }] }, floor: { _func: this._functionFloor, _signature: [{ types: [y] }] }, length: { _func: this._functionLength, _signature: [{ types: [_, v, L] }] }, map: { _func: this._functionMap, _signature: [{ types: [M] }, { types: [v] }] }, max: { _func: this._functionMax, _signature: [{ types: [R, j] }] }, merge: { _func: this._functionMerge, _signature: [{ types: [L], variadic: !0 }] }, max_by: { _func: this._functionMaxBy, _signature: [{ types: [v] }, { types: [M] }] }, sum: { _func: this._functionSum, _signature: [{ types: [R] }] }, starts_with: { _func: this._functionStartsWith, _signature: [{ types: [_] }, { types: [_] }] }, min: { _func: this._functionMin, _signature: [{ types: [R, j] }] }, min_by: { _func: this._functionMinBy, _signature: [{ types: [v] }, { types: [M] }] }, type: { _func: this._functionType, _signature: [{ types: [S] }] }, keys: { _func: this._functionKeys, _signature: [{ types: [L] }] }, values: { _func: this._functionValues, _signature: [{ types: [L] }] }, sort: { _func: this._functionSort, _signature: [{ types: [j, R] }] }, sort_by: { _func: this._functionSortBy, _signature: [{ types: [v] }, { types: [M] }] }, join: { _func: this._functionJoin, _signature: [{ types: [_] }, { types: [j] }] }, reverse: { _func: this._functionReverse, _signature: [{ types: [_, v] }] }, to_array: { _func: this._functionToArray, _signature: [{ types: [S] }] }, to_string: { _func: this._functionToString, _signature: [{ types: [S] }] }, to_number: { _func: this._functionToNumber, _signature: [{ types: [S] }] }, not_null: { _func: this._functionNotNull, _signature: [{ types: [S], variadic: !0 }] } }; }
    ge.prototype = { callFunction: function (e, t) { var r = this.functionTable[e]; if (r === void 0)
            throw new Error("Unknown function: " + e + "()"); return this._validateArgs(e, t, r._signature), r._func.call(this, t); }, _validateArgs: function (e, t, r) { var n; if (r[r.length - 1].variadic) {
            if (t.length < r.length)
                throw n = r.length === 1 ? " argument" : " arguments", new Error("ArgumentError: " + e + "() takes at least" + r.length + n + " but received " + t.length);
        }
        else if (t.length !== r.length)
            throw n = r.length === 1 ? " argument" : " arguments", new Error("ArgumentError: " + e + "() takes " + r.length + n + " but received " + t.length); for (var i, s, h, c = 0; c < r.length; c++) {
            h = !1, i = r[c].types, s = this._getTypeName(t[c]);
            for (var p = 0; p < i.length; p++)
                if (this._typeMatches(s, i[p], t[c])) {
                    h = !0;
                    break;
                }
            if (!h) {
                var x = i.map(function (l) { return de[l]; }).join(",");
                throw new Error("TypeError: " + e + "() expected argument " + (c + 1) + " to be type " + x + " but received type " + de[s] + " instead.");
            }
        } }, _typeMatches: function (e, t, r) { if (t === S)
            return !0; if (t === j || t === R || t === v) {
            if (t === v)
                return e === v;
            if (e === v) {
                var n;
                t === R ? n = y : t === j && (n = _);
                for (var i = 0; i < r.length; i++)
                    if (!this._typeMatches(this._getTypeName(r[i]), n, r[i]))
                        return !1;
                return !0;
            }
        }
        else
            return e === t; }, _getTypeName: function (e) { switch (Object.prototype.toString.call(e)) {
            case "[object String]": return _;
            case "[object Number]": return y;
            case "[object Array]": return v;
            case "[object Boolean]": return ye;
            case "[object Null]": return te;
            case "[object Object]": return e.jmespathType === B ? M : L;
        } }, _functionStartsWith: function (e) { return e[0].lastIndexOf(e[1]) === 0; }, _functionEndsWith: function (e) { var t = e[0], r = e[1]; return t.indexOf(r, t.length - r.length) !== -1; }, _functionReverse: function (e) { var t = this._getTypeName(e[0]); if (t === _) {
            for (var r = e[0], n = "", i = r.length - 1; i >= 0; i--)
                n += r[i];
            return n;
        }
        else {
            var s = e[0].slice(0);
            return s.reverse(), s;
        } }, _functionAbs: function (e) { return Math.abs(e[0]); }, _functionCeil: function (e) { return Math.ceil(e[0]); }, _functionAvg: function (e) { for (var t = 0, r = e[0], n = 0; n < r.length; n++)
            t += r[n]; return t / r.length; }, _functionContains: function (e) { return e[0].indexOf(e[1]) >= 0; }, _functionFloor: function (e) { return Math.floor(e[0]); }, _functionLength: function (e) { return T(e[0]) ? Object.keys(e[0]).length : e[0].length; }, _functionMap: function (e) { for (var t = [], r = this._interpreter, n = e[0], i = e[1], s = 0; s < i.length; s++)
            t.push(r.visit(n, i[s])); return t; }, _functionMerge: function (e) { for (var t = {}, r = 0; r < e.length; r++) {
            var n = e[r];
            for (var i in n)
                t[i] = n[i];
        } return t; }, _functionMax: function (e) { if (e[0].length > 0) {
            var t = this._getTypeName(e[0][0]);
            if (t === y)
                return Math.max.apply(Math, e[0]);
            for (var r = e[0], n = r[0], i = 1; i < r.length; i++)
                n.localeCompare(r[i]) < 0 && (n = r[i]);
            return n;
        }
        else
            return null; }, _functionMin: function (e) { if (e[0].length > 0) {
            var t = this._getTypeName(e[0][0]);
            if (t === y)
                return Math.min.apply(Math, e[0]);
            for (var r = e[0], n = r[0], i = 1; i < r.length; i++)
                r[i].localeCompare(n) < 0 && (n = r[i]);
            return n;
        }
        else
            return null; }, _functionSum: function (e) { for (var t = 0, r = e[0], n = 0; n < r.length; n++)
            t += r[n]; return t; }, _functionType: function (e) { switch (this._getTypeName(e[0])) {
            case y: return "number";
            case _: return "string";
            case v: return "array";
            case L: return "object";
            case ye: return "boolean";
            case M: return "expref";
            case te: return "null";
        } }, _functionKeys: function (e) { return Object.keys(e[0]); }, _functionValues: function (e) { for (var t = e[0], r = Object.keys(t), n = [], i = 0; i < r.length; i++)
            n.push(t[r[i]]); return n; }, _functionJoin: function (e) { var t = e[0], r = e[1]; return r.join(t); }, _functionToArray: function (e) { return this._getTypeName(e[0]) === v ? e[0] : [e[0]]; }, _functionToString: function (e) { return this._getTypeName(e[0]) === _ ? e[0] : JSON.stringify(e[0]); }, _functionToNumber: function (e) { var t = this._getTypeName(e[0]), r; return t === y ? e[0] : t === _ && (r = +e[0], !isNaN(r)) ? r : null; }, _functionNotNull: function (e) { for (var t = 0; t < e.length; t++)
            if (this._getTypeName(e[t]) !== te)
                return e[t]; return null; }, _functionSort: function (e) { var t = e[0].slice(0); return t.sort(), t; }, _functionSortBy: function (e) { var t = e[0].slice(0); if (t.length === 0)
            return t; var r = this._interpreter, n = e[1], i = this._getTypeName(r.visit(n, t[0])); if ([y, _].indexOf(i) < 0)
            throw new Error("TypeError"); for (var s = this, h = [], c = 0; c < t.length; c++)
            h.push([c, t[c]]); h.sort(function (x, l) { var a = r.visit(n, x[1]), m = r.visit(n, l[1]); if (s._getTypeName(a) !== i)
            throw new Error("TypeError: expected " + i + ", received " + s._getTypeName(a)); if (s._getTypeName(m) !== i)
            throw new Error("TypeError: expected " + i + ", received " + s._getTypeName(m)); return a > m ? 1 : a < m ? -1 : x[0] - l[0]; }); for (var p = 0; p < h.length; p++)
            t[p] = h[p][1]; return t; }, _functionMaxBy: function (e) { for (var t = e[1], r = e[0], n = this.createKeyFunction(t, [y, _]), i = -1 / 0, s, h, c = 0; c < r.length; c++)
            h = n(r[c]), h > i && (i = h, s = r[c]); return s; }, _functionMinBy: function (e) { for (var t = e[1], r = e[0], n = this.createKeyFunction(t, [y, _]), i = 1 / 0, s, h, c = 0; c < r.length; c++)
            h = n(r[c]), h < i && (i = h, s = r[c]); return s; }, createKeyFunction: function (e, t) { var r = this, n = this._interpreter, i = function (s) { var h = n.visit(e, s); if (t.indexOf(r._getTypeName(h)) < 0) {
            var c = "TypeError: expected one of " + t + ", received " + r._getTypeName(h);
            throw new Error(c);
        } return h; }; return i; } };
    function Ce(e) { var t = new he, r = t.parse(e); return r; }
    function Ae(e) { var t = new ue; return t.tokenize(e); }
    function Be(e, t) { var r = new he, n = new ge, i = new Ee(n); n._interpreter = i; var s = r.parse(t); return i.search(s, e); }
    f.tokenize = Ae, f.compile = Ce, f.search = Be, f.strictDeepEqual = O;
})(typeof V > "u" ? V.jmespath = {} : V); });
var Ie = Pe(ve()), be = Pe(ve()), { tokenize: Ve, compile: et, search: tt, strictDeepEqual: rt } = be, { default: Ge, ...We } = be, nt = Ie.default ?? Ge ?? We;
exports.tokenize = Ve;
exports.compile = et;
exports.search = tt;
exports.strictDeepEqual = rt;
exports.default = nt;
