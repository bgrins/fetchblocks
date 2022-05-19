// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

(function() {
    function transform(data) {
        return data;
    }
    function createCommonjsModule(fn, basedir, module) {
        return module = {
            path: basedir,
            exports: {},
            require: function(path, base) {
                return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
            }
        }, fn(module, module.exports), module.exports;
    }
    function commonjsRequire() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }
    var jmespath = createCommonjsModule(function(module, exports) {
        (function(exports2) {
            function isArray(obj) {
                if (obj !== null) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                } else {
                    return false;
                }
            }
            function isObject(obj) {
                if (obj !== null) {
                    return Object.prototype.toString.call(obj) === "[object Object]";
                } else {
                    return false;
                }
            }
            function strictDeepEqual2(first, second) {
                if (first === second) {
                    return true;
                }
                var firstType = Object.prototype.toString.call(first);
                if (firstType !== Object.prototype.toString.call(second)) {
                    return false;
                }
                if (isArray(first) === true) {
                    if (first.length !== second.length) {
                        return false;
                    }
                    for(var i = 0; i < first.length; i++){
                        if (strictDeepEqual2(first[i], second[i]) === false) {
                            return false;
                        }
                    }
                    return true;
                }
                if (isObject(first) === true) {
                    var keysSeen = {};
                    for(var key in first){
                        if (hasOwnProperty.call(first, key)) {
                            if (strictDeepEqual2(first[key], second[key]) === false) {
                                return false;
                            }
                            keysSeen[key] = true;
                        }
                    }
                    for(var key2 in second){
                        if (hasOwnProperty.call(second, key2)) {
                            if (keysSeen[key2] !== true) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
                return false;
            }
            function isFalse(obj) {
                if (obj === "" || obj === false || obj === null) {
                    return true;
                } else if (isArray(obj) && obj.length === 0) {
                    return true;
                } else if (isObject(obj)) {
                    for(var key in obj){
                        if (obj.hasOwnProperty(key)) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    return false;
                }
            }
            function objValues(obj) {
                var keys = Object.keys(obj);
                var values = [];
                for(var i = 0; i < keys.length; i++){
                    values.push(obj[keys[i]]);
                }
                return values;
            }
            var trimLeft;
            if (typeof String.prototype.trimLeft === "function") {
                trimLeft = function(str) {
                    return str.trimLeft();
                };
            } else {
                trimLeft = function(str) {
                    return str.match(/^\s*(.*)/)[1];
                };
            }
            var TYPE_NUMBER = 0;
            var TYPE_ANY = 1;
            var TYPE_STRING = 2;
            var TYPE_ARRAY = 3;
            var TYPE_OBJECT = 4;
            var TYPE_BOOLEAN = 5;
            var TYPE_EXPREF = 6;
            var TYPE_NULL = 7;
            var TYPE_ARRAY_NUMBER = 8;
            var TYPE_ARRAY_STRING = 9;
            var TYPE_NAME_TABLE = {
                0: "number",
                1: "any",
                2: "string",
                3: "array",
                4: "object",
                5: "boolean",
                6: "expression",
                7: "null",
                8: "Array<number>",
                9: "Array<string>"
            };
            var TOK_EOF = "EOF";
            var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
            var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
            var TOK_RBRACKET = "Rbracket";
            var TOK_RPAREN = "Rparen";
            var TOK_COMMA = "Comma";
            var TOK_COLON = "Colon";
            var TOK_RBRACE = "Rbrace";
            var TOK_NUMBER = "Number";
            var TOK_CURRENT = "Current";
            var TOK_EXPREF = "Expref";
            var TOK_PIPE = "Pipe";
            var TOK_OR = "Or";
            var TOK_AND = "And";
            var TOK_EQ = "EQ";
            var TOK_GT = "GT";
            var TOK_LT = "LT";
            var TOK_GTE = "GTE";
            var TOK_LTE = "LTE";
            var TOK_NE = "NE";
            var TOK_FLATTEN = "Flatten";
            var TOK_STAR = "Star";
            var TOK_FILTER = "Filter";
            var TOK_DOT = "Dot";
            var TOK_NOT = "Not";
            var TOK_LBRACE = "Lbrace";
            var TOK_LBRACKET = "Lbracket";
            var TOK_LPAREN = "Lparen";
            var TOK_LITERAL = "Literal";
            var basicTokens = {
                ".": TOK_DOT,
                "*": TOK_STAR,
                ",": TOK_COMMA,
                ":": TOK_COLON,
                "{": TOK_LBRACE,
                "}": TOK_RBRACE,
                "]": TOK_RBRACKET,
                "(": TOK_LPAREN,
                ")": TOK_RPAREN,
                "@": TOK_CURRENT
            };
            var operatorStartToken = {
                "<": true,
                ">": true,
                "=": true,
                "!": true
            };
            var skipChars = {
                " ": true,
                "	": true,
                "\n": true
            };
            function isAlpha(ch) {
                return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch === "_";
            }
            function isNum(ch) {
                return ch >= "0" && ch <= "9" || ch === "-";
            }
            function isAlphaNum(ch) {
                return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch === "_";
            }
            function Lexer() {}
            Lexer.prototype = {
                tokenize: function(stream) {
                    var tokens = [];
                    this._current = 0;
                    var start;
                    var identifier;
                    var token;
                    while(this._current < stream.length){
                        if (isAlpha(stream[this._current])) {
                            start = this._current;
                            identifier = this._consumeUnquotedIdentifier(stream);
                            tokens.push({
                                type: TOK_UNQUOTEDIDENTIFIER,
                                value: identifier,
                                start
                            });
                        } else if (basicTokens[stream[this._current]] !== void 0) {
                            tokens.push({
                                type: basicTokens[stream[this._current]],
                                value: stream[this._current],
                                start: this._current
                            });
                            this._current++;
                        } else if (isNum(stream[this._current])) {
                            token = this._consumeNumber(stream);
                            tokens.push(token);
                        } else if (stream[this._current] === "[") {
                            token = this._consumeLBracket(stream);
                            tokens.push(token);
                        } else if (stream[this._current] === '"') {
                            start = this._current;
                            identifier = this._consumeQuotedIdentifier(stream);
                            tokens.push({
                                type: TOK_QUOTEDIDENTIFIER,
                                value: identifier,
                                start
                            });
                        } else if (stream[this._current] === "'") {
                            start = this._current;
                            identifier = this._consumeRawStringLiteral(stream);
                            tokens.push({
                                type: TOK_LITERAL,
                                value: identifier,
                                start
                            });
                        } else if (stream[this._current] === "`") {
                            start = this._current;
                            var literal = this._consumeLiteral(stream);
                            tokens.push({
                                type: TOK_LITERAL,
                                value: literal,
                                start
                            });
                        } else if (operatorStartToken[stream[this._current]] !== void 0) {
                            tokens.push(this._consumeOperator(stream));
                        } else if (skipChars[stream[this._current]] !== void 0) {
                            this._current++;
                        } else if (stream[this._current] === "&") {
                            start = this._current;
                            this._current++;
                            if (stream[this._current] === "&") {
                                this._current++;
                                tokens.push({
                                    type: TOK_AND,
                                    value: "&&",
                                    start
                                });
                            } else {
                                tokens.push({
                                    type: TOK_EXPREF,
                                    value: "&",
                                    start
                                });
                            }
                        } else if (stream[this._current] === "|") {
                            start = this._current;
                            this._current++;
                            if (stream[this._current] === "|") {
                                this._current++;
                                tokens.push({
                                    type: TOK_OR,
                                    value: "||",
                                    start
                                });
                            } else {
                                tokens.push({
                                    type: TOK_PIPE,
                                    value: "|",
                                    start
                                });
                            }
                        } else {
                            var error = new Error("Unknown character:" + stream[this._current]);
                            error.name = "LexerError";
                            throw error;
                        }
                    }
                    return tokens;
                },
                _consumeUnquotedIdentifier: function(stream) {
                    var start = this._current;
                    this._current++;
                    while(this._current < stream.length && isAlphaNum(stream[this._current])){
                        this._current++;
                    }
                    return stream.slice(start, this._current);
                },
                _consumeQuotedIdentifier: function(stream) {
                    var start = this._current;
                    this._current++;
                    var maxLength = stream.length;
                    while(stream[this._current] !== '"' && this._current < maxLength){
                        var current = this._current;
                        if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === '"')) {
                            current += 2;
                        } else {
                            current++;
                        }
                        this._current = current;
                    }
                    this._current++;
                    return JSON.parse(stream.slice(start, this._current));
                },
                _consumeRawStringLiteral: function(stream) {
                    var start = this._current;
                    this._current++;
                    var maxLength = stream.length;
                    while(stream[this._current] !== "'" && this._current < maxLength){
                        var current = this._current;
                        if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === "'")) {
                            current += 2;
                        } else {
                            current++;
                        }
                        this._current = current;
                    }
                    this._current++;
                    var literal = stream.slice(start + 1, this._current - 1);
                    return literal.replace("\\'", "'");
                },
                _consumeNumber: function(stream) {
                    var start = this._current;
                    this._current++;
                    var maxLength = stream.length;
                    while(isNum(stream[this._current]) && this._current < maxLength){
                        this._current++;
                    }
                    var value = parseInt(stream.slice(start, this._current));
                    return {
                        type: TOK_NUMBER,
                        value,
                        start
                    };
                },
                _consumeLBracket: function(stream) {
                    var start = this._current;
                    this._current++;
                    if (stream[this._current] === "?") {
                        this._current++;
                        return {
                            type: TOK_FILTER,
                            value: "[?",
                            start
                        };
                    } else if (stream[this._current] === "]") {
                        this._current++;
                        return {
                            type: TOK_FLATTEN,
                            value: "[]",
                            start
                        };
                    } else {
                        return {
                            type: TOK_LBRACKET,
                            value: "[",
                            start
                        };
                    }
                },
                _consumeOperator: function(stream) {
                    var start = this._current;
                    var startingChar = stream[start];
                    this._current++;
                    if (startingChar === "!") {
                        if (stream[this._current] === "=") {
                            this._current++;
                            return {
                                type: TOK_NE,
                                value: "!=",
                                start
                            };
                        } else {
                            return {
                                type: TOK_NOT,
                                value: "!",
                                start
                            };
                        }
                    } else if (startingChar === "<") {
                        if (stream[this._current] === "=") {
                            this._current++;
                            return {
                                type: TOK_LTE,
                                value: "<=",
                                start
                            };
                        } else {
                            return {
                                type: TOK_LT,
                                value: "<",
                                start
                            };
                        }
                    } else if (startingChar === ">") {
                        if (stream[this._current] === "=") {
                            this._current++;
                            return {
                                type: TOK_GTE,
                                value: ">=",
                                start
                            };
                        } else {
                            return {
                                type: TOK_GT,
                                value: ">",
                                start
                            };
                        }
                    } else if (startingChar === "=") {
                        if (stream[this._current] === "=") {
                            this._current++;
                            return {
                                type: TOK_EQ,
                                value: "==",
                                start
                            };
                        }
                    }
                },
                _consumeLiteral: function(stream) {
                    this._current++;
                    var start = this._current;
                    var maxLength = stream.length;
                    var literal;
                    while(stream[this._current] !== "`" && this._current < maxLength){
                        var current = this._current;
                        if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === "`")) {
                            current += 2;
                        } else {
                            current++;
                        }
                        this._current = current;
                    }
                    var literalString = trimLeft(stream.slice(start, this._current));
                    literalString = literalString.replace("\\`", "`");
                    if (this._looksLikeJSON(literalString)) {
                        literal = JSON.parse(literalString);
                    } else {
                        literal = JSON.parse('"' + literalString + '"');
                    }
                    this._current++;
                    return literal;
                },
                _looksLikeJSON: function(literalString) {
                    var startingChars = '[{"';
                    var jsonLiterals = [
                        "true",
                        "false",
                        "null"
                    ];
                    var numberLooking = "-0123456789";
                    if (literalString === "") {
                        return false;
                    } else if (startingChars.indexOf(literalString[0]) >= 0) {
                        return true;
                    } else if (jsonLiterals.indexOf(literalString) >= 0) {
                        return true;
                    } else if (numberLooking.indexOf(literalString[0]) >= 0) {
                        try {
                            JSON.parse(literalString);
                            return true;
                        } catch (ex) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            };
            var bindingPower = {};
            bindingPower[TOK_EOF] = 0;
            bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
            bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
            bindingPower[TOK_RBRACKET] = 0;
            bindingPower[TOK_RPAREN] = 0;
            bindingPower[TOK_COMMA] = 0;
            bindingPower[TOK_RBRACE] = 0;
            bindingPower[TOK_NUMBER] = 0;
            bindingPower[TOK_CURRENT] = 0;
            bindingPower[TOK_EXPREF] = 0;
            bindingPower[TOK_PIPE] = 1;
            bindingPower[TOK_OR] = 2;
            bindingPower[TOK_AND] = 3;
            bindingPower[TOK_EQ] = 5;
            bindingPower[TOK_GT] = 5;
            bindingPower[TOK_LT] = 5;
            bindingPower[TOK_GTE] = 5;
            bindingPower[TOK_LTE] = 5;
            bindingPower[TOK_NE] = 5;
            bindingPower[TOK_FLATTEN] = 9;
            bindingPower[TOK_STAR] = 20;
            bindingPower[TOK_FILTER] = 21;
            bindingPower[TOK_DOT] = 40;
            bindingPower[TOK_NOT] = 45;
            bindingPower[TOK_LBRACE] = 50;
            bindingPower[TOK_LBRACKET] = 55;
            bindingPower[TOK_LPAREN] = 60;
            function Parser() {}
            Parser.prototype = {
                parse: function(expression) {
                    this._loadTokens(expression);
                    this.index = 0;
                    var ast = this.expression(0);
                    if (this._lookahead(0) !== TOK_EOF) {
                        var t = this._lookaheadToken(0);
                        var error = new Error("Unexpected token type: " + t.type + ", value: " + t.value);
                        error.name = "ParserError";
                        throw error;
                    }
                    return ast;
                },
                _loadTokens: function(expression) {
                    var lexer = new Lexer();
                    var tokens = lexer.tokenize(expression);
                    tokens.push({
                        type: TOK_EOF,
                        value: "",
                        start: expression.length
                    });
                    this.tokens = tokens;
                },
                expression: function(rbp) {
                    var leftToken = this._lookaheadToken(0);
                    this._advance();
                    var left = this.nud(leftToken);
                    var currentToken = this._lookahead(0);
                    while(rbp < bindingPower[currentToken]){
                        this._advance();
                        left = this.led(currentToken, left);
                        currentToken = this._lookahead(0);
                    }
                    return left;
                },
                _lookahead: function(number) {
                    return this.tokens[this.index + number].type;
                },
                _lookaheadToken: function(number) {
                    return this.tokens[this.index + number];
                },
                _advance: function() {
                    this.index++;
                },
                nud: function(token) {
                    var left;
                    var right;
                    var expression;
                    switch(token.type){
                        case TOK_LITERAL:
                            return {
                                type: "Literal",
                                value: token.value
                            };
                        case TOK_UNQUOTEDIDENTIFIER:
                            return {
                                type: "Field",
                                name: token.value
                            };
                        case TOK_QUOTEDIDENTIFIER:
                            var node = {
                                type: "Field",
                                name: token.value
                            };
                            if (this._lookahead(0) === TOK_LPAREN) {
                                throw new Error("Quoted identifier not allowed for function names.");
                            }
                            return node;
                        case TOK_NOT:
                            right = this.expression(bindingPower.Not);
                            return {
                                type: "NotExpression",
                                children: [
                                    right
                                ]
                            };
                        case TOK_STAR:
                            left = {
                                type: "Identity"
                            };
                            right = null;
                            if (this._lookahead(0) === TOK_RBRACKET) {
                                right = {
                                    type: "Identity"
                                };
                            } else {
                                right = this._parseProjectionRHS(bindingPower.Star);
                            }
                            return {
                                type: "ValueProjection",
                                children: [
                                    left,
                                    right
                                ]
                            };
                        case TOK_FILTER:
                            return this.led(token.type, {
                                type: "Identity"
                            });
                        case TOK_LBRACE:
                            return this._parseMultiselectHash();
                        case TOK_FLATTEN:
                            left = {
                                type: TOK_FLATTEN,
                                children: [
                                    {
                                        type: "Identity"
                                    }
                                ]
                            };
                            right = this._parseProjectionRHS(bindingPower.Flatten);
                            return {
                                type: "Projection",
                                children: [
                                    left,
                                    right
                                ]
                            };
                        case TOK_LBRACKET:
                            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                                right = this._parseIndexExpression();
                                return this._projectIfSlice({
                                    type: "Identity"
                                }, right);
                            } else if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
                                this._advance();
                                this._advance();
                                right = this._parseProjectionRHS(bindingPower.Star);
                                return {
                                    type: "Projection",
                                    children: [
                                        {
                                            type: "Identity"
                                        },
                                        right
                                    ]
                                };
                            }
                            return this._parseMultiselectList();
                        case TOK_CURRENT:
                            return {
                                type: TOK_CURRENT
                            };
                        case TOK_EXPREF:
                            expression = this.expression(bindingPower.Expref);
                            return {
                                type: "ExpressionReference",
                                children: [
                                    expression
                                ]
                            };
                        case TOK_LPAREN:
                            var args = [];
                            while(this._lookahead(0) !== TOK_RPAREN){
                                if (this._lookahead(0) === TOK_CURRENT) {
                                    expression = {
                                        type: TOK_CURRENT
                                    };
                                    this._advance();
                                } else {
                                    expression = this.expression(0);
                                }
                                args.push(expression);
                            }
                            this._match(TOK_RPAREN);
                            return args[0];
                        default:
                            this._errorToken(token);
                    }
                },
                led: function(tokenName, left) {
                    var right;
                    switch(tokenName){
                        case TOK_DOT:
                            var rbp = bindingPower.Dot;
                            if (this._lookahead(0) !== TOK_STAR) {
                                right = this._parseDotRHS(rbp);
                                return {
                                    type: "Subexpression",
                                    children: [
                                        left,
                                        right
                                    ]
                                };
                            }
                            this._advance();
                            right = this._parseProjectionRHS(rbp);
                            return {
                                type: "ValueProjection",
                                children: [
                                    left,
                                    right
                                ]
                            };
                        case TOK_PIPE:
                            right = this.expression(bindingPower.Pipe);
                            return {
                                type: TOK_PIPE,
                                children: [
                                    left,
                                    right
                                ]
                            };
                        case TOK_OR:
                            right = this.expression(bindingPower.Or);
                            return {
                                type: "OrExpression",
                                children: [
                                    left,
                                    right
                                ]
                            };
                        case TOK_AND:
                            right = this.expression(bindingPower.And);
                            return {
                                type: "AndExpression",
                                children: [
                                    left,
                                    right
                                ]
                            };
                        case TOK_LPAREN:
                            var name = left.name;
                            var args = [];
                            var expression, node;
                            while(this._lookahead(0) !== TOK_RPAREN){
                                if (this._lookahead(0) === TOK_CURRENT) {
                                    expression = {
                                        type: TOK_CURRENT
                                    };
                                    this._advance();
                                } else {
                                    expression = this.expression(0);
                                }
                                if (this._lookahead(0) === TOK_COMMA) {
                                    this._match(TOK_COMMA);
                                }
                                args.push(expression);
                            }
                            this._match(TOK_RPAREN);
                            node = {
                                type: "Function",
                                name,
                                children: args
                            };
                            return node;
                        case TOK_FILTER:
                            var condition = this.expression(0);
                            this._match(TOK_RBRACKET);
                            if (this._lookahead(0) === TOK_FLATTEN) {
                                right = {
                                    type: "Identity"
                                };
                            } else {
                                right = this._parseProjectionRHS(bindingPower.Filter);
                            }
                            return {
                                type: "FilterProjection",
                                children: [
                                    left,
                                    right,
                                    condition
                                ]
                            };
                        case TOK_FLATTEN:
                            var leftNode = {
                                type: TOK_FLATTEN,
                                children: [
                                    left
                                ]
                            };
                            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
                            return {
                                type: "Projection",
                                children: [
                                    leftNode,
                                    rightNode
                                ]
                            };
                        case TOK_EQ:
                        case TOK_NE:
                        case TOK_GT:
                        case TOK_GTE:
                        case TOK_LT:
                        case TOK_LTE:
                            return this._parseComparator(left, tokenName);
                        case TOK_LBRACKET:
                            var token = this._lookaheadToken(0);
                            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                                right = this._parseIndexExpression();
                                return this._projectIfSlice(left, right);
                            }
                            this._match(TOK_STAR);
                            this._match(TOK_RBRACKET);
                            right = this._parseProjectionRHS(bindingPower.Star);
                            return {
                                type: "Projection",
                                children: [
                                    left,
                                    right
                                ]
                            };
                        default:
                            this._errorToken(this._lookaheadToken(0));
                    }
                },
                _match: function(tokenType) {
                    if (this._lookahead(0) === tokenType) {
                        this._advance();
                    } else {
                        var t = this._lookaheadToken(0);
                        var error = new Error("Expected " + tokenType + ", got: " + t.type);
                        error.name = "ParserError";
                        throw error;
                    }
                },
                _errorToken: function(token) {
                    var error = new Error("Invalid token (" + token.type + '): "' + token.value + '"');
                    error.name = "ParserError";
                    throw error;
                },
                _parseIndexExpression: function() {
                    if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
                        return this._parseSliceExpression();
                    } else {
                        var node = {
                            type: "Index",
                            value: this._lookaheadToken(0).value
                        };
                        this._advance();
                        this._match(TOK_RBRACKET);
                        return node;
                    }
                },
                _projectIfSlice: function(left, right) {
                    var indexExpr = {
                        type: "IndexExpression",
                        children: [
                            left,
                            right
                        ]
                    };
                    if (right.type === "Slice") {
                        return {
                            type: "Projection",
                            children: [
                                indexExpr,
                                this._parseProjectionRHS(bindingPower.Star)
                            ]
                        };
                    } else {
                        return indexExpr;
                    }
                },
                _parseSliceExpression: function() {
                    var parts = [
                        null,
                        null,
                        null
                    ];
                    var index = 0;
                    var currentToken = this._lookahead(0);
                    while(currentToken !== TOK_RBRACKET && index < 3){
                        if (currentToken === TOK_COLON) {
                            index++;
                            this._advance();
                        } else if (currentToken === TOK_NUMBER) {
                            parts[index] = this._lookaheadToken(0).value;
                            this._advance();
                        } else {
                            var t = this._lookahead(0);
                            var error = new Error("Syntax error, unexpected token: " + t.value + "(" + t.type + ")");
                            error.name = "Parsererror";
                            throw error;
                        }
                        currentToken = this._lookahead(0);
                    }
                    this._match(TOK_RBRACKET);
                    return {
                        type: "Slice",
                        children: parts
                    };
                },
                _parseComparator: function(left, comparator) {
                    var right = this.expression(bindingPower[comparator]);
                    return {
                        type: "Comparator",
                        name: comparator,
                        children: [
                            left,
                            right
                        ]
                    };
                },
                _parseDotRHS: function(rbp) {
                    var lookahead = this._lookahead(0);
                    var exprTokens = [
                        TOK_UNQUOTEDIDENTIFIER,
                        TOK_QUOTEDIDENTIFIER,
                        TOK_STAR
                    ];
                    if (exprTokens.indexOf(lookahead) >= 0) {
                        return this.expression(rbp);
                    } else if (lookahead === TOK_LBRACKET) {
                        this._match(TOK_LBRACKET);
                        return this._parseMultiselectList();
                    } else if (lookahead === TOK_LBRACE) {
                        this._match(TOK_LBRACE);
                        return this._parseMultiselectHash();
                    }
                },
                _parseProjectionRHS: function(rbp) {
                    var right;
                    if (bindingPower[this._lookahead(0)] < 10) {
                        right = {
                            type: "Identity"
                        };
                    } else if (this._lookahead(0) === TOK_LBRACKET) {
                        right = this.expression(rbp);
                    } else if (this._lookahead(0) === TOK_FILTER) {
                        right = this.expression(rbp);
                    } else if (this._lookahead(0) === TOK_DOT) {
                        this._match(TOK_DOT);
                        right = this._parseDotRHS(rbp);
                    } else {
                        var t = this._lookaheadToken(0);
                        var error = new Error("Sytanx error, unexpected token: " + t.value + "(" + t.type + ")");
                        error.name = "ParserError";
                        throw error;
                    }
                    return right;
                },
                _parseMultiselectList: function() {
                    var expressions = [];
                    while(this._lookahead(0) !== TOK_RBRACKET){
                        var expression = this.expression(0);
                        expressions.push(expression);
                        if (this._lookahead(0) === TOK_COMMA) {
                            this._match(TOK_COMMA);
                            if (this._lookahead(0) === TOK_RBRACKET) {
                                throw new Error("Unexpected token Rbracket");
                            }
                        }
                    }
                    this._match(TOK_RBRACKET);
                    return {
                        type: "MultiSelectList",
                        children: expressions
                    };
                },
                _parseMultiselectHash: function() {
                    var pairs = [];
                    var identifierTypes = [
                        TOK_UNQUOTEDIDENTIFIER,
                        TOK_QUOTEDIDENTIFIER
                    ];
                    var keyToken, keyName, value, node;
                    for(;;){
                        keyToken = this._lookaheadToken(0);
                        if (identifierTypes.indexOf(keyToken.type) < 0) {
                            throw new Error("Expecting an identifier token, got: " + keyToken.type);
                        }
                        keyName = keyToken.value;
                        this._advance();
                        this._match(TOK_COLON);
                        value = this.expression(0);
                        node = {
                            type: "KeyValuePair",
                            name: keyName,
                            value
                        };
                        pairs.push(node);
                        if (this._lookahead(0) === TOK_COMMA) {
                            this._match(TOK_COMMA);
                        } else if (this._lookahead(0) === TOK_RBRACE) {
                            this._match(TOK_RBRACE);
                            break;
                        }
                    }
                    return {
                        type: "MultiSelectHash",
                        children: pairs
                    };
                }
            };
            function TreeInterpreter(runtime) {
                this.runtime = runtime;
            }
            TreeInterpreter.prototype = {
                search: function(node, value) {
                    return this.visit(node, value);
                },
                visit: function(node, value) {
                    var matched, current, result, first, second, field, left, right, collected, i;
                    switch(node.type){
                        case "Field":
                            if (value !== null && isObject(value)) {
                                field = value[node.name];
                                if (field === void 0) {
                                    return null;
                                } else {
                                    return field;
                                }
                            }
                            return null;
                        case "Subexpression":
                            result = this.visit(node.children[0], value);
                            for(i = 1; i < node.children.length; i++){
                                result = this.visit(node.children[1], result);
                                if (result === null) {
                                    return null;
                                }
                            }
                            return result;
                        case "IndexExpression":
                            left = this.visit(node.children[0], value);
                            right = this.visit(node.children[1], left);
                            return right;
                        case "Index":
                            if (!isArray(value)) {
                                return null;
                            }
                            var index = node.value;
                            if (index < 0) {
                                index = value.length + index;
                            }
                            result = value[index];
                            if (result === void 0) {
                                result = null;
                            }
                            return result;
                        case "Slice":
                            if (!isArray(value)) {
                                return null;
                            }
                            var sliceParams = node.children.slice(0);
                            var computed = this.computeSliceParams(value.length, sliceParams);
                            var start = computed[0];
                            var stop = computed[1];
                            var step = computed[2];
                            result = [];
                            if (step > 0) {
                                for(i = start; i < stop; i += step){
                                    result.push(value[i]);
                                }
                            } else {
                                for(i = start; i > stop; i += step){
                                    result.push(value[i]);
                                }
                            }
                            return result;
                        case "Projection":
                            var base = this.visit(node.children[0], value);
                            if (!isArray(base)) {
                                return null;
                            }
                            collected = [];
                            for(i = 0; i < base.length; i++){
                                current = this.visit(node.children[1], base[i]);
                                if (current !== null) {
                                    collected.push(current);
                                }
                            }
                            return collected;
                        case "ValueProjection":
                            base = this.visit(node.children[0], value);
                            if (!isObject(base)) {
                                return null;
                            }
                            collected = [];
                            var values = objValues(base);
                            for(i = 0; i < values.length; i++){
                                current = this.visit(node.children[1], values[i]);
                                if (current !== null) {
                                    collected.push(current);
                                }
                            }
                            return collected;
                        case "FilterProjection":
                            base = this.visit(node.children[0], value);
                            if (!isArray(base)) {
                                return null;
                            }
                            var filtered = [];
                            var finalResults = [];
                            for(i = 0; i < base.length; i++){
                                matched = this.visit(node.children[2], base[i]);
                                if (!isFalse(matched)) {
                                    filtered.push(base[i]);
                                }
                            }
                            for(var j1 = 0; j1 < filtered.length; j1++){
                                current = this.visit(node.children[1], filtered[j1]);
                                if (current !== null) {
                                    finalResults.push(current);
                                }
                            }
                            return finalResults;
                        case "Comparator":
                            first = this.visit(node.children[0], value);
                            second = this.visit(node.children[1], value);
                            switch(node.name){
                                case TOK_EQ:
                                    result = strictDeepEqual2(first, second);
                                    break;
                                case TOK_NE:
                                    result = !strictDeepEqual2(first, second);
                                    break;
                                case TOK_GT:
                                    result = first > second;
                                    break;
                                case TOK_GTE:
                                    result = first >= second;
                                    break;
                                case TOK_LT:
                                    result = first < second;
                                    break;
                                case TOK_LTE:
                                    result = first <= second;
                                    break;
                                default:
                                    throw new Error("Unknown comparator: " + node.name);
                            }
                            return result;
                        case TOK_FLATTEN:
                            var original = this.visit(node.children[0], value);
                            if (!isArray(original)) {
                                return null;
                            }
                            var merged = [];
                            for(i = 0; i < original.length; i++){
                                current = original[i];
                                if (isArray(current)) {
                                    merged.push.apply(merged, current);
                                } else {
                                    merged.push(current);
                                }
                            }
                            return merged;
                        case "Identity":
                            return value;
                        case "MultiSelectList":
                            if (value === null) {
                                return null;
                            }
                            collected = [];
                            for(i = 0; i < node.children.length; i++){
                                collected.push(this.visit(node.children[i], value));
                            }
                            return collected;
                        case "MultiSelectHash":
                            if (value === null) {
                                return null;
                            }
                            collected = {};
                            var child;
                            for(i = 0; i < node.children.length; i++){
                                child = node.children[i];
                                collected[child.name] = this.visit(child.value, value);
                            }
                            return collected;
                        case "OrExpression":
                            matched = this.visit(node.children[0], value);
                            if (isFalse(matched)) {
                                matched = this.visit(node.children[1], value);
                            }
                            return matched;
                        case "AndExpression":
                            first = this.visit(node.children[0], value);
                            if (isFalse(first) === true) {
                                return first;
                            }
                            return this.visit(node.children[1], value);
                        case "NotExpression":
                            first = this.visit(node.children[0], value);
                            return isFalse(first);
                        case "Literal":
                            return node.value;
                        case TOK_PIPE:
                            left = this.visit(node.children[0], value);
                            return this.visit(node.children[1], left);
                        case TOK_CURRENT:
                            return value;
                        case "Function":
                            var resolvedArgs = [];
                            for(i = 0; i < node.children.length; i++){
                                resolvedArgs.push(this.visit(node.children[i], value));
                            }
                            return this.runtime.callFunction(node.name, resolvedArgs);
                        case "ExpressionReference":
                            var refNode = node.children[0];
                            refNode.jmespathType = TOK_EXPREF;
                            return refNode;
                        default:
                            throw new Error("Unknown node type: " + node.type);
                    }
                },
                computeSliceParams: function(arrayLength, sliceParams) {
                    var start = sliceParams[0];
                    var stop = sliceParams[1];
                    var step = sliceParams[2];
                    var computed = [
                        null,
                        null,
                        null
                    ];
                    if (step === null) {
                        step = 1;
                    } else if (step === 0) {
                        var error = new Error("Invalid slice, step cannot be 0");
                        error.name = "RuntimeError";
                        throw error;
                    }
                    var stepValueNegative = step < 0 ? true : false;
                    if (start === null) {
                        start = stepValueNegative ? arrayLength - 1 : 0;
                    } else {
                        start = this.capSliceRange(arrayLength, start, step);
                    }
                    if (stop === null) {
                        stop = stepValueNegative ? -1 : arrayLength;
                    } else {
                        stop = this.capSliceRange(arrayLength, stop, step);
                    }
                    computed[0] = start;
                    computed[1] = stop;
                    computed[2] = step;
                    return computed;
                },
                capSliceRange: function(arrayLength, actualValue, step) {
                    if (actualValue < 0) {
                        actualValue += arrayLength;
                        if (actualValue < 0) {
                            actualValue = step < 0 ? -1 : 0;
                        }
                    } else if (actualValue >= arrayLength) {
                        actualValue = step < 0 ? arrayLength - 1 : arrayLength;
                    }
                    return actualValue;
                }
            };
            function Runtime(interpreter) {
                this._interpreter = interpreter;
                this.functionTable = {
                    abs: {
                        _func: this._functionAbs,
                        _signature: [
                            {
                                types: [
                                    TYPE_NUMBER
                                ]
                            }
                        ]
                    },
                    avg: {
                        _func: this._functionAvg,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY_NUMBER
                                ]
                            }
                        ]
                    },
                    ceil: {
                        _func: this._functionCeil,
                        _signature: [
                            {
                                types: [
                                    TYPE_NUMBER
                                ]
                            }
                        ]
                    },
                    contains: {
                        _func: this._functionContains,
                        _signature: [
                            {
                                types: [
                                    TYPE_STRING,
                                    TYPE_ARRAY
                                ]
                            },
                            {
                                types: [
                                    TYPE_ANY
                                ]
                            }
                        ]
                    },
                    ends_with: {
                        _func: this._functionEndsWith,
                        _signature: [
                            {
                                types: [
                                    TYPE_STRING
                                ]
                            },
                            {
                                types: [
                                    TYPE_STRING
                                ]
                            }
                        ]
                    },
                    floor: {
                        _func: this._functionFloor,
                        _signature: [
                            {
                                types: [
                                    TYPE_NUMBER
                                ]
                            }
                        ]
                    },
                    length: {
                        _func: this._functionLength,
                        _signature: [
                            {
                                types: [
                                    TYPE_STRING,
                                    TYPE_ARRAY,
                                    TYPE_OBJECT
                                ]
                            }
                        ]
                    },
                    map: {
                        _func: this._functionMap,
                        _signature: [
                            {
                                types: [
                                    TYPE_EXPREF
                                ]
                            },
                            {
                                types: [
                                    TYPE_ARRAY
                                ]
                            }
                        ]
                    },
                    max: {
                        _func: this._functionMax,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY_NUMBER,
                                    TYPE_ARRAY_STRING
                                ]
                            }
                        ]
                    },
                    merge: {
                        _func: this._functionMerge,
                        _signature: [
                            {
                                types: [
                                    TYPE_OBJECT
                                ],
                                variadic: true
                            }
                        ]
                    },
                    max_by: {
                        _func: this._functionMaxBy,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY
                                ]
                            },
                            {
                                types: [
                                    TYPE_EXPREF
                                ]
                            }
                        ]
                    },
                    sum: {
                        _func: this._functionSum,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY_NUMBER
                                ]
                            }
                        ]
                    },
                    starts_with: {
                        _func: this._functionStartsWith,
                        _signature: [
                            {
                                types: [
                                    TYPE_STRING
                                ]
                            },
                            {
                                types: [
                                    TYPE_STRING
                                ]
                            }
                        ]
                    },
                    min: {
                        _func: this._functionMin,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY_NUMBER,
                                    TYPE_ARRAY_STRING
                                ]
                            }
                        ]
                    },
                    min_by: {
                        _func: this._functionMinBy,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY
                                ]
                            },
                            {
                                types: [
                                    TYPE_EXPREF
                                ]
                            }
                        ]
                    },
                    type: {
                        _func: this._functionType,
                        _signature: [
                            {
                                types: [
                                    TYPE_ANY
                                ]
                            }
                        ]
                    },
                    keys: {
                        _func: this._functionKeys,
                        _signature: [
                            {
                                types: [
                                    TYPE_OBJECT
                                ]
                            }
                        ]
                    },
                    values: {
                        _func: this._functionValues,
                        _signature: [
                            {
                                types: [
                                    TYPE_OBJECT
                                ]
                            }
                        ]
                    },
                    sort: {
                        _func: this._functionSort,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY_STRING,
                                    TYPE_ARRAY_NUMBER
                                ]
                            }
                        ]
                    },
                    sort_by: {
                        _func: this._functionSortBy,
                        _signature: [
                            {
                                types: [
                                    TYPE_ARRAY
                                ]
                            },
                            {
                                types: [
                                    TYPE_EXPREF
                                ]
                            }
                        ]
                    },
                    join: {
                        _func: this._functionJoin,
                        _signature: [
                            {
                                types: [
                                    TYPE_STRING
                                ]
                            },
                            {
                                types: [
                                    TYPE_ARRAY_STRING
                                ]
                            }
                        ]
                    },
                    reverse: {
                        _func: this._functionReverse,
                        _signature: [
                            {
                                types: [
                                    TYPE_STRING,
                                    TYPE_ARRAY
                                ]
                            }
                        ]
                    },
                    to_array: {
                        _func: this._functionToArray,
                        _signature: [
                            {
                                types: [
                                    TYPE_ANY
                                ]
                            }
                        ]
                    },
                    to_string: {
                        _func: this._functionToString,
                        _signature: [
                            {
                                types: [
                                    TYPE_ANY
                                ]
                            }
                        ]
                    },
                    to_number: {
                        _func: this._functionToNumber,
                        _signature: [
                            {
                                types: [
                                    TYPE_ANY
                                ]
                            }
                        ]
                    },
                    not_null: {
                        _func: this._functionNotNull,
                        _signature: [
                            {
                                types: [
                                    TYPE_ANY
                                ],
                                variadic: true
                            }
                        ]
                    }
                };
            }
            Runtime.prototype = {
                callFunction: function(name, resolvedArgs) {
                    var functionEntry = this.functionTable[name];
                    if (functionEntry === void 0) {
                        throw new Error("Unknown function: " + name + "()");
                    }
                    this._validateArgs(name, resolvedArgs, functionEntry._signature);
                    return functionEntry._func.call(this, resolvedArgs);
                },
                _validateArgs: function(name, args, signature) {
                    var pluralized;
                    if (signature[signature.length - 1].variadic) {
                        if (args.length < signature.length) {
                            pluralized = signature.length === 1 ? " argument" : " arguments";
                            throw new Error("ArgumentError: " + name + "() takes at least" + signature.length + pluralized + " but received " + args.length);
                        }
                    } else if (args.length !== signature.length) {
                        pluralized = signature.length === 1 ? " argument" : " arguments";
                        throw new Error("ArgumentError: " + name + "() takes " + signature.length + pluralized + " but received " + args.length);
                    }
                    var currentSpec;
                    var actualType;
                    var typeMatched;
                    for(var i = 0; i < signature.length; i++){
                        typeMatched = false;
                        currentSpec = signature[i].types;
                        actualType = this._getTypeName(args[i]);
                        for(var j2 = 0; j2 < currentSpec.length; j2++){
                            if (this._typeMatches(actualType, currentSpec[j2], args[i])) {
                                typeMatched = true;
                                break;
                            }
                        }
                        if (!typeMatched) {
                            var expected = currentSpec.map(function(typeIdentifier) {
                                return TYPE_NAME_TABLE[typeIdentifier];
                            }).join(",");
                            throw new Error("TypeError: " + name + "() expected argument " + (i + 1) + " to be type " + expected + " but received type " + TYPE_NAME_TABLE[actualType] + " instead.");
                        }
                    }
                },
                _typeMatches: function(actual, expected, argValue) {
                    if (expected === TYPE_ANY) {
                        return true;
                    }
                    if (expected === TYPE_ARRAY_STRING || expected === TYPE_ARRAY_NUMBER || expected === TYPE_ARRAY) {
                        if (expected === TYPE_ARRAY) {
                            return actual === TYPE_ARRAY;
                        } else if (actual === TYPE_ARRAY) {
                            var subtype;
                            if (expected === TYPE_ARRAY_NUMBER) {
                                subtype = TYPE_NUMBER;
                            } else if (expected === TYPE_ARRAY_STRING) {
                                subtype = TYPE_STRING;
                            }
                            for(var i = 0; i < argValue.length; i++){
                                if (!this._typeMatches(this._getTypeName(argValue[i]), subtype, argValue[i])) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    } else {
                        return actual === expected;
                    }
                },
                _getTypeName: function(obj) {
                    switch(Object.prototype.toString.call(obj)){
                        case "[object String]":
                            return TYPE_STRING;
                        case "[object Number]":
                            return TYPE_NUMBER;
                        case "[object Array]":
                            return TYPE_ARRAY;
                        case "[object Boolean]":
                            return TYPE_BOOLEAN;
                        case "[object Null]":
                            return TYPE_NULL;
                        case "[object Object]":
                            if (obj.jmespathType === TOK_EXPREF) {
                                return TYPE_EXPREF;
                            } else {
                                return TYPE_OBJECT;
                            }
                    }
                },
                _functionStartsWith: function(resolvedArgs) {
                    return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
                },
                _functionEndsWith: function(resolvedArgs) {
                    var searchStr = resolvedArgs[0];
                    var suffix = resolvedArgs[1];
                    return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
                },
                _functionReverse: function(resolvedArgs) {
                    var typeName = this._getTypeName(resolvedArgs[0]);
                    if (typeName === TYPE_STRING) {
                        var originalStr = resolvedArgs[0];
                        var reversedStr = "";
                        for(var i = originalStr.length - 1; i >= 0; i--){
                            reversedStr += originalStr[i];
                        }
                        return reversedStr;
                    } else {
                        var reversedArray = resolvedArgs[0].slice(0);
                        reversedArray.reverse();
                        return reversedArray;
                    }
                },
                _functionAbs: function(resolvedArgs) {
                    return Math.abs(resolvedArgs[0]);
                },
                _functionCeil: function(resolvedArgs) {
                    return Math.ceil(resolvedArgs[0]);
                },
                _functionAvg: function(resolvedArgs) {
                    var sum = 0;
                    var inputArray = resolvedArgs[0];
                    for(var i = 0; i < inputArray.length; i++){
                        sum += inputArray[i];
                    }
                    return sum / inputArray.length;
                },
                _functionContains: function(resolvedArgs) {
                    return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
                },
                _functionFloor: function(resolvedArgs) {
                    return Math.floor(resolvedArgs[0]);
                },
                _functionLength: function(resolvedArgs) {
                    if (!isObject(resolvedArgs[0])) {
                        return resolvedArgs[0].length;
                    } else {
                        return Object.keys(resolvedArgs[0]).length;
                    }
                },
                _functionMap: function(resolvedArgs) {
                    var mapped = [];
                    var interpreter = this._interpreter;
                    var exprefNode = resolvedArgs[0];
                    var elements = resolvedArgs[1];
                    for(var i = 0; i < elements.length; i++){
                        mapped.push(interpreter.visit(exprefNode, elements[i]));
                    }
                    return mapped;
                },
                _functionMerge: function(resolvedArgs) {
                    var merged = {};
                    for(var i = 0; i < resolvedArgs.length; i++){
                        var current = resolvedArgs[i];
                        for(var key in current){
                            merged[key] = current[key];
                        }
                    }
                    return merged;
                },
                _functionMax: function(resolvedArgs) {
                    if (resolvedArgs[0].length > 0) {
                        var typeName = this._getTypeName(resolvedArgs[0][0]);
                        if (typeName === TYPE_NUMBER) {
                            return Math.max.apply(Math, resolvedArgs[0]);
                        } else {
                            var elements = resolvedArgs[0];
                            var maxElement = elements[0];
                            for(var i = 1; i < elements.length; i++){
                                if (maxElement.localeCompare(elements[i]) < 0) {
                                    maxElement = elements[i];
                                }
                            }
                            return maxElement;
                        }
                    } else {
                        return null;
                    }
                },
                _functionMin: function(resolvedArgs) {
                    if (resolvedArgs[0].length > 0) {
                        var typeName = this._getTypeName(resolvedArgs[0][0]);
                        if (typeName === TYPE_NUMBER) {
                            return Math.min.apply(Math, resolvedArgs[0]);
                        } else {
                            var elements = resolvedArgs[0];
                            var minElement = elements[0];
                            for(var i = 1; i < elements.length; i++){
                                if (elements[i].localeCompare(minElement) < 0) {
                                    minElement = elements[i];
                                }
                            }
                            return minElement;
                        }
                    } else {
                        return null;
                    }
                },
                _functionSum: function(resolvedArgs) {
                    var sum = 0;
                    var listToSum = resolvedArgs[0];
                    for(var i = 0; i < listToSum.length; i++){
                        sum += listToSum[i];
                    }
                    return sum;
                },
                _functionType: function(resolvedArgs) {
                    switch(this._getTypeName(resolvedArgs[0])){
                        case TYPE_NUMBER:
                            return "number";
                        case TYPE_STRING:
                            return "string";
                        case TYPE_ARRAY:
                            return "array";
                        case TYPE_OBJECT:
                            return "object";
                        case TYPE_BOOLEAN:
                            return "boolean";
                        case TYPE_EXPREF:
                            return "expref";
                        case TYPE_NULL:
                            return "null";
                    }
                },
                _functionKeys: function(resolvedArgs) {
                    return Object.keys(resolvedArgs[0]);
                },
                _functionValues: function(resolvedArgs) {
                    var obj = resolvedArgs[0];
                    var keys = Object.keys(obj);
                    var values = [];
                    for(var i = 0; i < keys.length; i++){
                        values.push(obj[keys[i]]);
                    }
                    return values;
                },
                _functionJoin: function(resolvedArgs) {
                    var joinChar = resolvedArgs[0];
                    var listJoin = resolvedArgs[1];
                    return listJoin.join(joinChar);
                },
                _functionToArray: function(resolvedArgs) {
                    if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
                        return resolvedArgs[0];
                    } else {
                        return [
                            resolvedArgs[0]
                        ];
                    }
                },
                _functionToString: function(resolvedArgs) {
                    if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
                        return resolvedArgs[0];
                    } else {
                        return JSON.stringify(resolvedArgs[0]);
                    }
                },
                _functionToNumber: function(resolvedArgs) {
                    var typeName = this._getTypeName(resolvedArgs[0]);
                    var convertedValue;
                    if (typeName === TYPE_NUMBER) {
                        return resolvedArgs[0];
                    } else if (typeName === TYPE_STRING) {
                        convertedValue = +resolvedArgs[0];
                        if (!isNaN(convertedValue)) {
                            return convertedValue;
                        }
                    }
                    return null;
                },
                _functionNotNull: function(resolvedArgs) {
                    for(var i = 0; i < resolvedArgs.length; i++){
                        if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
                            return resolvedArgs[i];
                        }
                    }
                    return null;
                },
                _functionSort: function(resolvedArgs) {
                    var sortedArray = resolvedArgs[0].slice(0);
                    sortedArray.sort();
                    return sortedArray;
                },
                _functionSortBy: function(resolvedArgs) {
                    var sortedArray = resolvedArgs[0].slice(0);
                    if (sortedArray.length === 0) {
                        return sortedArray;
                    }
                    var interpreter = this._interpreter;
                    var exprefNode = resolvedArgs[1];
                    var requiredType = this._getTypeName(interpreter.visit(exprefNode, sortedArray[0]));
                    if ([
                        TYPE_NUMBER,
                        TYPE_STRING
                    ].indexOf(requiredType) < 0) {
                        throw new Error("TypeError");
                    }
                    var that = this;
                    var decorated = [];
                    for(var i = 0; i < sortedArray.length; i++){
                        decorated.push([
                            i,
                            sortedArray[i]
                        ]);
                    }
                    decorated.sort(function(a, b) {
                        var exprA = interpreter.visit(exprefNode, a[1]);
                        var exprB = interpreter.visit(exprefNode, b[1]);
                        if (that._getTypeName(exprA) !== requiredType) {
                            throw new Error("TypeError: expected " + requiredType + ", received " + that._getTypeName(exprA));
                        } else if (that._getTypeName(exprB) !== requiredType) {
                            throw new Error("TypeError: expected " + requiredType + ", received " + that._getTypeName(exprB));
                        }
                        if (exprA > exprB) {
                            return 1;
                        } else if (exprA < exprB) {
                            return -1;
                        } else {
                            return a[0] - b[0];
                        }
                    });
                    for(var j3 = 0; j3 < decorated.length; j3++){
                        sortedArray[j3] = decorated[j3][1];
                    }
                    return sortedArray;
                },
                _functionMaxBy: function(resolvedArgs) {
                    var exprefNode = resolvedArgs[1];
                    var resolvedArray = resolvedArgs[0];
                    var keyFunction = this.createKeyFunction(exprefNode, [
                        TYPE_NUMBER,
                        TYPE_STRING
                    ]);
                    var maxNumber = -Infinity;
                    var maxRecord;
                    var current;
                    for(var i = 0; i < resolvedArray.length; i++){
                        current = keyFunction(resolvedArray[i]);
                        if (current > maxNumber) {
                            maxNumber = current;
                            maxRecord = resolvedArray[i];
                        }
                    }
                    return maxRecord;
                },
                _functionMinBy: function(resolvedArgs) {
                    var exprefNode = resolvedArgs[1];
                    var resolvedArray = resolvedArgs[0];
                    var keyFunction = this.createKeyFunction(exprefNode, [
                        TYPE_NUMBER,
                        TYPE_STRING
                    ]);
                    var minNumber = Infinity;
                    var minRecord;
                    var current;
                    for(var i = 0; i < resolvedArray.length; i++){
                        current = keyFunction(resolvedArray[i]);
                        if (current < minNumber) {
                            minNumber = current;
                            minRecord = resolvedArray[i];
                        }
                    }
                    return minRecord;
                },
                createKeyFunction: function(exprefNode, allowedTypes) {
                    var that = this;
                    var interpreter = this._interpreter;
                    var keyFunc = function(x1) {
                        var current = interpreter.visit(exprefNode, x1);
                        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
                            var msg = "TypeError: expected one of " + allowedTypes + ", received " + that._getTypeName(current);
                            throw new Error(msg);
                        }
                        return current;
                    };
                    return keyFunc;
                }
            };
            function compile2(stream) {
                var parser = new Parser();
                var ast = parser.parse(stream);
                return ast;
            }
            function tokenize2(stream) {
                var lexer = new Lexer();
                return lexer.tokenize(stream);
            }
            function search2(data, expression) {
                var parser = new Parser();
                var runtime = new Runtime();
                var interpreter = new TreeInterpreter(runtime);
                runtime._interpreter = interpreter;
                var node = parser.parse(expression);
                return interpreter.search(node, data);
            }
            exports2.tokenize = tokenize2;
            exports2.compile = compile2;
            exports2.search = search2;
            exports2.strictDeepEqual = strictDeepEqual2;
        })(exports);
    });
    jmespath.compile;
    jmespath.search;
    jmespath.strictDeepEqual;
    jmespath.tokenize;
    async function transform1(data, options, functions) {
        if (typeof data != "object") {
            throw new Error("Can't use jmespath on non object: " + typeof data);
        }
        if (!options) {
            throw new Error("Empty jmespath passed in");
        }
        if (typeof options !== "string") {
            throw new Error("Non string jmespath passed in");
        }
        const ret = jmespath.search(data, options);
        return ret;
    }
    function X() {
        return {
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartLists: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1
        };
    }
    var E = X();
    function J(l) {
        E = l;
    }
    var K = /[&<>"']/, Y = /[&<>"']/g, ee = /[<>"']|&(?!#?\w+;)/, te = /[<>"']|&(?!#?\w+;)/g, ne = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, Q = (l)=>ne[l]
    ;
    function x(l, e) {
        if (e) {
            if (K.test(l)) return l.replace(Y, Q);
        } else if (ee.test(l)) return l.replace(te, Q);
        return l;
    }
    var ie = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function G(l) {
        return l.replace(ie, (e, n)=>(n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : "")
        );
    }
    var se = /(^|[^\[])\^/g;
    function d(l, e) {
        l = typeof l == "string" ? l : l.source, e = e || "";
        let n = {
            replace: (t, i)=>(i = i.source || i, i = i.replace(se, "$1"), l = l.replace(t, i), n)
            ,
            getRegex: ()=>new RegExp(l, e)
        };
        return n;
    }
    var re = /[^\w:]/g, le = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function M(l, e, n) {
        if (l) {
            let t;
            try {
                t = decodeURIComponent(G(n)).replace(re, "").toLowerCase();
            } catch  {
                return null;
            }
            if (t.indexOf("javascript:") === 0 || t.indexOf("vbscript:") === 0 || t.indexOf("data:") === 0) return null;
        }
        e && !le.test(n) && (n = ce(e, n));
        try {
            n = encodeURI(n).replace(/%25/g, "%");
        } catch  {
            return null;
        }
        return n;
    }
    var B = {}, ae = /^[^:]+:\/*[^/]*$/, oe = /^([^:]+:)[\s\S]*$/, he = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function ce(l, e) {
        B[" " + l] || (ae.test(l) ? B[" " + l] = l + "/" : B[" " + l] = O(l, "/", !0)), l = B[" " + l];
        let n = l.indexOf(":") === -1;
        return e.substring(0, 2) === "//" ? n ? e : l.replace(oe, "$1") + e : e.charAt(0) === "/" ? n ? e : l.replace(he, "$1") + e : l + e;
    }
    var U = {
        exec: function() {}
    };
    function z(l) {
        let e = 1, n, t;
        for(; e < arguments.length; e++){
            n = arguments[e];
            for(t in n)Object.prototype.hasOwnProperty.call(n, t) && (l[t] = n[t]);
        }
        return l;
    }
    function N(l, e) {
        let n = l.replace(/\|/g, (s, r, a)=>{
            let h = !1, f = r;
            for(; --f >= 0 && a[f] === "\\";)h = !h;
            return h ? "|" : " |";
        }), t = n.split(/ \|/), i = 0;
        if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), t.length > e) t.splice(e);
        else for(; t.length < e;)t.push("");
        for(; i < t.length; i++)t[i] = t[i].trim().replace(/\\\|/g, "|");
        return t;
    }
    function O(l, e, n) {
        let t = l.length;
        if (t === 0) return "";
        let i = 0;
        for(; i < t;){
            let s = l.charAt(t - i - 1);
            if (s === e && !n) i++;
            else if (s !== e && n) i++;
            else break;
        }
        return l.slice(0, t - i);
    }
    function pe(l, e) {
        if (l.indexOf(e[1]) === -1) return -1;
        let n = l.length, t = 0, i = 0;
        for(; i < n; i++)if (l[i] === "\\") i++;
        else if (l[i] === e[0]) t++;
        else if (l[i] === e[1] && (t--, t < 0)) return i;
        return -1;
    }
    function V(l) {
        l && l.sanitize && !l.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
    function P(l, e) {
        if (e < 1) return "";
        let n = "";
        for(; e > 1;)e & 1 && (n += l), e >>= 1, l += l;
        return n + l;
    }
    function F(l, e, n, t) {
        let i = e.href, s = e.title ? x(e.title) : null, r = l[1].replace(/\\([\[\]])/g, "$1");
        if (l[0].charAt(0) !== "!") {
            t.state.inLink = !0;
            let a = {
                type: "link",
                raw: n,
                href: i,
                title: s,
                text: r,
                tokens: t.inlineTokens(r, [])
            };
            return t.state.inLink = !1, a;
        }
        return {
            type: "image",
            raw: n,
            href: i,
            title: s,
            text: x(r)
        };
    }
    function ue(l, e) {
        let n = l.match(/^(\s+)(?:```)/);
        if (n === null) return e;
        let t = n[1];
        return e.split(`
`).map((i)=>{
            let s = i.match(/^\s+/);
            if (s === null) return i;
            let [r] = s;
            return r.length >= t.length ? i.slice(t.length) : i;
        }).join(`
`);
    }
    var Z = class {
        constructor(e){
            this.options = e || E;
        }
        space(e) {
            let n = this.rules.block.newline.exec(e);
            if (n && n[0].length > 0) return {
                type: "space",
                raw: n[0]
            };
        }
        code(e) {
            let n = this.rules.block.code.exec(e);
            if (n) {
                let t = n[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: n[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? t : O(t, `
`)
                };
            }
        }
        fences(e) {
            let n = this.rules.block.fences.exec(e);
            if (n) {
                let t = n[0], i = ue(t, n[3] || "");
                return {
                    type: "code",
                    raw: t,
                    lang: n[2] ? n[2].trim() : n[2],
                    text: i
                };
            }
        }
        heading(e) {
            let n = this.rules.block.heading.exec(e);
            if (n) {
                let t = n[2].trim();
                if (/#$/.test(t)) {
                    let s = O(t, "#");
                    (this.options.pedantic || !s || / $/.test(s)) && (t = s.trim());
                }
                let i = {
                    type: "heading",
                    raw: n[0],
                    depth: n[1].length,
                    text: t,
                    tokens: []
                };
                return this.lexer.inline(i.text, i.tokens), i;
            }
        }
        hr(e) {
            let n = this.rules.block.hr.exec(e);
            if (n) return {
                type: "hr",
                raw: n[0]
            };
        }
        blockquote(e) {
            let n = this.rules.block.blockquote.exec(e);
            if (n) {
                let t = n[0].replace(/^ *>[ \t]?/gm, "");
                return {
                    type: "blockquote",
                    raw: n[0],
                    tokens: this.lexer.blockTokens(t, []),
                    text: t
                };
            }
        }
        list(e) {
            let n = this.rules.block.list.exec(e);
            if (n) {
                let t, i, s, r, a, h, f, g, b, k, p, A, _ = n[1].trim(), T = _.length > 1, m = {
                    type: "list",
                    raw: "",
                    ordered: T,
                    start: T ? +_.slice(0, -1) : "",
                    loose: !1,
                    items: []
                };
                _ = T ? `\\d{1,9}\\${_.slice(-1)}` : `\\${_}`, this.options.pedantic && (_ = T ? _ : "[*+-]");
                let w = new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);
                for(; e && (A = !1, !(!(n = w.exec(e)) || this.rules.block.hr.test(e)));){
                    if (t = n[0], e = e.substring(t.length), g = n[2].split(`
`, 1)[0], b = e.split(`
`, 1)[0], this.options.pedantic ? (r = 2, p = g.trimLeft()) : (r = n[2].search(/[^ ]/), r = r > 4 ? 1 : r, p = g.slice(r), r += n[1].length), h = !1, !g && /^ *$/.test(b) && (t += b + `
`, e = e.substring(b.length + 1), A = !0), !A) {
                        let R = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`), S = new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
                        for(; e && (k = e.split(`
`, 1)[0], g = k, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(R.test(g) || S.test(e)));){
                            if (g.search(/[^ ]/) >= r || !g.trim()) p += `
` + g.slice(r);
                            else if (!h) p += `
` + g;
                            else break;
                            !h && !g.trim() && (h = !0), t += k + `
`, e = e.substring(k.length + 1);
                        }
                    }
                    m.loose || (f ? m.loose = !0 : /\n *\n *$/.test(t) && (f = !0)), this.options.gfm && (i = /^\[[ xX]\] /.exec(p), i && (s = i[0] !== "[ ] ", p = p.replace(/^\[[ xX]\] +/, ""))), m.items.push({
                        type: "list_item",
                        raw: t,
                        task: !!i,
                        checked: s,
                        loose: !1,
                        text: p
                    }), m.raw += t;
                }
                m.items[m.items.length - 1].raw = t.trimRight(), m.items[m.items.length - 1].text = p.trimRight(), m.raw = m.raw.trimRight();
                let C = m.items.length;
                for(a = 0; a < C; a++){
                    this.lexer.state.top = !1, m.items[a].tokens = this.lexer.blockTokens(m.items[a].text, []);
                    let R = m.items[a].tokens.filter((I)=>I.type === "space"
                    ), S = R.every((I)=>{
                        let D = I.raw.split(""), L = 0;
                        for (let H of D)if (H === `
` && (L += 1), L > 1) return !0;
                        return !1;
                    });
                    !m.loose && R.length && S && (m.loose = !0, m.items[a].loose = !0);
                }
                return m;
            }
        }
        html(e) {
            let n = this.rules.block.html.exec(e);
            if (n) {
                let t = {
                    type: "html",
                    raw: n[0],
                    pre: !this.options.sanitizer && (n[1] === "pre" || n[1] === "script" || n[1] === "style"),
                    text: n[0]
                };
                return this.options.sanitize && (t.type = "paragraph", t.text = this.options.sanitizer ? this.options.sanitizer(n[0]) : x(n[0]), t.tokens = [], this.lexer.inline(t.text, t.tokens)), t;
            }
        }
        def(e) {
            let n = this.rules.block.def.exec(e);
            if (n) {
                n[3] && (n[3] = n[3].substring(1, n[3].length - 1));
                let t = n[1].toLowerCase().replace(/\s+/g, " ");
                return {
                    type: "def",
                    tag: t,
                    raw: n[0],
                    href: n[2],
                    title: n[3]
                };
            }
        }
        table(e) {
            let n = this.rules.block.table.exec(e);
            if (n) {
                let t = {
                    type: "table",
                    header: N(n[1]).map((i)=>({
                            text: i
                        })
                    ),
                    align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    rows: n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : []
                };
                if (t.header.length === t.align.length) {
                    t.raw = n[0];
                    let i = t.align.length, s, r, a, h;
                    for(s = 0; s < i; s++)/^ *-+: *$/.test(t.align[s]) ? t.align[s] = "right" : /^ *:-+: *$/.test(t.align[s]) ? t.align[s] = "center" : /^ *:-+ *$/.test(t.align[s]) ? t.align[s] = "left" : t.align[s] = null;
                    for(i = t.rows.length, s = 0; s < i; s++)t.rows[s] = N(t.rows[s], t.header.length).map((f)=>({
                            text: f
                        })
                    );
                    for(i = t.header.length, r = 0; r < i; r++)t.header[r].tokens = [], this.lexer.inlineTokens(t.header[r].text, t.header[r].tokens);
                    for(i = t.rows.length, r = 0; r < i; r++)for(h = t.rows[r], a = 0; a < h.length; a++)h[a].tokens = [], this.lexer.inlineTokens(h[a].text, h[a].tokens);
                    return t;
                }
            }
        }
        lheading(e) {
            let n = this.rules.block.lheading.exec(e);
            if (n) {
                let t = {
                    type: "heading",
                    raw: n[0],
                    depth: n[2].charAt(0) === "=" ? 1 : 2,
                    text: n[1],
                    tokens: []
                };
                return this.lexer.inline(t.text, t.tokens), t;
            }
        }
        paragraph(e) {
            let n = this.rules.block.paragraph.exec(e);
            if (n) {
                let t = {
                    type: "paragraph",
                    raw: n[0],
                    text: n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1],
                    tokens: []
                };
                return this.lexer.inline(t.text, t.tokens), t;
            }
        }
        text(e) {
            let n = this.rules.block.text.exec(e);
            if (n) {
                let t = {
                    type: "text",
                    raw: n[0],
                    text: n[0],
                    tokens: []
                };
                return this.lexer.inline(t.text, t.tokens), t;
            }
        }
        escape(e) {
            let n = this.rules.inline.escape.exec(e);
            if (n) return {
                type: "escape",
                raw: n[0],
                text: x(n[1])
            };
        }
        tag(e) {
            let n = this.rules.inline.tag.exec(e);
            if (n) return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
                type: this.options.sanitize ? "text" : "html",
                raw: n[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : x(n[0]) : n[0]
            };
        }
        link(e) {
            let n = this.rules.inline.link.exec(e);
            if (n) {
                let t = n[2].trim();
                if (!this.options.pedantic && /^</.test(t)) {
                    if (!/>$/.test(t)) return;
                    let r = O(t.slice(0, -1), "\\");
                    if ((t.length - r.length) % 2 === 0) return;
                } else {
                    let r = pe(n[2], "()");
                    if (r > -1) {
                        let h = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + r;
                        n[2] = n[2].substring(0, r), n[0] = n[0].substring(0, h).trim(), n[3] = "";
                    }
                }
                let i = n[2], s = "";
                if (this.options.pedantic) {
                    let r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
                    r && (i = r[1], s = r[3]);
                } else s = n[3] ? n[3].slice(1, -1) : "";
                return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(t) ? i = i.slice(1) : i = i.slice(1, -1)), F(n, {
                    href: i && i.replace(this.rules.inline._escapes, "$1"),
                    title: s && s.replace(this.rules.inline._escapes, "$1")
                }, n[0], this.lexer);
            }
        }
        reflink(e, n) {
            let t;
            if ((t = this.rules.inline.reflink.exec(e)) || (t = this.rules.inline.nolink.exec(e))) {
                let i = (t[2] || t[1]).replace(/\s+/g, " ");
                if (i = n[i.toLowerCase()], !i || !i.href) {
                    let s = t[0].charAt(0);
                    return {
                        type: "text",
                        raw: s,
                        text: s
                    };
                }
                return F(t, i, t[0], this.lexer);
            }
        }
        emStrong(e, n, t = "") {
            let i = this.rules.inline.emStrong.lDelim.exec(e);
            if (!i || i[3] && t.match(/[\p{L}\p{N}]/u)) return;
            let s = i[1] || i[2] || "";
            if (!s || s && (t === "" || this.rules.inline.punctuation.exec(t))) {
                let r = i[0].length - 1, a, h, f = r, g = 0, b = i[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                for(b.lastIndex = 0, n = n.slice(-1 * e.length + r); (i = b.exec(n)) != null;){
                    if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a) continue;
                    if (h = a.length, i[3] || i[4]) {
                        f += h;
                        continue;
                    } else if ((i[5] || i[6]) && r % 3 && !((r + h) % 3)) {
                        g += h;
                        continue;
                    }
                    if (f -= h, f > 0) continue;
                    if (h = Math.min(h, h + f + g), Math.min(r, h) % 2) {
                        let p = e.slice(1, r + i.index + h);
                        return {
                            type: "em",
                            raw: e.slice(0, r + i.index + h + 1),
                            text: p,
                            tokens: this.lexer.inlineTokens(p, [])
                        };
                    }
                    let k = e.slice(2, r + i.index + h - 1);
                    return {
                        type: "strong",
                        raw: e.slice(0, r + i.index + h + 1),
                        text: k,
                        tokens: this.lexer.inlineTokens(k, [])
                    };
                }
            }
        }
        codespan(e) {
            let n = this.rules.inline.code.exec(e);
            if (n) {
                let t = n[2].replace(/\n/g, " "), i = /[^ ]/.test(t), s = /^ /.test(t) && / $/.test(t);
                return i && s && (t = t.substring(1, t.length - 1)), t = x(t, !0), {
                    type: "codespan",
                    raw: n[0],
                    text: t
                };
            }
        }
        br(e) {
            let n = this.rules.inline.br.exec(e);
            if (n) return {
                type: "br",
                raw: n[0]
            };
        }
        del(e) {
            let n = this.rules.inline.del.exec(e);
            if (n) return {
                type: "del",
                raw: n[0],
                text: n[2],
                tokens: this.lexer.inlineTokens(n[2], [])
            };
        }
        autolink(e, n) {
            let t = this.rules.inline.autolink.exec(e);
            if (t) {
                let i, s;
                return t[2] === "@" ? (i = x(this.options.mangle ? n(t[1]) : t[1]), s = "mailto:" + i) : (i = x(t[1]), s = i), {
                    type: "link",
                    raw: t[0],
                    text: i,
                    href: s,
                    tokens: [
                        {
                            type: "text",
                            raw: i,
                            text: i
                        }
                    ]
                };
            }
        }
        url(e, n) {
            let t;
            if (t = this.rules.inline.url.exec(e)) {
                let i, s;
                if (t[2] === "@") i = x(this.options.mangle ? n(t[0]) : t[0]), s = "mailto:" + i;
                else {
                    let r;
                    do r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])[0];
                    while (r !== t[0])
                    i = x(t[0]), t[1] === "www." ? s = "http://" + i : s = i;
                }
                return {
                    type: "link",
                    raw: t[0],
                    text: i,
                    href: s,
                    tokens: [
                        {
                            type: "text",
                            raw: i,
                            text: i
                        }
                    ]
                };
            }
        }
        inlineText(e, n) {
            let t = this.rules.inline.text.exec(e);
            if (t) {
                let i;
                return this.lexer.state.inRawBlock ? i = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : x(t[0]) : t[0] : i = x(this.options.smartypants ? n(t[0]) : t[0]), {
                    type: "text",
                    raw: t[0],
                    text: i
                };
            }
        }
    }, c = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: U,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
    };
    c._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    c._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    c.def = d(c.def).replace("label", c._label).replace("title", c._title).getRegex();
    c.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    c.listItemStart = d(/^( *)(bull) */).replace("bull", c.bullet).getRegex();
    c.list = d(c.list).replace(/bull/g, c.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + c.def.source + ")").getRegex();
    c._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    c._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    c.html = d(c.html, "i").replace("comment", c._comment).replace("tag", c._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    c.paragraph = d(c._paragraph).replace("hr", c.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", c._tag).getRegex();
    c.blockquote = d(c.blockquote).replace("paragraph", c.paragraph).getRegex();
    c.normal = z({}, c);
    c.gfm = z({}, c.normal, {
        table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    });
    c.gfm.table = d(c.gfm.table).replace("hr", c.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", c._tag).getRegex();
    c.gfm.paragraph = d(c._paragraph).replace("hr", c.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", c.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", c._tag).getRegex();
    c.pedantic = z({}, c.normal, {
        html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", c._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: U,
        paragraph: d(c.normal._paragraph).replace("hr", c.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", c.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    var o = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: U,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
            rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: U,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/
    };
    o._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
    o.punctuation = d(o.punctuation).replace(/punctuation/g, o._punctuation).getRegex();
    o.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
    o.escapedEmSt = /\\\*|\\_/g;
    o._comment = d(c._comment).replace("(?:-->|$)", "-->").getRegex();
    o.emStrong.lDelim = d(o.emStrong.lDelim).replace(/punct/g, o._punctuation).getRegex();
    o.emStrong.rDelimAst = d(o.emStrong.rDelimAst, "g").replace(/punct/g, o._punctuation).getRegex();
    o.emStrong.rDelimUnd = d(o.emStrong.rDelimUnd, "g").replace(/punct/g, o._punctuation).getRegex();
    o._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    o._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    o.autolink = d(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex();
    o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    o.tag = d(o.tag).replace("comment", o._comment).replace("attribute", o._attribute).getRegex();
    o._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    o._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    o.link = d(o.link).replace("label", o._label).replace("href", o._href).replace("title", o._title).getRegex();
    o.reflink = d(o.reflink).replace("label", o._label).replace("ref", c._label).getRegex();
    o.nolink = d(o.nolink).replace("ref", c._label).getRegex();
    o.reflinkSearch = d(o.reflinkSearch, "g").replace("reflink", o.reflink).replace("nolink", o.nolink).getRegex();
    o.normal = z({}, o);
    o.pedantic = z({}, o.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", o._label).getRegex(),
        reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", o._label).getRegex()
    });
    o.gfm = z({}, o.normal, {
        escape: d(o.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    });
    o.gfm.url = d(o.gfm.url, "i").replace("email", o.gfm._extended_email).getRegex();
    o.breaks = z({}, o.gfm, {
        br: d(o.br).replace("{2,}", "*").getRegex(),
        text: d(o.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    function fe(l) {
        return l.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
    }
    function W(l) {
        let e = "", n, t, i = l.length;
        for(n = 0; n < i; n++)t = l.charCodeAt(n), Math.random() > .5 && (t = "x" + t.toString(16)), e += "&#" + t + ";";
        return e;
    }
    var y = class {
        constructor(e){
            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || E, this.options.tokenizer = this.options.tokenizer || new Z, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                inLink: !1,
                inRawBlock: !1,
                top: !0
            };
            let n = {
                block: c.normal,
                inline: o.normal
            };
            this.options.pedantic ? (n.block = c.pedantic, n.inline = o.pedantic) : this.options.gfm && (n.block = c.gfm, this.options.breaks ? n.inline = o.breaks : n.inline = o.gfm), this.tokenizer.rules = n;
        }
        static get rules() {
            return {
                block: c,
                inline: o
            };
        }
        static lex(e, n) {
            return new y(n).lex(e);
        }
        static lexInline(e, n) {
            return new y(n).inlineTokens(e);
        }
        lex(e) {
            e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
            let n;
            for(; n = this.inlineQueue.shift();)this.inlineTokens(n.src, n.tokens);
            return this.tokens;
        }
        blockTokens(e, n = []) {
            this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, h, f)=>h + "    ".repeat(f.length)
            );
            let t, i, s, r;
            for(; e;)if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a)=>(t = a.call({
                    lexer: this
                }, e, n)) ? (e = e.substring(t.raw.length), n.push(t), !0) : !1
            ))) {
                if (t = this.tokenizer.space(e)) {
                    e = e.substring(t.raw.length), t.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(t);
                    continue;
                }
                if (t = this.tokenizer.code(e)) {
                    e = e.substring(t.raw.length), i = n[n.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + t.raw, i.text += `
` + t.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(t);
                    continue;
                }
                if (t = this.tokenizer.fences(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.heading(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.hr(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.blockquote(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.list(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.html(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.def(e)) {
                    e = e.substring(t.raw.length), i = n[n.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + t.raw, i.text += `
` + t.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[t.tag] || (this.tokens.links[t.tag] = {
                        href: t.href,
                        title: t.title
                    });
                    continue;
                }
                if (t = this.tokenizer.table(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.lheading(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (s = e, this.options.extensions && this.options.extensions.startBlock) {
                    let a = 1 / 0, h = e.slice(1), f;
                    this.options.extensions.startBlock.forEach(function(g) {
                        f = g.call({
                            lexer: this
                        }, h), typeof f == "number" && f >= 0 && (a = Math.min(a, f));
                    }), a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));
                }
                if (this.state.top && (t = this.tokenizer.paragraph(s))) {
                    i = n[n.length - 1], r && i.type === "paragraph" ? (i.raw += `
` + t.raw, i.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(t), r = s.length !== e.length, e = e.substring(t.raw.length);
                    continue;
                }
                if (t = this.tokenizer.text(e)) {
                    e = e.substring(t.raw.length), i = n[n.length - 1], i && i.type === "text" ? (i.raw += `
` + t.raw, i.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(t);
                    continue;
                }
                if (e) {
                    let a = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(a);
                        break;
                    } else throw new Error(a);
                }
            }
            return this.state.top = !0, n;
        }
        inline(e, n) {
            this.inlineQueue.push({
                src: e,
                tokens: n
            });
        }
        inlineTokens(e, n = []) {
            let t, i, s, r = e, a, h, f;
            if (this.tokens.links) {
                let g = Object.keys(this.tokens.links);
                if (g.length > 0) for(; (a = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null;)g.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, a.index) + "[" + P("a", a[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for(; (a = this.tokenizer.rules.inline.blockSkip.exec(r)) != null;)r = r.slice(0, a.index) + "[" + P("a", a[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for(; (a = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null;)r = r.slice(0, a.index) + "++" + r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            for(; e;)if (h || (f = ""), h = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((g)=>(t = g.call({
                    lexer: this
                }, e, n)) ? (e = e.substring(t.raw.length), n.push(t), !0) : !1
            ))) {
                if (t = this.tokenizer.escape(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.tag(e)) {
                    e = e.substring(t.raw.length), i = n[n.length - 1], i && t.type === "text" && i.type === "text" ? (i.raw += t.raw, i.text += t.text) : n.push(t);
                    continue;
                }
                if (t = this.tokenizer.link(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.reflink(e, this.tokens.links)) {
                    e = e.substring(t.raw.length), i = n[n.length - 1], i && t.type === "text" && i.type === "text" ? (i.raw += t.raw, i.text += t.text) : n.push(t);
                    continue;
                }
                if (t = this.tokenizer.emStrong(e, r, f)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.codespan(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.br(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.del(e)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (t = this.tokenizer.autolink(e, W)) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (!this.state.inLink && (t = this.tokenizer.url(e, W))) {
                    e = e.substring(t.raw.length), n.push(t);
                    continue;
                }
                if (s = e, this.options.extensions && this.options.extensions.startInline) {
                    let g = 1 / 0, b = e.slice(1), k;
                    this.options.extensions.startInline.forEach(function(p) {
                        k = p.call({
                            lexer: this
                        }, b), typeof k == "number" && k >= 0 && (g = Math.min(g, k));
                    }), g < 1 / 0 && g >= 0 && (s = e.substring(0, g + 1));
                }
                if (t = this.tokenizer.inlineText(s, fe)) {
                    e = e.substring(t.raw.length), t.raw.slice(-1) !== "_" && (f = t.raw.slice(-1)), h = !0, i = n[n.length - 1], i && i.type === "text" ? (i.raw += t.raw, i.text += t.text) : n.push(t);
                    continue;
                }
                if (e) {
                    let g = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(g);
                        break;
                    } else throw new Error(g);
                }
            }
            return n;
        }
    }, q = class {
        constructor(e){
            this.options = e || E;
        }
        code(e, n, t) {
            let i = (n || "").match(/\S*/)[0];
            if (this.options.highlight) {
                let s = this.options.highlight(e, i);
                s != null && s !== e && (t = !0, e = s);
            }
            return e = e.replace(/\n$/, "") + `
`, i ? '<pre><code class="' + this.options.langPrefix + x(i, !0) + '">' + (t ? e : x(e, !0)) + `</code></pre>
` : "<pre><code>" + (t ? e : x(e, !0)) + `</code></pre>
`;
        }
        blockquote(e) {
            return `<blockquote>
${e}</blockquote>
`;
        }
        html(e) {
            return e;
        }
        heading(e, n, t, i) {
            if (this.options.headerIds) {
                let s = this.options.headerPrefix + i.slug(t);
                return `<h${n} id="${s}">${e}</h${n}>
`;
            }
            return `<h${n}>${e}</h${n}>
`;
        }
        hr() {
            return this.options.xhtml ? `<hr/>
` : `<hr>
`;
        }
        list(e, n, t) {
            let i = n ? "ol" : "ul", s = n && t !== 1 ? ' start="' + t + '"' : "";
            return "<" + i + s + `>
` + e + "</" + i + `>
`;
        }
        listitem(e) {
            return `<li>${e}</li>
`;
        }
        checkbox(e) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
        }
        paragraph(e) {
            return `<p>${e}</p>
`;
        }
        table(e, n) {
            return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
        }
        tablerow(e) {
            return `<tr>
${e}</tr>
`;
        }
        tablecell(e, n) {
            let t = n.header ? "th" : "td";
            return (n.align ? `<${t} align="${n.align}">` : `<${t}>`) + e + `</${t}>
`;
        }
        strong(e) {
            return `<strong>${e}</strong>`;
        }
        em(e) {
            return `<em>${e}</em>`;
        }
        codespan(e) {
            return `<code>${e}</code>`;
        }
        br() {
            return this.options.xhtml ? "<br/>" : "<br>";
        }
        del(e) {
            return `<del>${e}</del>`;
        }
        link(e, n, t) {
            if (e = M(this.options.sanitize, this.options.baseUrl, e), e === null) return t;
            let i = '<a href="' + x(e) + '"';
            return n && (i += ' title="' + n + '"'), i += ">" + t + "</a>", i;
        }
        image(e, n, t) {
            if (e = M(this.options.sanitize, this.options.baseUrl, e), e === null) return t;
            let i = `<img src="${e}" alt="${t}"`;
            return n && (i += ` title="${n}"`), i += this.options.xhtml ? "/>" : ">", i;
        }
        text(e) {
            return e;
        }
    }, v = class {
        strong(e) {
            return e;
        }
        em(e) {
            return e;
        }
        codespan(e) {
            return e;
        }
        del(e) {
            return e;
        }
        html(e) {
            return e;
        }
        text(e) {
            return e;
        }
        link(e, n, t) {
            return "" + t;
        }
        image(e, n, t) {
            return "" + t;
        }
        br() {
            return "";
        }
    }, j = class {
        constructor(){
            this.seen = {};
        }
        serialize(e) {
            return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
        }
        getNextSafeSlug(e, n) {
            let t = e, i = 0;
            if (this.seen.hasOwnProperty(t)) {
                i = this.seen[e];
                do i++, t = e + "-" + i;
                while (this.seen.hasOwnProperty(t))
            }
            return n || (this.seen[e] = i, this.seen[t] = 0), t;
        }
        slug(e, n = {}) {
            let t = this.serialize(e);
            return this.getNextSafeSlug(t, n.dryrun);
        }
    }, $ = class {
        constructor(e){
            this.options = e || E, this.options.renderer = this.options.renderer || new q, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new v, this.slugger = new j;
        }
        static parse(e, n) {
            return new $(n).parse(e);
        }
        static parseInline(e, n) {
            return new $(n).parseInline(e);
        }
        parse(e, n = !0) {
            let t = "", i, s, r, a, h, f, g, b, k, p, A, _, T, m, w, C, R, S, I, D = e.length;
            for(i = 0; i < D; i++){
                if (p = e[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type] && (I = this.options.extensions.renderers[p.type].call({
                    parser: this
                }, p), I !== !1 || ![
                    "space",
                    "hr",
                    "heading",
                    "code",
                    "table",
                    "blockquote",
                    "list",
                    "html",
                    "paragraph",
                    "text"
                ].includes(p.type))) {
                    t += I || "";
                    continue;
                }
                switch(p.type){
                    case "space":
                        continue;
                    case "hr":
                        {
                            t += this.renderer.hr();
                            continue;
                        }
                    case "heading":
                        {
                            t += this.renderer.heading(this.parseInline(p.tokens), p.depth, G(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
                            continue;
                        }
                    case "code":
                        {
                            t += this.renderer.code(p.text, p.lang, p.escaped);
                            continue;
                        }
                    case "table":
                        {
                            for(b = "", g = "", a = p.header.length, s = 0; s < a; s++)g += this.renderer.tablecell(this.parseInline(p.header[s].tokens), {
                                header: !0,
                                align: p.align[s]
                            });
                            for(b += this.renderer.tablerow(g), k = "", a = p.rows.length, s = 0; s < a; s++){
                                for(f = p.rows[s], g = "", h = f.length, r = 0; r < h; r++)g += this.renderer.tablecell(this.parseInline(f[r].tokens), {
                                    header: !1,
                                    align: p.align[r]
                                });
                                k += this.renderer.tablerow(g);
                            }
                            t += this.renderer.table(b, k);
                            continue;
                        }
                    case "blockquote":
                        {
                            k = this.parse(p.tokens), t += this.renderer.blockquote(k);
                            continue;
                        }
                    case "list":
                        {
                            for(A = p.ordered, _ = p.start, T = p.loose, a = p.items.length, k = "", s = 0; s < a; s++)w = p.items[s], C = w.checked, R = w.task, m = "", w.task && (S = this.renderer.checkbox(C), T ? w.tokens.length > 0 && w.tokens[0].type === "paragraph" ? (w.tokens[0].text = S + " " + w.tokens[0].text, w.tokens[0].tokens && w.tokens[0].tokens.length > 0 && w.tokens[0].tokens[0].type === "text" && (w.tokens[0].tokens[0].text = S + " " + w.tokens[0].tokens[0].text)) : w.tokens.unshift({
                                type: "text",
                                text: S
                            }) : m += S), m += this.parse(w.tokens, T), k += this.renderer.listitem(m, R, C);
                            t += this.renderer.list(k, A, _);
                            continue;
                        }
                    case "html":
                        {
                            t += this.renderer.html(p.text);
                            continue;
                        }
                    case "paragraph":
                        {
                            t += this.renderer.paragraph(this.parseInline(p.tokens));
                            continue;
                        }
                    case "text":
                        {
                            for(k = p.tokens ? this.parseInline(p.tokens) : p.text; i + 1 < D && e[i + 1].type === "text";)p = e[++i], k += `
` + (p.tokens ? this.parseInline(p.tokens) : p.text);
                            t += n ? this.renderer.paragraph(k) : k;
                            continue;
                        }
                    default:
                        {
                            let L = 'Token with "' + p.type + '" type was not found.';
                            if (this.options.silent) {
                                console.error(L);
                                return;
                            } else throw new Error(L);
                        }
                }
            }
            return t;
        }
        parseInline(e, n) {
            n = n || this.renderer;
            let t = "", i, s, r, a = e.length;
            for(i = 0; i < a; i++){
                if (s = e[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type] && (r = this.options.extensions.renderers[s.type].call({
                    parser: this
                }, s), r !== !1 || ![
                    "escape",
                    "html",
                    "link",
                    "image",
                    "strong",
                    "em",
                    "codespan",
                    "br",
                    "del",
                    "text"
                ].includes(s.type))) {
                    t += r || "";
                    continue;
                }
                switch(s.type){
                    case "escape":
                        {
                            t += n.text(s.text);
                            break;
                        }
                    case "html":
                        {
                            t += n.html(s.text);
                            break;
                        }
                    case "link":
                        {
                            t += n.link(s.href, s.title, this.parseInline(s.tokens, n));
                            break;
                        }
                    case "image":
                        {
                            t += n.image(s.href, s.title, s.text);
                            break;
                        }
                    case "strong":
                        {
                            t += n.strong(this.parseInline(s.tokens, n));
                            break;
                        }
                    case "em":
                        {
                            t += n.em(this.parseInline(s.tokens, n));
                            break;
                        }
                    case "codespan":
                        {
                            t += n.codespan(s.text);
                            break;
                        }
                    case "br":
                        {
                            t += n.br();
                            break;
                        }
                    case "del":
                        {
                            t += n.del(this.parseInline(s.tokens, n));
                            break;
                        }
                    case "text":
                        {
                            t += n.text(s.text);
                            break;
                        }
                    default:
                        {
                            let h = 'Token with "' + s.type + '" type was not found.';
                            if (this.options.silent) {
                                console.error(h);
                                return;
                            } else throw new Error(h);
                        }
                }
            }
            return t;
        }
    };
    function u(l, e, n) {
        if (typeof l > "u" || l === null) throw new Error("marked(): input parameter is undefined or null");
        if (typeof l != "string") throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(l) + ", string expected");
        if (typeof e == "function" && (n = e, e = null), e = z({}, u.defaults, e || {}), V(e), n) {
            let t = e.highlight, i;
            try {
                i = y.lex(l, e);
            } catch (a1) {
                return n(a1);
            }
            let s = function(a) {
                let h;
                if (!a) try {
                    e.walkTokens && u.walkTokens(i, e.walkTokens), h = $.parse(i, e);
                } catch (f) {
                    a = f;
                }
                return e.highlight = t, a ? n(a) : n(null, h);
            };
            if (!t || t.length < 3 || (delete e.highlight, !i.length)) return s();
            let r = 0;
            u.walkTokens(i, function(a) {
                a.type === "code" && (r++, setTimeout(()=>{
                    t(a.text, a.lang, function(h, f) {
                        if (h) return s(h);
                        f != null && f !== a.text && (a.text = f, a.escaped = !0), r--, r === 0 && s();
                    });
                }, 0));
            }), r === 0 && s();
            return;
        }
        try {
            let t = y.lex(l, e);
            return e.walkTokens && u.walkTokens(t, e.walkTokens), $.parse(t, e);
        } catch (t) {
            if (t.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent) return "<p>An error occurred:</p><pre>" + x(t.message + "", !0) + "</pre>";
            throw t;
        }
    }
    u.options = u.setOptions = function(l) {
        return z(u.defaults, l), J(u.defaults), u;
    };
    u.getDefaults = X;
    u.defaults = E;
    u.use = function(...l) {
        let e = z({}, ...l), n = u.defaults.extensions || {
            renderers: {},
            childTokens: {}
        }, t;
        l.forEach((i)=>{
            if (i.extensions && (t = !0, i.extensions.forEach((s)=>{
                if (!s.name) throw new Error("extension name required");
                if (s.renderer) {
                    let r = n.renderers ? n.renderers[s.name] : null;
                    r ? n.renderers[s.name] = function(...a) {
                        let h = s.renderer.apply(this, a);
                        return h === !1 && (h = r.apply(this, a)), h;
                    } : n.renderers[s.name] = s.renderer;
                }
                if (s.tokenizer) {
                    if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    n[s.level] ? n[s.level].unshift(s.tokenizer) : n[s.level] = [
                        s.tokenizer
                    ], s.start && (s.level === "block" ? n.startBlock ? n.startBlock.push(s.start) : n.startBlock = [
                        s.start
                    ] : s.level === "inline" && (n.startInline ? n.startInline.push(s.start) : n.startInline = [
                        s.start
                    ]));
                }
                s.childTokens && (n.childTokens[s.name] = s.childTokens);
            })), i.renderer) {
                let s = u.defaults.renderer || new q;
                for(let r in i.renderer){
                    let a = s[r];
                    s[r] = (...h)=>{
                        let f = i.renderer[r].apply(s, h);
                        return f === !1 && (f = a.apply(s, h)), f;
                    };
                }
                e.renderer = s;
            }
            if (i.tokenizer) {
                let s = u.defaults.tokenizer || new Z;
                for(let r in i.tokenizer){
                    let a = s[r];
                    s[r] = (...h)=>{
                        let f = i.tokenizer[r].apply(s, h);
                        return f === !1 && (f = a.apply(s, h)), f;
                    };
                }
                e.tokenizer = s;
            }
            if (i.walkTokens) {
                let s = u.defaults.walkTokens;
                e.walkTokens = function(r) {
                    i.walkTokens.call(this, r), s && s.call(this, r);
                };
            }
            t && (e.extensions = n), u.setOptions(e);
        });
    };
    u.walkTokens = function(l, e) {
        for (let n of l)switch(e.call(u, n), n.type){
            case "table":
                {
                    for (let t of n.header)u.walkTokens(t.tokens, e);
                    for (let t1 of n.rows)for (let i of t1)u.walkTokens(i.tokens, e);
                    break;
                }
            case "list":
                {
                    u.walkTokens(n.items, e);
                    break;
                }
            default:
                u.defaults.extensions && u.defaults.extensions.childTokens && u.defaults.extensions.childTokens[n.type] ? u.defaults.extensions.childTokens[n.type].forEach(function(t) {
                    u.walkTokens(n[t], e);
                }) : n.tokens && u.walkTokens(n.tokens, e);
        }
    };
    u.parseInline = function(l, e) {
        if (typeof l > "u" || l === null) throw new Error("marked.parseInline(): input parameter is undefined or null");
        if (typeof l != "string") throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(l) + ", string expected");
        e = z({}, u.defaults, e || {}), V(e);
        try {
            let n = y.lexInline(l, e);
            return e.walkTokens && u.walkTokens(n, e.walkTokens), $.parseInline(n, e);
        } catch (n) {
            if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent) return "<p>An error occurred:</p><pre>" + x(n.message + "", !0) + "</pre>";
            throw n;
        }
    };
    u.Parser = $;
    u.parser = $.parse;
    u.Renderer = q;
    u.TextRenderer = v;
    u.Lexer = y;
    u.lexer = y.lex;
    u.Tokenizer = Z;
    u.Slugger = j;
    u.parse = u;
    var ge = u.options, de = u.setOptions, ke = u.use, me = u.walkTokens, xe = u.parseInline, be = $.parse, _e = y.lex;
    function transform2(input, options, functions) {
        if (typeof input != "string") {
            throw new Error("Can't use md_to_json on non string");
        }
        return _e(input);
    }
    var ye = Object.create;
    var ce1 = Object.defineProperty;
    var ve = Object.getOwnPropertyDescriptor;
    var ke1 = Object.getOwnPropertyNames;
    var be1 = Object.getPrototypeOf, Ee = Object.prototype.hasOwnProperty;
    var we = (I, l)=>()=>(l || I((l = {
                exports: {}
            }).exports, l), l.exports)
    ;
    var Ce = (I, l, F1, Q1)=>{
        if (l && typeof l == "object" || typeof l == "function") for (let U1 of ke1(l))!Ee.call(I, U1) && U1 !== F1 && ce1(I, U1, {
            get: ()=>l[U1]
            ,
            enumerable: !(Q1 = ve(l, U1)) || Q1.enumerable
        });
        return I;
    };
    var pe1 = (I, l, F2)=>(F2 = I != null ? ye(be1(I)) : {}, Ce(l || !I || !I.__esModule ? ce1(F2, "default", {
            value: I,
            enumerable: !0
        }) : F2, I))
    ;
    var he1 = we((ae1, oe1)=>{
        (function(I, l) {
            typeof define == "function" && define.amd ? define([], l) : typeof oe1 == "object" && typeof ae1 < "u" ? oe1.exports = l() : I.Papa = l();
        })(ae1, function I() {
            "use strict";
            var l = typeof self < "u" ? self : typeof document < "u" ? window : l !== void 0 ? l : {}, F3 = !l.document && !!l.postMessage, Q2 = F3 && /blob:/i.test((l.location || {}).protocol), U2 = {}, ge1 = 0, f = {
                parse: function(t, e) {
                    var i = (e = e || {}).dynamicTyping || !1;
                    if (m(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!m(e.transform) && e.transform, e.worker && f.WORKERS_SUPPORTED) {
                        var n = function() {
                            if (!f.WORKERS_SUPPORTED) return !1;
                            var d1 = (O1 = l.URL || l.webkitURL || null, k = I.toString(), f.BLOB_URL || (f.BLOB_URL = O1.createObjectURL(new Blob([
                                "(",
                                k,
                                ")();"
                            ], {
                                type: "text/javascript"
                            })))), p = new l.Worker(d1), O1, k;
                            return p.onmessage = me1, p.id = ge1++, U2[p.id] = p;
                        }();
                        return n.userStep = e.step, n.userChunk = e.chunk, n.userComplete = e.complete, n.userError = e.error, e.step = m(e.step), e.chunk = m(e.chunk), e.complete = m(e.complete), e.error = m(e.error), delete e.worker, void n.postMessage({
                            input: t,
                            config: e,
                            workerId: n.id
                        });
                    }
                    var s = null;
                    return f.NODE_STREAM_INPUT, typeof t == "string" ? s = e.download ? new ee1(e) : new G1(e) : t.readable === !0 && m(t.read) && m(t.on) ? s = new ie1(e) : (l.File && t instanceof File || t instanceof Object) && (s = new te1(e)), s.stream(t);
                },
                unparse: function(t, e) {
                    var i = !1, n = !0, s = ",", d2 = `\r
`, p = '"', O2 = p + p, k = !1, a = null, w = !1;
                    (function() {
                        if (typeof e == "object") {
                            if (typeof e.delimiter != "string" || f.BAD_DELIMITERS.filter(function(r) {
                                return e.delimiter.indexOf(r) !== -1;
                            }).length || (s = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (k = e.skipEmptyLines), typeof e.newline == "string" && (d2 = e.newline), typeof e.quoteChar == "string" && (p = e.quoteChar), typeof e.header == "boolean" && (n = e.header), Array.isArray(e.columns)) {
                                if (e.columns.length === 0) throw new Error("Option columns is empty");
                                a = e.columns;
                            }
                            e.escapeChar !== void 0 && (O2 = e.escapeChar + p), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (w = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
                        }
                    })();
                    var h = new RegExp(Y1(p), "g");
                    if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
                        if (!t.length || Array.isArray(t[0])) return q1(null, t, k);
                        if (typeof t[0] == "object") return q1(a || Object.keys(t[0]), t, k);
                    } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || a), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [
                        t.data
                    ])), q1(t.fields || [], t.data || [], k);
                    throw new Error("Unable to serialize unrecognized input");
                    function q1(r, y1, D) {
                        var b = "";
                        typeof r == "string" && (r = JSON.parse(r)), typeof y1 == "string" && (y1 = JSON.parse(y1));
                        var x2 = Array.isArray(r) && 0 < r.length, R = !Array.isArray(y1[0]);
                        if (x2 && n) {
                            for(var S = 0; S < r.length; S++)0 < S && (b += s), b += T(r[S], S);
                            0 < y1.length && (b += d2);
                        }
                        for(var o1 = 0; o1 < y1.length; o1++){
                            var g = x2 ? r.length : y1[o1].length, v1 = !1, C = x2 ? Object.keys(y1[o1]).length === 0 : y1[o1].length === 0;
                            if (D && !x2 && (v1 = D === "greedy" ? y1[o1].join("").trim() === "" : y1[o1].length === 1 && y1[o1][0].length === 0), D === "greedy" && x2) {
                                for(var c1 = [], _ = 0; _ < g; _++){
                                    var E1 = R ? r[_] : _;
                                    c1.push(y1[o1][E1]);
                                }
                                v1 = c1.join("").trim() === "";
                            }
                            if (!v1) {
                                for(var u1 = 0; u1 < g; u1++){
                                    0 < u1 && !C && (b += s);
                                    var W1 = x2 && R ? r[u1] : u1;
                                    b += T(y1[o1][W1], u1);
                                }
                                o1 < y1.length - 1 && (!D || 0 < g && !C) && (b += d2);
                            }
                        }
                        return b;
                    }
                    function T(r, y2) {
                        if (r == null) return "";
                        if (r.constructor === Date) return JSON.stringify(r).slice(1, 25);
                        var D = !1;
                        w && typeof r == "string" && w.test(r) && (r = "'" + r, D = !0);
                        var b = r.toString().replace(h, O2);
                        return (D = D || i === !0 || typeof i == "function" && i(r, y2) || Array.isArray(i) && i[y2] || function(x3, R) {
                            for(var S = 0; S < R.length; S++)if (-1 < x3.indexOf(R[S])) return !0;
                            return !1;
                        }(b, f.BAD_DELIMITERS) || -1 < b.indexOf(s) || b.charAt(0) === " " || b.charAt(b.length - 1) === " ") ? p + b + p : b;
                    }
                }
            };
            if (f.RECORD_SEP = String.fromCharCode(30), f.UNIT_SEP = String.fromCharCode(31), f.BYTE_ORDER_MARK = "\uFEFF", f.BAD_DELIMITERS = [
                "\r",
                `
`,
                '"',
                f.BYTE_ORDER_MARK
            ], f.WORKERS_SUPPORTED = !F3 && !!l.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = ",", f.Parser = ne1, f.ParserHandle = ue1, f.NetworkStreamer = ee1, f.FileStreamer = te1, f.StringStreamer = G1, f.ReadableStreamStreamer = ie1, l.jQuery) {
                var Z1 = l.jQuery;
                Z1.fn.parse = function(t) {
                    var e = t.config || {}, i = [];
                    return this.each(function(d) {
                        if (!(Z1(this).prop("tagName").toUpperCase() === "INPUT" && Z1(this).attr("type").toLowerCase() === "file" && l.FileReader) || !this.files || this.files.length === 0) return !0;
                        for(var p = 0; p < this.files.length; p++)i.push({
                            file: this.files[p],
                            inputElem: this,
                            instanceConfig: Z1.extend({}, e)
                        });
                    }), n(), this;
                    function n() {
                        if (i.length !== 0) {
                            var d3, p, O3, k, a = i[0];
                            if (m(t.before)) {
                                var w = t.before(a.file, a.inputElem);
                                if (typeof w == "object") {
                                    if (w.action === "abort") return d3 = "AbortError", p = a.file, O3 = a.inputElem, k = w.reason, void (m(t.error) && t.error({
                                        name: d3
                                    }, p, O3, k));
                                    if (w.action === "skip") return void s();
                                    typeof w.config == "object" && (a.instanceConfig = Z1.extend(a.instanceConfig, w.config));
                                } else if (w === "skip") return void s();
                            }
                            var h = a.instanceConfig.complete;
                            a.instanceConfig.complete = function(q2) {
                                m(h) && h(q2, a.file, a.inputElem), s();
                            }, f.parse(a.file, a.instanceConfig);
                        } else m(t.complete) && t.complete();
                    }
                    function s() {
                        i.splice(0, 1), n();
                    }
                };
            }
            function N1(t) {
                this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                    data: [],
                    errors: [],
                    meta: {}
                }, (function(e) {
                    var i = se1(e);
                    i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new ue1(i), (this._handle.streamer = this)._config = i;
                }).call(this, t), this.parseChunk = function(e, i) {
                    if (this.isFirstChunk && m(this._config.beforeFirstChunk)) {
                        var n = this._config.beforeFirstChunk(e);
                        n !== void 0 && (e = n);
                    }
                    this.isFirstChunk = !1, this._halted = !1;
                    var s = this._partialLine + e;
                    this._partialLine = "";
                    var d4 = this._handle.parse(s, this._baseIndex, !this._finished);
                    if (!this._handle.paused() && !this._handle.aborted()) {
                        var p = d4.meta.cursor;
                        this._finished || (this._partialLine = s.substring(p - this._baseIndex), this._baseIndex = p), d4 && d4.data && (this._rowCount += d4.data.length);
                        var O4 = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                        if (Q2) l.postMessage({
                            results: d4,
                            workerId: f.WORKER_ID,
                            finished: O4
                        });
                        else if (m(this._config.chunk) && !i) {
                            if (this._config.chunk(d4, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                            d4 = void 0, this._completeResults = void 0;
                        }
                        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(d4.data), this._completeResults.errors = this._completeResults.errors.concat(d4.errors), this._completeResults.meta = d4.meta), this._completed || !O4 || !m(this._config.complete) || d4 && d4.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), O4 || d4 && d4.meta.paused || this._nextChunk(), d4;
                    }
                    this._halted = !0;
                }, this._sendError = function(e) {
                    m(this._config.error) ? this._config.error(e) : Q2 && this._config.error && l.postMessage({
                        workerId: f.WORKER_ID,
                        error: e,
                        finished: !1
                    });
                };
            }
            function ee1(t) {
                var e;
                (t = t || {}).chunkSize || (t.chunkSize = f.RemoteChunkSize), N1.call(this, t), this._nextChunk = F3 ? function() {
                    this._readChunk(), this._chunkLoaded();
                } : function() {
                    this._readChunk();
                }, this.stream = function(i) {
                    this._input = i, this._nextChunk();
                }, this._readChunk = function() {
                    if (this._finished) this._chunkLoaded();
                    else {
                        if (e = new XMLHttpRequest, this._config.withCredentials && (e.withCredentials = this._config.withCredentials), F3 || (e.onload = K1(this._chunkLoaded, this), e.onerror = K1(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !F3), this._config.downloadRequestHeaders) {
                            var i = this._config.downloadRequestHeaders;
                            for(var n in i)e.setRequestHeader(n, i[n]);
                        }
                        if (this._config.chunkSize) {
                            var s = this._start + this._config.chunkSize - 1;
                            e.setRequestHeader("Range", "bytes=" + this._start + "-" + s);
                        }
                        try {
                            e.send(this._config.downloadRequestBody);
                        } catch (d5) {
                            this._chunkError(d5.message);
                        }
                        F3 && e.status === 0 && this._chunkError();
                    }
                }, this._chunkLoaded = function() {
                    e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(i) {
                        var n = i.getResponseHeader("Content-Range");
                        return n === null ? -1 : parseInt(n.substring(n.lastIndexOf("/") + 1));
                    }(e), this.parseChunk(e.responseText)));
                }, this._chunkError = function(i) {
                    var n = e.statusText || i;
                    this._sendError(new Error(n));
                };
            }
            function te1(t) {
                var e, i;
                (t = t || {}).chunkSize || (t.chunkSize = f.LocalChunkSize), N1.call(this, t);
                var n = typeof FileReader < "u";
                this.stream = function(s) {
                    this._input = s, i = s.slice || s.webkitSlice || s.mozSlice, n ? ((e = new FileReader).onload = K1(this._chunkLoaded, this), e.onerror = K1(this._chunkError, this)) : e = new FileReaderSync, this._nextChunk();
                }, this._nextChunk = function() {
                    this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
                }, this._readChunk = function() {
                    var s = this._input;
                    if (this._config.chunkSize) {
                        var d6 = Math.min(this._start + this._config.chunkSize, this._input.size);
                        s = i.call(s, this._start, d6);
                    }
                    var p = e.readAsText(s, this._config.encoding);
                    n || this._chunkLoaded({
                        target: {
                            result: p
                        }
                    });
                }, this._chunkLoaded = function(s) {
                    this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(s.target.result);
                }, this._chunkError = function() {
                    this._sendError(e.error);
                };
            }
            function G1(t) {
                var e;
                N1.call(this, t = t || {}), this.stream = function(i) {
                    return e = i, this._nextChunk();
                }, this._nextChunk = function() {
                    if (!this._finished) {
                        var i, n = this._config.chunkSize;
                        return n ? (i = e.substring(0, n), e = e.substring(n)) : (i = e, e = ""), this._finished = !e, this.parseChunk(i);
                    }
                };
            }
            function ie1(t) {
                N1.call(this, t = t || {});
                var e = [], i = !0, n = !1;
                this.pause = function() {
                    N1.prototype.pause.apply(this, arguments), this._input.pause();
                }, this.resume = function() {
                    N1.prototype.resume.apply(this, arguments), this._input.resume();
                }, this.stream = function(s) {
                    this._input = s, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
                }, this._checkIsFinished = function() {
                    n && e.length === 1 && (this._finished = !0);
                }, this._nextChunk = function() {
                    this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;
                }, this._streamData = K1(function(s) {
                    try {
                        e.push(typeof s == "string" ? s : s.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
                    } catch (d7) {
                        this._streamError(d7);
                    }
                }, this), this._streamError = K1(function(s) {
                    this._streamCleanUp(), this._sendError(s);
                }, this), this._streamEnd = K1(function() {
                    this._streamCleanUp(), n = !0, this._streamData("");
                }, this), this._streamCleanUp = K1(function() {
                    this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
                }, this);
            }
            function ue1(t) {
                var e, i, n, s = Math.pow(2, 53), d8 = -s, p = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, O5 = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, k = this, a = 0, w = 0, h = !1, q3 = !1, T = [], r = {
                    data: [],
                    errors: [],
                    meta: {}
                };
                if (m(t.step)) {
                    var y3 = t.step;
                    t.step = function(o2) {
                        if (r = o2, x4()) b();
                        else {
                            if (b(), r.data.length === 0) return;
                            a += o2.data.length, t.preview && a > t.preview ? i.abort() : (r.data = r.data[0], y3(r, k));
                        }
                    };
                }
                function D(o3) {
                    return t.skipEmptyLines === "greedy" ? o3.join("").trim() === "" : o3.length === 1 && o3[0].length === 0;
                }
                function b() {
                    return r && n && (S("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"), n = !1), t.skipEmptyLines && (r.data = r.data.filter(function(o4) {
                        return !D(o4);
                    })), x4() && function() {
                        if (!r) return;
                        function o5(v2, C) {
                            m(t.transformHeader) && (v2 = t.transformHeader(v2, C)), T.push(v2);
                        }
                        if (Array.isArray(r.data[0])) {
                            for(var g = 0; x4() && g < r.data.length; g++)r.data[g].forEach(o5);
                            r.data.splice(0, 1);
                        } else r.data.forEach(o5);
                    }(), function() {
                        if (!r || !t.header && !t.dynamicTyping && !t.transform) return r;
                        function o6(v3, C) {
                            var c2, _ = t.header ? {} : [];
                            for(c2 = 0; c2 < v3.length; c2++){
                                var E2 = c2, u2 = v3[c2];
                                t.header && (E2 = c2 >= T.length ? "__parsed_extra" : T[c2]), t.transform && (u2 = t.transform(u2, E2)), u2 = R(E2, u2), E2 === "__parsed_extra" ? (_[E2] = _[E2] || [], _[E2].push(u2)) : _[E2] = u2;
                            }
                            return t.header && (c2 > T.length ? S("FieldMismatch", "TooManyFields", "Too many fields: expected " + T.length + " fields but parsed " + c2, w + C) : c2 < T.length && S("FieldMismatch", "TooFewFields", "Too few fields: expected " + T.length + " fields but parsed " + c2, w + C)), _;
                        }
                        var g = 1;
                        return !r.data.length || Array.isArray(r.data[0]) ? (r.data = r.data.map(o6), g = r.data.length) : r.data = o6(r.data, 0), t.header && r.meta && (r.meta.fields = T), w += g, r;
                    }();
                }
                function x4() {
                    return t.header && T.length === 0;
                }
                function R(o7, g) {
                    return v4 = o7, t.dynamicTypingFunction && t.dynamicTyping[v4] === void 0 && (t.dynamicTyping[v4] = t.dynamicTypingFunction(v4)), (t.dynamicTyping[v4] || t.dynamicTyping) === !0 ? g === "true" || g === "TRUE" || g !== "false" && g !== "FALSE" && (function(C) {
                        if (p.test(C)) {
                            var c3 = parseFloat(C);
                            if (d8 < c3 && c3 < s) return !0;
                        }
                        return !1;
                    }(g) ? parseFloat(g) : O5.test(g) ? new Date(g) : g === "" ? null : g) : g;
                    var v4;
                }
                function S(o8, g, v5, C) {
                    var c4 = {
                        type: o8,
                        code: g,
                        message: v5
                    };
                    C !== void 0 && (c4.row = C), r.errors.push(c4);
                }
                this.parse = function(o9, g, v6) {
                    var C = t.quoteChar || '"';
                    if (t.newline || (t.newline = function(E3, u3) {
                        E3 = E3.substring(0, 1048576);
                        var W2 = new RegExp(Y1(u3) + "([^]*?)" + Y1(u3), "gm"), M1 = (E3 = E3.replace(W2, "")).split("\r"), z1 = E3.split(`
`), H = 1 < z1.length && z1[0].length < M1[0].length;
                        if (M1.length === 1 || H) return `
`;
                        for(var P1 = 0, j4 = 0; j4 < M1.length; j4++)M1[j4][0] === `
` && P1++;
                        return P1 >= M1.length / 2 ? `\r
` : "\r";
                    }(o9, C)), n = !1, t.delimiter) m(t.delimiter) && (t.delimiter = t.delimiter(o9), r.meta.delimiter = t.delimiter);
                    else {
                        var c5 = function(E4, u4, W3, M2, z2) {
                            var H, P2, j5, A;
                            z2 = z2 || [
                                ",",
                                "	",
                                "|",
                                ";",
                                f.RECORD_SEP,
                                f.UNIT_SEP
                            ];
                            for(var $1 = 0; $1 < z2.length; $1++){
                                var L = z2[$1], J1 = 0, B1 = 0, le1 = 0;
                                j5 = void 0;
                                for(var X1 = new ne1({
                                    comments: M2,
                                    delimiter: L,
                                    newline: u4,
                                    preview: 10
                                }).parse(E4), re1 = 0; re1 < X1.data.length; re1++)if (W3 && D(X1.data[re1])) le1++;
                                else {
                                    var V1 = X1.data[re1].length;
                                    B1 += V1, j5 !== void 0 ? 0 < V1 && (J1 += Math.abs(V1 - j5), j5 = V1) : j5 = V1;
                                }
                                0 < X1.data.length && (B1 /= X1.data.length - le1), (P2 === void 0 || J1 <= P2) && (A === void 0 || A < B1) && 1.99 < B1 && (P2 = J1, H = L, A = B1);
                            }
                            return {
                                successful: !!(t.delimiter = H),
                                bestDelimiter: H
                            };
                        }(o9, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
                        c5.successful ? t.delimiter = c5.bestDelimiter : (n = !0, t.delimiter = f.DefaultDelimiter), r.meta.delimiter = t.delimiter;
                    }
                    var _ = se1(t);
                    return t.preview && t.header && _.preview++, e = o9, i = new ne1(_), r = i.parse(e, g, v6), b(), h ? {
                        meta: {
                            paused: !0
                        }
                    } : r || {
                        meta: {
                            paused: !1
                        }
                    };
                }, this.paused = function() {
                    return h;
                }, this.pause = function() {
                    h = !0, i.abort(), e = m(t.chunk) ? "" : e.substring(i.getCharIndex());
                }, this.resume = function() {
                    k.streamer._halted ? (h = !1, k.streamer.parseChunk(e, !0)) : setTimeout(k.resume, 3);
                }, this.aborted = function() {
                    return q3;
                }, this.abort = function() {
                    q3 = !0, i.abort(), r.meta.aborted = !0, m(t.complete) && t.complete(r), e = "";
                };
            }
            function Y1(t) {
                return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
            function ne1(t) {
                var e, i = (t = t || {}).delimiter, n = t.newline, s = t.comments, d9 = t.step, p = t.preview, O6 = t.fastMode, k = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
                if (t.escapeChar !== void 0 && (k = t.escapeChar), (typeof i != "string" || -1 < f.BAD_DELIMITERS.indexOf(i)) && (i = ","), s === i) throw new Error("Comment character same as delimiter");
                s === !0 ? s = "#" : (typeof s != "string" || -1 < f.BAD_DELIMITERS.indexOf(s)) && (s = !1), n !== `
` && n !== "\r" && n !== `\r
` && (n = `
`);
                var a = 0, w = !1;
                this.parse = function(h, q4, T) {
                    if (typeof h != "string") throw new Error("Input must be a string");
                    var r = h.length, y4 = i.length, D = n.length, b = s.length, x5 = m(d9), R = [], S = [], o10 = [], g = a = 0;
                    if (!h) return A();
                    if (O6 || O6 !== !1 && h.indexOf(e) === -1) {
                        for(var v7 = h.split(n), C = 0; C < v7.length; C++){
                            if (o10 = v7[C], a += o10.length, C !== v7.length - 1) a += n.length;
                            else if (T) return A();
                            if (!s || o10.substring(0, b) !== s) {
                                if (x5) {
                                    if (R = [], z3(o10.split(i)), $2(), w) return A();
                                } else z3(o10.split(i));
                                if (p && p <= C) return R = R.slice(0, p), A(!0);
                            }
                        }
                        return A();
                    }
                    for(var c6 = h.indexOf(i, a), _ = h.indexOf(n, a), E5 = new RegExp(Y1(k) + Y1(e), "g"), u5 = h.indexOf(e, a);;)if (h[a] !== e) if (s && o10.length === 0 && h.substring(a, a + b) === s) {
                        if (_ === -1) return A();
                        a = _ + D, _ = h.indexOf(n, a), c6 = h.indexOf(i, a);
                    } else if (c6 !== -1 && (c6 < _ || _ === -1)) o10.push(h.substring(a, c6)), a = c6 + y4, c6 = h.indexOf(i, a);
                    else {
                        if (_ === -1) break;
                        if (o10.push(h.substring(a, _)), j6(_ + D), x5 && ($2(), w)) return A();
                        if (p && R.length >= p) return A(!0);
                    }
                    else for(u5 = a, a++;;){
                        if ((u5 = h.indexOf(e, u5 + 1)) === -1) return T || S.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: R.length,
                            index: a
                        }), P3();
                        if (u5 === r - 1) return P3(h.substring(a, u5).replace(E5, e));
                        if (e !== k || h[u5 + 1] !== k) {
                            if (e === k || u5 === 0 || h[u5 - 1] !== k) {
                                c6 !== -1 && c6 < u5 + 1 && (c6 = h.indexOf(i, u5 + 1)), _ !== -1 && _ < u5 + 1 && (_ = h.indexOf(n, u5 + 1));
                                var W4 = H(_ === -1 ? c6 : Math.min(c6, _));
                                if (h.substr(u5 + 1 + W4, y4) === i) {
                                    o10.push(h.substring(a, u5).replace(E5, e)), h[a = u5 + 1 + W4 + y4] !== e && (u5 = h.indexOf(e, a)), c6 = h.indexOf(i, a), _ = h.indexOf(n, a);
                                    break;
                                }
                                var M3 = H(_);
                                if (h.substring(u5 + 1 + M3, u5 + 1 + M3 + D) === n) {
                                    if (o10.push(h.substring(a, u5).replace(E5, e)), j6(u5 + 1 + M3 + D), c6 = h.indexOf(i, a), u5 = h.indexOf(e, a), x5 && ($2(), w)) return A();
                                    if (p && R.length >= p) return A(!0);
                                    break;
                                }
                                S.push({
                                    type: "Quotes",
                                    code: "InvalidQuotes",
                                    message: "Trailing quote on quoted field is malformed",
                                    row: R.length,
                                    index: a
                                }), u5++;
                            }
                        } else u5++;
                    }
                    return P3();
                    function z3(L) {
                        R.push(L), g = a;
                    }
                    function H(L) {
                        var J2 = 0;
                        if (L !== -1) {
                            var B2 = h.substring(u5 + 1, L);
                            B2 && B2.trim() === "" && (J2 = B2.length);
                        }
                        return J2;
                    }
                    function P3(L) {
                        return T || (L === void 0 && (L = h.substring(a)), o10.push(L), a = r, z3(o10), x5 && $2()), A();
                    }
                    function j6(L) {
                        a = L, z3(o10), o10 = [], _ = h.indexOf(n, a);
                    }
                    function A(L) {
                        return {
                            data: R,
                            errors: S,
                            meta: {
                                delimiter: i,
                                linebreak: n,
                                aborted: w,
                                truncated: !!L,
                                cursor: g + (q4 || 0)
                            }
                        };
                    }
                    function $2() {
                        d9(A()), R = [], S = [];
                    }
                }, this.abort = function() {
                    w = !0;
                }, this.getCharIndex = function() {
                    return a;
                };
            }
            function me1(t) {
                var e = t.data, i = U2[e.workerId], n = !1;
                if (e.error) i.userError(e.error, e.file);
                else if (e.results && e.results.data) {
                    var s = {
                        abort: function() {
                            n = !0, fe1(e.workerId, {
                                data: [],
                                errors: [],
                                meta: {
                                    aborted: !0
                                }
                            });
                        },
                        pause: de1,
                        resume: de1
                    };
                    if (m(i.userStep)) {
                        for(var d10 = 0; d10 < e.results.data.length && (i.userStep({
                            data: e.results.data[d10],
                            errors: e.results.errors,
                            meta: e.results.meta
                        }, s), !n); d10++);
                        delete e.results;
                    } else m(i.userChunk) && (i.userChunk(e.results, s, e.file), delete e.results);
                }
                e.finished && !n && fe1(e.workerId, e.results);
            }
            function fe1(t, e) {
                var i = U2[t];
                m(i.userComplete) && i.userComplete(e), i.terminate(), delete U2[t];
            }
            function de1() {
                throw new Error("Not implemented.");
            }
            function se1(t) {
                if (typeof t != "object" || t === null) return t;
                var e = Array.isArray(t) ? [] : {};
                for(var i in t)e[i] = se1(t[i]);
                return e;
            }
            function K1(t, e) {
                return function() {
                    t.apply(e, arguments);
                };
            }
            function m(t) {
                return typeof t == "function";
            }
            return Q2 && (l.onmessage = function(t) {
                var e = t.data;
                if (f.WORKER_ID === void 0 && e && (f.WORKER_ID = e.workerId), typeof e.input == "string") l.postMessage({
                    workerId: f.WORKER_ID,
                    results: f.parse(e.input, e.config),
                    finished: !0
                });
                else if (l.File && e.input instanceof File || e.input instanceof Object) {
                    var i = f.parse(e.input, e.config);
                    i && l.postMessage({
                        workerId: f.WORKER_ID,
                        results: i,
                        finished: !0
                    });
                }
            }), (ee1.prototype = Object.create(N1.prototype)).constructor = ee1, (te1.prototype = Object.create(N1.prototype)).constructor = te1, (G1.prototype = Object.create(G1.prototype)).constructor = G1, (ie1.prototype = Object.create(N1.prototype)).constructor = ie1, f;
        });
    });
    var _e1 = pe1(he1()), Re = pe1(he1()), { default: Se , ...Oe } = Re, Ie = (_e1.default ?? Se) ?? Oe;
    function csv_to_json(data, options, functions) {
        return Ie.parse(data, options);
    }
    function json_to_csv(data, options, functions) {
        return Ie.unparse(data, options);
    }
    return {
        noop: transform,
        jmespath: transform1,
        md_to_json: transform2,
        csv_to_json: csv_to_json,
        json_to_csv: json_to_csv
    };
})();
