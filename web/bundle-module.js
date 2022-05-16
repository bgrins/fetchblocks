// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve1) {
            resolve1(value);
        });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
var Drop = function() {
    function Drop1() {}
    Drop1.prototype.valueOf = function() {
        return undefined;
    };
    Drop1.prototype.liquidMethodMissing = function(key) {
        return undefined;
    };
    return Drop1;
}();
var toString$1 = Object.prototype.toString;
var toLowerCase = String.prototype.toLowerCase;
var hasOwnProperty = Object.hasOwnProperty;
function isString(value) {
    return typeof value === 'string';
}
function isFunction(value) {
    return typeof value === 'function';
}
function escapeRegex(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function stringify(value) {
    value = toValue$1(value);
    if (isString(value)) return value;
    if (isNil(value)) return '';
    if (isArray(value)) return value.map(function(x) {
        return stringify(x);
    }).join('');
    return String(value);
}
function toValue$1(value) {
    return value instanceof Drop ? value.valueOf() : value;
}
function isNumber(value) {
    return typeof value === 'number';
}
function toLiquid(value) {
    if (value && isFunction(value.toLiquid)) return toLiquid(value.toLiquid());
    return value;
}
function isNil(value) {
    return value == null;
}
function isArray(value) {
    return toString$1.call(value) === '[object Array]';
}
function forOwn(obj, iteratee) {
    obj = obj || {};
    for(var k in obj){
        if (hasOwnProperty.call(obj, k)) {
            if (iteratee(obj[k], k, obj) === false) break;
        }
    }
    return obj;
}
function last$1(arr) {
    return arr[arr.length - 1];
}
function isObject(value) {
    var type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}
function range(start, stop, step) {
    if (step === void 0) {
        step = 1;
    }
    var arr = [];
    for(var i = start; i < stop; i += step){
        arr.push(i);
    }
    return arr;
}
function padStart(str1, length, ch1) {
    if (ch1 === void 0) {
        ch1 = ' ';
    }
    return pad(str1, length, ch1, function(str, ch) {
        return ch + str;
    });
}
function padEnd(str2, length, ch2) {
    if (ch2 === void 0) {
        ch2 = ' ';
    }
    return pad(str2, length, ch2, function(str, ch) {
        return str + ch;
    });
}
function pad(str, length, ch, add) {
    str = String(str);
    var n = length - str.length;
    while(n-- > 0)str = add(str, ch);
    return str;
}
function identify(val) {
    return val;
}
function snakeCase(str) {
    return str.replace(/(\w?)([A-Z])/g, function(_, a, b) {
        return (a ? a + '_' : '') + b.toLowerCase();
    });
}
function changeCase(str) {
    var hasLowerCase = __spreadArray([], __read(str), false).some(function(ch) {
        return ch >= 'a' && ch <= 'z';
    });
    return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
}
function ellipsis(str, N) {
    return str.length > N ? str.substr(0, N - 3) + '...' : str;
}
function caseInsensitiveCompare(a, b) {
    if (a == null && b == null) return 0;
    if (a == null) return 1;
    if (b == null) return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function argumentsToValue(fn) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return fn.apply(void 0, __spreadArray([], __read(args.map(toValue$1)), false));
    };
}
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
var Node = function() {
    function Node1(key, value, next, prev) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return Node1;
}();
var LRU = function() {
    function LRU1(limit1, size1) {
        if (size1 === void 0) {
            size1 = 0;
        }
        this.limit = limit1;
        this.size = size1;
        this.cache = {};
        this.head = new Node('HEAD', null, null, null);
        this.tail = new Node('TAIL', null, null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    LRU1.prototype.write = function(key, value) {
        if (this.cache[key]) {
            this.cache[key].value = value;
        } else {
            var node = new Node(key, value, this.head.next, this.head);
            this.head.next.prev = node;
            this.head.next = node;
            this.cache[key] = node;
            this.size++;
            this.ensureLimit();
        }
    };
    LRU1.prototype.read = function(key) {
        if (!this.cache[key]) return;
        var value = this.cache[key].value;
        this.remove(key);
        this.write(key, value);
        return value;
    };
    LRU1.prototype.remove = function(key) {
        var node = this.cache[key];
        node.prev.next = node.next;
        node.next.prev = node.prev;
        delete this.cache[key];
        this.size--;
    };
    LRU1.prototype.clear = function() {
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
        this.cache = {};
    };
    LRU1.prototype.ensureLimit = function() {
        if (this.size > this.limit) this.remove(this.tail.prev.key);
    };
    return LRU1;
}();
function domResolve(root, path) {
    var base = document.createElement('base');
    base.href = root;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(base, head.firstChild);
    var a = document.createElement('a');
    a.href = path;
    var resolved = a.href;
    head.removeChild(base);
    return resolved;
}
function resolve(root, filepath, ext) {
    if (root.length && last$1(root) !== '/') root += '/';
    var url = domResolve(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, function(str, origin, path) {
        var last1 = path.split('/').pop();
        if (/\.\w+$/.test(last1)) return str;
        return origin + path + ext;
    });
}
function readFile(url) {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            return [
                2,
                new Promise(function(resolve3, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve3(xhr.responseText);
                        } else {
                            reject(new Error(xhr.statusText));
                        }
                    };
                    xhr.onerror = function() {
                        reject(new Error('An error occurred whilst receiving the response.'));
                    };
                    xhr.open('GET', url);
                    xhr.send();
                })
            ];
        });
    });
}
function readFileSync(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
        throw new Error(xhr.statusText);
    }
    return xhr.responseText;
}
function exists(filepath) {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            return [
                2,
                true
            ];
        });
    });
}
function existsSync(filepath) {
    return true;
}
function dirname(filepath) {
    return domResolve(filepath, '.');
}
var sep = '/';
var fs = Object.freeze({
    __proto__: null,
    resolve: resolve,
    readFile: readFile,
    readFileSync: readFileSync,
    exists: exists,
    existsSync: existsSync,
    dirname: dirname,
    sep: sep
});
function isComparable(arg) {
    return arg && isFunction(arg.equals);
}
function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
}
function isFalsy(val, ctx) {
    if (ctx.opts.jsTruthy) {
        return !val;
    } else {
        return val === false || undefined === val || val === null;
    }
}
var defaultOperators = {
    '==': function(l, r) {
        if (isComparable(l)) return l.equals(r);
        if (isComparable(r)) return r.equals(l);
        return l === r;
    },
    '!=': function(l, r) {
        if (isComparable(l)) return !l.equals(r);
        if (isComparable(r)) return !r.equals(l);
        return l !== r;
    },
    '>': function(l, r) {
        if (isComparable(l)) return l.gt(r);
        if (isComparable(r)) return r.lt(l);
        return l > r;
    },
    '<': function(l, r) {
        if (isComparable(l)) return l.lt(r);
        if (isComparable(r)) return r.gt(l);
        return l < r;
    },
    '>=': function(l, r) {
        if (isComparable(l)) return l.geq(r);
        if (isComparable(r)) return r.leq(l);
        return l >= r;
    },
    '<=': function(l, r) {
        if (isComparable(l)) return l.leq(r);
        if (isComparable(r)) return r.geq(l);
        return l <= r;
    },
    'contains': function(l, r) {
        l = toValue$1(l);
        r = toValue$1(r);
        return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
    },
    'and': function(l, r, ctx) {
        return isTruthy(l, ctx) && isTruthy(r, ctx);
    },
    'or': function(l, r, ctx) {
        return isTruthy(l, ctx) || isTruthy(r, ctx);
    }
};
var TYPES = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    4,
    4,
    4,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    8,
    0,
    0,
    0,
    0,
    8,
    0,
    0,
    0,
    64,
    0,
    65,
    0,
    0,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    0,
    0,
    2,
    2,
    2,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0
];
var IDENTIFIER = 1;
var BLANK = 4;
var QUOTE = 8;
var INLINE_BLANK = 16;
var NUMBER = 32;
var SIGN = 64;
TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
function createTrie(operators) {
    var e_1, _a;
    var trie = {};
    try {
        for(var _b = __values(Object.entries(operators)), _c = _b.next(); !_c.done; _c = _b.next()){
            var _d = __read(_c.value, 2), name_1 = _d[0], handler = _d[1];
            var node = trie;
            for(var i = 0; i < name_1.length; i++){
                var c = name_1[i];
                node[c] = node[c] || {};
                if (i === name_1.length - 1 && TYPES[name_1.charCodeAt(i)] & IDENTIFIER) {
                    node[c].needBoundary = true;
                }
                node = node[c];
            }
            node.handler = handler;
            node.end = true;
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return trie;
}
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;'
};
var unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#34;': '"',
    '&#39;': "'"
};
function escape(str) {
    return stringify(str).replace(/&|<|>|"|'/g, function(m) {
        return escapeMap[m];
    });
}
function unescape(str) {
    return stringify(str).replace(/&(amp|lt|gt|#34|#39);/g, function(m) {
        return unescapeMap[m];
    });
}
function escapeOnce(str) {
    return escape(unescape(stringify(str)));
}
function newlineToBr(v) {
    return stringify(v).replace(/\n/g, '<br />\n');
}
function stripHtml(v) {
    return stringify(v).replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, '');
}
var abs = argumentsToValue(Math.abs);
var atLeast = argumentsToValue(Math.max);
var atMost = argumentsToValue(Math.min);
var ceil = argumentsToValue(Math.ceil);
var dividedBy = argumentsToValue(function(dividend, divisor, integerArithmetic) {
    if (integerArithmetic === void 0) {
        integerArithmetic = false;
    }
    return integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor;
});
var floor = argumentsToValue(Math.floor);
var minus = argumentsToValue(function(v, arg) {
    return v - arg;
});
var modulo = argumentsToValue(function(v, arg) {
    return v % arg;
});
var times = argumentsToValue(function(v, arg) {
    return v * arg;
});
function round(v, arg) {
    if (arg === void 0) {
        arg = 0;
    }
    v = toValue$1(v);
    arg = toValue$1(arg);
    var amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
}
function plus(v, arg) {
    v = toValue$1(v);
    arg = toValue$1(arg);
    return Number(v) + Number(arg);
}
var urlDecode = function(x) {
    return stringify(x).split('+').map(decodeURIComponent).join(' ');
};
var urlEncode = function(x) {
    return stringify(x).split(' ').map(encodeURIComponent).join('+');
};
function toEnumerable(val) {
    if (isArray(val)) return val;
    if (isString(val) && val.length > 0) return [
        val
    ];
    if (isObject(val)) return Object.keys(val).map(function(key) {
        return [
            key,
            val[key]
        ];
    });
    return [];
}
function toArray(val) {
    if (isNil(val)) return [];
    if (isArray(val)) return val;
    return [
        val
    ];
}
var join = argumentsToValue(function(v, arg) {
    return toArray(v).join(arg === undefined ? ' ' : arg);
});
var last = argumentsToValue(function(v) {
    return isArray(v) ? last$1(v) : '';
});
var first = argumentsToValue(function(v) {
    return isArray(v) ? v[0] : '';
});
var reverse = argumentsToValue(function(v) {
    return __spreadArray([], __read(toArray(v)), false).reverse();
});
function sort(arr, property) {
    var _this = this;
    arr = toValue$1(arr);
    var getValue = function(obj) {
        return property ? _this.context.getFromScope(obj, stringify(property).split('.')) : obj;
    };
    return __spreadArray([], __read(toArray(arr)), false).sort(function(lhs, rhs) {
        lhs = getValue(lhs);
        rhs = getValue(rhs);
        return lhs < rhs ? -1 : lhs > rhs ? 1 : 0;
    });
}
function sortNatural(input, property) {
    input = toValue$1(input);
    var propertyString = stringify(property);
    var compare = property === undefined ? caseInsensitiveCompare : function(lhs, rhs) {
        return caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]);
    };
    return __spreadArray([], __read(toArray(input)), false).sort(compare);
}
var size = function(v) {
    return v && v.length || 0;
};
function map(arr, property) {
    var _this = this;
    arr = toValue$1(arr);
    return toArray(arr).map(function(obj) {
        return _this.context.getFromScope(obj, stringify(property).split('.'));
    });
}
function compact(arr) {
    arr = toValue$1(arr);
    return toArray(arr).filter(function(x) {
        return !isNil(toValue$1(x));
    });
}
function concat(v1, arg) {
    if (arg === void 0) {
        arg = [];
    }
    v1 = toValue$1(v1);
    arg = toArray(arg).map(function(v) {
        return toValue$1(v);
    });
    return toArray(v1).concat(arg);
}
function slice(v, begin, length) {
    if (length === void 0) {
        length = 1;
    }
    v = toValue$1(v);
    if (isNil(v)) return [];
    if (!isArray(v)) v = stringify(v);
    begin = begin < 0 ? v.length + begin : begin;
    return v.slice(begin, begin + length);
}
function where(arr, property, expected) {
    var _this = this;
    arr = toValue$1(arr);
    return toArray(arr).filter(function(obj) {
        var value = _this.context.getFromScope(obj, stringify(property).split('.'));
        if (expected === undefined) return isTruthy(value, _this.context);
        if (isComparable(expected)) return expected.equals(value);
        return value === expected;
    });
}
function uniq(arr) {
    arr = toValue$1(arr);
    var u = {};
    return (arr || []).filter(function(val) {
        if (hasOwnProperty.call(u, String(val))) return false;
        u[String(val)] = true;
        return true;
    });
}
var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var monthNamesShort = monthNames.map(abbr);
var dayNamesShort = dayNames.map(abbr);
var suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    'default': 'th'
};
function abbr(str) {
    return str.slice(0, 3);
}
function daysInMonth(d) {
    var feb = isLeapYear(d) ? 29 : 28;
    return [
        31,
        feb,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
}
function getDayOfYear(d) {
    var num = 0;
    for(var i = 0; i < d.getMonth(); ++i){
        num += daysInMonth(d)[i];
    }
    return num + d.getDate();
}
function getWeekOfYear(d, startDay) {
    var now = getDayOfYear(d) + (startDay - d.getDay());
    var jan1 = new Date(d.getFullYear(), 0, 1);
    var then = 7 - jan1.getDay() + startDay;
    return String(Math.floor((now - then) / 7) + 1);
}
function isLeapYear(d) {
    var year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
}
function getSuffix(d) {
    var str = d.getDate().toString();
    var index1 = parseInt(str.slice(-1));
    return suffixes[index1] || suffixes['default'];
}
function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
}
var padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
};
var padChars = {
    a: ' ',
    A: ' ',
    b: ' ',
    B: ' ',
    c: ' ',
    e: ' ',
    k: ' ',
    l: ' ',
    p: ' ',
    P: ' '
};
var formatCodes = {
    a: function(d) {
        return dayNamesShort[d.getDay()];
    },
    A: function(d) {
        return dayNames[d.getDay()];
    },
    b: function(d) {
        return monthNamesShort[d.getMonth()];
    },
    B: function(d) {
        return monthNames[d.getMonth()];
    },
    c: function(d) {
        return d.toLocaleString();
    },
    C: function(d) {
        return century(d);
    },
    d: function(d) {
        return d.getDate();
    },
    e: function(d) {
        return d.getDate();
    },
    H: function(d) {
        return d.getHours();
    },
    I: function(d) {
        return String(d.getHours() % 12 || 12);
    },
    j: function(d) {
        return getDayOfYear(d);
    },
    k: function(d) {
        return d.getHours();
    },
    l: function(d) {
        return String(d.getHours() % 12 || 12);
    },
    L: function(d) {
        return d.getMilliseconds();
    },
    m: function(d) {
        return d.getMonth() + 1;
    },
    M: function(d) {
        return d.getMinutes();
    },
    N: function(d, opts) {
        var width = Number(opts.width) || 9;
        var str = String(d.getMilliseconds()).substr(0, width);
        return padEnd(str, width, '0');
    },
    p: function(d) {
        return d.getHours() < 12 ? 'AM' : 'PM';
    },
    P: function(d) {
        return d.getHours() < 12 ? 'am' : 'pm';
    },
    q: function(d) {
        return getSuffix(d);
    },
    s: function(d) {
        return Math.round(d.getTime() / 1000);
    },
    S: function(d) {
        return d.getSeconds();
    },
    u: function(d) {
        return d.getDay() || 7;
    },
    U: function(d) {
        return getWeekOfYear(d, 0);
    },
    w: function(d) {
        return d.getDay();
    },
    W: function(d) {
        return getWeekOfYear(d, 1);
    },
    x: function(d) {
        return d.toLocaleDateString();
    },
    X: function(d) {
        return d.toLocaleTimeString();
    },
    y: function(d) {
        return d.getFullYear().toString().substring(2, 4);
    },
    Y: function(d) {
        return d.getFullYear();
    },
    z: function(d, opts) {
        var nOffset = Math.abs(d.getTimezoneOffset());
        var h = Math.floor(nOffset / 60);
        var m = nOffset % 60;
        return (d.getTimezoneOffset() > 0 ? '-' : '+') + padStart(h, 2, '0') + (opts.flags[':'] ? ':' : '') + padStart(m, 2, '0');
    },
    't': function() {
        return '\t';
    },
    'n': function() {
        return '\n';
    },
    '%': function() {
        return '%';
    }
};
formatCodes.h = formatCodes.b;
function strftime(d, formatStr) {
    var output = '';
    var remaining = formatStr;
    var match;
    while(match = rFormat.exec(remaining)){
        output += remaining.slice(0, match.index);
        remaining = remaining.slice(match.index + match[0].length);
        output += format(d, match);
    }
    return output + remaining;
}
function format(d, match) {
    var e_1, _a;
    var _b = __read(match, 5), input = _b[0], _c = _b[1], flagStr = _c === void 0 ? '' : _c, width = _b[2], modifier = _b[3], conversion = _b[4];
    var convert = formatCodes[conversion];
    if (!convert) return input;
    var flags = {};
    try {
        for(var flagStr_1 = __values(flagStr), flagStr_1_1 = flagStr_1.next(); !flagStr_1_1.done; flagStr_1_1 = flagStr_1.next()){
            var flag = flagStr_1_1.value;
            flags[flag] = true;
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (flagStr_1_1 && !flagStr_1_1.done && (_a = flagStr_1.return)) _a.call(flagStr_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    var ret = String(convert(d, {
        flags: flags,
        width: width,
        modifier: modifier
    }));
    var padChar = padChars[conversion] || '0';
    var padWidth = width || padWidths[conversion] || 0;
    if (flags['^']) ret = ret.toUpperCase();
    else if (flags['#']) ret = changeCase(ret);
    if (flags['_']) padChar = ' ';
    else if (flags['0']) padChar = '0';
    if (flags['-']) padWidth = 0;
    return padStart(ret, padWidth, padChar);
}
var OneMinute = 60000;
var hostTimezoneOffset = new Date().getTimezoneOffset();
var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
var TimezoneDate = function() {
    function TimezoneDate1(init, timezoneOffset) {
        if (init instanceof TimezoneDate1) {
            this.date = init.date;
            timezoneOffset = init.timezoneOffset;
        } else {
            var diff = (hostTimezoneOffset - timezoneOffset) * OneMinute;
            var time = new Date(init).getTime() + diff;
            this.date = new Date(time);
        }
        this.timezoneOffset = timezoneOffset;
    }
    TimezoneDate1.prototype.getTime = function() {
        return this.date.getTime();
    };
    TimezoneDate1.prototype.getMilliseconds = function() {
        return this.date.getMilliseconds();
    };
    TimezoneDate1.prototype.getSeconds = function() {
        return this.date.getSeconds();
    };
    TimezoneDate1.prototype.getMinutes = function() {
        return this.date.getMinutes();
    };
    TimezoneDate1.prototype.getHours = function() {
        return this.date.getHours();
    };
    TimezoneDate1.prototype.getDay = function() {
        return this.date.getDay();
    };
    TimezoneDate1.prototype.getDate = function() {
        return this.date.getDate();
    };
    TimezoneDate1.prototype.getMonth = function() {
        return this.date.getMonth();
    };
    TimezoneDate1.prototype.getFullYear = function() {
        return this.date.getFullYear();
    };
    TimezoneDate1.prototype.toLocaleTimeString = function(locale) {
        return this.date.toLocaleTimeString(locale);
    };
    TimezoneDate1.prototype.toLocaleDateString = function(locale) {
        return this.date.toLocaleDateString(locale);
    };
    TimezoneDate1.prototype.getTimezoneOffset = function() {
        return this.timezoneOffset;
    };
    TimezoneDate1.createDateFixedToTimezone = function(dateString) {
        var m = dateString.match(ISO8601_TIMEZONE_PATTERN);
        if (m && m[1] === 'Z') {
            return new TimezoneDate1(+new Date(dateString), 0);
        }
        if (m && m[2] && m[3] && m[4]) {
            var _a = __read(m, 5), sign = _a[2], hours = _a[3], minutes = _a[4];
            var delta = (sign === '+' ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
            return new TimezoneDate1(+new Date(dateString), delta);
        }
        return new Date(dateString);
    };
    return TimezoneDate1;
}();
function date(v, arg) {
    var opts = this.context.opts;
    var date1;
    v = toValue$1(v);
    arg = stringify(arg);
    if (v === 'now' || v === 'today') {
        date1 = new Date();
    } else if (isNumber(v)) {
        date1 = new Date(v * 1000);
    } else if (isString(v)) {
        if (/^\d+$/.test(v)) {
            date1 = new Date(+v * 1000);
        } else if (opts.preserveTimezones) {
            date1 = TimezoneDate.createDateFixedToTimezone(v);
        } else {
            date1 = new Date(v);
        }
    } else {
        date1 = v;
    }
    if (!isValidDate(date1)) return v;
    if (opts.hasOwnProperty('timezoneOffset')) {
        date1 = new TimezoneDate(date1, opts.timezoneOffset);
    }
    return strftime(date1, arg);
}
function isValidDate(date2) {
    return (date2 instanceof Date || date2 instanceof TimezoneDate) && !isNaN(date2.getTime());
}
function Default(value, defaultValue) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++){
        args[_i - 2] = arguments[_i];
    }
    value = toValue$1(value);
    if (isArray(value) || isString(value)) return value.length ? value : defaultValue;
    if (value === false && new Map(args).get('allow_false')) return false;
    return isFalsy(value, this.context) ? defaultValue : value;
}
function json(value) {
    return JSON.stringify(value);
}
var raw$1 = identify;
var LiquidError = function(_super) {
    __extends(LiquidError1, _super);
    function LiquidError1(err, token) {
        var _this = _super.call(this, err.message) || this;
        _this.originalError = err;
        _this.token = token;
        _this.context = '';
        return _this;
    }
    LiquidError1.prototype.update = function() {
        var err = this.originalError;
        this.context = mkContext(this.token);
        this.message = mkMessage(err.message, this.token);
        this.stack = this.message + '\n' + this.context + '\n' + this.stack + '\nFrom ' + err.stack;
    };
    return LiquidError1;
}(Error);
var TokenizationError = function(_super) {
    __extends(TokenizationError1, _super);
    function TokenizationError1(message, token) {
        var _this = _super.call(this, new Error(message), token) || this;
        _this.name = 'TokenizationError';
        _super.prototype.update.call(_this);
        return _this;
    }
    return TokenizationError1;
}(LiquidError);
var ParseError = function(_super) {
    __extends(ParseError1, _super);
    function ParseError1(err, token) {
        var _this = _super.call(this, err, token) || this;
        _this.name = 'ParseError';
        _this.message = err.message;
        _super.prototype.update.call(_this);
        return _this;
    }
    return ParseError1;
}(LiquidError);
var RenderError = function(_super) {
    __extends(RenderError1, _super);
    function RenderError1(err, tpl) {
        var _this = _super.call(this, err, tpl.token) || this;
        _this.name = 'RenderError';
        _this.message = err.message;
        _super.prototype.update.call(_this);
        return _this;
    }
    RenderError1.is = function(obj) {
        return obj.name === 'RenderError';
    };
    return RenderError1;
}(LiquidError);
var UndefinedVariableError = function(_super) {
    __extends(UndefinedVariableError1, _super);
    function UndefinedVariableError1(err, token) {
        var _this = _super.call(this, err, token) || this;
        _this.name = 'UndefinedVariableError';
        _this.message = err.message;
        _super.prototype.update.call(_this);
        return _this;
    }
    return UndefinedVariableError1;
}(LiquidError);
var InternalUndefinedVariableError = function(_super) {
    __extends(InternalUndefinedVariableError1, _super);
    function InternalUndefinedVariableError1(variableName) {
        var _this = _super.call(this, "undefined variable: ".concat(variableName)) || this;
        _this.name = 'InternalUndefinedVariableError';
        _this.variableName = variableName;
        return _this;
    }
    return InternalUndefinedVariableError1;
}(Error);
var AssertionError = function(_super) {
    __extends(AssertionError1, _super);
    function AssertionError1(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'AssertionError';
        _this.message = message + '';
        return _this;
    }
    return AssertionError1;
}(Error);
function mkContext(token) {
    var _a = __read(token.getPosition(), 1), line = _a[0];
    var lines = token.input.split('\n');
    var begin = Math.max(line - 2, 1);
    var end = Math.min(line + 3, lines.length);
    var context = range(begin, end + 1).map(function(lineNumber) {
        var indicator = lineNumber === line ? '>> ' : '   ';
        var num = padStart(String(lineNumber), String(end).length);
        var text = lines[lineNumber - 1];
        return "".concat(indicator).concat(num, "| ").concat(text);
    }).join('\n');
    return context;
}
function mkMessage(msg, token) {
    if (token.file) msg += ", file:".concat(token.file);
    var _a = __read(token.getPosition(), 2), line = _a[0], col = _a[1];
    msg += ", line:".concat(line, ", col:").concat(col);
    return msg;
}
function assert(predicate, message) {
    if (!predicate) {
        var msg = typeof message === 'function' ? message() : message || "expect ".concat(predicate, " to be true");
        throw new AssertionError(msg);
    }
}
function append(v, arg) {
    assert(arguments.length === 2, 'append expect 2 arguments');
    return stringify(v) + stringify(arg);
}
function prepend(v, arg) {
    assert(arguments.length === 2, 'prepend expect 2 arguments');
    return stringify(arg) + stringify(v);
}
function lstrip(v, chars) {
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return stringify(v).replace(new RegExp("^[".concat(chars, "]+"), 'g'), '');
    }
    return stringify(v).replace(/^\s+/, '');
}
function downcase(v) {
    return stringify(v).toLowerCase();
}
function upcase(str) {
    return stringify(str).toUpperCase();
}
function remove(v, arg) {
    return stringify(v).split(String(arg)).join('');
}
function removeFirst(v, l) {
    return stringify(v).replace(String(l), '');
}
function rstrip(str, chars) {
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return stringify(str).replace(new RegExp("[".concat(chars, "]+$"), 'g'), '');
    }
    return stringify(str).replace(/\s+$/, '');
}
function split(v, arg) {
    var arr = stringify(v).split(String(arg));
    while(arr.length && arr[arr.length - 1] === '')arr.pop();
    return arr;
}
function strip(v, chars) {
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return stringify(v).replace(new RegExp("^[".concat(chars, "]+"), 'g'), '').replace(new RegExp("[".concat(chars, "]+$"), 'g'), '');
    }
    return stringify(v).trim();
}
function stripNewlines(v) {
    return stringify(v).replace(/\n/g, '');
}
function capitalize(str) {
    str = stringify(str);
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function replace(v, pattern, replacement) {
    return stringify(v).split(String(pattern)).join(replacement);
}
function replaceFirst(v, arg1, arg2) {
    return stringify(v).replace(String(arg1), arg2);
}
function truncate(v, l, o) {
    if (l === void 0) {
        l = 50;
    }
    if (o === void 0) {
        o = '...';
    }
    v = stringify(v);
    if (v.length <= l) return v;
    return v.substring(0, l - o.length) + o;
}
function truncatewords(v, l, o) {
    if (l === void 0) {
        l = 15;
    }
    if (o === void 0) {
        o = '...';
    }
    var arr = stringify(v).split(/\s+/);
    var ret = arr.slice(0, l).join(' ');
    if (arr.length >= l) ret += o;
    return ret;
}
var builtinFilters = Object.freeze({
    __proto__: null,
    escape: escape,
    escapeOnce: escapeOnce,
    newlineToBr: newlineToBr,
    stripHtml: stripHtml,
    abs: abs,
    atLeast: atLeast,
    atMost: atMost,
    ceil: ceil,
    dividedBy: dividedBy,
    floor: floor,
    minus: minus,
    modulo: modulo,
    times: times,
    round: round,
    plus: plus,
    urlDecode: urlDecode,
    urlEncode: urlEncode,
    join: join,
    last: last,
    first: first,
    reverse: reverse,
    sort: sort,
    sortNatural: sortNatural,
    size: size,
    map: map,
    compact: compact,
    concat: concat,
    slice: slice,
    where: where,
    uniq: uniq,
    date: date,
    Default: Default,
    json: json,
    raw: raw$1,
    append: append,
    prepend: prepend,
    lstrip: lstrip,
    downcase: downcase,
    upcase: upcase,
    remove: remove,
    removeFirst: removeFirst,
    rstrip: rstrip,
    split: split,
    strip: strip,
    stripNewlines: stripNewlines,
    capitalize: capitalize,
    replace: replace,
    replaceFirst: replaceFirst,
    truncate: truncate,
    truncatewords: truncatewords
});
var TokenKind;
(function(TokenKind1) {
    TokenKind1[TokenKind1["Number"] = 1] = "Number";
    TokenKind1[TokenKind1["Literal"] = 2] = "Literal";
    TokenKind1[TokenKind1["Tag"] = 4] = "Tag";
    TokenKind1[TokenKind1["Output"] = 8] = "Output";
    TokenKind1[TokenKind1["HTML"] = 16] = "HTML";
    TokenKind1[TokenKind1["Filter"] = 32] = "Filter";
    TokenKind1[TokenKind1["Hash"] = 64] = "Hash";
    TokenKind1[TokenKind1["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind1[TokenKind1["Word"] = 256] = "Word";
    TokenKind1[TokenKind1["Range"] = 512] = "Range";
    TokenKind1[TokenKind1["Quoted"] = 1024] = "Quoted";
    TokenKind1[TokenKind1["Operator"] = 2048] = "Operator";
    TokenKind1[TokenKind1["Delimited"] = 12] = "Delimited";
})(TokenKind || (TokenKind = {}));
function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
}
function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
}
function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
}
function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
}
function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
}
function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
}
function isLiteralToken(val) {
    return getKind(val) === TokenKind.Literal;
}
function isNumberToken(val) {
    return getKind(val) === TokenKind.Number;
}
function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
}
function isWordToken(val) {
    return getKind(val) === TokenKind.Word;
}
function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
}
function getKind(val) {
    return val ? val.kind : -1;
}
Object.freeze({
    __proto__: null,
    isDelimitedToken: isDelimitedToken,
    isOperatorToken: isOperatorToken,
    isHTMLToken: isHTMLToken,
    isOutputToken: isOutputToken,
    isTagToken: isTagToken,
    isQuotedToken: isQuotedToken,
    isLiteralToken: isLiteralToken,
    isNumberToken: isNumberToken,
    isPropertyAccessToken: isPropertyAccessToken,
    isWordToken: isWordToken,
    isRangeToken: isRangeToken
});
var NullDrop = function(_super) {
    __extends(NullDrop1, _super);
    function NullDrop1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullDrop1.prototype.equals = function(value) {
        return isNil(toValue$1(value));
    };
    NullDrop1.prototype.gt = function() {
        return false;
    };
    NullDrop1.prototype.geq = function() {
        return false;
    };
    NullDrop1.prototype.lt = function() {
        return false;
    };
    NullDrop1.prototype.leq = function() {
        return false;
    };
    NullDrop1.prototype.valueOf = function() {
        return null;
    };
    return NullDrop1;
}(Drop);
var EmptyDrop = function(_super) {
    __extends(EmptyDrop1, _super);
    function EmptyDrop1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyDrop1.prototype.equals = function(value) {
        if (value instanceof EmptyDrop1) return false;
        value = toValue$1(value);
        if (isString(value) || isArray(value)) return value.length === 0;
        if (isObject(value)) return Object.keys(value).length === 0;
        return false;
    };
    EmptyDrop1.prototype.gt = function() {
        return false;
    };
    EmptyDrop1.prototype.geq = function() {
        return false;
    };
    EmptyDrop1.prototype.lt = function() {
        return false;
    };
    EmptyDrop1.prototype.leq = function() {
        return false;
    };
    EmptyDrop1.prototype.valueOf = function() {
        return '';
    };
    return EmptyDrop1;
}(Drop);
var BlankDrop = function(_super) {
    __extends(BlankDrop1, _super);
    function BlankDrop1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlankDrop1.prototype.equals = function(value) {
        if (value === false) return true;
        if (isNil(toValue$1(value))) return true;
        if (isString(value)) return /^\s*$/.test(value);
        return _super.prototype.equals.call(this, value);
    };
    return BlankDrop1;
}(EmptyDrop);
var nil = new NullDrop();
var literalValues = {
    'true': true,
    'false': false,
    'nil': nil,
    'null': nil,
    'empty': new EmptyDrop(),
    'blank': new BlankDrop()
};
var rHex = /[\da-fA-F]/;
var rOct = /[0-7]/;
var escapeChar = {
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
    v: '\x0B'
};
function hexVal(c) {
    var code = c.charCodeAt(0);
    if (code >= 97) return code - 87;
    if (code >= 65) return code - 55;
    return code - 48;
}
function parseStringLiteral(str) {
    var ret = '';
    for(var i = 1; i < str.length - 1; i++){
        if (str[i] !== '\\') {
            ret += str[i];
            continue;
        }
        if (escapeChar[str[i + 1]] !== undefined) {
            ret += escapeChar[str[++i]];
        } else if (str[i + 1] === 'u') {
            var val = 0;
            var j = i + 2;
            while(j <= i + 5 && rHex.test(str[j])){
                val = val * 16 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        } else if (!rOct.test(str[i + 1])) {
            ret += str[++i];
        } else {
            var j = i + 1;
            var val = 0;
            while(j <= i + 3 && rOct.test(str[j])){
                val = val * 8 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
    }
    return ret;
}
var Expression = function() {
    function Expression1(tokens) {
        this.postfix = __spreadArray([], __read(toPostfix(tokens)), false);
    }
    Expression1.prototype.evaluate = function(ctx, lenient) {
        var operands, _a, _b, token, r, l, result, _c, _d, e_1_1;
        var e_1, _e;
        return __generator(this, function(_f) {
            switch(_f.label){
                case 0:
                    assert(ctx, 'unable to evaluate: context not defined');
                    operands = [];
                    _f.label = 1;
                case 1:
                    _f.trys.push([
                        1,
                        9,
                        10,
                        11
                    ]);
                    _a = __values(this.postfix), _b = _a.next();
                    _f.label = 2;
                case 2:
                    if (!!_b.done) return [
                        3,
                        8
                    ];
                    token = _b.value;
                    if (!isOperatorToken(token)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        operands.pop()
                    ];
                case 3:
                    r = _f.sent();
                    return [
                        4,
                        operands.pop()
                    ];
                case 4:
                    l = _f.sent();
                    result = evalOperatorToken(ctx.opts.operators, token, l, r, ctx);
                    operands.push(result);
                    return [
                        3,
                        7
                    ];
                case 5:
                    _d = (_c = operands).push;
                    return [
                        4,
                        evalToken(token, ctx, lenient && this.postfix.length === 1)
                    ];
                case 6:
                    _d.apply(_c, [
                        _f.sent()
                    ]);
                    _f.label = 7;
                case 7:
                    _b = _a.next();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    e_1_1 = _f.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        11
                    ];
                case 10:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        2,
                        operands[0]
                    ];
            }
        });
    };
    return Expression1;
}();
function evalToken(token, ctx, lenient) {
    if (lenient === void 0) {
        lenient = false;
    }
    if (isPropertyAccessToken(token)) return evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token)) return evalRangeToken(token, ctx);
    if (isLiteralToken(token)) return evalLiteralToken(token);
    if (isNumberToken(token)) return evalNumberToken(token);
    if (isWordToken(token)) return token.getText();
    if (isQuotedToken(token)) return evalQuotedToken(token);
}
function evalPropertyAccessToken(token, ctx, lenient) {
    var props = token.props.map(function(prop) {
        return evalToken(prop, ctx, false);
    });
    try {
        return ctx.get(__spreadArray([
            token.propertyName
        ], __read(props), false));
    } catch (e) {
        if (lenient && e.name === 'InternalUndefinedVariableError') return null;
        throw new UndefinedVariableError(e, token);
    }
}
function evalNumberToken(token) {
    var str = token.whole.content + '.' + (token.decimal ? token.decimal.content : '');
    return Number(str);
}
function evalQuotedToken(token) {
    return parseStringLiteral(token.getText());
}
function evalOperatorToken(operators, token, lhs, rhs, ctx) {
    var impl = operators[token.operator];
    return impl(lhs, rhs, ctx);
}
function evalLiteralToken(token) {
    return literalValues[token.literal];
}
function evalRangeToken(token, ctx) {
    var low = evalToken(token.lhs, ctx);
    var high = evalToken(token.rhs, ctx);
    return range(+low, +high + 1);
}
function toPostfix(tokens) {
    var ops, tokens_1, tokens_1_1, token, e_2_1;
    var e_2, _a;
    return __generator(this, function(_b) {
        switch(_b.label){
            case 0:
                ops = [];
                _b.label = 1;
            case 1:
                _b.trys.push([
                    1,
                    10,
                    11,
                    12
                ]);
                tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next();
                _b.label = 2;
            case 2:
                if (!!tokens_1_1.done) return [
                    3,
                    9
                ];
                token = tokens_1_1.value;
                if (!isOperatorToken(token)) return [
                    3,
                    6
                ];
                _b.label = 3;
            case 3:
                if (!(ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence())) return [
                    3,
                    5
                ];
                return [
                    4,
                    ops.pop()
                ];
            case 4:
                _b.sent();
                return [
                    3,
                    3
                ];
            case 5:
                ops.push(token);
                return [
                    3,
                    8
                ];
            case 6:
                return [
                    4,
                    token
                ];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                tokens_1_1 = tokens_1.next();
                return [
                    3,
                    2
                ];
            case 9:
                return [
                    3,
                    12
                ];
            case 10:
                e_2_1 = _b.sent();
                e_2 = {
                    error: e_2_1
                };
                return [
                    3,
                    12
                ];
            case 11:
                try {
                    if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                } finally{
                    if (e_2) throw e_2.error;
                }
                return [
                    7
                ];
            case 12:
                if (!ops.length) return [
                    3,
                    14
                ];
                return [
                    4,
                    ops.pop()
                ];
            case 13:
                _b.sent();
                return [
                    3,
                    12
                ];
            case 14:
                return [
                    2
                ];
        }
    });
}
var Token = function() {
    function Token1(kind, input, begin, end, file) {
        this.kind = kind;
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
    }
    Token1.prototype.getText = function() {
        return this.input.slice(this.begin, this.end);
    };
    Token1.prototype.getPosition = function() {
        var _a = __read([
            1,
            1
        ], 2), row = _a[0], col = _a[1];
        for(var i = 0; i < this.begin; i++){
            if (this.input[i] === '\n') {
                row++;
                col = 1;
            } else col++;
        }
        return [
            row,
            col
        ];
    };
    Token1.prototype.size = function() {
        return this.end - this.begin;
    };
    return Token1;
}();
var DelimitedToken = function(_super) {
    __extends(DelimitedToken1, _super);
    function DelimitedToken1(kind, content, input, begin, end, trimLeft1, trimRight1, file) {
        var _this = _super.call(this, kind, input, begin, end, file) || this;
        _this.trimLeft = false;
        _this.trimRight = false;
        _this.content = _this.getText();
        var tl = content[0] === '-';
        var tr = last$1(content) === '-';
        _this.content = content.slice(tl ? 1 : 0, tr ? -1 : content.length).trim();
        _this.trimLeft = tl || trimLeft1;
        _this.trimRight = tr || trimRight1;
        return _this;
    }
    return DelimitedToken1;
}(Token);
function whiteSpaceCtrl(tokens, options) {
    var inRaw = false;
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (!isDelimitedToken(token)) continue;
        if (!inRaw && token.trimLeft) {
            trimLeft(tokens[i - 1], options.greedy);
        }
        if (isTagToken(token)) {
            if (token.name === 'raw') inRaw = true;
            else if (token.name === 'endraw') inRaw = false;
        }
        if (!inRaw && token.trimRight) {
            trimRight(tokens[i + 1], options.greedy);
        }
    }
}
function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token)) return;
    var mask = greedy ? BLANK : INLINE_BLANK;
    while(TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)token.trimRight++;
}
function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token)) return;
    var mask = greedy ? BLANK : INLINE_BLANK;
    while(TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === '\n') token.trimLeft++;
}
var NumberToken = function(_super) {
    __extends(NumberToken1, _super);
    function NumberToken1(whole, decimal) {
        var _this = _super.call(this, TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file) || this;
        _this.whole = whole;
        _this.decimal = decimal;
        return _this;
    }
    return NumberToken1;
}(Token);
var IdentifierToken = function(_super) {
    __extends(IdentifierToken1, _super);
    function IdentifierToken1(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Word, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.content = _this.getText();
        return _this;
    }
    IdentifierToken1.prototype.isNumber = function(allowSign) {
        if (allowSign === void 0) {
            allowSign = false;
        }
        var begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN ? this.begin + 1 : this.begin;
        for(var i = begin; i < this.end; i++){
            if (!(TYPES[this.input.charCodeAt(i)] & NUMBER)) return false;
        }
        return true;
    };
    return IdentifierToken1;
}(Token);
var LiteralToken = function(_super) {
    __extends(LiteralToken1, _super);
    function LiteralToken1(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Literal, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.literal = _this.getText();
        return _this;
    }
    return LiteralToken1;
}(Token);
var precedence = {
    '==': 1,
    '!=': 1,
    '>': 1,
    '<': 1,
    '>=': 1,
    '<=': 1,
    'contains': 1,
    'and': 0,
    'or': 0
};
var OperatorToken = function(_super) {
    __extends(OperatorToken1, _super);
    function OperatorToken1(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Operator, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.operator = _this.getText();
        return _this;
    }
    OperatorToken1.prototype.getPrecedence = function() {
        var key = this.getText();
        return key in precedence ? precedence[key] : 1;
    };
    return OperatorToken1;
}(Token);
var PropertyAccessToken = function(_super) {
    __extends(PropertyAccessToken1, _super);
    function PropertyAccessToken1(variable, props, end) {
        var _this = _super.call(this, TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file) || this;
        _this.variable = variable;
        _this.props = props;
        _this.propertyName = _this.variable instanceof IdentifierToken ? _this.variable.getText() : parseStringLiteral(_this.variable.getText());
        return _this;
    }
    return PropertyAccessToken1;
}(Token);
var FilterToken = function(_super) {
    __extends(FilterToken1, _super);
    function FilterToken1(name, args, input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Filter, input, begin, end, file) || this;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    return FilterToken1;
}(Token);
var HashToken = function(_super) {
    __extends(HashToken1, _super);
    function HashToken1(input, begin, end, name, value, file) {
        var _this = _super.call(this, TokenKind.Hash, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.name = name;
        _this.value = value;
        _this.file = file;
        return _this;
    }
    return HashToken1;
}(Token);
var QuotedToken = function(_super) {
    __extends(QuotedToken1, _super);
    function QuotedToken1(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.Quoted, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        return _this;
    }
    return QuotedToken1;
}(Token);
var HTMLToken = function(_super) {
    __extends(HTMLToken1, _super);
    function HTMLToken1(input, begin, end, file) {
        var _this = _super.call(this, TokenKind.HTML, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.file = file;
        _this.trimLeft = 0;
        _this.trimRight = 0;
        return _this;
    }
    HTMLToken1.prototype.getContent = function() {
        return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    };
    return HTMLToken1;
}(Token);
var RangeToken = function(_super) {
    __extends(RangeToken1, _super);
    function RangeToken1(input, begin, end, lhs, rhs, file) {
        var _this = _super.call(this, TokenKind.Range, input, begin, end, file) || this;
        _this.input = input;
        _this.begin = begin;
        _this.end = end;
        _this.lhs = lhs;
        _this.rhs = rhs;
        _this.file = file;
        return _this;
    }
    return RangeToken1;
}(Token);
var OutputToken = function(_super) {
    __extends(OutputToken1, _super);
    function OutputToken1(input, begin, end, options, file) {
        var _this = this;
        var trimOutputLeft = options.trimOutputLeft, trimOutputRight = options.trimOutputRight, outputDelimiterLeft = options.outputDelimiterLeft, outputDelimiterRight = options.outputDelimiterRight;
        var value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
        _this = _super.call(this, TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file) || this;
        return _this;
    }
    return OutputToken1;
}(DelimitedToken);
function matchOperator(str, begin, trie, end) {
    if (end === void 0) {
        end = str.length;
    }
    var node = trie;
    var i = begin;
    var info;
    while(node[str[i]] && i < end){
        node = node[str[i++]];
        if (node['end']) info = node;
    }
    if (!info) return -1;
    if (info['needBoundary'] && TYPES[str.charCodeAt(i)] & IDENTIFIER) return -1;
    return i;
}
var LiquidTagToken = function(_super) {
    __extends(LiquidTagToken1, _super);
    function LiquidTagToken1(input, begin, end, options, file) {
        var _this = this;
        var value = input.slice(begin, end);
        _this = _super.call(this, TokenKind.Tag, value, input, begin, end, false, false, file) || this;
        if (!/\S/.test(value)) {
            _this.name = '';
            _this.args = '';
        } else {
            var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
            _this.name = tokenizer.readIdentifier().getText();
            if (!_this.name) throw new TokenizationError("illegal liquid tag syntax", _this);
            tokenizer.skipBlank();
            _this.args = tokenizer.remaining();
        }
        return _this;
    }
    return LiquidTagToken1;
}(DelimitedToken);
var Tokenizer = function() {
    function Tokenizer1(input, trie, file) {
        if (file === void 0) {
            file = '';
        }
        this.input = input;
        this.trie = trie;
        this.file = file;
        this.p = 0;
        this.rawBeginAt = -1;
        this.N = input.length;
    }
    Tokenizer1.prototype.readExpression = function() {
        return new Expression(this.readExpressionTokens());
    };
    Tokenizer1.prototype.readExpressionTokens = function() {
        var operand, operator, operand_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    operand = this.readValue();
                    if (!operand) return [
                        2
                    ];
                    return [
                        4,
                        operand
                    ];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(this.p < this.N)) return [
                        3,
                        5
                    ];
                    operator = this.readOperator();
                    if (!operator) return [
                        2
                    ];
                    operand_1 = this.readValue();
                    if (!operand_1) return [
                        2
                    ];
                    return [
                        4,
                        operator
                    ];
                case 3:
                    _a.sent();
                    return [
                        4,
                        operand_1
                    ];
                case 4:
                    _a.sent();
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    };
    Tokenizer1.prototype.readOperator = function() {
        this.skipBlank();
        var end = matchOperator(this.input, this.p, this.trie);
        if (end === -1) return;
        return new OperatorToken(this.input, this.p, this.p = end, this.file);
    };
    Tokenizer1.prototype.readFilters = function() {
        var filters1 = [];
        while(true){
            var filter = this.readFilter();
            if (!filter) return filters1;
            filters1.push(filter);
        }
    };
    Tokenizer1.prototype.readFilter = function() {
        var _this = this;
        this.skipBlank();
        if (this.end()) return null;
        assert(this.peek() === '|', function() {
            return "unexpected token at ".concat(_this.snapshot());
        });
        this.p++;
        var begin = this.p;
        var name = this.readIdentifier();
        if (!name.size()) return null;
        var args = [];
        this.skipBlank();
        if (this.peek() === ':') {
            do {
                ++this.p;
                var arg = this.readFilterArg();
                arg && args.push(arg);
                this.skipBlank();
                assert(this.end() || this.peek() === ',' || this.peek() === '|', function() {
                    return "unexpected character ".concat(_this.snapshot());
                });
            }while (this.peek() === ',')
        }
        return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
    };
    Tokenizer1.prototype.readFilterArg = function() {
        var key = this.readValue();
        if (!key) return;
        this.skipBlank();
        if (this.peek() !== ':') return key;
        ++this.p;
        var value = this.readValue();
        return [
            key.getText(),
            value
        ];
    };
    Tokenizer1.prototype.readTopLevelTokens = function(options) {
        if (options === void 0) {
            options = defaultOptions;
        }
        var tokens = [];
        while(this.p < this.N){
            var token = this.readTopLevelToken(options);
            tokens.push(token);
        }
        whiteSpaceCtrl(tokens, options);
        return tokens;
    };
    Tokenizer1.prototype.readTopLevelToken = function(options) {
        var tagDelimiterLeft = options.tagDelimiterLeft, outputDelimiterLeft = options.outputDelimiterLeft;
        if (this.rawBeginAt > -1) return this.readEndrawOrRawContent(options);
        if (this.match(tagDelimiterLeft)) return this.readTagToken(options);
        if (this.match(outputDelimiterLeft)) return this.readOutputToken(options);
        return this.readHTMLToken([
            tagDelimiterLeft,
            outputDelimiterLeft
        ]);
    };
    Tokenizer1.prototype.readHTMLToken = function(stopStrings) {
        var _this = this;
        var begin = this.p;
        while(this.p < this.N){
            if (stopStrings.some(function(str) {
                return _this.match(str);
            })) break;
            ++this.p;
        }
        return new HTMLToken(this.input, begin, this.p, this.file);
    };
    Tokenizer1.prototype.readTagToken = function(options) {
        if (options === void 0) {
            options = defaultOptions;
        }
        var _a = this, file = _a.file, input = _a.input;
        var begin = this.p;
        if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
            throw this.mkError("tag ".concat(this.snapshot(begin), " not closed"), begin);
        }
        var token = new TagToken(input, begin, this.p, options, file);
        if (token.name === 'raw') this.rawBeginAt = begin;
        return token;
    };
    Tokenizer1.prototype.readToDelimiter = function(delimiter) {
        while(this.p < this.N){
            if (this.peekType() & QUOTE) {
                this.readQuoted();
                continue;
            }
            ++this.p;
            if (this.rmatch(delimiter)) return this.p;
        }
        return -1;
    };
    Tokenizer1.prototype.readOutputToken = function(options) {
        if (options === void 0) {
            options = defaultOptions;
        }
        var _a = this, file = _a.file, input = _a.input;
        var outputDelimiterRight = options.outputDelimiterRight;
        var begin = this.p;
        if (this.readToDelimiter(outputDelimiterRight) === -1) {
            throw this.mkError("output ".concat(this.snapshot(begin), " not closed"), begin);
        }
        return new OutputToken(input, begin, this.p, options, file);
    };
    Tokenizer1.prototype.readEndrawOrRawContent = function(options) {
        var tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
        var begin = this.p;
        var leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
        while(this.p < this.N){
            if (this.readIdentifier().getText() !== 'endraw') {
                leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
                continue;
            }
            while(this.p <= this.N){
                if (this.rmatch(tagDelimiterRight)) {
                    var end = this.p;
                    if (begin === leftPos) {
                        this.rawBeginAt = -1;
                        return new TagToken(this.input, begin, end, options, this.file);
                    } else {
                        this.p = leftPos;
                        return new HTMLToken(this.input, begin, leftPos, this.file);
                    }
                }
                if (this.rmatch(tagDelimiterLeft)) break;
                this.p++;
            }
        }
        throw this.mkError("raw ".concat(this.snapshot(this.rawBeginAt), " not closed"), begin);
    };
    Tokenizer1.prototype.readLiquidTagTokens = function(options) {
        if (options === void 0) {
            options = defaultOptions;
        }
        var tokens = [];
        while(this.p < this.N){
            var token = this.readLiquidTagToken(options);
            if (token.name) tokens.push(token);
        }
        return tokens;
    };
    Tokenizer1.prototype.readLiquidTagToken = function(options) {
        var _a = this, file = _a.file, input = _a.input;
        var begin = this.p;
        var end = this.N;
        if (this.readToDelimiter('\n') !== -1) end = this.p;
        var token = new LiquidTagToken(input, begin, end, options, file);
        return token;
    };
    Tokenizer1.prototype.mkError = function(msg, begin) {
        return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
    };
    Tokenizer1.prototype.snapshot = function(begin) {
        if (begin === void 0) {
            begin = this.p;
        }
        return JSON.stringify(ellipsis(this.input.slice(begin), 16));
    };
    Tokenizer1.prototype.readWord = function() {
        console.warn('Tokenizer#readWord() will be removed, use #readIdentifier instead');
        return this.readIdentifier();
    };
    Tokenizer1.prototype.readIdentifier = function() {
        this.skipBlank();
        var begin = this.p;
        while(this.peekType() & IDENTIFIER)++this.p;
        return new IdentifierToken(this.input, begin, this.p, this.file);
    };
    Tokenizer1.prototype.readHashes = function(jekyllStyle) {
        var hashes = [];
        while(true){
            var hash = this.readHash(jekyllStyle);
            if (!hash) return hashes;
            hashes.push(hash);
        }
    };
    Tokenizer1.prototype.readHash = function(jekyllStyle) {
        this.skipBlank();
        if (this.peek() === ',') ++this.p;
        var begin = this.p;
        var name = this.readIdentifier();
        if (!name.size()) return;
        var value;
        this.skipBlank();
        var sep1 = jekyllStyle ? '=' : ':';
        if (this.peek() === sep1) {
            ++this.p;
            value = this.readValue();
        }
        return new HashToken(this.input, begin, this.p, name, value, this.file);
    };
    Tokenizer1.prototype.remaining = function() {
        return this.input.slice(this.p);
    };
    Tokenizer1.prototype.advance = function(i) {
        if (i === void 0) {
            i = 1;
        }
        this.p += i;
    };
    Tokenizer1.prototype.end = function() {
        return this.p >= this.N;
    };
    Tokenizer1.prototype.readTo = function(end) {
        while(this.p < this.N){
            ++this.p;
            if (this.rmatch(end)) return this.p;
        }
        return -1;
    };
    Tokenizer1.prototype.readValue = function() {
        var value = this.readQuoted() || this.readRange();
        if (value) return value;
        if (this.peek() === '[') {
            this.p++;
            var prop = this.readQuoted();
            if (!prop) return;
            if (this.peek() !== ']') return;
            this.p++;
            return new PropertyAccessToken(prop, [], this.p);
        }
        var variable = this.readIdentifier();
        if (!variable.size()) return;
        var isNumber1 = variable.isNumber(true);
        var props = [];
        while(true){
            if (this.peek() === '[') {
                isNumber1 = false;
                this.p++;
                var prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
                this.readTo(']');
                props.push(prop);
            } else if (this.peek() === '.' && this.peek(1) !== '.') {
                this.p++;
                var prop = this.readIdentifier();
                if (!prop.size()) break;
                if (!prop.isNumber()) isNumber1 = false;
                props.push(prop);
            } else break;
        }
        if (!props.length && literalValues.hasOwnProperty(variable.content)) {
            return new LiteralToken(this.input, variable.begin, variable.end, this.file);
        }
        if (isNumber1) return new NumberToken(variable, props[0]);
        return new PropertyAccessToken(variable, props, this.p);
    };
    Tokenizer1.prototype.readRange = function() {
        this.skipBlank();
        var begin = this.p;
        if (this.peek() !== '(') return;
        ++this.p;
        var lhs = this.readValueOrThrow();
        this.p += 2;
        var rhs = this.readValueOrThrow();
        ++this.p;
        return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    };
    Tokenizer1.prototype.readValueOrThrow = function() {
        var _this = this;
        var value = this.readValue();
        assert(value, function() {
            return "unexpected token ".concat(_this.snapshot(), ", value expected");
        });
        return value;
    };
    Tokenizer1.prototype.readQuoted = function() {
        this.skipBlank();
        var begin = this.p;
        if (!(this.peekType() & QUOTE)) return;
        ++this.p;
        var escaped = false;
        while(this.p < this.N){
            ++this.p;
            if (this.input[this.p - 1] === this.input[begin] && !escaped) break;
            if (escaped) escaped = false;
            else if (this.input[this.p - 1] === '\\') escaped = true;
        }
        return new QuotedToken(this.input, begin, this.p, this.file);
    };
    Tokenizer1.prototype.readFileNameTemplate = function(options) {
        var outputDelimiterLeft, htmlStopStrings, htmlStopStringSet;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    outputDelimiterLeft = options.outputDelimiterLeft;
                    htmlStopStrings = [
                        ',',
                        ' ',
                        outputDelimiterLeft
                    ];
                    htmlStopStringSet = new Set(htmlStopStrings);
                    _a.label = 1;
                case 1:
                    if (!(this.p < this.N && !htmlStopStringSet.has(this.peek()))) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        this.match(outputDelimiterLeft) ? this.readOutputToken(options) : this.readHTMLToken(htmlStopStrings)
                    ];
                case 2:
                    _a.sent();
                    return [
                        3,
                        1
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    };
    Tokenizer1.prototype.match = function(word) {
        for(var i = 0; i < word.length; i++){
            if (word[i] !== this.input[this.p + i]) return false;
        }
        return true;
    };
    Tokenizer1.prototype.rmatch = function(pattern) {
        for(var i = 0; i < pattern.length; i++){
            if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i]) return false;
        }
        return true;
    };
    Tokenizer1.prototype.peekType = function(n) {
        if (n === void 0) {
            n = 0;
        }
        return TYPES[this.input.charCodeAt(this.p + n)];
    };
    Tokenizer1.prototype.peek = function(n) {
        if (n === void 0) {
            n = 0;
        }
        return this.input[this.p + n];
    };
    Tokenizer1.prototype.skipBlank = function() {
        while(this.peekType() & BLANK)++this.p;
    };
    return Tokenizer1;
}();
var TagToken = function(_super) {
    __extends(TagToken1, _super);
    function TagToken1(input, begin, end, options, file) {
        var _this = this;
        var trimTagLeft = options.trimTagLeft, trimTagRight = options.trimTagRight, tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
        var value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
        _this = _super.call(this, TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file) || this;
        var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
        _this.name = tokenizer.readIdentifier().getText();
        if (!_this.name) throw new TokenizationError("illegal tag syntax", _this);
        tokenizer.skipBlank();
        _this.args = tokenizer.remaining();
        return _this;
    }
    return TagToken1;
}(DelimitedToken);
var ParseStream = function() {
    function ParseStream1(tokens, parseToken) {
        this.handlers = {};
        this.stopRequested = false;
        this.tokens = tokens;
        this.parseToken = parseToken;
    }
    ParseStream1.prototype.on = function(name, cb) {
        this.handlers[name] = cb;
        return this;
    };
    ParseStream1.prototype.trigger = function(event, arg) {
        var h = this.handlers[event];
        return h ? (h.call(this, arg), true) : false;
    };
    ParseStream1.prototype.start = function() {
        this.trigger('start');
        var token;
        while(!this.stopRequested && (token = this.tokens.shift())){
            if (this.trigger('token', token)) continue;
            if (isTagToken(token) && this.trigger("tag:".concat(token.name), token)) {
                continue;
            }
            var template = this.parseToken(token, this.tokens);
            this.trigger('template', template);
        }
        if (!this.stopRequested) this.trigger('end');
        return this;
    };
    ParseStream1.prototype.stop = function() {
        this.stopRequested = true;
        return this;
    };
    return ParseStream1;
}();
var Hash = function() {
    function Hash1(markup, jekyllStyle) {
        var e_1, _a;
        this.hash = {};
        var tokenizer = new Tokenizer(markup, {});
        try {
            for(var _b = __values(tokenizer.readHashes(jekyllStyle)), _c = _b.next(); !_c.done; _c = _b.next()){
                var hash = _c.value;
                this.hash[hash.name.content] = hash.value;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    }
    Hash1.prototype.render = function(ctx) {
        var hash, _a, _b, key, _c, _d, _e, e_2_1;
        var e_2, _f;
        return __generator(this, function(_g) {
            switch(_g.label){
                case 0:
                    hash = {};
                    _g.label = 1;
                case 1:
                    _g.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    _a = __values(Object.keys(this.hash)), _b = _a.next();
                    _g.label = 2;
                case 2:
                    if (!!_b.done) return [
                        3,
                        7
                    ];
                    key = _b.value;
                    _c = hash;
                    _d = key;
                    if (!(this.hash[key] === undefined)) return [
                        3,
                        3
                    ];
                    _e = true;
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        evalToken(this.hash[key], ctx)
                    ];
                case 4:
                    _e = _g.sent();
                    _g.label = 5;
                case 5:
                    _c[_d] = _e;
                    _g.label = 6;
                case 6:
                    _b = _a.next();
                    return [
                        3,
                        2
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    e_2_1 = _g.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                    return [
                        7
                    ];
                case 10:
                    return [
                        2,
                        hash
                    ];
            }
        });
    };
    return Hash1;
}();
function isKeyValuePair(arr) {
    return isArray(arr);
}
var Filter = function() {
    function Filter1(name, impl, args, liquid1) {
        this.name = name;
        this.impl = impl || identify;
        this.args = args;
        this.liquid = liquid1;
    }
    Filter1.prototype.render = function(value, context) {
        var e_1, _a;
        var argv = [];
        try {
            for(var _b = __values(this.args), _c = _b.next(); !_c.done; _c = _b.next()){
                var arg = _c.value;
                if (isKeyValuePair(arg)) argv.push([
                    arg[0],
                    evalToken(arg[1], context)
                ]);
                else argv.push(evalToken(arg, context));
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this.impl.apply({
            context: context,
            liquid: this.liquid
        }, __spreadArray([
            value
        ], __read(argv), false));
    };
    return Filter1;
}();
var Value = function() {
    function Value1(str, liquid2) {
        this.filters = [];
        var tokenizer = new Tokenizer(str, liquid2.options.operatorsTrie);
        this.initial = tokenizer.readExpression();
        this.filters = tokenizer.readFilters().map(function(_a) {
            var name = _a.name, args = _a.args;
            return new Filter(name, liquid2.filters.get(name), args, liquid2);
        });
    }
    Value1.prototype.value = function(ctx, lenient) {
        var val, _a, _b, filter, e_1_1;
        var e_1, _c;
        return __generator(this, function(_d) {
            switch(_d.label){
                case 0:
                    lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === 'default';
                    return [
                        4,
                        this.initial.evaluate(ctx, lenient)
                    ];
                case 1:
                    val = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _a = __values(this.filters), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [
                        3,
                        6
                    ];
                    filter = _b.value;
                    return [
                        4,
                        filter.render(val, ctx)
                    ];
                case 4:
                    val = _d.sent();
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        2,
                        val
                    ];
            }
        });
    };
    return Value1;
}();
function createResolvedThenable(value) {
    var ret = {
        then: function(resolve4) {
            return resolve4(value);
        },
        catch: function() {
            return ret;
        }
    };
    return ret;
}
function createRejectedThenable(err) {
    var ret = {
        then: function(resolve, reject) {
            if (reject) return reject(err);
            return ret;
        },
        catch: function(reject) {
            return reject(err);
        }
    };
    return ret;
}
function isThenable(val) {
    return val && isFunction(val.then);
}
function isAsyncIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
}
function toThenable(val) {
    if (isThenable(val)) return val;
    if (isAsyncIterator(val)) return reduce();
    return createResolvedThenable(val);
    function reduce(prev) {
        var state1;
        try {
            state1 = val.next(prev);
        } catch (err1) {
            return createRejectedThenable(err1);
        }
        if (state1.done) return createResolvedThenable(state1.value);
        return toThenable(state1.value).then(reduce, function(err) {
            var state;
            try {
                state = val.throw(err);
            } catch (e) {
                return createRejectedThenable(e);
            }
            if (state.done) return createResolvedThenable(state.value);
            return reduce(state.value);
        });
    }
}
function toPromise(val) {
    return Promise.resolve(toThenable(val));
}
function toValue(val) {
    var ret;
    toThenable(val).then(function(x) {
        ret = x;
        return createResolvedThenable(ret);
    }).catch(function(err) {
        throw err;
    });
    return ret;
}
var assign = {
    parse: function(token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.key = tokenizer.readIdentifier().content;
        tokenizer.skipBlank();
        assert(tokenizer.peek() === '=', function() {
            return "illegal token ".concat(token.getText());
        });
        tokenizer.advance();
        this.value = tokenizer.remaining();
    },
    render: function(ctx) {
        var _a, _b;
        return __generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    _a = ctx.bottom();
                    _b = this.key;
                    return [
                        4,
                        this.liquid._evalValue(this.value, ctx)
                    ];
                case 1:
                    _a[_b] = _c.sent();
                    return [
                        2
                    ];
            }
        });
    }
};
var ForloopDrop = function(_super) {
    __extends(ForloopDrop1, _super);
    function ForloopDrop1(length, collection, variable) {
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.length = length;
        _this.name = "".concat(variable, "-").concat(collection);
        return _this;
    }
    ForloopDrop1.prototype.next = function() {
        this.i++;
    };
    ForloopDrop1.prototype.index0 = function() {
        return this.i;
    };
    ForloopDrop1.prototype.index = function() {
        return this.i + 1;
    };
    ForloopDrop1.prototype.first = function() {
        return this.i === 0;
    };
    ForloopDrop1.prototype.last = function() {
        return this.i === this.length - 1;
    };
    ForloopDrop1.prototype.rindex = function() {
        return this.length - this.i;
    };
    ForloopDrop1.prototype.rindex0 = function() {
        return this.length - this.i - 1;
    };
    ForloopDrop1.prototype.valueOf = function() {
        return JSON.stringify(this);
    };
    return ForloopDrop1;
}(Drop);
var MODIFIERS = [
    'offset',
    'limit',
    'reversed'
];
var For = {
    type: 'block',
    parse: function(token, remainTokens) {
        var _this = this;
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        var variable = tokenizer.readIdentifier();
        var inStr = tokenizer.readIdentifier();
        var collection = tokenizer.readValue();
        assert(variable.size() && inStr.content === 'in' && collection, function() {
            return "illegal tag: ".concat(token.getText());
        });
        this.variable = variable.content;
        this.collection = collection;
        this.hash = new Hash(tokenizer.remaining());
        this.templates = [];
        this.elseTemplates = [];
        var p;
        var stream = this.liquid.parser.parseStream(remainTokens).on('start', function() {
            return p = _this.templates;
        }).on('tag:else', function() {
            return p = _this.elseTemplates;
        }).on('tag:endfor', function() {
            return stream.stop();
        }).on('template', function(tpl) {
            return p.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(token.getText(), " not closed"));
        });
        stream.start();
    },
    render: function(ctx, emitter) {
        var r, collection1, _a, continueKey, hash, modifiers, scope, collection_1, collection_1_1, item, e_1_1;
        var e_1, _b;
        return __generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    r = this.liquid.renderer;
                    _a = toEnumerable;
                    return [
                        4,
                        evalToken(this.collection, ctx)
                    ];
                case 1:
                    collection1 = _a.apply(void 0, [
                        _c.sent()
                    ]);
                    if (!!collection1.length) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        r.renderTemplates(this.elseTemplates, ctx, emitter)
                    ];
                case 2:
                    _c.sent();
                    return [
                        2
                    ];
                case 3:
                    continueKey = 'continue-' + this.variable + '-' + this.collection.getText();
                    ctx.push({
                        continue: ctx.getRegister(continueKey)
                    });
                    return [
                        4,
                        this.hash.render(ctx)
                    ];
                case 4:
                    hash = _c.sent();
                    ctx.pop();
                    modifiers = this.liquid.options.orderedFilterParameters ? Object.keys(hash).filter(function(x) {
                        return MODIFIERS.includes(x);
                    }) : MODIFIERS.filter(function(x) {
                        return hash[x] !== undefined;
                    });
                    collection1 = modifiers.reduce(function(collection, modifier) {
                        if (modifier === 'offset') return offset(collection, hash['offset']);
                        if (modifier === 'limit') return limit(collection, hash['limit']);
                        return reversed(collection);
                    }, collection1);
                    ctx.setRegister(continueKey, (hash['offset'] || 0) + collection1.length);
                    scope = {
                        forloop: new ForloopDrop(collection1.length, this.collection.getText(), this.variable)
                    };
                    ctx.push(scope);
                    _c.label = 5;
                case 5:
                    _c.trys.push([
                        5,
                        10,
                        11,
                        12
                    ]);
                    collection_1 = __values(collection1), collection_1_1 = collection_1.next();
                    _c.label = 6;
                case 6:
                    if (!!collection_1_1.done) return [
                        3,
                        9
                    ];
                    item = collection_1_1.value;
                    scope[this.variable] = item;
                    return [
                        4,
                        r.renderTemplates(this.templates, ctx, emitter)
                    ];
                case 7:
                    _c.sent();
                    if (emitter['break']) {
                        emitter['break'] = false;
                        return [
                            3,
                            9
                        ];
                    }
                    emitter['continue'] = false;
                    scope.forloop.next();
                    _c.label = 8;
                case 8:
                    collection_1_1 = collection_1.next();
                    return [
                        3,
                        6
                    ];
                case 9:
                    return [
                        3,
                        12
                    ];
                case 10:
                    e_1_1 = _c.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        12
                    ];
                case 11:
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_b = collection_1.return)) _b.call(collection_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 12:
                    ctx.pop();
                    return [
                        2
                    ];
            }
        });
    }
};
function reversed(arr) {
    return __spreadArray([], __read(arr), false).reverse();
}
function offset(arr, count) {
    return arr.slice(count);
}
function limit(arr, count) {
    return arr.slice(0, count);
}
var capture = {
    parse: function(tagToken, remainTokens) {
        var _this = this;
        var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        this.variable = readVariableName(tokenizer);
        assert(this.variable, function() {
            return "".concat(tagToken.args, " not valid identifier");
        });
        this.templates = [];
        var stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('tag:endcapture', function() {
            return stream.stop();
        }).on('template', function(tpl) {
            return _this.templates.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function(ctx) {
        var r, html;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    r = this.liquid.renderer;
                    return [
                        4,
                        r.renderTemplates(this.templates, ctx)
                    ];
                case 1:
                    html = _a.sent();
                    ctx.bottom()[this.variable] = html;
                    return [
                        2
                    ];
            }
        });
    }
};
function readVariableName(tokenizer) {
    var word = tokenizer.readIdentifier().content;
    if (word) return word;
    var quoted = tokenizer.readQuoted();
    if (quoted) return evalQuotedToken(quoted);
}
var Case = {
    parse: function(tagToken, remainTokens) {
        var _this = this;
        this.cond = new Value(tagToken.args, this.liquid);
        this.cases = [];
        this.elseTemplates = [];
        var p = [];
        var stream = this.liquid.parser.parseStream(remainTokens).on('tag:when', function(token) {
            p = [];
            var tokenizer = new Tokenizer(token.args, _this.liquid.options.operatorsTrie);
            while(!tokenizer.end()){
                var value = tokenizer.readValue();
                _this.cases.push({
                    val: value,
                    templates: p
                });
                tokenizer.readTo(',');
            }
        }).on('tag:else', function() {
            return p = _this.elseTemplates;
        }).on('tag:endcase', function() {
            return stream.stop();
        }).on('template', function(tpl) {
            return p.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function(ctx, emitter) {
        var r, cond, _a, _b, _c, branch, val, e_1_1;
        var e_1, _d;
        return __generator(this, function(_e) {
            switch(_e.label){
                case 0:
                    r = this.liquid.renderer;
                    _a = toValue$1;
                    return [
                        4,
                        this.cond.value(ctx, ctx.opts.lenientIf)
                    ];
                case 1:
                    cond = _a.apply(void 0, [
                        _e.sent()
                    ]);
                    _e.label = 2;
                case 2:
                    _e.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _b = __values(this.cases), _c = _b.next();
                    _e.label = 3;
                case 3:
                    if (!!_c.done) return [
                        3,
                        6
                    ];
                    branch = _c.value;
                    val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
                    if (!(val === cond)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        r.renderTemplates(branch.templates, ctx, emitter)
                    ];
                case 4:
                    _e.sent();
                    return [
                        2
                    ];
                case 5:
                    _c = _b.next();
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        4,
                        r.renderTemplates(this.elseTemplates, ctx, emitter)
                    ];
                case 10:
                    _e.sent();
                    return [
                        2
                    ];
            }
        });
    }
};
var comment = {
    parse: function(tagToken, remainTokens) {
        var stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('token', function(token) {
            if (token.name === 'endcomment') stream.stop();
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    }
};
var BlockMode;
(function(BlockMode1) {
    BlockMode1[BlockMode1["OUTPUT"] = 0] = "OUTPUT";
    BlockMode1[BlockMode1["STORE"] = 1] = "STORE";
})(BlockMode || (BlockMode = {}));
var BlockMode$1 = BlockMode;
var render = {
    parseFilePath: parseFilePath,
    renderFilePath: renderFilePath,
    parse: function(token) {
        var args = token.args;
        var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        this['file'] = this.parseFilePath(tokenizer, this.liquid);
        this['currentFile'] = token.file;
        while(!tokenizer.end()){
            tokenizer.skipBlank();
            var begin = tokenizer.p;
            var keyword = tokenizer.readIdentifier();
            if (keyword.content === 'with' || keyword.content === 'for') {
                tokenizer.skipBlank();
                if (tokenizer.peek() !== ':') {
                    var value = tokenizer.readValue();
                    if (value) {
                        var beforeAs = tokenizer.p;
                        var asStr = tokenizer.readIdentifier();
                        var alias = void 0;
                        if (asStr.content === 'as') alias = tokenizer.readIdentifier();
                        else tokenizer.p = beforeAs;
                        this[keyword.content] = {
                            value: value,
                            alias: alias && alias.content
                        };
                        tokenizer.skipBlank();
                        if (tokenizer.peek() === ',') tokenizer.advance();
                        continue;
                    }
                }
            }
            tokenizer.p = begin;
            break;
        }
        this.hash = new Hash(tokenizer.remaining());
    },
    render: function(ctx, emitter) {
        var _a, liquid3, hash, filepath, childCtx, scope, _b, _c, _d, value, alias, _e, value, alias, collection, collection_1, collection_1_1, item, templates, e_1_1, templates;
        var e_1, _f;
        return __generator(this, function(_g) {
            switch(_g.label){
                case 0:
                    _a = this, liquid3 = _a.liquid, hash = _a.hash;
                    return [
                        4,
                        this.renderFilePath(this['file'], ctx, liquid3)
                    ];
                case 1:
                    filepath = _g.sent();
                    assert(filepath, function() {
                        return "illegal filename \"".concat(filepath, "\"");
                    });
                    childCtx = new Context({}, ctx.opts, {
                        sync: ctx.sync,
                        globals: ctx.globals,
                        strictVariables: ctx.strictVariables
                    });
                    scope = childCtx.bottom();
                    _b = __assign;
                    _c = [
                        scope
                    ];
                    return [
                        4,
                        hash.render(ctx)
                    ];
                case 2:
                    _b.apply(void 0, _c.concat([
                        _g.sent()
                    ]));
                    if (this['with']) {
                        _d = this['with'], value = _d.value, alias = _d.alias;
                        scope[alias || filepath] = evalToken(value, ctx);
                    }
                    if (!this['for']) return [
                        3,
                        12
                    ];
                    _e = this['for'], value = _e.value, alias = _e.alias;
                    collection = evalToken(value, ctx);
                    collection = toEnumerable(collection);
                    scope['forloop'] = new ForloopDrop(collection.length, value.getText(), alias);
                    _g.label = 3;
                case 3:
                    _g.trys.push([
                        3,
                        9,
                        10,
                        11
                    ]);
                    collection_1 = __values(collection), collection_1_1 = collection_1.next();
                    _g.label = 4;
                case 4:
                    if (!!collection_1_1.done) return [
                        3,
                        8
                    ];
                    item = collection_1_1.value;
                    scope[alias] = item;
                    return [
                        4,
                        liquid3._parsePartialFile(filepath, childCtx.sync, this['currentFile'])
                    ];
                case 5:
                    templates = _g.sent();
                    return [
                        4,
                        liquid3.renderer.renderTemplates(templates, childCtx, emitter)
                    ];
                case 6:
                    _g.sent();
                    scope['forloop'].next();
                    _g.label = 7;
                case 7:
                    collection_1_1 = collection_1.next();
                    return [
                        3,
                        4
                    ];
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    e_1_1 = _g.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        11
                    ];
                case 10:
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_f = collection_1.return)) _f.call(collection_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        3,
                        15
                    ];
                case 12:
                    return [
                        4,
                        liquid3._parsePartialFile(filepath, childCtx.sync, this['currentFile'])
                    ];
                case 13:
                    templates = _g.sent();
                    return [
                        4,
                        liquid3.renderer.renderTemplates(templates, childCtx, emitter)
                    ];
                case 14:
                    _g.sent();
                    _g.label = 15;
                case 15:
                    return [
                        2
                    ];
            }
        });
    }
};
function parseFilePath(tokenizer, liquid4) {
    if (liquid4.options.dynamicPartials) {
        var file = tokenizer.readValue();
        if (file === undefined) throw new TypeError("illegal argument \"".concat(tokenizer.input, "\""));
        if (file.getText() === 'none') return null;
        if (isQuotedToken(file)) {
            var templates_1 = liquid4.parse(evalQuotedToken(file));
            return optimize(templates_1);
        }
        return file;
    }
    var tokens = __spreadArray([], __read(tokenizer.readFileNameTemplate(liquid4.options)), false);
    var templates = optimize(liquid4.parser.parseTokens(tokens));
    return templates === 'none' ? null : templates;
}
function optimize(templates) {
    if (templates.length === 1 && isHTMLToken(templates[0].token)) return templates[0].token.getContent();
    return templates;
}
function renderFilePath(file, ctx, liquid5) {
    if (typeof file === 'string') return file;
    if (Array.isArray(file)) return liquid5.renderer.renderTemplates(file, ctx);
    return evalToken(file, ctx);
}
var include = {
    parseFilePath: parseFilePath,
    renderFilePath: renderFilePath,
    parse: function(token) {
        var args = token.args;
        var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
        this['file'] = this.parseFilePath(tokenizer, this.liquid);
        this['currentFile'] = token.file;
        var begin = tokenizer.p;
        var withStr = tokenizer.readIdentifier();
        if (withStr.content === 'with') {
            tokenizer.skipBlank();
            if (tokenizer.peek() !== ':') {
                this.withVar = tokenizer.readValue();
            } else tokenizer.p = begin;
        } else tokenizer.p = begin;
        this.hash = new Hash(tokenizer.remaining(), this.liquid.options.jekyllInclude);
    },
    render: function(ctx, emitter) {
        var _a, liquid6, hash, withVar, renderer, filepath, saved, scope, templates;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _a = this, liquid6 = _a.liquid, hash = _a.hash, withVar = _a.withVar;
                    renderer = liquid6.renderer;
                    return [
                        4,
                        this.renderFilePath(this['file'], ctx, liquid6)
                    ];
                case 1:
                    filepath = _b.sent();
                    assert(filepath, function() {
                        return "illegal filename \"".concat(filepath, "\"");
                    });
                    saved = ctx.saveRegister('blocks', 'blockMode');
                    ctx.setRegister('blocks', {});
                    ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                    return [
                        4,
                        hash.render(ctx)
                    ];
                case 2:
                    scope = _b.sent();
                    if (withVar) scope[filepath] = evalToken(withVar, ctx);
                    return [
                        4,
                        liquid6._parsePartialFile(filepath, ctx.sync, this['currentFile'])
                    ];
                case 3:
                    templates = _b.sent();
                    ctx.push(ctx.opts.jekyllInclude ? {
                        include: scope
                    } : scope);
                    return [
                        4,
                        renderer.renderTemplates(templates, ctx, emitter)
                    ];
                case 4:
                    _b.sent();
                    ctx.pop();
                    ctx.restoreRegister(saved);
                    return [
                        2
                    ];
            }
        });
    }
};
var decrement = {
    parse: function(token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier().content;
    },
    render: function(context, emitter) {
        var scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        emitter.write(stringify(--scope[this.variable]));
    }
};
var cycle = {
    parse: function(tagToken) {
        var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        var group = tokenizer.readValue();
        tokenizer.skipBlank();
        this.candidates = [];
        if (group) {
            if (tokenizer.peek() === ':') {
                this.group = group;
                tokenizer.advance();
            } else this.candidates.push(group);
        }
        while(!tokenizer.end()){
            var value = tokenizer.readValue();
            if (value) this.candidates.push(value);
            tokenizer.readTo(',');
        }
        assert(this.candidates.length, function() {
            return "empty candidates: ".concat(tagToken.getText());
        });
    },
    render: function(ctx, emitter) {
        var group = evalToken(this.group, ctx);
        var fingerprint = "cycle:".concat(group, ":") + this.candidates.join(',');
        var groups = ctx.getRegister('cycle');
        var idx = groups[fingerprint];
        if (idx === undefined) {
            idx = groups[fingerprint] = 0;
        }
        var candidate = this.candidates[idx];
        idx = (idx + 1) % this.candidates.length;
        groups[fingerprint] = idx;
        var html = evalToken(candidate, ctx);
        emitter.write(html);
    }
};
var If = {
    parse: function(tagToken, remainTokens) {
        var _this = this;
        this.branches = [];
        this.elseTemplates = [];
        var p;
        this.liquid.parser.parseStream(remainTokens).on('start', function() {
            return _this.branches.push({
                predicate: new Value(tagToken.args, _this.liquid),
                templates: p = []
            });
        }).on('tag:elsif', function(token) {
            return _this.branches.push({
                predicate: new Value(token.args, _this.liquid),
                templates: p = []
            });
        }).on('tag:else', function() {
            return p = _this.elseTemplates;
        }).on('tag:endif', function() {
            this.stop();
        }).on('template', function(tpl) {
            return p.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        }).start();
    },
    render: function(ctx, emitter) {
        var r, _a, _b, _c, predicate, templates, value, e_1_1;
        var e_1, _d;
        return __generator(this, function(_e) {
            switch(_e.label){
                case 0:
                    r = this.liquid.renderer;
                    _e.label = 1;
                case 1:
                    _e.trys.push([
                        1,
                        7,
                        8,
                        9
                    ]);
                    _a = __values(this.branches), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [
                        3,
                        6
                    ];
                    _c = _b.value, predicate = _c.predicate, templates = _c.templates;
                    return [
                        4,
                        predicate.value(ctx, ctx.opts.lenientIf)
                    ];
                case 3:
                    value = _e.sent();
                    if (!isTruthy(value, ctx)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        r.renderTemplates(templates, ctx, emitter)
                    ];
                case 4:
                    _e.sent();
                    return [
                        2
                    ];
                case 5:
                    _b = _a.next();
                    return [
                        3,
                        2
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        4,
                        r.renderTemplates(this.elseTemplates, ctx, emitter)
                    ];
                case 10:
                    _e.sent();
                    return [
                        2
                    ];
            }
        });
    }
};
var increment = {
    parse: function(token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this.variable = tokenizer.readIdentifier().content;
    },
    render: function(context, emitter) {
        var scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        var val = scope[this.variable];
        scope[this.variable]++;
        emitter.write(stringify(val));
    }
};
var layout = {
    parseFilePath: parseFilePath,
    renderFilePath: renderFilePath,
    parse: function(token, remainTokens) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        this['file'] = this.parseFilePath(tokenizer, this.liquid);
        this['currentFile'] = token.file;
        this.hash = new Hash(tokenizer.remaining());
        this.tpls = this.liquid.parser.parseTokens(remainTokens);
    },
    render: function(ctx, emitter1) {
        var _a, liquid7, hash, file, renderer, filepath, templates, html, blocks, _b, _c;
        return __generator(this, function(_d) {
            switch(_d.label){
                case 0:
                    _a = this, liquid7 = _a.liquid, hash = _a.hash, file = _a.file;
                    renderer = liquid7.renderer;
                    if (!(file === null)) return [
                        3,
                        2
                    ];
                    ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                    return [
                        4,
                        renderer.renderTemplates(this.tpls, ctx, emitter1)
                    ];
                case 1:
                    _d.sent();
                    return [
                        2
                    ];
                case 2:
                    return [
                        4,
                        this.renderFilePath(this['file'], ctx, liquid7)
                    ];
                case 3:
                    filepath = _d.sent();
                    assert(filepath, function() {
                        return "illegal filename \"".concat(filepath, "\"");
                    });
                    return [
                        4,
                        liquid7._parseLayoutFile(filepath, ctx.sync, this['currentFile'])
                    ];
                case 4:
                    templates = _d.sent();
                    ctx.setRegister('blockMode', BlockMode$1.STORE);
                    return [
                        4,
                        renderer.renderTemplates(this.tpls, ctx)
                    ];
                case 5:
                    html = _d.sent();
                    blocks = ctx.getRegister('blocks');
                    if (blocks[''] === undefined) blocks[''] = function(parent, emitter) {
                        return emitter.write(html);
                    };
                    ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                    _c = (_b = ctx).push;
                    return [
                        4,
                        hash.render(ctx)
                    ];
                case 6:
                    _c.apply(_b, [
                        _d.sent()
                    ]);
                    return [
                        4,
                        renderer.renderTemplates(templates, ctx, emitter1)
                    ];
                case 7:
                    _d.sent();
                    ctx.pop();
                    return [
                        2
                    ];
            }
        });
    }
};
var BlockDrop = function(_super) {
    __extends(BlockDrop1, _super);
    function BlockDrop1(superBlockRender) {
        if (superBlockRender === void 0) {
            superBlockRender = function() {
                return '';
            };
        }
        var _this = _super.call(this) || this;
        _this.superBlockRender = superBlockRender;
        return _this;
    }
    BlockDrop1.prototype.super = function() {
        return this.superBlockRender();
    };
    return BlockDrop1;
}(Drop);
var block = {
    parse: function(token, remainTokens) {
        var _this = this;
        var match = /\w+/.exec(token.args);
        this.block = match ? match[0] : '';
        this.tpls = [];
        this.liquid.parser.parseStream(remainTokens).on('tag:endblock', function() {
            this.stop();
        }).on('template', function(tpl) {
            return _this.tpls.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(token.getText(), " not closed"));
        }).start();
    },
    render: function(ctx, emitter) {
        var blockRender;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    blockRender = this.getBlockRender(ctx);
                    if (!(ctx.getRegister('blockMode') === BlockMode$1.STORE)) return [
                        3,
                        1
                    ];
                    ctx.getRegister('blocks')[this.block] = blockRender;
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        blockRender(new BlockDrop(), emitter)
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    },
    getBlockRender: function(ctx) {
        var _a1 = this, liquid8 = _a1.liquid, tpls = _a1.tpls;
        var renderChild = ctx.getRegister('blocks')[this.block];
        var renderCurrent = function(superBlock, emitter) {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        ctx.push({
                            block: superBlock
                        });
                        return [
                            4,
                            liquid8.renderer.renderTemplates(tpls, ctx, emitter)
                        ];
                    case 1:
                        _a.sent();
                        ctx.pop();
                        return [
                            2
                        ];
                }
            });
        };
        return renderChild ? function(superBlock, emitter) {
            return renderChild(new BlockDrop(function() {
                return renderCurrent(superBlock, emitter);
            }), emitter);
        } : renderCurrent;
    }
};
var raw = {
    parse: function(tagToken, remainTokens) {
        var _this = this;
        this.tokens = [];
        var stream = this.liquid.parser.parseStream(remainTokens);
        stream.on('token', function(token) {
            if (token.name === 'endraw') stream.stop();
            else _this.tokens.push(token);
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function() {
        return this.tokens.map(function(token) {
            return token.getText();
        }).join('');
    }
};
var TablerowloopDrop = function(_super) {
    __extends(TablerowloopDrop1, _super);
    function TablerowloopDrop1(length, cols, collection, variable) {
        var _this = _super.call(this, length, collection, variable) || this;
        _this.length = length;
        _this.cols = cols;
        return _this;
    }
    TablerowloopDrop1.prototype.row = function() {
        return Math.floor(this.i / this.cols) + 1;
    };
    TablerowloopDrop1.prototype.col0 = function() {
        return this.i % this.cols;
    };
    TablerowloopDrop1.prototype.col = function() {
        return this.col0() + 1;
    };
    TablerowloopDrop1.prototype.col_first = function() {
        return this.col0() === 0;
    };
    TablerowloopDrop1.prototype.col_last = function() {
        return this.col() === this.cols;
    };
    return TablerowloopDrop1;
}(ForloopDrop);
var tablerow = {
    parse: function(tagToken, remainTokens) {
        var _this = this;
        var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
        var variable = tokenizer.readIdentifier();
        tokenizer.skipBlank();
        var tmp = tokenizer.readIdentifier();
        assert(tmp && tmp.content === 'in', function() {
            return "illegal tag: ".concat(tagToken.getText());
        });
        this.variable = variable.content;
        this.collection = tokenizer.readValue();
        this.hash = new Hash(tokenizer.remaining());
        this.templates = [];
        var p;
        var stream = this.liquid.parser.parseStream(remainTokens).on('start', function() {
            return p = _this.templates;
        }).on('tag:endtablerow', function() {
            return stream.stop();
        }).on('template', function(tpl) {
            return p.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        });
        stream.start();
    },
    render: function(ctx, emitter) {
        var collection, _a, hash, offset1, limit2, cols, r, tablerowloop, scope, idx;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _a = toEnumerable;
                    return [
                        4,
                        evalToken(this.collection, ctx)
                    ];
                case 1:
                    collection = _a.apply(void 0, [
                        _b.sent()
                    ]);
                    return [
                        4,
                        this.hash.render(ctx)
                    ];
                case 2:
                    hash = _b.sent();
                    offset1 = hash.offset || 0;
                    limit2 = hash.limit === undefined ? collection.length : hash.limit;
                    collection = collection.slice(offset1, offset1 + limit2);
                    cols = hash.cols || collection.length;
                    r = this.liquid.renderer;
                    tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
                    scope = {
                        tablerowloop: tablerowloop
                    };
                    ctx.push(scope);
                    idx = 0;
                    _b.label = 3;
                case 3:
                    if (!(idx < collection.length)) return [
                        3,
                        6
                    ];
                    scope[this.variable] = collection[idx];
                    if (tablerowloop.col0() === 0) {
                        if (tablerowloop.row() !== 1) emitter.write('</tr>');
                        emitter.write("<tr class=\"row".concat(tablerowloop.row(), "\">"));
                    }
                    emitter.write("<td class=\"col".concat(tablerowloop.col(), "\">"));
                    return [
                        4,
                        r.renderTemplates(this.templates, ctx, emitter)
                    ];
                case 4:
                    _b.sent();
                    emitter.write('</td>');
                    _b.label = 5;
                case 5:
                    idx++, tablerowloop.next();
                    return [
                        3,
                        3
                    ];
                case 6:
                    if (collection.length) emitter.write('</tr>');
                    ctx.pop();
                    return [
                        2
                    ];
            }
        });
    }
};
var unless = {
    parse: function(tagToken, remainTokens) {
        var _this = this;
        this.branches = [];
        this.elseTemplates = [];
        var p;
        this.liquid.parser.parseStream(remainTokens).on('start', function() {
            return _this.branches.push({
                predicate: new Value(tagToken.args, _this.liquid),
                test: isFalsy,
                templates: p = []
            });
        }).on('tag:elsif', function(token) {
            return _this.branches.push({
                predicate: new Value(token.args, _this.liquid),
                test: isTruthy,
                templates: p = []
            });
        }).on('tag:else', function() {
            return p = _this.elseTemplates;
        }).on('tag:endunless', function() {
            this.stop();
        }).on('template', function(tpl) {
            return p.push(tpl);
        }).on('end', function() {
            throw new Error("tag ".concat(tagToken.getText(), " not closed"));
        }).start();
    },
    render: function(ctx, emitter) {
        var r, _a, _b, _c, predicate, test_1, templates, value, e_1_1;
        var e_1, _d;
        return __generator(this, function(_e) {
            switch(_e.label){
                case 0:
                    r = this.liquid.renderer;
                    _e.label = 1;
                case 1:
                    _e.trys.push([
                        1,
                        7,
                        8,
                        9
                    ]);
                    _a = __values(this.branches), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [
                        3,
                        6
                    ];
                    _c = _b.value, predicate = _c.predicate, test_1 = _c.test, templates = _c.templates;
                    return [
                        4,
                        predicate.value(ctx, ctx.opts.lenientIf)
                    ];
                case 3:
                    value = _e.sent();
                    if (!test_1(value, ctx)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        r.renderTemplates(templates, ctx, emitter)
                    ];
                case 4:
                    _e.sent();
                    return [
                        2
                    ];
                case 5:
                    _b = _a.next();
                    return [
                        3,
                        2
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        4,
                        r.renderTemplates(this.elseTemplates, ctx, emitter)
                    ];
                case 10:
                    _e.sent();
                    return [
                        2
                    ];
            }
        });
    }
};
var Break = {
    render: function(ctx, emitter) {
        emitter['break'] = true;
    }
};
var Continue = {
    render: function(ctx, emitter) {
        emitter['continue'] = true;
    }
};
var echo = {
    parse: function(token) {
        this.value = new Value(token.args, this.liquid);
    },
    render: function(ctx, emitter) {
        var val;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4,
                        this.value.value(ctx, false)
                    ];
                case 1:
                    val = _a.sent();
                    emitter.write(val);
                    return [
                        2
                    ];
            }
        });
    }
};
var liquid = {
    parse: function(token) {
        var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        var tokens = tokenizer.readLiquidTagTokens(this.liquid.options);
        this.tpls = this.liquid.parser.parseTokens(tokens);
    },
    render: function(ctx, emitter) {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4,
                        this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter)
                    ];
                case 1:
                    _a.sent();
                    return [
                        2
                    ];
            }
        });
    }
};
var tags = {
    assign: assign,
    'for': For,
    capture: capture,
    'case': Case,
    comment: comment,
    include: include,
    render: render,
    decrement: decrement,
    increment: increment,
    cycle: cycle,
    'if': If,
    layout: layout,
    block: block,
    raw: raw,
    tablerow: tablerow,
    unless: unless,
    'break': Break,
    'continue': Continue,
    echo: echo,
    liquid: liquid
};
Object.freeze({
    __proto__: null,
    'default': tags
});
var filters = new Map();
forOwn(builtinFilters, function(conf, name) {
    filters.set(snakeCase(name), conf);
});
var defaultOptions = {
    root: [
        '.'
    ],
    layouts: [
        '.'
    ],
    partials: [
        '.'
    ],
    relativeReference: true,
    jekyllInclude: false,
    cache: undefined,
    extname: '',
    fs: fs,
    dynamicPartials: true,
    jsTruthy: false,
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: '{%',
    tagDelimiterRight: '%}',
    outputDelimiterLeft: '{{',
    outputDelimiterRight: '}}',
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    ownPropertyOnly: false,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    operatorsTrie: createTrie(defaultOperators)
};
function normalize(options) {
    if (options.hasOwnProperty('operators')) {
        options.operatorsTrie = createTrie(options.operators);
    }
    if (options.hasOwnProperty('root')) {
        if (!options.hasOwnProperty('partials')) options.partials = options.root;
        if (!options.hasOwnProperty('layouts')) options.layouts = options.root;
    }
    if (options.hasOwnProperty('cache')) {
        var cache = void 0;
        if (typeof options.cache === 'number') cache = options.cache > 0 ? new LRU(options.cache) : undefined;
        else if (typeof options.cache === 'object') cache = options.cache;
        else cache = options.cache ? new LRU(1024) : undefined;
        options.cache = cache;
    }
    options = __assign(__assign(__assign({}, defaultOptions), options.jekyllInclude ? {
        dynamicPartials: false
    } : {}), options);
    if (!options.fs.dirname && options.relativeReference) {
        console.warn('[LiquidJS] `fs.dirname` is required for relativeReference, set relativeReference to `false` to suppress this warning, or provide implementation for `fs.dirname`');
        options.relativeReference = false;
    }
    options.root = normalizeDirectoryList(options.root);
    options.partials = normalizeDirectoryList(options.partials);
    options.layouts = normalizeDirectoryList(options.layouts);
    options.outputEscape = options.outputEscape && getOutputEscapeFunction(options.outputEscape);
    return options;
}
function getOutputEscapeFunction(nameOrFunction) {
    if (isString(nameOrFunction)) {
        var filterImpl = filters.get(nameOrFunction);
        assert(isFunction(filterImpl), "filter \"".concat(nameOrFunction, "\" not found"));
        return filterImpl;
    } else {
        assert(isFunction(nameOrFunction), '`outputEscape` need to be of type string or function');
        return nameOrFunction;
    }
}
function normalizeDirectoryList(value) {
    var list = [];
    if (isArray(value)) list = value;
    if (isString(value)) list = [
        value
    ];
    return list;
}
var Context = function() {
    function Context1(env, opts, renderOptions) {
        if (env === void 0) {
            env = {};
        }
        if (opts === void 0) {
            opts = defaultOptions;
        }
        if (renderOptions === void 0) {
            renderOptions = {};
        }
        var _a, _b;
        this.scopes = [
            {}
        ];
        this.registers = {};
        this.sync = !!renderOptions.sync;
        this.opts = opts;
        this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
        this.environments = env;
        this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
    }
    Context1.prototype.getRegister = function(key) {
        return this.registers[key] = this.registers[key] || {};
    };
    Context1.prototype.setRegister = function(key, value) {
        return this.registers[key] = value;
    };
    Context1.prototype.saveRegister = function() {
        var _this = this;
        var keys = [];
        for(var _i = 0; _i < arguments.length; _i++){
            keys[_i] = arguments[_i];
        }
        return keys.map(function(key) {
            return [
                key,
                _this.getRegister(key)
            ];
        });
    };
    Context1.prototype.restoreRegister = function(keyValues) {
        var _this = this;
        return keyValues.forEach(function(_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return _this.setRegister(key, value);
        });
    };
    Context1.prototype.getAll = function() {
        return __spreadArray([
            this.globals,
            this.environments
        ], __read(this.scopes), false).reduce(function(ctx, val) {
            return __assign(ctx, val);
        }, {});
    };
    Context1.prototype.get = function(paths) {
        var scope = this.findScope(paths[0]);
        return this.getFromScope(scope, paths);
    };
    Context1.prototype.getFromScope = function(scope1, paths) {
        var _this = this;
        if (isString(paths)) paths = paths.split('.');
        return paths.reduce(function(scope, path, i) {
            scope = readProperty(scope, path, _this.opts.ownPropertyOnly);
            if (isNil(scope) && _this.strictVariables) {
                throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join('.'));
            }
            return scope;
        }, scope1);
    };
    Context1.prototype.push = function(ctx) {
        return this.scopes.push(ctx);
    };
    Context1.prototype.pop = function() {
        return this.scopes.pop();
    };
    Context1.prototype.bottom = function() {
        return this.scopes[0];
    };
    Context1.prototype.findScope = function(key) {
        for(var i = this.scopes.length - 1; i >= 0; i--){
            var candidate = this.scopes[i];
            if (key in candidate) return candidate;
        }
        if (key in this.environments) return this.environments;
        return this.globals;
    };
    return Context1;
}();
function readProperty(obj, key, ownPropertyOnly) {
    if (isNil(obj)) return obj;
    obj = toLiquid(obj);
    if (isArray(obj) && key < 0) return obj[obj.length + +key];
    var jsProperty = readJSProperty(obj, key, ownPropertyOnly);
    if (jsProperty === undefined && obj instanceof Drop) return obj.liquidMethodMissing(key);
    if (isFunction(jsProperty)) return jsProperty.call(obj);
    if (key === 'size') return readSize(obj);
    else if (key === 'first') return readFirst(obj);
    else if (key === 'last') return readLast(obj);
    return jsProperty;
}
function readJSProperty(obj, key, ownPropertyOnly) {
    if (ownPropertyOnly && !Object.hasOwnProperty.call(obj, key)) return undefined;
    return obj[key];
}
function readFirst(obj) {
    if (isArray(obj)) return obj[0];
    return obj['first'];
}
function readLast(obj) {
    if (isArray(obj)) return obj[obj.length - 1];
    return obj['last'];
}
function readSize(obj) {
    if (obj.hasOwnProperty('size') || obj['size'] !== undefined) return obj['size'];
    if (isArray(obj) || isString(obj)) return obj.length;
    if (typeof obj === 'object') return Object.keys(obj).length;
}
var LookupType;
(function(LookupType1) {
    LookupType1["Partials"] = "partials";
    LookupType1["Layouts"] = "layouts";
    LookupType1["Root"] = "root";
})(LookupType || (LookupType = {}));
var Loader = function() {
    function Loader1(options) {
        this.options = options;
        if (options.relativeReference) {
            var sep2 = options.fs.sep;
            assert(sep2, '`fs.sep` is required for relative reference');
            var rRelativePath_1 = new RegExp([
                '.' + sep2,
                '..' + sep2,
                './',
                '../'
            ].map(function(prefix) {
                return escapeRegex(prefix);
            }).join('|'));
            this.shouldLoadRelative = function(referencedFile) {
                return rRelativePath_1.test(referencedFile);
            };
        } else {
            this.shouldLoadRelative = function(referencedFile) {
                return false;
            };
        }
        this.contains = this.options.fs.contains || function() {
            return true;
        };
    }
    Loader1.prototype.lookup = function(file, type, sync, currentFile) {
        var fs1, dirs, _a, _b, filepath, _c, e_1_1;
        var e_1, _d;
        return __generator(this, function(_e) {
            switch(_e.label){
                case 0:
                    fs1 = this.options.fs;
                    dirs = this.options[type];
                    _e.label = 1;
                case 1:
                    _e.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    _a = __values(this.candidates(file, dirs, currentFile, type !== LookupType.Root)), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [
                        3,
                        7
                    ];
                    filepath = _b.value;
                    if (!sync) return [
                        3,
                        3
                    ];
                    _c = fs1.existsSync(filepath);
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        fs1.exists(filepath)
                    ];
                case 4:
                    _c = _e.sent();
                    _e.label = 5;
                case 5:
                    if (_c) return [
                        2,
                        filepath
                    ];
                    _e.label = 6;
                case 6:
                    _b = _a.next();
                    return [
                        3,
                        2
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    e_1_1 = _e.sent();
                    e_1 = {
                        error: e_1_1
                    };
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                    return [
                        7
                    ];
                case 10:
                    throw this.lookupError(file, dirs);
            }
        });
    };
    Loader1.prototype.candidates = function(file, dirs, currentFile, enforceRoot) {
        var _a, fs2, extname, referenced, dirs_1, dirs_1_1, dir, e_2_1, dirs_2, dirs_2_1, dir, referenced, e_3_1, filepath;
        var e_2, _b, e_3, _c;
        return __generator(this, function(_d) {
            switch(_d.label){
                case 0:
                    _a = this.options, fs2 = _a.fs, extname = _a.extname;
                    if (!(this.shouldLoadRelative(file) && currentFile)) return [
                        3,
                        8
                    ];
                    referenced = fs2.resolve(this.dirname(currentFile), file, extname);
                    _d.label = 1;
                case 1:
                    _d.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    dirs_1 = __values(dirs), dirs_1_1 = dirs_1.next();
                    _d.label = 2;
                case 2:
                    if (!!dirs_1_1.done) return [
                        3,
                        5
                    ];
                    dir = dirs_1_1.value;
                    if (!(!enforceRoot || this.contains(dir, referenced))) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        referenced
                    ];
                case 3:
                    _d.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    dirs_1_1 = dirs_1.next();
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    e_2_1 = _d.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (dirs_1_1 && !dirs_1_1.done && (_b = dirs_1.return)) _b.call(dirs_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                    return [
                        7
                    ];
                case 8:
                    _d.trys.push([
                        8,
                        13,
                        14,
                        15
                    ]);
                    dirs_2 = __values(dirs), dirs_2_1 = dirs_2.next();
                    _d.label = 9;
                case 9:
                    if (!!dirs_2_1.done) return [
                        3,
                        12
                    ];
                    dir = dirs_2_1.value;
                    referenced = fs2.resolve(dir, file, extname);
                    if (!(!enforceRoot || this.contains(dir, referenced))) return [
                        3,
                        11
                    ];
                    return [
                        4,
                        referenced
                    ];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11:
                    dirs_2_1 = dirs_2.next();
                    return [
                        3,
                        9
                    ];
                case 12:
                    return [
                        3,
                        15
                    ];
                case 13:
                    e_3_1 = _d.sent();
                    e_3 = {
                        error: e_3_1
                    };
                    return [
                        3,
                        15
                    ];
                case 14:
                    try {
                        if (dirs_2_1 && !dirs_2_1.done && (_c = dirs_2.return)) _c.call(dirs_2);
                    } finally{
                        if (e_3) throw e_3.error;
                    }
                    return [
                        7
                    ];
                case 15:
                    if (!(fs2.fallback !== undefined)) return [
                        3,
                        17
                    ];
                    filepath = fs2.fallback(file);
                    if (!(filepath !== undefined)) return [
                        3,
                        17
                    ];
                    return [
                        4,
                        filepath
                    ];
                case 16:
                    _d.sent();
                    _d.label = 17;
                case 17:
                    return [
                        2
                    ];
            }
        });
    };
    Loader1.prototype.dirname = function(path) {
        var fs3 = this.options.fs;
        assert(fs3.dirname, '`fs.dirname` is required for relative reference');
        return fs3.dirname(path);
    };
    Loader1.prototype.lookupError = function(file, roots) {
        var err = new Error('ENOENT');
        err.message = "ENOENT: Failed to lookup \"".concat(file, "\" in \"").concat(roots, "\"");
        err.code = 'ENOENT';
        return err;
    };
    return Loader1;
}();
var SimpleEmitter = function() {
    function SimpleEmitter1() {
        this.buffer = '';
    }
    SimpleEmitter1.prototype.write = function(html) {
        this.buffer += stringify(html);
    };
    return SimpleEmitter1;
}();
var StreamedEmitter = function() {
    function StreamedEmitter1() {
        this.buffer = '';
        this.stream = null;
        throw new Error('streaming not supported in browser');
    }
    return StreamedEmitter1;
}();
var KeepingTypeEmitter = function() {
    function KeepingTypeEmitter1() {
        this.buffer = '';
    }
    KeepingTypeEmitter1.prototype.write = function(html) {
        html = toValue$1(html);
        if (typeof html !== 'string' && this.buffer === '') {
            this.buffer = html;
        } else {
            this.buffer = stringify(this.buffer) + stringify(html);
        }
    };
    return KeepingTypeEmitter1;
}();
var Render = function() {
    function Render1() {}
    Render1.prototype.renderTemplatesToNodeStream = function(templates, ctx) {
        var _this = this;
        var emitter = new StreamedEmitter();
        Promise.resolve().then(function() {
            return toThenable(_this.renderTemplates(templates, ctx, emitter));
        }).then(function() {
            return emitter.end();
        }, function(err) {
            return emitter.error(err);
        });
        return emitter.stream;
    };
    Render1.prototype.renderTemplates = function(templates, ctx, emitter) {
        var templates_1, templates_1_1, tpl, html, e_1, err, e_2_1;
        var e_2, _a;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    if (!emitter) {
                        emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    templates_1 = __values(templates), templates_1_1 = templates_1.next();
                    _b.label = 2;
                case 2:
                    if (!!templates_1_1.done) return [
                        3,
                        7
                    ];
                    tpl = templates_1_1.value;
                    _b.label = 3;
                case 3:
                    _b.trys.push([
                        3,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        tpl.render(ctx, emitter)
                    ];
                case 4:
                    html = _b.sent();
                    html && emitter.write(html);
                    if (emitter['break'] || emitter['continue']) return [
                        3,
                        7
                    ];
                    return [
                        3,
                        6
                    ];
                case 5:
                    e_1 = _b.sent();
                    err = RenderError.is(e_1) ? e_1 : new RenderError(e_1, tpl);
                    throw err;
                case 6:
                    templates_1_1 = templates_1.next();
                    return [
                        3,
                        2
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                    return [
                        7
                    ];
                case 10:
                    return [
                        2,
                        emitter.buffer
                    ];
            }
        });
    };
    return Render1;
}();
var TemplateImpl = function() {
    function TemplateImpl1(token) {
        this.token = token;
    }
    return TemplateImpl1;
}();
var Tag = function(_super) {
    __extends(Tag1, _super);
    function Tag1(token, tokens, liquid9) {
        var _this = _super.call(this, token) || this;
        _this.name = token.name;
        var impl = liquid9.tags.get(token.name);
        _this.impl = Object.create(impl);
        _this.impl.liquid = liquid9;
        if (_this.impl.parse) {
            _this.impl.parse(token, tokens);
        }
        return _this;
    }
    Tag1.prototype.render = function(ctx, emitter) {
        var hash, impl;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4,
                        new Hash(this.token.args).render(ctx)
                    ];
                case 1:
                    hash = _a.sent();
                    impl = this.impl;
                    if (!isFunction(impl.render)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        impl.render(ctx, emitter, hash)
                    ];
                case 2:
                    return [
                        2,
                        _a.sent()
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    };
    return Tag1;
}(TemplateImpl);
var Output = function(_super) {
    __extends(Output1, _super);
    function Output1(token, liquid10) {
        var _this = _super.call(this, token) || this;
        _this.value = new Value(token.content, liquid10);
        var filters2 = _this.value.filters;
        var outputEscape = liquid10.options.outputEscape;
        if (filters2.length && filters2[filters2.length - 1].name === 'raw') {
            filters2.pop();
        } else if (outputEscape) {
            filters2.push(new Filter(toString.call(outputEscape), outputEscape, [], liquid10));
        }
        return _this;
    }
    Output1.prototype.render = function(ctx, emitter) {
        var val;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4,
                        this.value.value(ctx, false)
                    ];
                case 1:
                    val = _a.sent();
                    emitter.write(val);
                    return [
                        2
                    ];
            }
        });
    };
    return Output1;
}(TemplateImpl);
var HTML = function(_super) {
    __extends(HTML1, _super);
    function HTML1(token) {
        var _this = _super.call(this, token) || this;
        _this.str = token.getContent();
        return _this;
    }
    HTML1.prototype.render = function(ctx, emitter) {
        return __generator(this, function(_a) {
            emitter.write(this.str);
            return [
                2
            ];
        });
    };
    return HTML1;
}(TemplateImpl);
var Parser = function() {
    function Parser1(liquid11) {
        this.liquid = liquid11;
        this.cache = this.liquid.options.cache;
        this.fs = this.liquid.options.fs;
        this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
        this.loader = new Loader(this.liquid.options);
    }
    Parser1.prototype.parse = function(html, filepath) {
        var tokenizer = new Tokenizer(html, this.liquid.options.operatorsTrie, filepath);
        var tokens = tokenizer.readTopLevelTokens(this.liquid.options);
        return this.parseTokens(tokens);
    };
    Parser1.prototype.parseTokens = function(tokens) {
        var token;
        var templates = [];
        while(token = tokens.shift()){
            templates.push(this.parseToken(token, tokens));
        }
        return templates;
    };
    Parser1.prototype.parseToken = function(token, remainTokens) {
        try {
            if (isTagToken(token)) {
                return new Tag(token, remainTokens, this.liquid);
            }
            if (isOutputToken(token)) {
                return new Output(token, this.liquid);
            }
            return new HTML(token);
        } catch (e) {
            throw new ParseError(e, token);
        }
    };
    Parser1.prototype.parseStream = function(tokens1) {
        var _this = this;
        return new ParseStream(tokens1, function(token, tokens) {
            return _this.parseToken(token, tokens);
        });
    };
    Parser1.prototype._parseFileCached = function(file, sync, type, currentFile) {
        var key, tpls, task;
        if (type === void 0) {
            type = LookupType.Root;
        }
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    key = this.loader.shouldLoadRelative(file) ? currentFile + ',' + file : type + ':' + file;
                    return [
                        4,
                        this.cache.read(key)
                    ];
                case 1:
                    tpls = _a.sent();
                    if (tpls) return [
                        2,
                        tpls
                    ];
                    task = toThenable(this._parseFile(file, sync, type, currentFile));
                    this.cache.write(key, task);
                    _a.label = 2;
                case 2:
                    _a.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        task
                    ];
                case 3:
                    return [
                        2,
                        _a.sent()
                    ];
                case 4:
                    _a.sent();
                    this.cache.remove(key);
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2,
                        []
                    ];
            }
        });
    };
    Parser1.prototype._parseFile = function(file, sync, type, currentFile) {
        var filepath, _a, _b, _c;
        if (type === void 0) {
            type = LookupType.Root;
        }
        return __generator(this, function(_d) {
            switch(_d.label){
                case 0:
                    return [
                        4,
                        this.loader.lookup(file, type, sync, currentFile)
                    ];
                case 1:
                    filepath = _d.sent();
                    _b = (_a = this.liquid).parse;
                    if (!sync) return [
                        3,
                        2
                    ];
                    _c = this.fs.readFileSync(filepath);
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        this.fs.readFile(filepath)
                    ];
                case 3:
                    _c = _d.sent();
                    _d.label = 4;
                case 4:
                    return [
                        2,
                        _b.apply(_a, [
                            _c,
                            filepath
                        ])
                    ];
            }
        });
    };
    return Parser1;
}();
var TagMap = function() {
    function TagMap1() {
        this.impls = {};
    }
    TagMap1.prototype.get = function(name) {
        var impl = this.impls[name];
        assert(impl, function() {
            return "tag \"".concat(name, "\" not found");
        });
        return impl;
    };
    TagMap1.prototype.set = function(name, impl) {
        this.impls[name] = impl;
    };
    return TagMap1;
}();
var FilterMap = function() {
    function FilterMap1(strictFilters, liquid12) {
        this.strictFilters = strictFilters;
        this.liquid = liquid12;
        this.impls = {};
    }
    FilterMap1.prototype.get = function(name) {
        var impl = this.impls[name];
        assert(impl || !this.strictFilters, function() {
            return "undefined filter: ".concat(name);
        });
        return impl;
    };
    FilterMap1.prototype.set = function(name, impl) {
        this.impls[name] = impl;
    };
    FilterMap1.prototype.create = function(name, args) {
        return new Filter(name, this.get(name), args, this.liquid);
    };
    return FilterMap1;
}();
var Liquid = function() {
    function Liquid1(opts) {
        var _this = this;
        if (opts === void 0) {
            opts = {};
        }
        this.options = normalize(opts);
        this.parser = new Parser(this);
        this.renderer = new Render();
        this.filters = new FilterMap(this.options.strictFilters, this);
        this.tags = new TagMap();
        forOwn(tags, function(conf, name) {
            return _this.registerTag(snakeCase(name), conf);
        });
        forOwn(builtinFilters, function(handler, name) {
            return _this.registerFilter(snakeCase(name), handler);
        });
    }
    Liquid1.prototype.parse = function(html, filepath) {
        return this.parser.parse(html, filepath);
    };
    Liquid1.prototype._render = function(tpl, scope, renderOptions) {
        var ctx = new Context(scope, this.options, renderOptions);
        return this.renderer.renderTemplates(tpl, ctx);
    };
    Liquid1.prototype.render = function(tpl, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                return [
                    2,
                    toPromise(this._render(tpl, scope, __assign(__assign({}, renderOptions), {
                        sync: false
                    })))
                ];
            });
        });
    };
    Liquid1.prototype.renderSync = function(tpl, scope, renderOptions) {
        return toValue(this._render(tpl, scope, __assign(__assign({}, renderOptions), {
            sync: true
        })));
    };
    Liquid1.prototype.renderToNodeStream = function(tpl, scope, renderOptions) {
        if (renderOptions === void 0) {
            renderOptions = {};
        }
        var ctx = new Context(scope, this.options, renderOptions);
        return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
    };
    Liquid1.prototype._parseAndRender = function(html, scope, renderOptions) {
        var tpl = this.parse(html);
        return this._render(tpl, scope, renderOptions);
    };
    Liquid1.prototype.parseAndRender = function(html, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                return [
                    2,
                    toPromise(this._parseAndRender(html, scope, __assign(__assign({}, renderOptions), {
                        sync: false
                    })))
                ];
            });
        });
    };
    Liquid1.prototype.parseAndRenderSync = function(html, scope, renderOptions) {
        return toValue(this._parseAndRender(html, scope, __assign(__assign({}, renderOptions), {
            sync: true
        })));
    };
    Liquid1.prototype._parsePartialFile = function(file, sync, currentFile) {
        return this.parser.parseFile(file, sync, LookupType.Partials, currentFile);
    };
    Liquid1.prototype._parseLayoutFile = function(file, sync, currentFile) {
        return this.parser.parseFile(file, sync, LookupType.Layouts, currentFile);
    };
    Liquid1.prototype.parseFile = function(file) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                return [
                    2,
                    toPromise(this.parser.parseFile(file, false))
                ];
            });
        });
    };
    Liquid1.prototype.parseFileSync = function(file) {
        return toValue(this.parser.parseFile(file, true));
    };
    Liquid1.prototype.renderFile = function(file, ctx, renderOptions) {
        return __awaiter(this, void 0, void 0, function() {
            var templates;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4,
                            this.parseFile(file)
                        ];
                    case 1:
                        templates = _a.sent();
                        return [
                            2,
                            this.render(templates, ctx, renderOptions)
                        ];
                }
            });
        });
    };
    Liquid1.prototype.renderFileSync = function(file, ctx, renderOptions) {
        var templates = this.parseFileSync(file);
        return this.renderSync(templates, ctx, renderOptions);
    };
    Liquid1.prototype.renderFileToNodeStream = function(file, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function() {
            var templates;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4,
                            this.parseFile(file)
                        ];
                    case 1:
                        templates = _a.sent();
                        return [
                            2,
                            this.renderToNodeStream(templates, scope, renderOptions)
                        ];
                }
            });
        });
    };
    Liquid1.prototype._evalValue = function(str, ctx) {
        var value = new Value(str, this);
        return value.value(ctx, false);
    };
    Liquid1.prototype.evalValue = function(str, ctx) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                return [
                    2,
                    toPromise(this._evalValue(str, ctx))
                ];
            });
        });
    };
    Liquid1.prototype.evalValueSync = function(str, ctx) {
        return toValue(this._evalValue(str, ctx));
    };
    Liquid1.prototype.registerFilter = function(name, filter) {
        this.filters.set(name, filter);
    };
    Liquid1.prototype.registerTag = function(name, tag) {
        this.tags.set(name, tag);
    };
    Liquid1.prototype.plugin = function(plugin) {
        return plugin.call(this, Liquid1);
    };
    Liquid1.prototype.express = function() {
        var self = this;
        var firstCall = true;
        return function(filePath, ctx, callback) {
            var _a, _b, _c;
            if (firstCall) {
                firstCall = false;
                var dirs = normalizeDirectoryList(this.root);
                (_a = self.options.root).unshift.apply(_a, __spreadArray([], __read(dirs), false));
                (_b = self.options.layouts).unshift.apply(_b, __spreadArray([], __read(dirs), false));
                (_c = self.options.partials).unshift.apply(_c, __spreadArray([], __read(dirs), false));
            }
            self.renderFile(filePath, ctx).then(function(html) {
                return callback(null, html);
            }, callback);
        };
    };
    return Liquid1;
}();
const builtinsString = "// deno-fmt-ignore-file\n// deno-lint-ignore-file\n// This code was bundled using `deno bundle` and it's not recommended to edit it manually\n\nconst builtins = (function() {\n    function transform(data) {\n        return data;\n    }\n    function createCommonjsModule(fn, basedir, module) {\n        return module = {\n            path: basedir,\n            exports: {},\n            require: function(path, base) {\n                return commonjsRequire(path, base === void 0 || base === null ? module.path : base);\n            }\n        }, fn(module, module.exports), module.exports;\n    }\n    function commonjsRequire() {\n        throw new Error(\"Dynamic requires are not currently supported by @rollup/plugin-commonjs\");\n    }\n    var jmespath = createCommonjsModule(function(module, exports) {\n        (function(exports2) {\n            function isArray(obj) {\n                if (obj !== null) {\n                    return Object.prototype.toString.call(obj) === \"[object Array]\";\n                } else {\n                    return false;\n                }\n            }\n            function isObject(obj) {\n                if (obj !== null) {\n                    return Object.prototype.toString.call(obj) === \"[object Object]\";\n                } else {\n                    return false;\n                }\n            }\n            function strictDeepEqual2(first, second) {\n                if (first === second) {\n                    return true;\n                }\n                var firstType = Object.prototype.toString.call(first);\n                if (firstType !== Object.prototype.toString.call(second)) {\n                    return false;\n                }\n                if (isArray(first) === true) {\n                    if (first.length !== second.length) {\n                        return false;\n                    }\n                    for(var i = 0; i < first.length; i++){\n                        if (strictDeepEqual2(first[i], second[i]) === false) {\n                            return false;\n                        }\n                    }\n                    return true;\n                }\n                if (isObject(first) === true) {\n                    var keysSeen = {};\n                    for(var key in first){\n                        if (hasOwnProperty.call(first, key)) {\n                            if (strictDeepEqual2(first[key], second[key]) === false) {\n                                return false;\n                            }\n                            keysSeen[key] = true;\n                        }\n                    }\n                    for(var key2 in second){\n                        if (hasOwnProperty.call(second, key2)) {\n                            if (keysSeen[key2] !== true) {\n                                return false;\n                            }\n                        }\n                    }\n                    return true;\n                }\n                return false;\n            }\n            function isFalse(obj) {\n                if (obj === \"\" || obj === false || obj === null) {\n                    return true;\n                } else if (isArray(obj) && obj.length === 0) {\n                    return true;\n                } else if (isObject(obj)) {\n                    for(var key in obj){\n                        if (obj.hasOwnProperty(key)) {\n                            return false;\n                        }\n                    }\n                    return true;\n                } else {\n                    return false;\n                }\n            }\n            function objValues(obj) {\n                var keys = Object.keys(obj);\n                var values = [];\n                for(var i = 0; i < keys.length; i++){\n                    values.push(obj[keys[i]]);\n                }\n                return values;\n            }\n            var trimLeft;\n            if (typeof String.prototype.trimLeft === \"function\") {\n                trimLeft = function(str) {\n                    return str.trimLeft();\n                };\n            } else {\n                trimLeft = function(str) {\n                    return str.match(/^\\s*(.*)/)[1];\n                };\n            }\n            var TYPE_NUMBER = 0;\n            var TYPE_ANY = 1;\n            var TYPE_STRING = 2;\n            var TYPE_ARRAY = 3;\n            var TYPE_OBJECT = 4;\n            var TYPE_BOOLEAN = 5;\n            var TYPE_EXPREF = 6;\n            var TYPE_NULL = 7;\n            var TYPE_ARRAY_NUMBER = 8;\n            var TYPE_ARRAY_STRING = 9;\n            var TYPE_NAME_TABLE = {\n                0: \"number\",\n                1: \"any\",\n                2: \"string\",\n                3: \"array\",\n                4: \"object\",\n                5: \"boolean\",\n                6: \"expression\",\n                7: \"null\",\n                8: \"Array<number>\",\n                9: \"Array<string>\"\n            };\n            var TOK_EOF = \"EOF\";\n            var TOK_UNQUOTEDIDENTIFIER = \"UnquotedIdentifier\";\n            var TOK_QUOTEDIDENTIFIER = \"QuotedIdentifier\";\n            var TOK_RBRACKET = \"Rbracket\";\n            var TOK_RPAREN = \"Rparen\";\n            var TOK_COMMA = \"Comma\";\n            var TOK_COLON = \"Colon\";\n            var TOK_RBRACE = \"Rbrace\";\n            var TOK_NUMBER = \"Number\";\n            var TOK_CURRENT = \"Current\";\n            var TOK_EXPREF = \"Expref\";\n            var TOK_PIPE = \"Pipe\";\n            var TOK_OR = \"Or\";\n            var TOK_AND = \"And\";\n            var TOK_EQ = \"EQ\";\n            var TOK_GT = \"GT\";\n            var TOK_LT = \"LT\";\n            var TOK_GTE = \"GTE\";\n            var TOK_LTE = \"LTE\";\n            var TOK_NE = \"NE\";\n            var TOK_FLATTEN = \"Flatten\";\n            var TOK_STAR = \"Star\";\n            var TOK_FILTER = \"Filter\";\n            var TOK_DOT = \"Dot\";\n            var TOK_NOT = \"Not\";\n            var TOK_LBRACE = \"Lbrace\";\n            var TOK_LBRACKET = \"Lbracket\";\n            var TOK_LPAREN = \"Lparen\";\n            var TOK_LITERAL = \"Literal\";\n            var basicTokens = {\n                \".\": TOK_DOT,\n                \"*\": TOK_STAR,\n                \",\": TOK_COMMA,\n                \":\": TOK_COLON,\n                \"{\": TOK_LBRACE,\n                \"}\": TOK_RBRACE,\n                \"]\": TOK_RBRACKET,\n                \"(\": TOK_LPAREN,\n                \")\": TOK_RPAREN,\n                \"@\": TOK_CURRENT\n            };\n            var operatorStartToken = {\n                \"<\": true,\n                \">\": true,\n                \"=\": true,\n                \"!\": true\n            };\n            var skipChars = {\n                \" \": true,\n                \"\t\": true,\n                \"\\n\": true\n            };\n            function isAlpha(ch) {\n                return ch >= \"a\" && ch <= \"z\" || ch >= \"A\" && ch <= \"Z\" || ch === \"_\";\n            }\n            function isNum(ch) {\n                return ch >= \"0\" && ch <= \"9\" || ch === \"-\";\n            }\n            function isAlphaNum(ch) {\n                return ch >= \"a\" && ch <= \"z\" || ch >= \"A\" && ch <= \"Z\" || ch >= \"0\" && ch <= \"9\" || ch === \"_\";\n            }\n            function Lexer() {}\n            Lexer.prototype = {\n                tokenize: function(stream) {\n                    var tokens = [];\n                    this._current = 0;\n                    var start;\n                    var identifier;\n                    var token;\n                    while(this._current < stream.length){\n                        if (isAlpha(stream[this._current])) {\n                            start = this._current;\n                            identifier = this._consumeUnquotedIdentifier(stream);\n                            tokens.push({\n                                type: TOK_UNQUOTEDIDENTIFIER,\n                                value: identifier,\n                                start\n                            });\n                        } else if (basicTokens[stream[this._current]] !== void 0) {\n                            tokens.push({\n                                type: basicTokens[stream[this._current]],\n                                value: stream[this._current],\n                                start: this._current\n                            });\n                            this._current++;\n                        } else if (isNum(stream[this._current])) {\n                            token = this._consumeNumber(stream);\n                            tokens.push(token);\n                        } else if (stream[this._current] === \"[\") {\n                            token = this._consumeLBracket(stream);\n                            tokens.push(token);\n                        } else if (stream[this._current] === '\"') {\n                            start = this._current;\n                            identifier = this._consumeQuotedIdentifier(stream);\n                            tokens.push({\n                                type: TOK_QUOTEDIDENTIFIER,\n                                value: identifier,\n                                start\n                            });\n                        } else if (stream[this._current] === \"'\") {\n                            start = this._current;\n                            identifier = this._consumeRawStringLiteral(stream);\n                            tokens.push({\n                                type: TOK_LITERAL,\n                                value: identifier,\n                                start\n                            });\n                        } else if (stream[this._current] === \"`\") {\n                            start = this._current;\n                            var literal = this._consumeLiteral(stream);\n                            tokens.push({\n                                type: TOK_LITERAL,\n                                value: literal,\n                                start\n                            });\n                        } else if (operatorStartToken[stream[this._current]] !== void 0) {\n                            tokens.push(this._consumeOperator(stream));\n                        } else if (skipChars[stream[this._current]] !== void 0) {\n                            this._current++;\n                        } else if (stream[this._current] === \"&\") {\n                            start = this._current;\n                            this._current++;\n                            if (stream[this._current] === \"&\") {\n                                this._current++;\n                                tokens.push({\n                                    type: TOK_AND,\n                                    value: \"&&\",\n                                    start\n                                });\n                            } else {\n                                tokens.push({\n                                    type: TOK_EXPREF,\n                                    value: \"&\",\n                                    start\n                                });\n                            }\n                        } else if (stream[this._current] === \"|\") {\n                            start = this._current;\n                            this._current++;\n                            if (stream[this._current] === \"|\") {\n                                this._current++;\n                                tokens.push({\n                                    type: TOK_OR,\n                                    value: \"||\",\n                                    start\n                                });\n                            } else {\n                                tokens.push({\n                                    type: TOK_PIPE,\n                                    value: \"|\",\n                                    start\n                                });\n                            }\n                        } else {\n                            var error = new Error(\"Unknown character:\" + stream[this._current]);\n                            error.name = \"LexerError\";\n                            throw error;\n                        }\n                    }\n                    return tokens;\n                },\n                _consumeUnquotedIdentifier: function(stream) {\n                    var start = this._current;\n                    this._current++;\n                    while(this._current < stream.length && isAlphaNum(stream[this._current])){\n                        this._current++;\n                    }\n                    return stream.slice(start, this._current);\n                },\n                _consumeQuotedIdentifier: function(stream) {\n                    var start = this._current;\n                    this._current++;\n                    var maxLength = stream.length;\n                    while(stream[this._current] !== '\"' && this._current < maxLength){\n                        var current = this._current;\n                        if (stream[current] === \"\\\\\" && (stream[current + 1] === \"\\\\\" || stream[current + 1] === '\"')) {\n                            current += 2;\n                        } else {\n                            current++;\n                        }\n                        this._current = current;\n                    }\n                    this._current++;\n                    return JSON.parse(stream.slice(start, this._current));\n                },\n                _consumeRawStringLiteral: function(stream) {\n                    var start = this._current;\n                    this._current++;\n                    var maxLength = stream.length;\n                    while(stream[this._current] !== \"'\" && this._current < maxLength){\n                        var current = this._current;\n                        if (stream[current] === \"\\\\\" && (stream[current + 1] === \"\\\\\" || stream[current + 1] === \"'\")) {\n                            current += 2;\n                        } else {\n                            current++;\n                        }\n                        this._current = current;\n                    }\n                    this._current++;\n                    var literal = stream.slice(start + 1, this._current - 1);\n                    return literal.replace(\"\\\\'\", \"'\");\n                },\n                _consumeNumber: function(stream) {\n                    var start = this._current;\n                    this._current++;\n                    var maxLength = stream.length;\n                    while(isNum(stream[this._current]) && this._current < maxLength){\n                        this._current++;\n                    }\n                    var value = parseInt(stream.slice(start, this._current));\n                    return {\n                        type: TOK_NUMBER,\n                        value,\n                        start\n                    };\n                },\n                _consumeLBracket: function(stream) {\n                    var start = this._current;\n                    this._current++;\n                    if (stream[this._current] === \"?\") {\n                        this._current++;\n                        return {\n                            type: TOK_FILTER,\n                            value: \"[?\",\n                            start\n                        };\n                    } else if (stream[this._current] === \"]\") {\n                        this._current++;\n                        return {\n                            type: TOK_FLATTEN,\n                            value: \"[]\",\n                            start\n                        };\n                    } else {\n                        return {\n                            type: TOK_LBRACKET,\n                            value: \"[\",\n                            start\n                        };\n                    }\n                },\n                _consumeOperator: function(stream) {\n                    var start = this._current;\n                    var startingChar = stream[start];\n                    this._current++;\n                    if (startingChar === \"!\") {\n                        if (stream[this._current] === \"=\") {\n                            this._current++;\n                            return {\n                                type: TOK_NE,\n                                value: \"!=\",\n                                start\n                            };\n                        } else {\n                            return {\n                                type: TOK_NOT,\n                                value: \"!\",\n                                start\n                            };\n                        }\n                    } else if (startingChar === \"<\") {\n                        if (stream[this._current] === \"=\") {\n                            this._current++;\n                            return {\n                                type: TOK_LTE,\n                                value: \"<=\",\n                                start\n                            };\n                        } else {\n                            return {\n                                type: TOK_LT,\n                                value: \"<\",\n                                start\n                            };\n                        }\n                    } else if (startingChar === \">\") {\n                        if (stream[this._current] === \"=\") {\n                            this._current++;\n                            return {\n                                type: TOK_GTE,\n                                value: \">=\",\n                                start\n                            };\n                        } else {\n                            return {\n                                type: TOK_GT,\n                                value: \">\",\n                                start\n                            };\n                        }\n                    } else if (startingChar === \"=\") {\n                        if (stream[this._current] === \"=\") {\n                            this._current++;\n                            return {\n                                type: TOK_EQ,\n                                value: \"==\",\n                                start\n                            };\n                        }\n                    }\n                },\n                _consumeLiteral: function(stream) {\n                    this._current++;\n                    var start = this._current;\n                    var maxLength = stream.length;\n                    var literal;\n                    while(stream[this._current] !== \"`\" && this._current < maxLength){\n                        var current = this._current;\n                        if (stream[current] === \"\\\\\" && (stream[current + 1] === \"\\\\\" || stream[current + 1] === \"`\")) {\n                            current += 2;\n                        } else {\n                            current++;\n                        }\n                        this._current = current;\n                    }\n                    var literalString = trimLeft(stream.slice(start, this._current));\n                    literalString = literalString.replace(\"\\\\`\", \"`\");\n                    if (this._looksLikeJSON(literalString)) {\n                        literal = JSON.parse(literalString);\n                    } else {\n                        literal = JSON.parse('\"' + literalString + '\"');\n                    }\n                    this._current++;\n                    return literal;\n                },\n                _looksLikeJSON: function(literalString) {\n                    var startingChars = '[{\"';\n                    var jsonLiterals = [\n                        \"true\",\n                        \"false\",\n                        \"null\"\n                    ];\n                    var numberLooking = \"-0123456789\";\n                    if (literalString === \"\") {\n                        return false;\n                    } else if (startingChars.indexOf(literalString[0]) >= 0) {\n                        return true;\n                    } else if (jsonLiterals.indexOf(literalString) >= 0) {\n                        return true;\n                    } else if (numberLooking.indexOf(literalString[0]) >= 0) {\n                        try {\n                            JSON.parse(literalString);\n                            return true;\n                        } catch (ex) {\n                            return false;\n                        }\n                    } else {\n                        return false;\n                    }\n                }\n            };\n            var bindingPower = {};\n            bindingPower[TOK_EOF] = 0;\n            bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;\n            bindingPower[TOK_QUOTEDIDENTIFIER] = 0;\n            bindingPower[TOK_RBRACKET] = 0;\n            bindingPower[TOK_RPAREN] = 0;\n            bindingPower[TOK_COMMA] = 0;\n            bindingPower[TOK_RBRACE] = 0;\n            bindingPower[TOK_NUMBER] = 0;\n            bindingPower[TOK_CURRENT] = 0;\n            bindingPower[TOK_EXPREF] = 0;\n            bindingPower[TOK_PIPE] = 1;\n            bindingPower[TOK_OR] = 2;\n            bindingPower[TOK_AND] = 3;\n            bindingPower[TOK_EQ] = 5;\n            bindingPower[TOK_GT] = 5;\n            bindingPower[TOK_LT] = 5;\n            bindingPower[TOK_GTE] = 5;\n            bindingPower[TOK_LTE] = 5;\n            bindingPower[TOK_NE] = 5;\n            bindingPower[TOK_FLATTEN] = 9;\n            bindingPower[TOK_STAR] = 20;\n            bindingPower[TOK_FILTER] = 21;\n            bindingPower[TOK_DOT] = 40;\n            bindingPower[TOK_NOT] = 45;\n            bindingPower[TOK_LBRACE] = 50;\n            bindingPower[TOK_LBRACKET] = 55;\n            bindingPower[TOK_LPAREN] = 60;\n            function Parser() {}\n            Parser.prototype = {\n                parse: function(expression) {\n                    this._loadTokens(expression);\n                    this.index = 0;\n                    var ast = this.expression(0);\n                    if (this._lookahead(0) !== TOK_EOF) {\n                        var t = this._lookaheadToken(0);\n                        var error = new Error(\"Unexpected token type: \" + t.type + \", value: \" + t.value);\n                        error.name = \"ParserError\";\n                        throw error;\n                    }\n                    return ast;\n                },\n                _loadTokens: function(expression) {\n                    var lexer = new Lexer();\n                    var tokens = lexer.tokenize(expression);\n                    tokens.push({\n                        type: TOK_EOF,\n                        value: \"\",\n                        start: expression.length\n                    });\n                    this.tokens = tokens;\n                },\n                expression: function(rbp) {\n                    var leftToken = this._lookaheadToken(0);\n                    this._advance();\n                    var left = this.nud(leftToken);\n                    var currentToken = this._lookahead(0);\n                    while(rbp < bindingPower[currentToken]){\n                        this._advance();\n                        left = this.led(currentToken, left);\n                        currentToken = this._lookahead(0);\n                    }\n                    return left;\n                },\n                _lookahead: function(number) {\n                    return this.tokens[this.index + number].type;\n                },\n                _lookaheadToken: function(number) {\n                    return this.tokens[this.index + number];\n                },\n                _advance: function() {\n                    this.index++;\n                },\n                nud: function(token) {\n                    var left;\n                    var right;\n                    var expression;\n                    switch(token.type){\n                        case TOK_LITERAL:\n                            return {\n                                type: \"Literal\",\n                                value: token.value\n                            };\n                        case TOK_UNQUOTEDIDENTIFIER:\n                            return {\n                                type: \"Field\",\n                                name: token.value\n                            };\n                        case TOK_QUOTEDIDENTIFIER:\n                            var node = {\n                                type: \"Field\",\n                                name: token.value\n                            };\n                            if (this._lookahead(0) === TOK_LPAREN) {\n                                throw new Error(\"Quoted identifier not allowed for function names.\");\n                            }\n                            return node;\n                        case TOK_NOT:\n                            right = this.expression(bindingPower.Not);\n                            return {\n                                type: \"NotExpression\",\n                                children: [\n                                    right\n                                ]\n                            };\n                        case TOK_STAR:\n                            left = {\n                                type: \"Identity\"\n                            };\n                            right = null;\n                            if (this._lookahead(0) === TOK_RBRACKET) {\n                                right = {\n                                    type: \"Identity\"\n                                };\n                            } else {\n                                right = this._parseProjectionRHS(bindingPower.Star);\n                            }\n                            return {\n                                type: \"ValueProjection\",\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        case TOK_FILTER:\n                            return this.led(token.type, {\n                                type: \"Identity\"\n                            });\n                        case TOK_LBRACE:\n                            return this._parseMultiselectHash();\n                        case TOK_FLATTEN:\n                            left = {\n                                type: TOK_FLATTEN,\n                                children: [\n                                    {\n                                        type: \"Identity\"\n                                    }\n                                ]\n                            };\n                            right = this._parseProjectionRHS(bindingPower.Flatten);\n                            return {\n                                type: \"Projection\",\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        case TOK_LBRACKET:\n                            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {\n                                right = this._parseIndexExpression();\n                                return this._projectIfSlice({\n                                    type: \"Identity\"\n                                }, right);\n                            } else if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {\n                                this._advance();\n                                this._advance();\n                                right = this._parseProjectionRHS(bindingPower.Star);\n                                return {\n                                    type: \"Projection\",\n                                    children: [\n                                        {\n                                            type: \"Identity\"\n                                        },\n                                        right\n                                    ]\n                                };\n                            }\n                            return this._parseMultiselectList();\n                        case TOK_CURRENT:\n                            return {\n                                type: TOK_CURRENT\n                            };\n                        case TOK_EXPREF:\n                            expression = this.expression(bindingPower.Expref);\n                            return {\n                                type: \"ExpressionReference\",\n                                children: [\n                                    expression\n                                ]\n                            };\n                        case TOK_LPAREN:\n                            var args = [];\n                            while(this._lookahead(0) !== TOK_RPAREN){\n                                if (this._lookahead(0) === TOK_CURRENT) {\n                                    expression = {\n                                        type: TOK_CURRENT\n                                    };\n                                    this._advance();\n                                } else {\n                                    expression = this.expression(0);\n                                }\n                                args.push(expression);\n                            }\n                            this._match(TOK_RPAREN);\n                            return args[0];\n                        default:\n                            this._errorToken(token);\n                    }\n                },\n                led: function(tokenName, left) {\n                    var right;\n                    switch(tokenName){\n                        case TOK_DOT:\n                            var rbp = bindingPower.Dot;\n                            if (this._lookahead(0) !== TOK_STAR) {\n                                right = this._parseDotRHS(rbp);\n                                return {\n                                    type: \"Subexpression\",\n                                    children: [\n                                        left,\n                                        right\n                                    ]\n                                };\n                            }\n                            this._advance();\n                            right = this._parseProjectionRHS(rbp);\n                            return {\n                                type: \"ValueProjection\",\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        case TOK_PIPE:\n                            right = this.expression(bindingPower.Pipe);\n                            return {\n                                type: TOK_PIPE,\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        case TOK_OR:\n                            right = this.expression(bindingPower.Or);\n                            return {\n                                type: \"OrExpression\",\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        case TOK_AND:\n                            right = this.expression(bindingPower.And);\n                            return {\n                                type: \"AndExpression\",\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        case TOK_LPAREN:\n                            var name = left.name;\n                            var args = [];\n                            var expression, node;\n                            while(this._lookahead(0) !== TOK_RPAREN){\n                                if (this._lookahead(0) === TOK_CURRENT) {\n                                    expression = {\n                                        type: TOK_CURRENT\n                                    };\n                                    this._advance();\n                                } else {\n                                    expression = this.expression(0);\n                                }\n                                if (this._lookahead(0) === TOK_COMMA) {\n                                    this._match(TOK_COMMA);\n                                }\n                                args.push(expression);\n                            }\n                            this._match(TOK_RPAREN);\n                            node = {\n                                type: \"Function\",\n                                name,\n                                children: args\n                            };\n                            return node;\n                        case TOK_FILTER:\n                            var condition = this.expression(0);\n                            this._match(TOK_RBRACKET);\n                            if (this._lookahead(0) === TOK_FLATTEN) {\n                                right = {\n                                    type: \"Identity\"\n                                };\n                            } else {\n                                right = this._parseProjectionRHS(bindingPower.Filter);\n                            }\n                            return {\n                                type: \"FilterProjection\",\n                                children: [\n                                    left,\n                                    right,\n                                    condition\n                                ]\n                            };\n                        case TOK_FLATTEN:\n                            var leftNode = {\n                                type: TOK_FLATTEN,\n                                children: [\n                                    left\n                                ]\n                            };\n                            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);\n                            return {\n                                type: \"Projection\",\n                                children: [\n                                    leftNode,\n                                    rightNode\n                                ]\n                            };\n                        case TOK_EQ:\n                        case TOK_NE:\n                        case TOK_GT:\n                        case TOK_GTE:\n                        case TOK_LT:\n                        case TOK_LTE:\n                            return this._parseComparator(left, tokenName);\n                        case TOK_LBRACKET:\n                            var token = this._lookaheadToken(0);\n                            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {\n                                right = this._parseIndexExpression();\n                                return this._projectIfSlice(left, right);\n                            }\n                            this._match(TOK_STAR);\n                            this._match(TOK_RBRACKET);\n                            right = this._parseProjectionRHS(bindingPower.Star);\n                            return {\n                                type: \"Projection\",\n                                children: [\n                                    left,\n                                    right\n                                ]\n                            };\n                        default:\n                            this._errorToken(this._lookaheadToken(0));\n                    }\n                },\n                _match: function(tokenType) {\n                    if (this._lookahead(0) === tokenType) {\n                        this._advance();\n                    } else {\n                        var t = this._lookaheadToken(0);\n                        var error = new Error(\"Expected \" + tokenType + \", got: \" + t.type);\n                        error.name = \"ParserError\";\n                        throw error;\n                    }\n                },\n                _errorToken: function(token) {\n                    var error = new Error(\"Invalid token (\" + token.type + '): \"' + token.value + '\"');\n                    error.name = \"ParserError\";\n                    throw error;\n                },\n                _parseIndexExpression: function() {\n                    if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {\n                        return this._parseSliceExpression();\n                    } else {\n                        var node = {\n                            type: \"Index\",\n                            value: this._lookaheadToken(0).value\n                        };\n                        this._advance();\n                        this._match(TOK_RBRACKET);\n                        return node;\n                    }\n                },\n                _projectIfSlice: function(left, right) {\n                    var indexExpr = {\n                        type: \"IndexExpression\",\n                        children: [\n                            left,\n                            right\n                        ]\n                    };\n                    if (right.type === \"Slice\") {\n                        return {\n                            type: \"Projection\",\n                            children: [\n                                indexExpr,\n                                this._parseProjectionRHS(bindingPower.Star)\n                            ]\n                        };\n                    } else {\n                        return indexExpr;\n                    }\n                },\n                _parseSliceExpression: function() {\n                    var parts = [\n                        null,\n                        null,\n                        null\n                    ];\n                    var index = 0;\n                    var currentToken = this._lookahead(0);\n                    while(currentToken !== TOK_RBRACKET && index < 3){\n                        if (currentToken === TOK_COLON) {\n                            index++;\n                            this._advance();\n                        } else if (currentToken === TOK_NUMBER) {\n                            parts[index] = this._lookaheadToken(0).value;\n                            this._advance();\n                        } else {\n                            var t = this._lookahead(0);\n                            var error = new Error(\"Syntax error, unexpected token: \" + t.value + \"(\" + t.type + \")\");\n                            error.name = \"Parsererror\";\n                            throw error;\n                        }\n                        currentToken = this._lookahead(0);\n                    }\n                    this._match(TOK_RBRACKET);\n                    return {\n                        type: \"Slice\",\n                        children: parts\n                    };\n                },\n                _parseComparator: function(left, comparator) {\n                    var right = this.expression(bindingPower[comparator]);\n                    return {\n                        type: \"Comparator\",\n                        name: comparator,\n                        children: [\n                            left,\n                            right\n                        ]\n                    };\n                },\n                _parseDotRHS: function(rbp) {\n                    var lookahead = this._lookahead(0);\n                    var exprTokens = [\n                        TOK_UNQUOTEDIDENTIFIER,\n                        TOK_QUOTEDIDENTIFIER,\n                        TOK_STAR\n                    ];\n                    if (exprTokens.indexOf(lookahead) >= 0) {\n                        return this.expression(rbp);\n                    } else if (lookahead === TOK_LBRACKET) {\n                        this._match(TOK_LBRACKET);\n                        return this._parseMultiselectList();\n                    } else if (lookahead === TOK_LBRACE) {\n                        this._match(TOK_LBRACE);\n                        return this._parseMultiselectHash();\n                    }\n                },\n                _parseProjectionRHS: function(rbp) {\n                    var right;\n                    if (bindingPower[this._lookahead(0)] < 10) {\n                        right = {\n                            type: \"Identity\"\n                        };\n                    } else if (this._lookahead(0) === TOK_LBRACKET) {\n                        right = this.expression(rbp);\n                    } else if (this._lookahead(0) === TOK_FILTER) {\n                        right = this.expression(rbp);\n                    } else if (this._lookahead(0) === TOK_DOT) {\n                        this._match(TOK_DOT);\n                        right = this._parseDotRHS(rbp);\n                    } else {\n                        var t = this._lookaheadToken(0);\n                        var error = new Error(\"Sytanx error, unexpected token: \" + t.value + \"(\" + t.type + \")\");\n                        error.name = \"ParserError\";\n                        throw error;\n                    }\n                    return right;\n                },\n                _parseMultiselectList: function() {\n                    var expressions = [];\n                    while(this._lookahead(0) !== TOK_RBRACKET){\n                        var expression = this.expression(0);\n                        expressions.push(expression);\n                        if (this._lookahead(0) === TOK_COMMA) {\n                            this._match(TOK_COMMA);\n                            if (this._lookahead(0) === TOK_RBRACKET) {\n                                throw new Error(\"Unexpected token Rbracket\");\n                            }\n                        }\n                    }\n                    this._match(TOK_RBRACKET);\n                    return {\n                        type: \"MultiSelectList\",\n                        children: expressions\n                    };\n                },\n                _parseMultiselectHash: function() {\n                    var pairs = [];\n                    var identifierTypes = [\n                        TOK_UNQUOTEDIDENTIFIER,\n                        TOK_QUOTEDIDENTIFIER\n                    ];\n                    var keyToken, keyName, value, node;\n                    for(;;){\n                        keyToken = this._lookaheadToken(0);\n                        if (identifierTypes.indexOf(keyToken.type) < 0) {\n                            throw new Error(\"Expecting an identifier token, got: \" + keyToken.type);\n                        }\n                        keyName = keyToken.value;\n                        this._advance();\n                        this._match(TOK_COLON);\n                        value = this.expression(0);\n                        node = {\n                            type: \"KeyValuePair\",\n                            name: keyName,\n                            value\n                        };\n                        pairs.push(node);\n                        if (this._lookahead(0) === TOK_COMMA) {\n                            this._match(TOK_COMMA);\n                        } else if (this._lookahead(0) === TOK_RBRACE) {\n                            this._match(TOK_RBRACE);\n                            break;\n                        }\n                    }\n                    return {\n                        type: \"MultiSelectHash\",\n                        children: pairs\n                    };\n                }\n            };\n            function TreeInterpreter(runtime) {\n                this.runtime = runtime;\n            }\n            TreeInterpreter.prototype = {\n                search: function(node, value) {\n                    return this.visit(node, value);\n                },\n                visit: function(node, value) {\n                    var matched, current, result, first, second, field, left, right, collected, i;\n                    switch(node.type){\n                        case \"Field\":\n                            if (value !== null && isObject(value)) {\n                                field = value[node.name];\n                                if (field === void 0) {\n                                    return null;\n                                } else {\n                                    return field;\n                                }\n                            }\n                            return null;\n                        case \"Subexpression\":\n                            result = this.visit(node.children[0], value);\n                            for(i = 1; i < node.children.length; i++){\n                                result = this.visit(node.children[1], result);\n                                if (result === null) {\n                                    return null;\n                                }\n                            }\n                            return result;\n                        case \"IndexExpression\":\n                            left = this.visit(node.children[0], value);\n                            right = this.visit(node.children[1], left);\n                            return right;\n                        case \"Index\":\n                            if (!isArray(value)) {\n                                return null;\n                            }\n                            var index = node.value;\n                            if (index < 0) {\n                                index = value.length + index;\n                            }\n                            result = value[index];\n                            if (result === void 0) {\n                                result = null;\n                            }\n                            return result;\n                        case \"Slice\":\n                            if (!isArray(value)) {\n                                return null;\n                            }\n                            var sliceParams = node.children.slice(0);\n                            var computed = this.computeSliceParams(value.length, sliceParams);\n                            var start = computed[0];\n                            var stop = computed[1];\n                            var step = computed[2];\n                            result = [];\n                            if (step > 0) {\n                                for(i = start; i < stop; i += step){\n                                    result.push(value[i]);\n                                }\n                            } else {\n                                for(i = start; i > stop; i += step){\n                                    result.push(value[i]);\n                                }\n                            }\n                            return result;\n                        case \"Projection\":\n                            var base = this.visit(node.children[0], value);\n                            if (!isArray(base)) {\n                                return null;\n                            }\n                            collected = [];\n                            for(i = 0; i < base.length; i++){\n                                current = this.visit(node.children[1], base[i]);\n                                if (current !== null) {\n                                    collected.push(current);\n                                }\n                            }\n                            return collected;\n                        case \"ValueProjection\":\n                            base = this.visit(node.children[0], value);\n                            if (!isObject(base)) {\n                                return null;\n                            }\n                            collected = [];\n                            var values = objValues(base);\n                            for(i = 0; i < values.length; i++){\n                                current = this.visit(node.children[1], values[i]);\n                                if (current !== null) {\n                                    collected.push(current);\n                                }\n                            }\n                            return collected;\n                        case \"FilterProjection\":\n                            base = this.visit(node.children[0], value);\n                            if (!isArray(base)) {\n                                return null;\n                            }\n                            var filtered = [];\n                            var finalResults = [];\n                            for(i = 0; i < base.length; i++){\n                                matched = this.visit(node.children[2], base[i]);\n                                if (!isFalse(matched)) {\n                                    filtered.push(base[i]);\n                                }\n                            }\n                            for(var j1 = 0; j1 < filtered.length; j1++){\n                                current = this.visit(node.children[1], filtered[j1]);\n                                if (current !== null) {\n                                    finalResults.push(current);\n                                }\n                            }\n                            return finalResults;\n                        case \"Comparator\":\n                            first = this.visit(node.children[0], value);\n                            second = this.visit(node.children[1], value);\n                            switch(node.name){\n                                case TOK_EQ:\n                                    result = strictDeepEqual2(first, second);\n                                    break;\n                                case TOK_NE:\n                                    result = !strictDeepEqual2(first, second);\n                                    break;\n                                case TOK_GT:\n                                    result = first > second;\n                                    break;\n                                case TOK_GTE:\n                                    result = first >= second;\n                                    break;\n                                case TOK_LT:\n                                    result = first < second;\n                                    break;\n                                case TOK_LTE:\n                                    result = first <= second;\n                                    break;\n                                default:\n                                    throw new Error(\"Unknown comparator: \" + node.name);\n                            }\n                            return result;\n                        case TOK_FLATTEN:\n                            var original = this.visit(node.children[0], value);\n                            if (!isArray(original)) {\n                                return null;\n                            }\n                            var merged = [];\n                            for(i = 0; i < original.length; i++){\n                                current = original[i];\n                                if (isArray(current)) {\n                                    merged.push.apply(merged, current);\n                                } else {\n                                    merged.push(current);\n                                }\n                            }\n                            return merged;\n                        case \"Identity\":\n                            return value;\n                        case \"MultiSelectList\":\n                            if (value === null) {\n                                return null;\n                            }\n                            collected = [];\n                            for(i = 0; i < node.children.length; i++){\n                                collected.push(this.visit(node.children[i], value));\n                            }\n                            return collected;\n                        case \"MultiSelectHash\":\n                            if (value === null) {\n                                return null;\n                            }\n                            collected = {};\n                            var child;\n                            for(i = 0; i < node.children.length; i++){\n                                child = node.children[i];\n                                collected[child.name] = this.visit(child.value, value);\n                            }\n                            return collected;\n                        case \"OrExpression\":\n                            matched = this.visit(node.children[0], value);\n                            if (isFalse(matched)) {\n                                matched = this.visit(node.children[1], value);\n                            }\n                            return matched;\n                        case \"AndExpression\":\n                            first = this.visit(node.children[0], value);\n                            if (isFalse(first) === true) {\n                                return first;\n                            }\n                            return this.visit(node.children[1], value);\n                        case \"NotExpression\":\n                            first = this.visit(node.children[0], value);\n                            return isFalse(first);\n                        case \"Literal\":\n                            return node.value;\n                        case TOK_PIPE:\n                            left = this.visit(node.children[0], value);\n                            return this.visit(node.children[1], left);\n                        case TOK_CURRENT:\n                            return value;\n                        case \"Function\":\n                            var resolvedArgs = [];\n                            for(i = 0; i < node.children.length; i++){\n                                resolvedArgs.push(this.visit(node.children[i], value));\n                            }\n                            return this.runtime.callFunction(node.name, resolvedArgs);\n                        case \"ExpressionReference\":\n                            var refNode = node.children[0];\n                            refNode.jmespathType = TOK_EXPREF;\n                            return refNode;\n                        default:\n                            throw new Error(\"Unknown node type: \" + node.type);\n                    }\n                },\n                computeSliceParams: function(arrayLength, sliceParams) {\n                    var start = sliceParams[0];\n                    var stop = sliceParams[1];\n                    var step = sliceParams[2];\n                    var computed = [\n                        null,\n                        null,\n                        null\n                    ];\n                    if (step === null) {\n                        step = 1;\n                    } else if (step === 0) {\n                        var error = new Error(\"Invalid slice, step cannot be 0\");\n                        error.name = \"RuntimeError\";\n                        throw error;\n                    }\n                    var stepValueNegative = step < 0 ? true : false;\n                    if (start === null) {\n                        start = stepValueNegative ? arrayLength - 1 : 0;\n                    } else {\n                        start = this.capSliceRange(arrayLength, start, step);\n                    }\n                    if (stop === null) {\n                        stop = stepValueNegative ? -1 : arrayLength;\n                    } else {\n                        stop = this.capSliceRange(arrayLength, stop, step);\n                    }\n                    computed[0] = start;\n                    computed[1] = stop;\n                    computed[2] = step;\n                    return computed;\n                },\n                capSliceRange: function(arrayLength, actualValue, step) {\n                    if (actualValue < 0) {\n                        actualValue += arrayLength;\n                        if (actualValue < 0) {\n                            actualValue = step < 0 ? -1 : 0;\n                        }\n                    } else if (actualValue >= arrayLength) {\n                        actualValue = step < 0 ? arrayLength - 1 : arrayLength;\n                    }\n                    return actualValue;\n                }\n            };\n            function Runtime(interpreter) {\n                this._interpreter = interpreter;\n                this.functionTable = {\n                    abs: {\n                        _func: this._functionAbs,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_NUMBER\n                                ]\n                            }\n                        ]\n                    },\n                    avg: {\n                        _func: this._functionAvg,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY_NUMBER\n                                ]\n                            }\n                        ]\n                    },\n                    ceil: {\n                        _func: this._functionCeil,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_NUMBER\n                                ]\n                            }\n                        ]\n                    },\n                    contains: {\n                        _func: this._functionContains,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_STRING,\n                                    TYPE_ARRAY\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_ANY\n                                ]\n                            }\n                        ]\n                    },\n                    ends_with: {\n                        _func: this._functionEndsWith,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_STRING\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_STRING\n                                ]\n                            }\n                        ]\n                    },\n                    floor: {\n                        _func: this._functionFloor,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_NUMBER\n                                ]\n                            }\n                        ]\n                    },\n                    length: {\n                        _func: this._functionLength,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_STRING,\n                                    TYPE_ARRAY,\n                                    TYPE_OBJECT\n                                ]\n                            }\n                        ]\n                    },\n                    map: {\n                        _func: this._functionMap,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_EXPREF\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_ARRAY\n                                ]\n                            }\n                        ]\n                    },\n                    max: {\n                        _func: this._functionMax,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY_NUMBER,\n                                    TYPE_ARRAY_STRING\n                                ]\n                            }\n                        ]\n                    },\n                    merge: {\n                        _func: this._functionMerge,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_OBJECT\n                                ],\n                                variadic: true\n                            }\n                        ]\n                    },\n                    max_by: {\n                        _func: this._functionMaxBy,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_EXPREF\n                                ]\n                            }\n                        ]\n                    },\n                    sum: {\n                        _func: this._functionSum,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY_NUMBER\n                                ]\n                            }\n                        ]\n                    },\n                    starts_with: {\n                        _func: this._functionStartsWith,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_STRING\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_STRING\n                                ]\n                            }\n                        ]\n                    },\n                    min: {\n                        _func: this._functionMin,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY_NUMBER,\n                                    TYPE_ARRAY_STRING\n                                ]\n                            }\n                        ]\n                    },\n                    min_by: {\n                        _func: this._functionMinBy,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_EXPREF\n                                ]\n                            }\n                        ]\n                    },\n                    type: {\n                        _func: this._functionType,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ANY\n                                ]\n                            }\n                        ]\n                    },\n                    keys: {\n                        _func: this._functionKeys,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_OBJECT\n                                ]\n                            }\n                        ]\n                    },\n                    values: {\n                        _func: this._functionValues,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_OBJECT\n                                ]\n                            }\n                        ]\n                    },\n                    sort: {\n                        _func: this._functionSort,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY_STRING,\n                                    TYPE_ARRAY_NUMBER\n                                ]\n                            }\n                        ]\n                    },\n                    sort_by: {\n                        _func: this._functionSortBy,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ARRAY\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_EXPREF\n                                ]\n                            }\n                        ]\n                    },\n                    join: {\n                        _func: this._functionJoin,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_STRING\n                                ]\n                            },\n                            {\n                                types: [\n                                    TYPE_ARRAY_STRING\n                                ]\n                            }\n                        ]\n                    },\n                    reverse: {\n                        _func: this._functionReverse,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_STRING,\n                                    TYPE_ARRAY\n                                ]\n                            }\n                        ]\n                    },\n                    to_array: {\n                        _func: this._functionToArray,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ANY\n                                ]\n                            }\n                        ]\n                    },\n                    to_string: {\n                        _func: this._functionToString,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ANY\n                                ]\n                            }\n                        ]\n                    },\n                    to_number: {\n                        _func: this._functionToNumber,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ANY\n                                ]\n                            }\n                        ]\n                    },\n                    not_null: {\n                        _func: this._functionNotNull,\n                        _signature: [\n                            {\n                                types: [\n                                    TYPE_ANY\n                                ],\n                                variadic: true\n                            }\n                        ]\n                    }\n                };\n            }\n            Runtime.prototype = {\n                callFunction: function(name, resolvedArgs) {\n                    var functionEntry = this.functionTable[name];\n                    if (functionEntry === void 0) {\n                        throw new Error(\"Unknown function: \" + name + \"()\");\n                    }\n                    this._validateArgs(name, resolvedArgs, functionEntry._signature);\n                    return functionEntry._func.call(this, resolvedArgs);\n                },\n                _validateArgs: function(name, args, signature) {\n                    var pluralized;\n                    if (signature[signature.length - 1].variadic) {\n                        if (args.length < signature.length) {\n                            pluralized = signature.length === 1 ? \" argument\" : \" arguments\";\n                            throw new Error(\"ArgumentError: \" + name + \"() takes at least\" + signature.length + pluralized + \" but received \" + args.length);\n                        }\n                    } else if (args.length !== signature.length) {\n                        pluralized = signature.length === 1 ? \" argument\" : \" arguments\";\n                        throw new Error(\"ArgumentError: \" + name + \"() takes \" + signature.length + pluralized + \" but received \" + args.length);\n                    }\n                    var currentSpec;\n                    var actualType;\n                    var typeMatched;\n                    for(var i = 0; i < signature.length; i++){\n                        typeMatched = false;\n                        currentSpec = signature[i].types;\n                        actualType = this._getTypeName(args[i]);\n                        for(var j2 = 0; j2 < currentSpec.length; j2++){\n                            if (this._typeMatches(actualType, currentSpec[j2], args[i])) {\n                                typeMatched = true;\n                                break;\n                            }\n                        }\n                        if (!typeMatched) {\n                            var expected = currentSpec.map(function(typeIdentifier) {\n                                return TYPE_NAME_TABLE[typeIdentifier];\n                            }).join(\",\");\n                            throw new Error(\"TypeError: \" + name + \"() expected argument \" + (i + 1) + \" to be type \" + expected + \" but received type \" + TYPE_NAME_TABLE[actualType] + \" instead.\");\n                        }\n                    }\n                },\n                _typeMatches: function(actual, expected, argValue) {\n                    if (expected === TYPE_ANY) {\n                        return true;\n                    }\n                    if (expected === TYPE_ARRAY_STRING || expected === TYPE_ARRAY_NUMBER || expected === TYPE_ARRAY) {\n                        if (expected === TYPE_ARRAY) {\n                            return actual === TYPE_ARRAY;\n                        } else if (actual === TYPE_ARRAY) {\n                            var subtype;\n                            if (expected === TYPE_ARRAY_NUMBER) {\n                                subtype = TYPE_NUMBER;\n                            } else if (expected === TYPE_ARRAY_STRING) {\n                                subtype = TYPE_STRING;\n                            }\n                            for(var i = 0; i < argValue.length; i++){\n                                if (!this._typeMatches(this._getTypeName(argValue[i]), subtype, argValue[i])) {\n                                    return false;\n                                }\n                            }\n                            return true;\n                        }\n                    } else {\n                        return actual === expected;\n                    }\n                },\n                _getTypeName: function(obj) {\n                    switch(Object.prototype.toString.call(obj)){\n                        case \"[object String]\":\n                            return TYPE_STRING;\n                        case \"[object Number]\":\n                            return TYPE_NUMBER;\n                        case \"[object Array]\":\n                            return TYPE_ARRAY;\n                        case \"[object Boolean]\":\n                            return TYPE_BOOLEAN;\n                        case \"[object Null]\":\n                            return TYPE_NULL;\n                        case \"[object Object]\":\n                            if (obj.jmespathType === TOK_EXPREF) {\n                                return TYPE_EXPREF;\n                            } else {\n                                return TYPE_OBJECT;\n                            }\n                    }\n                },\n                _functionStartsWith: function(resolvedArgs) {\n                    return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;\n                },\n                _functionEndsWith: function(resolvedArgs) {\n                    var searchStr = resolvedArgs[0];\n                    var suffix = resolvedArgs[1];\n                    return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;\n                },\n                _functionReverse: function(resolvedArgs) {\n                    var typeName = this._getTypeName(resolvedArgs[0]);\n                    if (typeName === TYPE_STRING) {\n                        var originalStr = resolvedArgs[0];\n                        var reversedStr = \"\";\n                        for(var i = originalStr.length - 1; i >= 0; i--){\n                            reversedStr += originalStr[i];\n                        }\n                        return reversedStr;\n                    } else {\n                        var reversedArray = resolvedArgs[0].slice(0);\n                        reversedArray.reverse();\n                        return reversedArray;\n                    }\n                },\n                _functionAbs: function(resolvedArgs) {\n                    return Math.abs(resolvedArgs[0]);\n                },\n                _functionCeil: function(resolvedArgs) {\n                    return Math.ceil(resolvedArgs[0]);\n                },\n                _functionAvg: function(resolvedArgs) {\n                    var sum = 0;\n                    var inputArray = resolvedArgs[0];\n                    for(var i = 0; i < inputArray.length; i++){\n                        sum += inputArray[i];\n                    }\n                    return sum / inputArray.length;\n                },\n                _functionContains: function(resolvedArgs) {\n                    return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;\n                },\n                _functionFloor: function(resolvedArgs) {\n                    return Math.floor(resolvedArgs[0]);\n                },\n                _functionLength: function(resolvedArgs) {\n                    if (!isObject(resolvedArgs[0])) {\n                        return resolvedArgs[0].length;\n                    } else {\n                        return Object.keys(resolvedArgs[0]).length;\n                    }\n                },\n                _functionMap: function(resolvedArgs) {\n                    var mapped = [];\n                    var interpreter = this._interpreter;\n                    var exprefNode = resolvedArgs[0];\n                    var elements = resolvedArgs[1];\n                    for(var i = 0; i < elements.length; i++){\n                        mapped.push(interpreter.visit(exprefNode, elements[i]));\n                    }\n                    return mapped;\n                },\n                _functionMerge: function(resolvedArgs) {\n                    var merged = {};\n                    for(var i = 0; i < resolvedArgs.length; i++){\n                        var current = resolvedArgs[i];\n                        for(var key in current){\n                            merged[key] = current[key];\n                        }\n                    }\n                    return merged;\n                },\n                _functionMax: function(resolvedArgs) {\n                    if (resolvedArgs[0].length > 0) {\n                        var typeName = this._getTypeName(resolvedArgs[0][0]);\n                        if (typeName === TYPE_NUMBER) {\n                            return Math.max.apply(Math, resolvedArgs[0]);\n                        } else {\n                            var elements = resolvedArgs[0];\n                            var maxElement = elements[0];\n                            for(var i = 1; i < elements.length; i++){\n                                if (maxElement.localeCompare(elements[i]) < 0) {\n                                    maxElement = elements[i];\n                                }\n                            }\n                            return maxElement;\n                        }\n                    } else {\n                        return null;\n                    }\n                },\n                _functionMin: function(resolvedArgs) {\n                    if (resolvedArgs[0].length > 0) {\n                        var typeName = this._getTypeName(resolvedArgs[0][0]);\n                        if (typeName === TYPE_NUMBER) {\n                            return Math.min.apply(Math, resolvedArgs[0]);\n                        } else {\n                            var elements = resolvedArgs[0];\n                            var minElement = elements[0];\n                            for(var i = 1; i < elements.length; i++){\n                                if (elements[i].localeCompare(minElement) < 0) {\n                                    minElement = elements[i];\n                                }\n                            }\n                            return minElement;\n                        }\n                    } else {\n                        return null;\n                    }\n                },\n                _functionSum: function(resolvedArgs) {\n                    var sum = 0;\n                    var listToSum = resolvedArgs[0];\n                    for(var i = 0; i < listToSum.length; i++){\n                        sum += listToSum[i];\n                    }\n                    return sum;\n                },\n                _functionType: function(resolvedArgs) {\n                    switch(this._getTypeName(resolvedArgs[0])){\n                        case TYPE_NUMBER:\n                            return \"number\";\n                        case TYPE_STRING:\n                            return \"string\";\n                        case TYPE_ARRAY:\n                            return \"array\";\n                        case TYPE_OBJECT:\n                            return \"object\";\n                        case TYPE_BOOLEAN:\n                            return \"boolean\";\n                        case TYPE_EXPREF:\n                            return \"expref\";\n                        case TYPE_NULL:\n                            return \"null\";\n                    }\n                },\n                _functionKeys: function(resolvedArgs) {\n                    return Object.keys(resolvedArgs[0]);\n                },\n                _functionValues: function(resolvedArgs) {\n                    var obj = resolvedArgs[0];\n                    var keys = Object.keys(obj);\n                    var values = [];\n                    for(var i = 0; i < keys.length; i++){\n                        values.push(obj[keys[i]]);\n                    }\n                    return values;\n                },\n                _functionJoin: function(resolvedArgs) {\n                    var joinChar = resolvedArgs[0];\n                    var listJoin = resolvedArgs[1];\n                    return listJoin.join(joinChar);\n                },\n                _functionToArray: function(resolvedArgs) {\n                    if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {\n                        return resolvedArgs[0];\n                    } else {\n                        return [\n                            resolvedArgs[0]\n                        ];\n                    }\n                },\n                _functionToString: function(resolvedArgs) {\n                    if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {\n                        return resolvedArgs[0];\n                    } else {\n                        return JSON.stringify(resolvedArgs[0]);\n                    }\n                },\n                _functionToNumber: function(resolvedArgs) {\n                    var typeName = this._getTypeName(resolvedArgs[0]);\n                    var convertedValue;\n                    if (typeName === TYPE_NUMBER) {\n                        return resolvedArgs[0];\n                    } else if (typeName === TYPE_STRING) {\n                        convertedValue = +resolvedArgs[0];\n                        if (!isNaN(convertedValue)) {\n                            return convertedValue;\n                        }\n                    }\n                    return null;\n                },\n                _functionNotNull: function(resolvedArgs) {\n                    for(var i = 0; i < resolvedArgs.length; i++){\n                        if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {\n                            return resolvedArgs[i];\n                        }\n                    }\n                    return null;\n                },\n                _functionSort: function(resolvedArgs) {\n                    var sortedArray = resolvedArgs[0].slice(0);\n                    sortedArray.sort();\n                    return sortedArray;\n                },\n                _functionSortBy: function(resolvedArgs) {\n                    var sortedArray = resolvedArgs[0].slice(0);\n                    if (sortedArray.length === 0) {\n                        return sortedArray;\n                    }\n                    var interpreter = this._interpreter;\n                    var exprefNode = resolvedArgs[1];\n                    var requiredType = this._getTypeName(interpreter.visit(exprefNode, sortedArray[0]));\n                    if ([\n                        TYPE_NUMBER,\n                        TYPE_STRING\n                    ].indexOf(requiredType) < 0) {\n                        throw new Error(\"TypeError\");\n                    }\n                    var that = this;\n                    var decorated = [];\n                    for(var i = 0; i < sortedArray.length; i++){\n                        decorated.push([\n                            i,\n                            sortedArray[i]\n                        ]);\n                    }\n                    decorated.sort(function(a, b) {\n                        var exprA = interpreter.visit(exprefNode, a[1]);\n                        var exprB = interpreter.visit(exprefNode, b[1]);\n                        if (that._getTypeName(exprA) !== requiredType) {\n                            throw new Error(\"TypeError: expected \" + requiredType + \", received \" + that._getTypeName(exprA));\n                        } else if (that._getTypeName(exprB) !== requiredType) {\n                            throw new Error(\"TypeError: expected \" + requiredType + \", received \" + that._getTypeName(exprB));\n                        }\n                        if (exprA > exprB) {\n                            return 1;\n                        } else if (exprA < exprB) {\n                            return -1;\n                        } else {\n                            return a[0] - b[0];\n                        }\n                    });\n                    for(var j3 = 0; j3 < decorated.length; j3++){\n                        sortedArray[j3] = decorated[j3][1];\n                    }\n                    return sortedArray;\n                },\n                _functionMaxBy: function(resolvedArgs) {\n                    var exprefNode = resolvedArgs[1];\n                    var resolvedArray = resolvedArgs[0];\n                    var keyFunction = this.createKeyFunction(exprefNode, [\n                        TYPE_NUMBER,\n                        TYPE_STRING\n                    ]);\n                    var maxNumber = -Infinity;\n                    var maxRecord;\n                    var current;\n                    for(var i = 0; i < resolvedArray.length; i++){\n                        current = keyFunction(resolvedArray[i]);\n                        if (current > maxNumber) {\n                            maxNumber = current;\n                            maxRecord = resolvedArray[i];\n                        }\n                    }\n                    return maxRecord;\n                },\n                _functionMinBy: function(resolvedArgs) {\n                    var exprefNode = resolvedArgs[1];\n                    var resolvedArray = resolvedArgs[0];\n                    var keyFunction = this.createKeyFunction(exprefNode, [\n                        TYPE_NUMBER,\n                        TYPE_STRING\n                    ]);\n                    var minNumber = Infinity;\n                    var minRecord;\n                    var current;\n                    for(var i = 0; i < resolvedArray.length; i++){\n                        current = keyFunction(resolvedArray[i]);\n                        if (current < minNumber) {\n                            minNumber = current;\n                            minRecord = resolvedArray[i];\n                        }\n                    }\n                    return minRecord;\n                },\n                createKeyFunction: function(exprefNode, allowedTypes) {\n                    var that = this;\n                    var interpreter = this._interpreter;\n                    var keyFunc = function(x1) {\n                        var current = interpreter.visit(exprefNode, x1);\n                        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {\n                            var msg = \"TypeError: expected one of \" + allowedTypes + \", received \" + that._getTypeName(current);\n                            throw new Error(msg);\n                        }\n                        return current;\n                    };\n                    return keyFunc;\n                }\n            };\n            function compile2(stream) {\n                var parser = new Parser();\n                var ast = parser.parse(stream);\n                return ast;\n            }\n            function tokenize2(stream) {\n                var lexer = new Lexer();\n                return lexer.tokenize(stream);\n            }\n            function search2(data, expression) {\n                var parser = new Parser();\n                var runtime = new Runtime();\n                var interpreter = new TreeInterpreter(runtime);\n                runtime._interpreter = interpreter;\n                var node = parser.parse(expression);\n                return interpreter.search(node, data);\n            }\n            exports2.tokenize = tokenize2;\n            exports2.compile = compile2;\n            exports2.search = search2;\n            exports2.strictDeepEqual = strictDeepEqual2;\n        })(exports);\n    });\n    jmespath.compile;\n    jmespath.search;\n    jmespath.strictDeepEqual;\n    jmespath.tokenize;\n    function transform1(data, options, functions) {\n        if (typeof data != \"object\") {\n            throw new Error(\"Can't use jmespath on non object\");\n        }\n        if (!options.value) {\n            throw new Error(\"Empty jmespath passed in\");\n        }\n        return jmespath.search(data, options.value);\n    }\n    function X() {\n        return {\n            baseUrl: null,\n            breaks: !1,\n            extensions: null,\n            gfm: !0,\n            headerIds: !0,\n            headerPrefix: \"\",\n            highlight: null,\n            langPrefix: \"language-\",\n            mangle: !0,\n            pedantic: !1,\n            renderer: null,\n            sanitize: !1,\n            sanitizer: null,\n            silent: !1,\n            smartLists: !1,\n            smartypants: !1,\n            tokenizer: null,\n            walkTokens: null,\n            xhtml: !1\n        };\n    }\n    var E = X();\n    function J(l) {\n        E = l;\n    }\n    var K = /[&<>\"']/, Y = /[&<>\"']/g, ee = /[<>\"']|&(?!#?\\w+;)/, te = /[<>\"']|&(?!#?\\w+;)/g, ne = {\n        \"&\": \"&amp;\",\n        \"<\": \"&lt;\",\n        \">\": \"&gt;\",\n        '\"': \"&quot;\",\n        \"'\": \"&#39;\"\n    }, Q = (l)=>ne[l]\n    ;\n    function x(l, e) {\n        if (e) {\n            if (K.test(l)) return l.replace(Y, Q);\n        } else if (ee.test(l)) return l.replace(te, Q);\n        return l;\n    }\n    var ie = /&(#(?:\\d+)|(?:#x[0-9A-Fa-f]+)|(?:\\w+));?/ig;\n    function G(l) {\n        return l.replace(ie, (e, n)=>(n = n.toLowerCase(), n === \"colon\" ? \":\" : n.charAt(0) === \"#\" ? n.charAt(1) === \"x\" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : \"\")\n        );\n    }\n    var se = /(^|[^\\[])\\^/g;\n    function d(l, e) {\n        l = typeof l == \"string\" ? l : l.source, e = e || \"\";\n        let n = {\n            replace: (t, i)=>(i = i.source || i, i = i.replace(se, \"$1\"), l = l.replace(t, i), n)\n            ,\n            getRegex: ()=>new RegExp(l, e)\n        };\n        return n;\n    }\n    var re = /[^\\w:]/g, le = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;\n    function M(l, e, n) {\n        if (l) {\n            let t;\n            try {\n                t = decodeURIComponent(G(n)).replace(re, \"\").toLowerCase();\n            } catch  {\n                return null;\n            }\n            if (t.indexOf(\"javascript:\") === 0 || t.indexOf(\"vbscript:\") === 0 || t.indexOf(\"data:\") === 0) return null;\n        }\n        e && !le.test(n) && (n = ce(e, n));\n        try {\n            n = encodeURI(n).replace(/%25/g, \"%\");\n        } catch  {\n            return null;\n        }\n        return n;\n    }\n    var B = {}, ae = /^[^:]+:\\/*[^/]*$/, oe = /^([^:]+:)[\\s\\S]*$/, he = /^([^:]+:\\/*[^/]*)[\\s\\S]*$/;\n    function ce(l, e) {\n        B[\" \" + l] || (ae.test(l) ? B[\" \" + l] = l + \"/\" : B[\" \" + l] = O(l, \"/\", !0)), l = B[\" \" + l];\n        let n = l.indexOf(\":\") === -1;\n        return e.substring(0, 2) === \"//\" ? n ? e : l.replace(oe, \"$1\") + e : e.charAt(0) === \"/\" ? n ? e : l.replace(he, \"$1\") + e : l + e;\n    }\n    var U = {\n        exec: function() {}\n    };\n    function z(l) {\n        let e = 1, n, t;\n        for(; e < arguments.length; e++){\n            n = arguments[e];\n            for(t in n)Object.prototype.hasOwnProperty.call(n, t) && (l[t] = n[t]);\n        }\n        return l;\n    }\n    function N(l, e) {\n        let n = l.replace(/\\|/g, (s, r, a)=>{\n            let h = !1, f = r;\n            for(; --f >= 0 && a[f] === \"\\\\\";)h = !h;\n            return h ? \"|\" : \" |\";\n        }), t = n.split(/ \\|/), i = 0;\n        if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), t.length > e) t.splice(e);\n        else for(; t.length < e;)t.push(\"\");\n        for(; i < t.length; i++)t[i] = t[i].trim().replace(/\\\\\\|/g, \"|\");\n        return t;\n    }\n    function O(l, e, n) {\n        let t = l.length;\n        if (t === 0) return \"\";\n        let i = 0;\n        for(; i < t;){\n            let s = l.charAt(t - i - 1);\n            if (s === e && !n) i++;\n            else if (s !== e && n) i++;\n            else break;\n        }\n        return l.slice(0, t - i);\n    }\n    function pe(l, e) {\n        if (l.indexOf(e[1]) === -1) return -1;\n        let n = l.length, t = 0, i = 0;\n        for(; i < n; i++)if (l[i] === \"\\\\\") i++;\n        else if (l[i] === e[0]) t++;\n        else if (l[i] === e[1] && (t--, t < 0)) return i;\n        return -1;\n    }\n    function V(l) {\n        l && l.sanitize && !l.silent && console.warn(\"marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options\");\n    }\n    function P(l, e) {\n        if (e < 1) return \"\";\n        let n = \"\";\n        for(; e > 1;)e & 1 && (n += l), e >>= 1, l += l;\n        return n + l;\n    }\n    function F(l, e, n, t) {\n        let i = e.href, s = e.title ? x(e.title) : null, r = l[1].replace(/\\\\([\\[\\]])/g, \"$1\");\n        if (l[0].charAt(0) !== \"!\") {\n            t.state.inLink = !0;\n            let a = {\n                type: \"link\",\n                raw: n,\n                href: i,\n                title: s,\n                text: r,\n                tokens: t.inlineTokens(r, [])\n            };\n            return t.state.inLink = !1, a;\n        }\n        return {\n            type: \"image\",\n            raw: n,\n            href: i,\n            title: s,\n            text: x(r)\n        };\n    }\n    function ue(l, e) {\n        let n = l.match(/^(\\s+)(?:```)/);\n        if (n === null) return e;\n        let t = n[1];\n        return e.split(`\n`).map((i)=>{\n            let s = i.match(/^\\s+/);\n            if (s === null) return i;\n            let [r] = s;\n            return r.length >= t.length ? i.slice(t.length) : i;\n        }).join(`\n`);\n    }\n    var Z = class {\n        constructor(e){\n            this.options = e || E;\n        }\n        space(e) {\n            let n = this.rules.block.newline.exec(e);\n            if (n && n[0].length > 0) return {\n                type: \"space\",\n                raw: n[0]\n            };\n        }\n        code(e) {\n            let n = this.rules.block.code.exec(e);\n            if (n) {\n                let t = n[0].replace(/^ {1,4}/gm, \"\");\n                return {\n                    type: \"code\",\n                    raw: n[0],\n                    codeBlockStyle: \"indented\",\n                    text: this.options.pedantic ? t : O(t, `\n`)\n                };\n            }\n        }\n        fences(e) {\n            let n = this.rules.block.fences.exec(e);\n            if (n) {\n                let t = n[0], i = ue(t, n[3] || \"\");\n                return {\n                    type: \"code\",\n                    raw: t,\n                    lang: n[2] ? n[2].trim() : n[2],\n                    text: i\n                };\n            }\n        }\n        heading(e) {\n            let n = this.rules.block.heading.exec(e);\n            if (n) {\n                let t = n[2].trim();\n                if (/#$/.test(t)) {\n                    let s = O(t, \"#\");\n                    (this.options.pedantic || !s || / $/.test(s)) && (t = s.trim());\n                }\n                let i = {\n                    type: \"heading\",\n                    raw: n[0],\n                    depth: n[1].length,\n                    text: t,\n                    tokens: []\n                };\n                return this.lexer.inline(i.text, i.tokens), i;\n            }\n        }\n        hr(e) {\n            let n = this.rules.block.hr.exec(e);\n            if (n) return {\n                type: \"hr\",\n                raw: n[0]\n            };\n        }\n        blockquote(e) {\n            let n = this.rules.block.blockquote.exec(e);\n            if (n) {\n                let t = n[0].replace(/^ *>[ \\t]?/gm, \"\");\n                return {\n                    type: \"blockquote\",\n                    raw: n[0],\n                    tokens: this.lexer.blockTokens(t, []),\n                    text: t\n                };\n            }\n        }\n        list(e) {\n            let n = this.rules.block.list.exec(e);\n            if (n) {\n                let t, i, s, r, a, h, f, g, b, k, p, A, _ = n[1].trim(), T = _.length > 1, m = {\n                    type: \"list\",\n                    raw: \"\",\n                    ordered: T,\n                    start: T ? +_.slice(0, -1) : \"\",\n                    loose: !1,\n                    items: []\n                };\n                _ = T ? `\\\\d{1,9}\\\\${_.slice(-1)}` : `\\\\${_}`, this.options.pedantic && (_ = T ? _ : \"[*+-]\");\n                let w = new RegExp(`^( {0,3}${_})((?:[\t ][^\\\\n]*)?(?:\\\\n|$))`);\n                for(; e && (A = !1, !(!(n = w.exec(e)) || this.rules.block.hr.test(e)));){\n                    if (t = n[0], e = e.substring(t.length), g = n[2].split(`\n`, 1)[0], b = e.split(`\n`, 1)[0], this.options.pedantic ? (r = 2, p = g.trimLeft()) : (r = n[2].search(/[^ ]/), r = r > 4 ? 1 : r, p = g.slice(r), r += n[1].length), h = !1, !g && /^ *$/.test(b) && (t += b + `\n`, e = e.substring(b.length + 1), A = !0), !A) {\n                        let R = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\\\d{1,9}[.)])((?: [^\\\\n]*)?(?:\\\\n|$))`), S = new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\\\* *){3,})(?:\\\\n+|$)`);\n                        for(; e && (k = e.split(`\n`, 1)[0], g = k, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, \"  \")), !(R.test(g) || S.test(e)));){\n                            if (g.search(/[^ ]/) >= r || !g.trim()) p += `\n` + g.slice(r);\n                            else if (!h) p += `\n` + g;\n                            else break;\n                            !h && !g.trim() && (h = !0), t += k + `\n`, e = e.substring(k.length + 1);\n                        }\n                    }\n                    m.loose || (f ? m.loose = !0 : /\\n *\\n *$/.test(t) && (f = !0)), this.options.gfm && (i = /^\\[[ xX]\\] /.exec(p), i && (s = i[0] !== \"[ ] \", p = p.replace(/^\\[[ xX]\\] +/, \"\"))), m.items.push({\n                        type: \"list_item\",\n                        raw: t,\n                        task: !!i,\n                        checked: s,\n                        loose: !1,\n                        text: p\n                    }), m.raw += t;\n                }\n                m.items[m.items.length - 1].raw = t.trimRight(), m.items[m.items.length - 1].text = p.trimRight(), m.raw = m.raw.trimRight();\n                let C = m.items.length;\n                for(a = 0; a < C; a++){\n                    this.lexer.state.top = !1, m.items[a].tokens = this.lexer.blockTokens(m.items[a].text, []);\n                    let R = m.items[a].tokens.filter((I)=>I.type === \"space\"\n                    ), S = R.every((I)=>{\n                        let D = I.raw.split(\"\"), L = 0;\n                        for (let H of D)if (H === `\n` && (L += 1), L > 1) return !0;\n                        return !1;\n                    });\n                    !m.loose && R.length && S && (m.loose = !0, m.items[a].loose = !0);\n                }\n                return m;\n            }\n        }\n        html(e) {\n            let n = this.rules.block.html.exec(e);\n            if (n) {\n                let t = {\n                    type: \"html\",\n                    raw: n[0],\n                    pre: !this.options.sanitizer && (n[1] === \"pre\" || n[1] === \"script\" || n[1] === \"style\"),\n                    text: n[0]\n                };\n                return this.options.sanitize && (t.type = \"paragraph\", t.text = this.options.sanitizer ? this.options.sanitizer(n[0]) : x(n[0]), t.tokens = [], this.lexer.inline(t.text, t.tokens)), t;\n            }\n        }\n        def(e) {\n            let n = this.rules.block.def.exec(e);\n            if (n) {\n                n[3] && (n[3] = n[3].substring(1, n[3].length - 1));\n                let t = n[1].toLowerCase().replace(/\\s+/g, \" \");\n                return {\n                    type: \"def\",\n                    tag: t,\n                    raw: n[0],\n                    href: n[2],\n                    title: n[3]\n                };\n            }\n        }\n        table(e) {\n            let n = this.rules.block.table.exec(e);\n            if (n) {\n                let t = {\n                    type: \"table\",\n                    header: N(n[1]).map((i)=>({\n                            text: i\n                        })\n                    ),\n                    align: n[2].replace(/^ *|\\| *$/g, \"\").split(/ *\\| */),\n                    rows: n[3] && n[3].trim() ? n[3].replace(/\\n[ \\t]*$/, \"\").split(`\n`) : []\n                };\n                if (t.header.length === t.align.length) {\n                    t.raw = n[0];\n                    let i = t.align.length, s, r, a, h;\n                    for(s = 0; s < i; s++)/^ *-+: *$/.test(t.align[s]) ? t.align[s] = \"right\" : /^ *:-+: *$/.test(t.align[s]) ? t.align[s] = \"center\" : /^ *:-+ *$/.test(t.align[s]) ? t.align[s] = \"left\" : t.align[s] = null;\n                    for(i = t.rows.length, s = 0; s < i; s++)t.rows[s] = N(t.rows[s], t.header.length).map((f)=>({\n                            text: f\n                        })\n                    );\n                    for(i = t.header.length, r = 0; r < i; r++)t.header[r].tokens = [], this.lexer.inlineTokens(t.header[r].text, t.header[r].tokens);\n                    for(i = t.rows.length, r = 0; r < i; r++)for(h = t.rows[r], a = 0; a < h.length; a++)h[a].tokens = [], this.lexer.inlineTokens(h[a].text, h[a].tokens);\n                    return t;\n                }\n            }\n        }\n        lheading(e) {\n            let n = this.rules.block.lheading.exec(e);\n            if (n) {\n                let t = {\n                    type: \"heading\",\n                    raw: n[0],\n                    depth: n[2].charAt(0) === \"=\" ? 1 : 2,\n                    text: n[1],\n                    tokens: []\n                };\n                return this.lexer.inline(t.text, t.tokens), t;\n            }\n        }\n        paragraph(e) {\n            let n = this.rules.block.paragraph.exec(e);\n            if (n) {\n                let t = {\n                    type: \"paragraph\",\n                    raw: n[0],\n                    text: n[1].charAt(n[1].length - 1) === `\n` ? n[1].slice(0, -1) : n[1],\n                    tokens: []\n                };\n                return this.lexer.inline(t.text, t.tokens), t;\n            }\n        }\n        text(e) {\n            let n = this.rules.block.text.exec(e);\n            if (n) {\n                let t = {\n                    type: \"text\",\n                    raw: n[0],\n                    text: n[0],\n                    tokens: []\n                };\n                return this.lexer.inline(t.text, t.tokens), t;\n            }\n        }\n        escape(e) {\n            let n = this.rules.inline.escape.exec(e);\n            if (n) return {\n                type: \"escape\",\n                raw: n[0],\n                text: x(n[1])\n            };\n        }\n        tag(e) {\n            let n = this.rules.inline.tag.exec(e);\n            if (n) return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\\/(pre|code|kbd|script)(\\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {\n                type: this.options.sanitize ? \"text\" : \"html\",\n                raw: n[0],\n                inLink: this.lexer.state.inLink,\n                inRawBlock: this.lexer.state.inRawBlock,\n                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : x(n[0]) : n[0]\n            };\n        }\n        link(e) {\n            let n = this.rules.inline.link.exec(e);\n            if (n) {\n                let t = n[2].trim();\n                if (!this.options.pedantic && /^</.test(t)) {\n                    if (!/>$/.test(t)) return;\n                    let r = O(t.slice(0, -1), \"\\\\\");\n                    if ((t.length - r.length) % 2 === 0) return;\n                } else {\n                    let r = pe(n[2], \"()\");\n                    if (r > -1) {\n                        let h = (n[0].indexOf(\"!\") === 0 ? 5 : 4) + n[1].length + r;\n                        n[2] = n[2].substring(0, r), n[0] = n[0].substring(0, h).trim(), n[3] = \"\";\n                    }\n                }\n                let i = n[2], s = \"\";\n                if (this.options.pedantic) {\n                    let r = /^([^'\"]*[^\\s])\\s+(['\"])(.*)\\2/.exec(i);\n                    r && (i = r[1], s = r[3]);\n                } else s = n[3] ? n[3].slice(1, -1) : \"\";\n                return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(t) ? i = i.slice(1) : i = i.slice(1, -1)), F(n, {\n                    href: i && i.replace(this.rules.inline._escapes, \"$1\"),\n                    title: s && s.replace(this.rules.inline._escapes, \"$1\")\n                }, n[0], this.lexer);\n            }\n        }\n        reflink(e, n) {\n            let t;\n            if ((t = this.rules.inline.reflink.exec(e)) || (t = this.rules.inline.nolink.exec(e))) {\n                let i = (t[2] || t[1]).replace(/\\s+/g, \" \");\n                if (i = n[i.toLowerCase()], !i || !i.href) {\n                    let s = t[0].charAt(0);\n                    return {\n                        type: \"text\",\n                        raw: s,\n                        text: s\n                    };\n                }\n                return F(t, i, t[0], this.lexer);\n            }\n        }\n        emStrong(e, n, t = \"\") {\n            let i = this.rules.inline.emStrong.lDelim.exec(e);\n            if (!i || i[3] && t.match(/[\\p{L}\\p{N}]/u)) return;\n            let s = i[1] || i[2] || \"\";\n            if (!s || s && (t === \"\" || this.rules.inline.punctuation.exec(t))) {\n                let r = i[0].length - 1, a, h, f = r, g = 0, b = i[0][0] === \"*\" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;\n                for(b.lastIndex = 0, n = n.slice(-1 * e.length + r); (i = b.exec(n)) != null;){\n                    if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a) continue;\n                    if (h = a.length, i[3] || i[4]) {\n                        f += h;\n                        continue;\n                    } else if ((i[5] || i[6]) && r % 3 && !((r + h) % 3)) {\n                        g += h;\n                        continue;\n                    }\n                    if (f -= h, f > 0) continue;\n                    if (h = Math.min(h, h + f + g), Math.min(r, h) % 2) {\n                        let p = e.slice(1, r + i.index + h);\n                        return {\n                            type: \"em\",\n                            raw: e.slice(0, r + i.index + h + 1),\n                            text: p,\n                            tokens: this.lexer.inlineTokens(p, [])\n                        };\n                    }\n                    let k = e.slice(2, r + i.index + h - 1);\n                    return {\n                        type: \"strong\",\n                        raw: e.slice(0, r + i.index + h + 1),\n                        text: k,\n                        tokens: this.lexer.inlineTokens(k, [])\n                    };\n                }\n            }\n        }\n        codespan(e) {\n            let n = this.rules.inline.code.exec(e);\n            if (n) {\n                let t = n[2].replace(/\\n/g, \" \"), i = /[^ ]/.test(t), s = /^ /.test(t) && / $/.test(t);\n                return i && s && (t = t.substring(1, t.length - 1)), t = x(t, !0), {\n                    type: \"codespan\",\n                    raw: n[0],\n                    text: t\n                };\n            }\n        }\n        br(e) {\n            let n = this.rules.inline.br.exec(e);\n            if (n) return {\n                type: \"br\",\n                raw: n[0]\n            };\n        }\n        del(e) {\n            let n = this.rules.inline.del.exec(e);\n            if (n) return {\n                type: \"del\",\n                raw: n[0],\n                text: n[2],\n                tokens: this.lexer.inlineTokens(n[2], [])\n            };\n        }\n        autolink(e, n) {\n            let t = this.rules.inline.autolink.exec(e);\n            if (t) {\n                let i, s;\n                return t[2] === \"@\" ? (i = x(this.options.mangle ? n(t[1]) : t[1]), s = \"mailto:\" + i) : (i = x(t[1]), s = i), {\n                    type: \"link\",\n                    raw: t[0],\n                    text: i,\n                    href: s,\n                    tokens: [\n                        {\n                            type: \"text\",\n                            raw: i,\n                            text: i\n                        }\n                    ]\n                };\n            }\n        }\n        url(e, n) {\n            let t;\n            if (t = this.rules.inline.url.exec(e)) {\n                let i, s;\n                if (t[2] === \"@\") i = x(this.options.mangle ? n(t[0]) : t[0]), s = \"mailto:\" + i;\n                else {\n                    let r;\n                    do r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])[0];\n                    while (r !== t[0])\n                    i = x(t[0]), t[1] === \"www.\" ? s = \"http://\" + i : s = i;\n                }\n                return {\n                    type: \"link\",\n                    raw: t[0],\n                    text: i,\n                    href: s,\n                    tokens: [\n                        {\n                            type: \"text\",\n                            raw: i,\n                            text: i\n                        }\n                    ]\n                };\n            }\n        }\n        inlineText(e, n) {\n            let t = this.rules.inline.text.exec(e);\n            if (t) {\n                let i;\n                return this.lexer.state.inRawBlock ? i = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : x(t[0]) : t[0] : i = x(this.options.smartypants ? n(t[0]) : t[0]), {\n                    type: \"text\",\n                    raw: t[0],\n                    text: i\n                };\n            }\n        }\n    }, c = {\n        newline: /^(?: *(?:\\n|$))+/,\n        code: /^( {4}[^\\n]+(?:\\n(?: *(?:\\n|$))*)?)+/,\n        fences: /^ {0,3}(`{3,}(?=[^`\\n]*\\n)|~{3,})([^\\n]*)\\n(?:|([\\s\\S]*?)\\n)(?: {0,3}\\1[~`]* *(?=\\n|$)|$)/,\n        hr: /^ {0,3}((?:-[\\t ]*){3,}|(?:_[ \\t]*){3,}|(?:\\*[ \\t]*){3,})(?:\\n+|$)/,\n        heading: /^ {0,3}(#{1,6})(?=\\s|$)(.*)(?:\\n+|$)/,\n        blockquote: /^( {0,3}> ?(paragraph|[^\\n]*)(?:\\n|$))+/,\n        list: /^( {0,3}bull)([ \\t][^\\n]+?)?(?:\\n|$)/,\n        html: \"^ {0,3}(?:<(script|pre|style|textarea)[\\\\s>][\\\\s\\\\S]*?(?:</\\\\1>[^\\\\n]*\\\\n+|$)|comment[^\\\\n]*(\\\\n+|$)|<\\\\?[\\\\s\\\\S]*?(?:\\\\?>\\\\n*|$)|<![A-Z][\\\\s\\\\S]*?(?:>\\\\n*|$)|<!\\\\[CDATA\\\\[[\\\\s\\\\S]*?(?:\\\\]\\\\]>\\\\n*|$)|</?(tag)(?: +|\\\\n|/?>)[\\\\s\\\\S]*?(?:(?:\\\\n *)+\\\\n|$)|<(?!script|pre|style|textarea)([a-z][\\\\w-]*)(?:attribute)*? */?>(?=[ \\\\t]*(?:\\\\n|$))[\\\\s\\\\S]*?(?:(?:\\\\n *)+\\\\n|$)|</(?!script|pre|style|textarea)[a-z][\\\\w-]*\\\\s*>(?=[ \\\\t]*(?:\\\\n|$))[\\\\s\\\\S]*?(?:(?:\\\\n *)+\\\\n|$))\",\n        def: /^ {0,3}\\[(label)\\]: *(?:\\n *)?<?([^\\s>]+)>?(?:(?: +(?:\\n *)?| *\\n *)(title))? *(?:\\n+|$)/,\n        table: U,\n        lheading: /^([^\\n]+)\\n {0,3}(=+|-+) *(?:\\n+|$)/,\n        _paragraph: /^([^\\n]+(?:\\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\\n)[^\\n]+)*)/,\n        text: /^[^\\n]+/\n    };\n    c._label = /(?!\\s*\\])(?:\\\\.|[^\\[\\]\\\\])+/;\n    c._title = /(?:\"(?:\\\\\"?|[^\"\\\\])*\"|'[^'\\n]*(?:\\n[^'\\n]+)*\\n?'|\\([^()]*\\))/;\n    c.def = d(c.def).replace(\"label\", c._label).replace(\"title\", c._title).getRegex();\n    c.bullet = /(?:[*+-]|\\d{1,9}[.)])/;\n    c.listItemStart = d(/^( *)(bull) */).replace(\"bull\", c.bullet).getRegex();\n    c.list = d(c.list).replace(/bull/g, c.bullet).replace(\"hr\", \"\\\\n+(?=\\\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\\\* *){3,})(?:\\\\n+|$))\").replace(\"def\", \"\\\\n+(?=\" + c.def.source + \")\").getRegex();\n    c._tag = \"address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul\";\n    c._comment = /<!--(?!-?>)[\\s\\S]*?(?:-->|$)/;\n    c.html = d(c.html, \"i\").replace(\"comment\", c._comment).replace(\"tag\", c._tag).replace(\"attribute\", / +[a-zA-Z:_][\\w.:-]*(?: *= *\"[^\"\\n]*\"| *= *'[^'\\n]*'| *= *[^\\s\"'=<>`]+)?/).getRegex();\n    c.paragraph = d(c._paragraph).replace(\"hr\", c.hr).replace(\"heading\", \" {0,3}#{1,6} \").replace(\"|lheading\", \"\").replace(\"|table\", \"\").replace(\"blockquote\", \" {0,3}>\").replace(\"fences\", \" {0,3}(?:`{3,}(?=[^`\\\\n]*\\\\n)|~{3,})[^\\\\n]*\\\\n\").replace(\"list\", \" {0,3}(?:[*+-]|1[.)]) \").replace(\"html\", \"</?(?:tag)(?: +|\\\\n|/?>)|<(?:script|pre|style|textarea|!--)\").replace(\"tag\", c._tag).getRegex();\n    c.blockquote = d(c.blockquote).replace(\"paragraph\", c.paragraph).getRegex();\n    c.normal = z({}, c);\n    c.gfm = z({}, c.normal, {\n        table: \"^ *([^\\\\n ].*\\\\|.*)\\\\n {0,3}(?:\\\\| *)?(:?-+:? *(?:\\\\| *:?-+:? *)*)(?:\\\\| *)?(?:\\\\n((?:(?! *\\\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\\\n|$))*)\\\\n*|$)\"\n    });\n    c.gfm.table = d(c.gfm.table).replace(\"hr\", c.hr).replace(\"heading\", \" {0,3}#{1,6} \").replace(\"blockquote\", \" {0,3}>\").replace(\"code\", \" {4}[^\\\\n]\").replace(\"fences\", \" {0,3}(?:`{3,}(?=[^`\\\\n]*\\\\n)|~{3,})[^\\\\n]*\\\\n\").replace(\"list\", \" {0,3}(?:[*+-]|1[.)]) \").replace(\"html\", \"</?(?:tag)(?: +|\\\\n|/?>)|<(?:script|pre|style|textarea|!--)\").replace(\"tag\", c._tag).getRegex();\n    c.gfm.paragraph = d(c._paragraph).replace(\"hr\", c.hr).replace(\"heading\", \" {0,3}#{1,6} \").replace(\"|lheading\", \"\").replace(\"table\", c.gfm.table).replace(\"blockquote\", \" {0,3}>\").replace(\"fences\", \" {0,3}(?:`{3,}(?=[^`\\\\n]*\\\\n)|~{3,})[^\\\\n]*\\\\n\").replace(\"list\", \" {0,3}(?:[*+-]|1[.)]) \").replace(\"html\", \"</?(?:tag)(?: +|\\\\n|/?>)|<(?:script|pre|style|textarea|!--)\").replace(\"tag\", c._tag).getRegex();\n    c.pedantic = z({}, c.normal, {\n        html: d(`^ *(?:comment *(?:\\\\n|\\\\s*$)|<(tag)[\\\\s\\\\S]+?</\\\\1> *(?:\\\\n{2,}|\\\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\\\s[^'\"/>\\\\s]*)*?/?> *(?:\\\\n{2,}|\\\\s*$))`).replace(\"comment\", c._comment).replace(/tag/g, \"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\\\b)\\\\w+(?!:|[^\\\\w\\\\s@]*@)\\\\b\").getRegex(),\n        def: /^ *\\[([^\\]]+)\\]: *<?([^\\s>]+)>?(?: +([\"(][^\\n]+[\")]))? *(?:\\n+|$)/,\n        heading: /^(#{1,6})(.*)(?:\\n+|$)/,\n        fences: U,\n        paragraph: d(c.normal._paragraph).replace(\"hr\", c.hr).replace(\"heading\", ` *#{1,6} *[^\n]`).replace(\"lheading\", c.lheading).replace(\"blockquote\", \" {0,3}>\").replace(\"|fences\", \"\").replace(\"|list\", \"\").replace(\"|html\", \"\").getRegex()\n    });\n    var o = {\n        escape: /^\\\\([!\"#$%&'()*+,\\-./:;<=>?@\\[\\]\\\\^_`{|}~])/,\n        autolink: /^<(scheme:[^\\s\\x00-\\x1f<>]*|email)>/,\n        url: U,\n        tag: \"^comment|^</[a-zA-Z][\\\\w:-]*\\\\s*>|^<[a-zA-Z][\\\\w-]*(?:attribute)*?\\\\s*/?>|^<\\\\?[\\\\s\\\\S]*?\\\\?>|^<![a-zA-Z]+\\\\s[\\\\s\\\\S]*?>|^<!\\\\[CDATA\\\\[[\\\\s\\\\S]*?\\\\]\\\\]>\",\n        link: /^!?\\[(label)\\]\\(\\s*(href)(?:\\s+(title))?\\s*\\)/,\n        reflink: /^!?\\[(label)\\]\\[(ref)\\]/,\n        nolink: /^!?\\[(ref)\\](?:\\[\\])?/,\n        reflinkSearch: \"reflink|nolink(?!\\\\()\",\n        emStrong: {\n            lDelim: /^(?:\\*+(?:([punct_])|[^\\s*]))|^_+(?:([punct*])|([^\\s_]))/,\n            rDelimAst: /^[^_*]*?\\_\\_[^_*]*?\\*[^_*]*?(?=\\_\\_)|[^*]+(?=[^*])|[punct_](\\*+)(?=[\\s]|$)|[^punct*_\\s](\\*+)(?=[punct_\\s]|$)|[punct_\\s](\\*+)(?=[^punct*_\\s])|[\\s](\\*+)(?=[punct_])|[punct_](\\*+)(?=[punct_])|[^punct*_\\s](\\*+)(?=[^punct*_\\s])/,\n            rDelimUnd: /^[^_*]*?\\*\\*[^_*]*?\\_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|[punct*](\\_+)(?=[\\s]|$)|[^punct*_\\s](\\_+)(?=[punct*\\s]|$)|[punct*\\s](\\_+)(?=[^punct*_\\s])|[\\s](\\_+)(?=[punct*])|[punct*](\\_+)(?=[punct*])/\n        },\n        code: /^(`+)([^`]|[^`][\\s\\S]*?[^`])\\1(?!`)/,\n        br: /^( {2,}|\\\\)\\n(?!\\s*$)/,\n        del: U,\n        text: /^(`+|[^`])(?:(?= {2,}\\n)|[\\s\\S]*?(?:(?=[\\\\<!\\[`*_]|\\b_|$)|[^ ](?= {2,}\\n)))/,\n        punctuation: /^([\\spunctuation])/\n    };\n    o._punctuation = \"!\\\"#$%&'()+\\\\-.,/:;<=>?@\\\\[\\\\]`^{|}~\";\n    o.punctuation = d(o.punctuation).replace(/punctuation/g, o._punctuation).getRegex();\n    o.blockSkip = /\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>/g;\n    o.escapedEmSt = /\\\\\\*|\\\\_/g;\n    o._comment = d(c._comment).replace(\"(?:-->|$)\", \"-->\").getRegex();\n    o.emStrong.lDelim = d(o.emStrong.lDelim).replace(/punct/g, o._punctuation).getRegex();\n    o.emStrong.rDelimAst = d(o.emStrong.rDelimAst, \"g\").replace(/punct/g, o._punctuation).getRegex();\n    o.emStrong.rDelimUnd = d(o.emStrong.rDelimUnd, \"g\").replace(/punct/g, o._punctuation).getRegex();\n    o._escapes = /\\\\([!\"#$%&'()*+,\\-./:;<=>?@\\[\\]\\\\^_`{|}~])/g;\n    o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;\n    o._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;\n    o.autolink = d(o.autolink).replace(\"scheme\", o._scheme).replace(\"email\", o._email).getRegex();\n    o._attribute = /\\s+[a-zA-Z:_][\\w.:-]*(?:\\s*=\\s*\"[^\"]*\"|\\s*=\\s*'[^']*'|\\s*=\\s*[^\\s\"'=<>`]+)?/;\n    o.tag = d(o.tag).replace(\"comment\", o._comment).replace(\"attribute\", o._attribute).getRegex();\n    o._label = /(?:\\[(?:\\\\.|[^\\[\\]\\\\])*\\]|\\\\.|`[^`]*`|[^\\[\\]\\\\`])*?/;\n    o._href = /<(?:\\\\.|[^\\n<>\\\\])+>|[^\\s\\x00-\\x1f]*/;\n    o._title = /\"(?:\\\\\"?|[^\"\\\\])*\"|'(?:\\\\'?|[^'\\\\])*'|\\((?:\\\\\\)?|[^)\\\\])*\\)/;\n    o.link = d(o.link).replace(\"label\", o._label).replace(\"href\", o._href).replace(\"title\", o._title).getRegex();\n    o.reflink = d(o.reflink).replace(\"label\", o._label).replace(\"ref\", c._label).getRegex();\n    o.nolink = d(o.nolink).replace(\"ref\", c._label).getRegex();\n    o.reflinkSearch = d(o.reflinkSearch, \"g\").replace(\"reflink\", o.reflink).replace(\"nolink\", o.nolink).getRegex();\n    o.normal = z({}, o);\n    o.pedantic = z({}, o.normal, {\n        strong: {\n            start: /^__|\\*\\*/,\n            middle: /^__(?=\\S)([\\s\\S]*?\\S)__(?!_)|^\\*\\*(?=\\S)([\\s\\S]*?\\S)\\*\\*(?!\\*)/,\n            endAst: /\\*\\*(?!\\*)/g,\n            endUnd: /__(?!_)/g\n        },\n        em: {\n            start: /^_|\\*/,\n            middle: /^()\\*(?=\\S)([\\s\\S]*?\\S)\\*(?!\\*)|^_(?=\\S)([\\s\\S]*?\\S)_(?!_)/,\n            endAst: /\\*(?!\\*)/g,\n            endUnd: /_(?!_)/g\n        },\n        link: d(/^!?\\[(label)\\]\\((.*?)\\)/).replace(\"label\", o._label).getRegex(),\n        reflink: d(/^!?\\[(label)\\]\\s*\\[([^\\]]*)\\]/).replace(\"label\", o._label).getRegex()\n    });\n    o.gfm = z({}, o.normal, {\n        escape: d(o.escape).replace(\"])\", \"~|])\").getRegex(),\n        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,\n        url: /^((?:ftp|https?):\\/\\/|www\\.)(?:[a-zA-Z0-9\\-]+\\.?)+[^\\s<]*|^email/,\n        _backpedal: /(?:[^?!.,:;*_~()&]+|\\([^)]*\\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,\n        del: /^(~~?)(?=[^\\s~])([\\s\\S]*?[^\\s~])\\1(?=[^~]|$)/,\n        text: /^([`~]+|[^`~])(?:(?= {2,}\\n)|(?=[a-zA-Z0-9.!#$%&'*+\\/=?_`{\\|}~-]+@)|[\\s\\S]*?(?:(?=[\\\\<!\\[`*~_]|\\b_|https?:\\/\\/|ftp:\\/\\/|www\\.|$)|[^ ](?= {2,}\\n)|[^a-zA-Z0-9.!#$%&'*+\\/=?_`{\\|}~-](?=[a-zA-Z0-9.!#$%&'*+\\/=?_`{\\|}~-]+@)))/\n    });\n    o.gfm.url = d(o.gfm.url, \"i\").replace(\"email\", o.gfm._extended_email).getRegex();\n    o.breaks = z({}, o.gfm, {\n        br: d(o.br).replace(\"{2,}\", \"*\").getRegex(),\n        text: d(o.gfm.text).replace(\"\\\\b_\", \"\\\\b_| {2,}\\\\n\").replace(/\\{2,\\}/g, \"*\").getRegex()\n    });\n    function fe(l) {\n        return l.replace(/---/g, \"\\u2014\").replace(/--/g, \"\\u2013\").replace(/(^|[-\\u2014/(\\[{\"\\s])'/g, \"$1\\u2018\").replace(/'/g, \"\\u2019\").replace(/(^|[-\\u2014/(\\[{\\u2018\\s])\"/g, \"$1\\u201C\").replace(/\"/g, \"\\u201D\").replace(/\\.{3}/g, \"\\u2026\");\n    }\n    function W(l) {\n        let e = \"\", n, t, i = l.length;\n        for(n = 0; n < i; n++)t = l.charCodeAt(n), Math.random() > .5 && (t = \"x\" + t.toString(16)), e += \"&#\" + t + \";\";\n        return e;\n    }\n    var y = class {\n        constructor(e){\n            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || E, this.options.tokenizer = this.options.tokenizer || new Z, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {\n                inLink: !1,\n                inRawBlock: !1,\n                top: !0\n            };\n            let n = {\n                block: c.normal,\n                inline: o.normal\n            };\n            this.options.pedantic ? (n.block = c.pedantic, n.inline = o.pedantic) : this.options.gfm && (n.block = c.gfm, this.options.breaks ? n.inline = o.breaks : n.inline = o.gfm), this.tokenizer.rules = n;\n        }\n        static get rules() {\n            return {\n                block: c,\n                inline: o\n            };\n        }\n        static lex(e, n) {\n            return new y(n).lex(e);\n        }\n        static lexInline(e, n) {\n            return new y(n).inlineTokens(e);\n        }\n        lex(e) {\n            e = e.replace(/\\r\\n|\\r/g, `\n`), this.blockTokens(e, this.tokens);\n            let n;\n            for(; n = this.inlineQueue.shift();)this.inlineTokens(n.src, n.tokens);\n            return this.tokens;\n        }\n        blockTokens(e, n = []) {\n            this.options.pedantic ? e = e.replace(/\\t/g, \"    \").replace(/^ +$/gm, \"\") : e = e.replace(/^( *)(\\t+)/gm, (a, h, f)=>h + \"    \".repeat(f.length)\n            );\n            let t, i, s, r;\n            for(; e;)if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a)=>(t = a.call({\n                    lexer: this\n                }, e, n)) ? (e = e.substring(t.raw.length), n.push(t), !0) : !1\n            ))) {\n                if (t = this.tokenizer.space(e)) {\n                    e = e.substring(t.raw.length), t.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `\n` : n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.code(e)) {\n                    e = e.substring(t.raw.length), i = n[n.length - 1], i && (i.type === \"paragraph\" || i.type === \"text\") ? (i.raw += `\n` + t.raw, i.text += `\n` + t.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.fences(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.heading(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.hr(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.blockquote(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.list(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.html(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.def(e)) {\n                    e = e.substring(t.raw.length), i = n[n.length - 1], i && (i.type === \"paragraph\" || i.type === \"text\") ? (i.raw += `\n` + t.raw, i.text += `\n` + t.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[t.tag] || (this.tokens.links[t.tag] = {\n                        href: t.href,\n                        title: t.title\n                    });\n                    continue;\n                }\n                if (t = this.tokenizer.table(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.lheading(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (s = e, this.options.extensions && this.options.extensions.startBlock) {\n                    let a = 1 / 0, h = e.slice(1), f;\n                    this.options.extensions.startBlock.forEach(function(g) {\n                        f = g.call({\n                            lexer: this\n                        }, h), typeof f == \"number\" && f >= 0 && (a = Math.min(a, f));\n                    }), a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));\n                }\n                if (this.state.top && (t = this.tokenizer.paragraph(s))) {\n                    i = n[n.length - 1], r && i.type === \"paragraph\" ? (i.raw += `\n` + t.raw, i.text += `\n` + t.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(t), r = s.length !== e.length, e = e.substring(t.raw.length);\n                    continue;\n                }\n                if (t = this.tokenizer.text(e)) {\n                    e = e.substring(t.raw.length), i = n[n.length - 1], i && i.type === \"text\" ? (i.raw += `\n` + t.raw, i.text += `\n` + t.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(t);\n                    continue;\n                }\n                if (e) {\n                    let a = \"Infinite loop on byte: \" + e.charCodeAt(0);\n                    if (this.options.silent) {\n                        console.error(a);\n                        break;\n                    } else throw new Error(a);\n                }\n            }\n            return this.state.top = !0, n;\n        }\n        inline(e, n) {\n            this.inlineQueue.push({\n                src: e,\n                tokens: n\n            });\n        }\n        inlineTokens(e, n = []) {\n            let t, i, s, r = e, a, h, f;\n            if (this.tokens.links) {\n                let g = Object.keys(this.tokens.links);\n                if (g.length > 0) for(; (a = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null;)g.includes(a[0].slice(a[0].lastIndexOf(\"[\") + 1, -1)) && (r = r.slice(0, a.index) + \"[\" + P(\"a\", a[0].length - 2) + \"]\" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));\n            }\n            for(; (a = this.tokenizer.rules.inline.blockSkip.exec(r)) != null;)r = r.slice(0, a.index) + \"[\" + P(\"a\", a[0].length - 2) + \"]\" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);\n            for(; (a = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null;)r = r.slice(0, a.index) + \"++\" + r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);\n            for(; e;)if (h || (f = \"\"), h = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((g)=>(t = g.call({\n                    lexer: this\n                }, e, n)) ? (e = e.substring(t.raw.length), n.push(t), !0) : !1\n            ))) {\n                if (t = this.tokenizer.escape(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.tag(e)) {\n                    e = e.substring(t.raw.length), i = n[n.length - 1], i && t.type === \"text\" && i.type === \"text\" ? (i.raw += t.raw, i.text += t.text) : n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.link(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.reflink(e, this.tokens.links)) {\n                    e = e.substring(t.raw.length), i = n[n.length - 1], i && t.type === \"text\" && i.type === \"text\" ? (i.raw += t.raw, i.text += t.text) : n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.emStrong(e, r, f)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.codespan(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.br(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.del(e)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (t = this.tokenizer.autolink(e, W)) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (!this.state.inLink && (t = this.tokenizer.url(e, W))) {\n                    e = e.substring(t.raw.length), n.push(t);\n                    continue;\n                }\n                if (s = e, this.options.extensions && this.options.extensions.startInline) {\n                    let g = 1 / 0, b = e.slice(1), k;\n                    this.options.extensions.startInline.forEach(function(p) {\n                        k = p.call({\n                            lexer: this\n                        }, b), typeof k == \"number\" && k >= 0 && (g = Math.min(g, k));\n                    }), g < 1 / 0 && g >= 0 && (s = e.substring(0, g + 1));\n                }\n                if (t = this.tokenizer.inlineText(s, fe)) {\n                    e = e.substring(t.raw.length), t.raw.slice(-1) !== \"_\" && (f = t.raw.slice(-1)), h = !0, i = n[n.length - 1], i && i.type === \"text\" ? (i.raw += t.raw, i.text += t.text) : n.push(t);\n                    continue;\n                }\n                if (e) {\n                    let g = \"Infinite loop on byte: \" + e.charCodeAt(0);\n                    if (this.options.silent) {\n                        console.error(g);\n                        break;\n                    } else throw new Error(g);\n                }\n            }\n            return n;\n        }\n    }, q = class {\n        constructor(e){\n            this.options = e || E;\n        }\n        code(e, n, t) {\n            let i = (n || \"\").match(/\\S*/)[0];\n            if (this.options.highlight) {\n                let s = this.options.highlight(e, i);\n                s != null && s !== e && (t = !0, e = s);\n            }\n            return e = e.replace(/\\n$/, \"\") + `\n`, i ? '<pre><code class=\"' + this.options.langPrefix + x(i, !0) + '\">' + (t ? e : x(e, !0)) + `</code></pre>\n` : \"<pre><code>\" + (t ? e : x(e, !0)) + `</code></pre>\n`;\n        }\n        blockquote(e) {\n            return `<blockquote>\n${e}</blockquote>\n`;\n        }\n        html(e) {\n            return e;\n        }\n        heading(e, n, t, i) {\n            if (this.options.headerIds) {\n                let s = this.options.headerPrefix + i.slug(t);\n                return `<h${n} id=\"${s}\">${e}</h${n}>\n`;\n            }\n            return `<h${n}>${e}</h${n}>\n`;\n        }\n        hr() {\n            return this.options.xhtml ? `<hr/>\n` : `<hr>\n`;\n        }\n        list(e, n, t) {\n            let i = n ? \"ol\" : \"ul\", s = n && t !== 1 ? ' start=\"' + t + '\"' : \"\";\n            return \"<\" + i + s + `>\n` + e + \"</\" + i + `>\n`;\n        }\n        listitem(e) {\n            return `<li>${e}</li>\n`;\n        }\n        checkbox(e) {\n            return \"<input \" + (e ? 'checked=\"\" ' : \"\") + 'disabled=\"\" type=\"checkbox\"' + (this.options.xhtml ? \" /\" : \"\") + \"> \";\n        }\n        paragraph(e) {\n            return `<p>${e}</p>\n`;\n        }\n        table(e, n) {\n            return n && (n = `<tbody>${n}</tbody>`), `<table>\n<thead>\n` + e + `</thead>\n` + n + `</table>\n`;\n        }\n        tablerow(e) {\n            return `<tr>\n${e}</tr>\n`;\n        }\n        tablecell(e, n) {\n            let t = n.header ? \"th\" : \"td\";\n            return (n.align ? `<${t} align=\"${n.align}\">` : `<${t}>`) + e + `</${t}>\n`;\n        }\n        strong(e) {\n            return `<strong>${e}</strong>`;\n        }\n        em(e) {\n            return `<em>${e}</em>`;\n        }\n        codespan(e) {\n            return `<code>${e}</code>`;\n        }\n        br() {\n            return this.options.xhtml ? \"<br/>\" : \"<br>\";\n        }\n        del(e) {\n            return `<del>${e}</del>`;\n        }\n        link(e, n, t) {\n            if (e = M(this.options.sanitize, this.options.baseUrl, e), e === null) return t;\n            let i = '<a href=\"' + x(e) + '\"';\n            return n && (i += ' title=\"' + n + '\"'), i += \">\" + t + \"</a>\", i;\n        }\n        image(e, n, t) {\n            if (e = M(this.options.sanitize, this.options.baseUrl, e), e === null) return t;\n            let i = `<img src=\"${e}\" alt=\"${t}\"`;\n            return n && (i += ` title=\"${n}\"`), i += this.options.xhtml ? \"/>\" : \">\", i;\n        }\n        text(e) {\n            return e;\n        }\n    }, v = class {\n        strong(e) {\n            return e;\n        }\n        em(e) {\n            return e;\n        }\n        codespan(e) {\n            return e;\n        }\n        del(e) {\n            return e;\n        }\n        html(e) {\n            return e;\n        }\n        text(e) {\n            return e;\n        }\n        link(e, n, t) {\n            return \"\" + t;\n        }\n        image(e, n, t) {\n            return \"\" + t;\n        }\n        br() {\n            return \"\";\n        }\n    }, j = class {\n        constructor(){\n            this.seen = {};\n        }\n        serialize(e) {\n            return e.toLowerCase().trim().replace(/<[!\\/a-z].*?>/ig, \"\").replace(/[\\u2000-\\u206F\\u2E00-\\u2E7F\\\\'!\"#$%&()*+,./:;<=>?@[\\]^`{|}~]/g, \"\").replace(/\\s/g, \"-\");\n        }\n        getNextSafeSlug(e, n) {\n            let t = e, i = 0;\n            if (this.seen.hasOwnProperty(t)) {\n                i = this.seen[e];\n                do i++, t = e + \"-\" + i;\n                while (this.seen.hasOwnProperty(t))\n            }\n            return n || (this.seen[e] = i, this.seen[t] = 0), t;\n        }\n        slug(e, n = {}) {\n            let t = this.serialize(e);\n            return this.getNextSafeSlug(t, n.dryrun);\n        }\n    }, $ = class {\n        constructor(e){\n            this.options = e || E, this.options.renderer = this.options.renderer || new q, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new v, this.slugger = new j;\n        }\n        static parse(e, n) {\n            return new $(n).parse(e);\n        }\n        static parseInline(e, n) {\n            return new $(n).parseInline(e);\n        }\n        parse(e, n = !0) {\n            let t = \"\", i, s, r, a, h, f, g, b, k, p, A, _, T, m, w, C, R, S, I, D = e.length;\n            for(i = 0; i < D; i++){\n                if (p = e[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type] && (I = this.options.extensions.renderers[p.type].call({\n                    parser: this\n                }, p), I !== !1 || ![\n                    \"space\",\n                    \"hr\",\n                    \"heading\",\n                    \"code\",\n                    \"table\",\n                    \"blockquote\",\n                    \"list\",\n                    \"html\",\n                    \"paragraph\",\n                    \"text\"\n                ].includes(p.type))) {\n                    t += I || \"\";\n                    continue;\n                }\n                switch(p.type){\n                    case \"space\":\n                        continue;\n                    case \"hr\":\n                        {\n                            t += this.renderer.hr();\n                            continue;\n                        }\n                    case \"heading\":\n                        {\n                            t += this.renderer.heading(this.parseInline(p.tokens), p.depth, G(this.parseInline(p.tokens, this.textRenderer)), this.slugger);\n                            continue;\n                        }\n                    case \"code\":\n                        {\n                            t += this.renderer.code(p.text, p.lang, p.escaped);\n                            continue;\n                        }\n                    case \"table\":\n                        {\n                            for(b = \"\", g = \"\", a = p.header.length, s = 0; s < a; s++)g += this.renderer.tablecell(this.parseInline(p.header[s].tokens), {\n                                header: !0,\n                                align: p.align[s]\n                            });\n                            for(b += this.renderer.tablerow(g), k = \"\", a = p.rows.length, s = 0; s < a; s++){\n                                for(f = p.rows[s], g = \"\", h = f.length, r = 0; r < h; r++)g += this.renderer.tablecell(this.parseInline(f[r].tokens), {\n                                    header: !1,\n                                    align: p.align[r]\n                                });\n                                k += this.renderer.tablerow(g);\n                            }\n                            t += this.renderer.table(b, k);\n                            continue;\n                        }\n                    case \"blockquote\":\n                        {\n                            k = this.parse(p.tokens), t += this.renderer.blockquote(k);\n                            continue;\n                        }\n                    case \"list\":\n                        {\n                            for(A = p.ordered, _ = p.start, T = p.loose, a = p.items.length, k = \"\", s = 0; s < a; s++)w = p.items[s], C = w.checked, R = w.task, m = \"\", w.task && (S = this.renderer.checkbox(C), T ? w.tokens.length > 0 && w.tokens[0].type === \"paragraph\" ? (w.tokens[0].text = S + \" \" + w.tokens[0].text, w.tokens[0].tokens && w.tokens[0].tokens.length > 0 && w.tokens[0].tokens[0].type === \"text\" && (w.tokens[0].tokens[0].text = S + \" \" + w.tokens[0].tokens[0].text)) : w.tokens.unshift({\n                                type: \"text\",\n                                text: S\n                            }) : m += S), m += this.parse(w.tokens, T), k += this.renderer.listitem(m, R, C);\n                            t += this.renderer.list(k, A, _);\n                            continue;\n                        }\n                    case \"html\":\n                        {\n                            t += this.renderer.html(p.text);\n                            continue;\n                        }\n                    case \"paragraph\":\n                        {\n                            t += this.renderer.paragraph(this.parseInline(p.tokens));\n                            continue;\n                        }\n                    case \"text\":\n                        {\n                            for(k = p.tokens ? this.parseInline(p.tokens) : p.text; i + 1 < D && e[i + 1].type === \"text\";)p = e[++i], k += `\n` + (p.tokens ? this.parseInline(p.tokens) : p.text);\n                            t += n ? this.renderer.paragraph(k) : k;\n                            continue;\n                        }\n                    default:\n                        {\n                            let L = 'Token with \"' + p.type + '\" type was not found.';\n                            if (this.options.silent) {\n                                console.error(L);\n                                return;\n                            } else throw new Error(L);\n                        }\n                }\n            }\n            return t;\n        }\n        parseInline(e, n) {\n            n = n || this.renderer;\n            let t = \"\", i, s, r, a = e.length;\n            for(i = 0; i < a; i++){\n                if (s = e[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type] && (r = this.options.extensions.renderers[s.type].call({\n                    parser: this\n                }, s), r !== !1 || ![\n                    \"escape\",\n                    \"html\",\n                    \"link\",\n                    \"image\",\n                    \"strong\",\n                    \"em\",\n                    \"codespan\",\n                    \"br\",\n                    \"del\",\n                    \"text\"\n                ].includes(s.type))) {\n                    t += r || \"\";\n                    continue;\n                }\n                switch(s.type){\n                    case \"escape\":\n                        {\n                            t += n.text(s.text);\n                            break;\n                        }\n                    case \"html\":\n                        {\n                            t += n.html(s.text);\n                            break;\n                        }\n                    case \"link\":\n                        {\n                            t += n.link(s.href, s.title, this.parseInline(s.tokens, n));\n                            break;\n                        }\n                    case \"image\":\n                        {\n                            t += n.image(s.href, s.title, s.text);\n                            break;\n                        }\n                    case \"strong\":\n                        {\n                            t += n.strong(this.parseInline(s.tokens, n));\n                            break;\n                        }\n                    case \"em\":\n                        {\n                            t += n.em(this.parseInline(s.tokens, n));\n                            break;\n                        }\n                    case \"codespan\":\n                        {\n                            t += n.codespan(s.text);\n                            break;\n                        }\n                    case \"br\":\n                        {\n                            t += n.br();\n                            break;\n                        }\n                    case \"del\":\n                        {\n                            t += n.del(this.parseInline(s.tokens, n));\n                            break;\n                        }\n                    case \"text\":\n                        {\n                            t += n.text(s.text);\n                            break;\n                        }\n                    default:\n                        {\n                            let h = 'Token with \"' + s.type + '\" type was not found.';\n                            if (this.options.silent) {\n                                console.error(h);\n                                return;\n                            } else throw new Error(h);\n                        }\n                }\n            }\n            return t;\n        }\n    };\n    function u(l, e, n) {\n        if (typeof l > \"u\" || l === null) throw new Error(\"marked(): input parameter is undefined or null\");\n        if (typeof l != \"string\") throw new Error(\"marked(): input parameter is of type \" + Object.prototype.toString.call(l) + \", string expected\");\n        if (typeof e == \"function\" && (n = e, e = null), e = z({}, u.defaults, e || {}), V(e), n) {\n            let t = e.highlight, i;\n            try {\n                i = y.lex(l, e);\n            } catch (a1) {\n                return n(a1);\n            }\n            let s = function(a) {\n                let h;\n                if (!a) try {\n                    e.walkTokens && u.walkTokens(i, e.walkTokens), h = $.parse(i, e);\n                } catch (f) {\n                    a = f;\n                }\n                return e.highlight = t, a ? n(a) : n(null, h);\n            };\n            if (!t || t.length < 3 || (delete e.highlight, !i.length)) return s();\n            let r = 0;\n            u.walkTokens(i, function(a) {\n                a.type === \"code\" && (r++, setTimeout(()=>{\n                    t(a.text, a.lang, function(h, f) {\n                        if (h) return s(h);\n                        f != null && f !== a.text && (a.text = f, a.escaped = !0), r--, r === 0 && s();\n                    });\n                }, 0));\n            }), r === 0 && s();\n            return;\n        }\n        try {\n            let t = y.lex(l, e);\n            return e.walkTokens && u.walkTokens(t, e.walkTokens), $.parse(t, e);\n        } catch (t) {\n            if (t.message += `\nPlease report this to https://github.com/markedjs/marked.`, e.silent) return \"<p>An error occurred:</p><pre>\" + x(t.message + \"\", !0) + \"</pre>\";\n            throw t;\n        }\n    }\n    u.options = u.setOptions = function(l) {\n        return z(u.defaults, l), J(u.defaults), u;\n    };\n    u.getDefaults = X;\n    u.defaults = E;\n    u.use = function(...l) {\n        let e = z({}, ...l), n = u.defaults.extensions || {\n            renderers: {},\n            childTokens: {}\n        }, t;\n        l.forEach((i)=>{\n            if (i.extensions && (t = !0, i.extensions.forEach((s)=>{\n                if (!s.name) throw new Error(\"extension name required\");\n                if (s.renderer) {\n                    let r = n.renderers ? n.renderers[s.name] : null;\n                    r ? n.renderers[s.name] = function(...a) {\n                        let h = s.renderer.apply(this, a);\n                        return h === !1 && (h = r.apply(this, a)), h;\n                    } : n.renderers[s.name] = s.renderer;\n                }\n                if (s.tokenizer) {\n                    if (!s.level || s.level !== \"block\" && s.level !== \"inline\") throw new Error(\"extension level must be 'block' or 'inline'\");\n                    n[s.level] ? n[s.level].unshift(s.tokenizer) : n[s.level] = [\n                        s.tokenizer\n                    ], s.start && (s.level === \"block\" ? n.startBlock ? n.startBlock.push(s.start) : n.startBlock = [\n                        s.start\n                    ] : s.level === \"inline\" && (n.startInline ? n.startInline.push(s.start) : n.startInline = [\n                        s.start\n                    ]));\n                }\n                s.childTokens && (n.childTokens[s.name] = s.childTokens);\n            })), i.renderer) {\n                let s = u.defaults.renderer || new q;\n                for(let r in i.renderer){\n                    let a = s[r];\n                    s[r] = (...h)=>{\n                        let f = i.renderer[r].apply(s, h);\n                        return f === !1 && (f = a.apply(s, h)), f;\n                    };\n                }\n                e.renderer = s;\n            }\n            if (i.tokenizer) {\n                let s = u.defaults.tokenizer || new Z;\n                for(let r in i.tokenizer){\n                    let a = s[r];\n                    s[r] = (...h)=>{\n                        let f = i.tokenizer[r].apply(s, h);\n                        return f === !1 && (f = a.apply(s, h)), f;\n                    };\n                }\n                e.tokenizer = s;\n            }\n            if (i.walkTokens) {\n                let s = u.defaults.walkTokens;\n                e.walkTokens = function(r) {\n                    i.walkTokens.call(this, r), s && s.call(this, r);\n                };\n            }\n            t && (e.extensions = n), u.setOptions(e);\n        });\n    };\n    u.walkTokens = function(l, e) {\n        for (let n of l)switch(e.call(u, n), n.type){\n            case \"table\":\n                {\n                    for (let t of n.header)u.walkTokens(t.tokens, e);\n                    for (let t1 of n.rows)for (let i of t1)u.walkTokens(i.tokens, e);\n                    break;\n                }\n            case \"list\":\n                {\n                    u.walkTokens(n.items, e);\n                    break;\n                }\n            default:\n                u.defaults.extensions && u.defaults.extensions.childTokens && u.defaults.extensions.childTokens[n.type] ? u.defaults.extensions.childTokens[n.type].forEach(function(t) {\n                    u.walkTokens(n[t], e);\n                }) : n.tokens && u.walkTokens(n.tokens, e);\n        }\n    };\n    u.parseInline = function(l, e) {\n        if (typeof l > \"u\" || l === null) throw new Error(\"marked.parseInline(): input parameter is undefined or null\");\n        if (typeof l != \"string\") throw new Error(\"marked.parseInline(): input parameter is of type \" + Object.prototype.toString.call(l) + \", string expected\");\n        e = z({}, u.defaults, e || {}), V(e);\n        try {\n            let n = y.lexInline(l, e);\n            return e.walkTokens && u.walkTokens(n, e.walkTokens), $.parseInline(n, e);\n        } catch (n) {\n            if (n.message += `\nPlease report this to https://github.com/markedjs/marked.`, e.silent) return \"<p>An error occurred:</p><pre>\" + x(n.message + \"\", !0) + \"</pre>\";\n            throw n;\n        }\n    };\n    u.Parser = $;\n    u.parser = $.parse;\n    u.Renderer = q;\n    u.TextRenderer = v;\n    u.Lexer = y;\n    u.lexer = y.lex;\n    u.Tokenizer = Z;\n    u.Slugger = j;\n    u.parse = u;\n    var ge = u.options, de = u.setOptions, ke = u.use, me = u.walkTokens, xe = u.parseInline, be = $.parse, _e = y.lex;\n    function transform2(input, options, functions) {\n        if (typeof input != \"string\") {\n            throw new Error(\"Can't use md_to_json on non string\");\n        }\n        return _e(input);\n    }\n    var ye = Object.create;\n    var ce1 = Object.defineProperty;\n    var ve = Object.getOwnPropertyDescriptor;\n    var ke1 = Object.getOwnPropertyNames;\n    var be1 = Object.getPrototypeOf, Ee = Object.prototype.hasOwnProperty;\n    var we = (I, l)=>()=>(l || I((l = {\n                exports: {}\n            }).exports, l), l.exports)\n    ;\n    var Ce = (I, l, F1, Q1)=>{\n        if (l && typeof l == \"object\" || typeof l == \"function\") for (let U1 of ke1(l))!Ee.call(I, U1) && U1 !== F1 && ce1(I, U1, {\n            get: ()=>l[U1]\n            ,\n            enumerable: !(Q1 = ve(l, U1)) || Q1.enumerable\n        });\n        return I;\n    };\n    var pe1 = (I, l, F2)=>(F2 = I != null ? ye(be1(I)) : {}, Ce(l || !I || !I.__esModule ? ce1(F2, \"default\", {\n            value: I,\n            enumerable: !0\n        }) : F2, I))\n    ;\n    var he1 = we((ae1, oe1)=>{\n        (function(I, l) {\n            typeof define == \"function\" && define.amd ? define([], l) : typeof oe1 == \"object\" && typeof ae1 < \"u\" ? oe1.exports = l() : I.Papa = l();\n        })(ae1, function I() {\n            \"use strict\";\n            var l = typeof self < \"u\" ? self : typeof document < \"u\" ? window : l !== void 0 ? l : {}, F3 = !l.document && !!l.postMessage, Q2 = F3 && /blob:/i.test((l.location || {}).protocol), U2 = {}, ge1 = 0, f = {\n                parse: function(t, e) {\n                    var i = (e = e || {}).dynamicTyping || !1;\n                    if (m(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!m(e.transform) && e.transform, e.worker && f.WORKERS_SUPPORTED) {\n                        var n = function() {\n                            if (!f.WORKERS_SUPPORTED) return !1;\n                            var d1 = (O1 = l.URL || l.webkitURL || null, k = I.toString(), f.BLOB_URL || (f.BLOB_URL = O1.createObjectURL(new Blob([\n                                \"(\",\n                                k,\n                                \")();\"\n                            ], {\n                                type: \"text/javascript\"\n                            })))), p = new l.Worker(d1), O1, k;\n                            return p.onmessage = me1, p.id = ge1++, U2[p.id] = p;\n                        }();\n                        return n.userStep = e.step, n.userChunk = e.chunk, n.userComplete = e.complete, n.userError = e.error, e.step = m(e.step), e.chunk = m(e.chunk), e.complete = m(e.complete), e.error = m(e.error), delete e.worker, void n.postMessage({\n                            input: t,\n                            config: e,\n                            workerId: n.id\n                        });\n                    }\n                    var s = null;\n                    return f.NODE_STREAM_INPUT, typeof t == \"string\" ? s = e.download ? new ee1(e) : new G1(e) : t.readable === !0 && m(t.read) && m(t.on) ? s = new ie1(e) : (l.File && t instanceof File || t instanceof Object) && (s = new te1(e)), s.stream(t);\n                },\n                unparse: function(t, e) {\n                    var i = !1, n = !0, s = \",\", d2 = `\\r\n`, p = '\"', O2 = p + p, k = !1, a = null, w = !1;\n                    (function() {\n                        if (typeof e == \"object\") {\n                            if (typeof e.delimiter != \"string\" || f.BAD_DELIMITERS.filter(function(r) {\n                                return e.delimiter.indexOf(r) !== -1;\n                            }).length || (s = e.delimiter), (typeof e.quotes == \"boolean\" || typeof e.quotes == \"function\" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != \"boolean\" && typeof e.skipEmptyLines != \"string\" || (k = e.skipEmptyLines), typeof e.newline == \"string\" && (d2 = e.newline), typeof e.quoteChar == \"string\" && (p = e.quoteChar), typeof e.header == \"boolean\" && (n = e.header), Array.isArray(e.columns)) {\n                                if (e.columns.length === 0) throw new Error(\"Option columns is empty\");\n                                a = e.columns;\n                            }\n                            e.escapeChar !== void 0 && (O2 = e.escapeChar + p), (typeof e.escapeFormulae == \"boolean\" || e.escapeFormulae instanceof RegExp) && (w = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\\-@\\t\\r].*$/);\n                        }\n                    })();\n                    var h = new RegExp(Y1(p), \"g\");\n                    if (typeof t == \"string\" && (t = JSON.parse(t)), Array.isArray(t)) {\n                        if (!t.length || Array.isArray(t[0])) return q1(null, t, k);\n                        if (typeof t[0] == \"object\") return q1(a || Object.keys(t[0]), t, k);\n                    } else if (typeof t == \"object\") return typeof t.data == \"string\" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || a), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == \"object\" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == \"object\" || (t.data = [\n                        t.data\n                    ])), q1(t.fields || [], t.data || [], k);\n                    throw new Error(\"Unable to serialize unrecognized input\");\n                    function q1(r, y1, D) {\n                        var b = \"\";\n                        typeof r == \"string\" && (r = JSON.parse(r)), typeof y1 == \"string\" && (y1 = JSON.parse(y1));\n                        var x2 = Array.isArray(r) && 0 < r.length, R = !Array.isArray(y1[0]);\n                        if (x2 && n) {\n                            for(var S = 0; S < r.length; S++)0 < S && (b += s), b += T(r[S], S);\n                            0 < y1.length && (b += d2);\n                        }\n                        for(var o1 = 0; o1 < y1.length; o1++){\n                            var g = x2 ? r.length : y1[o1].length, v1 = !1, C = x2 ? Object.keys(y1[o1]).length === 0 : y1[o1].length === 0;\n                            if (D && !x2 && (v1 = D === \"greedy\" ? y1[o1].join(\"\").trim() === \"\" : y1[o1].length === 1 && y1[o1][0].length === 0), D === \"greedy\" && x2) {\n                                for(var c1 = [], _ = 0; _ < g; _++){\n                                    var E1 = R ? r[_] : _;\n                                    c1.push(y1[o1][E1]);\n                                }\n                                v1 = c1.join(\"\").trim() === \"\";\n                            }\n                            if (!v1) {\n                                for(var u1 = 0; u1 < g; u1++){\n                                    0 < u1 && !C && (b += s);\n                                    var W1 = x2 && R ? r[u1] : u1;\n                                    b += T(y1[o1][W1], u1);\n                                }\n                                o1 < y1.length - 1 && (!D || 0 < g && !C) && (b += d2);\n                            }\n                        }\n                        return b;\n                    }\n                    function T(r, y2) {\n                        if (r == null) return \"\";\n                        if (r.constructor === Date) return JSON.stringify(r).slice(1, 25);\n                        var D = !1;\n                        w && typeof r == \"string\" && w.test(r) && (r = \"'\" + r, D = !0);\n                        var b = r.toString().replace(h, O2);\n                        return (D = D || i === !0 || typeof i == \"function\" && i(r, y2) || Array.isArray(i) && i[y2] || function(x3, R) {\n                            for(var S = 0; S < R.length; S++)if (-1 < x3.indexOf(R[S])) return !0;\n                            return !1;\n                        }(b, f.BAD_DELIMITERS) || -1 < b.indexOf(s) || b.charAt(0) === \" \" || b.charAt(b.length - 1) === \" \") ? p + b + p : b;\n                    }\n                }\n            };\n            if (f.RECORD_SEP = String.fromCharCode(30), f.UNIT_SEP = String.fromCharCode(31), f.BYTE_ORDER_MARK = \"\\uFEFF\", f.BAD_DELIMITERS = [\n                \"\\r\",\n                `\n`,\n                '\"',\n                f.BYTE_ORDER_MARK\n            ], f.WORKERS_SUPPORTED = !F3 && !!l.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = \",\", f.Parser = ne1, f.ParserHandle = ue1, f.NetworkStreamer = ee1, f.FileStreamer = te1, f.StringStreamer = G1, f.ReadableStreamStreamer = ie1, l.jQuery) {\n                var Z1 = l.jQuery;\n                Z1.fn.parse = function(t) {\n                    var e = t.config || {}, i = [];\n                    return this.each(function(d) {\n                        if (!(Z1(this).prop(\"tagName\").toUpperCase() === \"INPUT\" && Z1(this).attr(\"type\").toLowerCase() === \"file\" && l.FileReader) || !this.files || this.files.length === 0) return !0;\n                        for(var p = 0; p < this.files.length; p++)i.push({\n                            file: this.files[p],\n                            inputElem: this,\n                            instanceConfig: Z1.extend({}, e)\n                        });\n                    }), n(), this;\n                    function n() {\n                        if (i.length !== 0) {\n                            var d3, p, O3, k, a = i[0];\n                            if (m(t.before)) {\n                                var w = t.before(a.file, a.inputElem);\n                                if (typeof w == \"object\") {\n                                    if (w.action === \"abort\") return d3 = \"AbortError\", p = a.file, O3 = a.inputElem, k = w.reason, void (m(t.error) && t.error({\n                                        name: d3\n                                    }, p, O3, k));\n                                    if (w.action === \"skip\") return void s();\n                                    typeof w.config == \"object\" && (a.instanceConfig = Z1.extend(a.instanceConfig, w.config));\n                                } else if (w === \"skip\") return void s();\n                            }\n                            var h = a.instanceConfig.complete;\n                            a.instanceConfig.complete = function(q2) {\n                                m(h) && h(q2, a.file, a.inputElem), s();\n                            }, f.parse(a.file, a.instanceConfig);\n                        } else m(t.complete) && t.complete();\n                    }\n                    function s() {\n                        i.splice(0, 1), n();\n                    }\n                };\n            }\n            function N1(t) {\n                this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = \"\", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {\n                    data: [],\n                    errors: [],\n                    meta: {}\n                }, (function(e) {\n                    var i = se1(e);\n                    i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new ue1(i), (this._handle.streamer = this)._config = i;\n                }).call(this, t), this.parseChunk = function(e, i) {\n                    if (this.isFirstChunk && m(this._config.beforeFirstChunk)) {\n                        var n = this._config.beforeFirstChunk(e);\n                        n !== void 0 && (e = n);\n                    }\n                    this.isFirstChunk = !1, this._halted = !1;\n                    var s = this._partialLine + e;\n                    this._partialLine = \"\";\n                    var d4 = this._handle.parse(s, this._baseIndex, !this._finished);\n                    if (!this._handle.paused() && !this._handle.aborted()) {\n                        var p = d4.meta.cursor;\n                        this._finished || (this._partialLine = s.substring(p - this._baseIndex), this._baseIndex = p), d4 && d4.data && (this._rowCount += d4.data.length);\n                        var O4 = this._finished || this._config.preview && this._rowCount >= this._config.preview;\n                        if (Q2) l.postMessage({\n                            results: d4,\n                            workerId: f.WORKER_ID,\n                            finished: O4\n                        });\n                        else if (m(this._config.chunk) && !i) {\n                            if (this._config.chunk(d4, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);\n                            d4 = void 0, this._completeResults = void 0;\n                        }\n                        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(d4.data), this._completeResults.errors = this._completeResults.errors.concat(d4.errors), this._completeResults.meta = d4.meta), this._completed || !O4 || !m(this._config.complete) || d4 && d4.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), O4 || d4 && d4.meta.paused || this._nextChunk(), d4;\n                    }\n                    this._halted = !0;\n                }, this._sendError = function(e) {\n                    m(this._config.error) ? this._config.error(e) : Q2 && this._config.error && l.postMessage({\n                        workerId: f.WORKER_ID,\n                        error: e,\n                        finished: !1\n                    });\n                };\n            }\n            function ee1(t) {\n                var e;\n                (t = t || {}).chunkSize || (t.chunkSize = f.RemoteChunkSize), N1.call(this, t), this._nextChunk = F3 ? function() {\n                    this._readChunk(), this._chunkLoaded();\n                } : function() {\n                    this._readChunk();\n                }, this.stream = function(i) {\n                    this._input = i, this._nextChunk();\n                }, this._readChunk = function() {\n                    if (this._finished) this._chunkLoaded();\n                    else {\n                        if (e = new XMLHttpRequest, this._config.withCredentials && (e.withCredentials = this._config.withCredentials), F3 || (e.onload = K1(this._chunkLoaded, this), e.onerror = K1(this._chunkError, this)), e.open(this._config.downloadRequestBody ? \"POST\" : \"GET\", this._input, !F3), this._config.downloadRequestHeaders) {\n                            var i = this._config.downloadRequestHeaders;\n                            for(var n in i)e.setRequestHeader(n, i[n]);\n                        }\n                        if (this._config.chunkSize) {\n                            var s = this._start + this._config.chunkSize - 1;\n                            e.setRequestHeader(\"Range\", \"bytes=\" + this._start + \"-\" + s);\n                        }\n                        try {\n                            e.send(this._config.downloadRequestBody);\n                        } catch (d5) {\n                            this._chunkError(d5.message);\n                        }\n                        F3 && e.status === 0 && this._chunkError();\n                    }\n                }, this._chunkLoaded = function() {\n                    e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(i) {\n                        var n = i.getResponseHeader(\"Content-Range\");\n                        return n === null ? -1 : parseInt(n.substring(n.lastIndexOf(\"/\") + 1));\n                    }(e), this.parseChunk(e.responseText)));\n                }, this._chunkError = function(i) {\n                    var n = e.statusText || i;\n                    this._sendError(new Error(n));\n                };\n            }\n            function te1(t) {\n                var e, i;\n                (t = t || {}).chunkSize || (t.chunkSize = f.LocalChunkSize), N1.call(this, t);\n                var n = typeof FileReader < \"u\";\n                this.stream = function(s) {\n                    this._input = s, i = s.slice || s.webkitSlice || s.mozSlice, n ? ((e = new FileReader).onload = K1(this._chunkLoaded, this), e.onerror = K1(this._chunkError, this)) : e = new FileReaderSync, this._nextChunk();\n                }, this._nextChunk = function() {\n                    this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();\n                }, this._readChunk = function() {\n                    var s = this._input;\n                    if (this._config.chunkSize) {\n                        var d6 = Math.min(this._start + this._config.chunkSize, this._input.size);\n                        s = i.call(s, this._start, d6);\n                    }\n                    var p = e.readAsText(s, this._config.encoding);\n                    n || this._chunkLoaded({\n                        target: {\n                            result: p\n                        }\n                    });\n                }, this._chunkLoaded = function(s) {\n                    this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(s.target.result);\n                }, this._chunkError = function() {\n                    this._sendError(e.error);\n                };\n            }\n            function G1(t) {\n                var e;\n                N1.call(this, t = t || {}), this.stream = function(i) {\n                    return e = i, this._nextChunk();\n                }, this._nextChunk = function() {\n                    if (!this._finished) {\n                        var i, n = this._config.chunkSize;\n                        return n ? (i = e.substring(0, n), e = e.substring(n)) : (i = e, e = \"\"), this._finished = !e, this.parseChunk(i);\n                    }\n                };\n            }\n            function ie1(t) {\n                N1.call(this, t = t || {});\n                var e = [], i = !0, n = !1;\n                this.pause = function() {\n                    N1.prototype.pause.apply(this, arguments), this._input.pause();\n                }, this.resume = function() {\n                    N1.prototype.resume.apply(this, arguments), this._input.resume();\n                }, this.stream = function(s) {\n                    this._input = s, this._input.on(\"data\", this._streamData), this._input.on(\"end\", this._streamEnd), this._input.on(\"error\", this._streamError);\n                }, this._checkIsFinished = function() {\n                    n && e.length === 1 && (this._finished = !0);\n                }, this._nextChunk = function() {\n                    this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;\n                }, this._streamData = K1(function(s) {\n                    try {\n                        e.push(typeof s == \"string\" ? s : s.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));\n                    } catch (d7) {\n                        this._streamError(d7);\n                    }\n                }, this), this._streamError = K1(function(s) {\n                    this._streamCleanUp(), this._sendError(s);\n                }, this), this._streamEnd = K1(function() {\n                    this._streamCleanUp(), n = !0, this._streamData(\"\");\n                }, this), this._streamCleanUp = K1(function() {\n                    this._input.removeListener(\"data\", this._streamData), this._input.removeListener(\"end\", this._streamEnd), this._input.removeListener(\"error\", this._streamError);\n                }, this);\n            }\n            function ue1(t) {\n                var e, i, n, s = Math.pow(2, 53), d8 = -s, p = /^\\s*-?(\\d+\\.?|\\.\\d+|\\d+\\.\\d+)([eE][-+]?\\d+)?\\s*$/, O5 = /^(\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z))|(\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z))|(\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z))$/, k = this, a = 0, w = 0, h = !1, q3 = !1, T = [], r = {\n                    data: [],\n                    errors: [],\n                    meta: {}\n                };\n                if (m(t.step)) {\n                    var y3 = t.step;\n                    t.step = function(o2) {\n                        if (r = o2, x4()) b();\n                        else {\n                            if (b(), r.data.length === 0) return;\n                            a += o2.data.length, t.preview && a > t.preview ? i.abort() : (r.data = r.data[0], y3(r, k));\n                        }\n                    };\n                }\n                function D(o3) {\n                    return t.skipEmptyLines === \"greedy\" ? o3.join(\"\").trim() === \"\" : o3.length === 1 && o3[0].length === 0;\n                }\n                function b() {\n                    return r && n && (S(\"Delimiter\", \"UndetectableDelimiter\", \"Unable to auto-detect delimiting character; defaulted to '\" + f.DefaultDelimiter + \"'\"), n = !1), t.skipEmptyLines && (r.data = r.data.filter(function(o4) {\n                        return !D(o4);\n                    })), x4() && function() {\n                        if (!r) return;\n                        function o5(v2, C) {\n                            m(t.transformHeader) && (v2 = t.transformHeader(v2, C)), T.push(v2);\n                        }\n                        if (Array.isArray(r.data[0])) {\n                            for(var g = 0; x4() && g < r.data.length; g++)r.data[g].forEach(o5);\n                            r.data.splice(0, 1);\n                        } else r.data.forEach(o5);\n                    }(), function() {\n                        if (!r || !t.header && !t.dynamicTyping && !t.transform) return r;\n                        function o6(v3, C) {\n                            var c2, _ = t.header ? {} : [];\n                            for(c2 = 0; c2 < v3.length; c2++){\n                                var E2 = c2, u2 = v3[c2];\n                                t.header && (E2 = c2 >= T.length ? \"__parsed_extra\" : T[c2]), t.transform && (u2 = t.transform(u2, E2)), u2 = R(E2, u2), E2 === \"__parsed_extra\" ? (_[E2] = _[E2] || [], _[E2].push(u2)) : _[E2] = u2;\n                            }\n                            return t.header && (c2 > T.length ? S(\"FieldMismatch\", \"TooManyFields\", \"Too many fields: expected \" + T.length + \" fields but parsed \" + c2, w + C) : c2 < T.length && S(\"FieldMismatch\", \"TooFewFields\", \"Too few fields: expected \" + T.length + \" fields but parsed \" + c2, w + C)), _;\n                        }\n                        var g = 1;\n                        return !r.data.length || Array.isArray(r.data[0]) ? (r.data = r.data.map(o6), g = r.data.length) : r.data = o6(r.data, 0), t.header && r.meta && (r.meta.fields = T), w += g, r;\n                    }();\n                }\n                function x4() {\n                    return t.header && T.length === 0;\n                }\n                function R(o7, g) {\n                    return v4 = o7, t.dynamicTypingFunction && t.dynamicTyping[v4] === void 0 && (t.dynamicTyping[v4] = t.dynamicTypingFunction(v4)), (t.dynamicTyping[v4] || t.dynamicTyping) === !0 ? g === \"true\" || g === \"TRUE\" || g !== \"false\" && g !== \"FALSE\" && (function(C) {\n                        if (p.test(C)) {\n                            var c3 = parseFloat(C);\n                            if (d8 < c3 && c3 < s) return !0;\n                        }\n                        return !1;\n                    }(g) ? parseFloat(g) : O5.test(g) ? new Date(g) : g === \"\" ? null : g) : g;\n                    var v4;\n                }\n                function S(o8, g, v5, C) {\n                    var c4 = {\n                        type: o8,\n                        code: g,\n                        message: v5\n                    };\n                    C !== void 0 && (c4.row = C), r.errors.push(c4);\n                }\n                this.parse = function(o9, g, v6) {\n                    var C = t.quoteChar || '\"';\n                    if (t.newline || (t.newline = function(E3, u3) {\n                        E3 = E3.substring(0, 1048576);\n                        var W2 = new RegExp(Y1(u3) + \"([^]*?)\" + Y1(u3), \"gm\"), M1 = (E3 = E3.replace(W2, \"\")).split(\"\\r\"), z1 = E3.split(`\n`), H = 1 < z1.length && z1[0].length < M1[0].length;\n                        if (M1.length === 1 || H) return `\n`;\n                        for(var P1 = 0, j4 = 0; j4 < M1.length; j4++)M1[j4][0] === `\n` && P1++;\n                        return P1 >= M1.length / 2 ? `\\r\n` : \"\\r\";\n                    }(o9, C)), n = !1, t.delimiter) m(t.delimiter) && (t.delimiter = t.delimiter(o9), r.meta.delimiter = t.delimiter);\n                    else {\n                        var c5 = function(E4, u4, W3, M2, z2) {\n                            var H, P2, j5, A;\n                            z2 = z2 || [\n                                \",\",\n                                \"\t\",\n                                \"|\",\n                                \";\",\n                                f.RECORD_SEP,\n                                f.UNIT_SEP\n                            ];\n                            for(var $1 = 0; $1 < z2.length; $1++){\n                                var L = z2[$1], J1 = 0, B1 = 0, le1 = 0;\n                                j5 = void 0;\n                                for(var X1 = new ne1({\n                                    comments: M2,\n                                    delimiter: L,\n                                    newline: u4,\n                                    preview: 10\n                                }).parse(E4), re1 = 0; re1 < X1.data.length; re1++)if (W3 && D(X1.data[re1])) le1++;\n                                else {\n                                    var V1 = X1.data[re1].length;\n                                    B1 += V1, j5 !== void 0 ? 0 < V1 && (J1 += Math.abs(V1 - j5), j5 = V1) : j5 = V1;\n                                }\n                                0 < X1.data.length && (B1 /= X1.data.length - le1), (P2 === void 0 || J1 <= P2) && (A === void 0 || A < B1) && 1.99 < B1 && (P2 = J1, H = L, A = B1);\n                            }\n                            return {\n                                successful: !!(t.delimiter = H),\n                                bestDelimiter: H\n                            };\n                        }(o9, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);\n                        c5.successful ? t.delimiter = c5.bestDelimiter : (n = !0, t.delimiter = f.DefaultDelimiter), r.meta.delimiter = t.delimiter;\n                    }\n                    var _ = se1(t);\n                    return t.preview && t.header && _.preview++, e = o9, i = new ne1(_), r = i.parse(e, g, v6), b(), h ? {\n                        meta: {\n                            paused: !0\n                        }\n                    } : r || {\n                        meta: {\n                            paused: !1\n                        }\n                    };\n                }, this.paused = function() {\n                    return h;\n                }, this.pause = function() {\n                    h = !0, i.abort(), e = m(t.chunk) ? \"\" : e.substring(i.getCharIndex());\n                }, this.resume = function() {\n                    k.streamer._halted ? (h = !1, k.streamer.parseChunk(e, !0)) : setTimeout(k.resume, 3);\n                }, this.aborted = function() {\n                    return q3;\n                }, this.abort = function() {\n                    q3 = !0, i.abort(), r.meta.aborted = !0, m(t.complete) && t.complete(r), e = \"\";\n                };\n            }\n            function Y1(t) {\n                return t.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n            }\n            function ne1(t) {\n                var e, i = (t = t || {}).delimiter, n = t.newline, s = t.comments, d9 = t.step, p = t.preview, O6 = t.fastMode, k = e = t.quoteChar === void 0 || t.quoteChar === null ? '\"' : t.quoteChar;\n                if (t.escapeChar !== void 0 && (k = t.escapeChar), (typeof i != \"string\" || -1 < f.BAD_DELIMITERS.indexOf(i)) && (i = \",\"), s === i) throw new Error(\"Comment character same as delimiter\");\n                s === !0 ? s = \"#\" : (typeof s != \"string\" || -1 < f.BAD_DELIMITERS.indexOf(s)) && (s = !1), n !== `\n` && n !== \"\\r\" && n !== `\\r\n` && (n = `\n`);\n                var a = 0, w = !1;\n                this.parse = function(h, q4, T) {\n                    if (typeof h != \"string\") throw new Error(\"Input must be a string\");\n                    var r = h.length, y4 = i.length, D = n.length, b = s.length, x5 = m(d9), R = [], S = [], o10 = [], g = a = 0;\n                    if (!h) return A();\n                    if (O6 || O6 !== !1 && h.indexOf(e) === -1) {\n                        for(var v7 = h.split(n), C = 0; C < v7.length; C++){\n                            if (o10 = v7[C], a += o10.length, C !== v7.length - 1) a += n.length;\n                            else if (T) return A();\n                            if (!s || o10.substring(0, b) !== s) {\n                                if (x5) {\n                                    if (R = [], z3(o10.split(i)), $2(), w) return A();\n                                } else z3(o10.split(i));\n                                if (p && p <= C) return R = R.slice(0, p), A(!0);\n                            }\n                        }\n                        return A();\n                    }\n                    for(var c6 = h.indexOf(i, a), _ = h.indexOf(n, a), E5 = new RegExp(Y1(k) + Y1(e), \"g\"), u5 = h.indexOf(e, a);;)if (h[a] !== e) if (s && o10.length === 0 && h.substring(a, a + b) === s) {\n                        if (_ === -1) return A();\n                        a = _ + D, _ = h.indexOf(n, a), c6 = h.indexOf(i, a);\n                    } else if (c6 !== -1 && (c6 < _ || _ === -1)) o10.push(h.substring(a, c6)), a = c6 + y4, c6 = h.indexOf(i, a);\n                    else {\n                        if (_ === -1) break;\n                        if (o10.push(h.substring(a, _)), j6(_ + D), x5 && ($2(), w)) return A();\n                        if (p && R.length >= p) return A(!0);\n                    }\n                    else for(u5 = a, a++;;){\n                        if ((u5 = h.indexOf(e, u5 + 1)) === -1) return T || S.push({\n                            type: \"Quotes\",\n                            code: \"MissingQuotes\",\n                            message: \"Quoted field unterminated\",\n                            row: R.length,\n                            index: a\n                        }), P3();\n                        if (u5 === r - 1) return P3(h.substring(a, u5).replace(E5, e));\n                        if (e !== k || h[u5 + 1] !== k) {\n                            if (e === k || u5 === 0 || h[u5 - 1] !== k) {\n                                c6 !== -1 && c6 < u5 + 1 && (c6 = h.indexOf(i, u5 + 1)), _ !== -1 && _ < u5 + 1 && (_ = h.indexOf(n, u5 + 1));\n                                var W4 = H(_ === -1 ? c6 : Math.min(c6, _));\n                                if (h.substr(u5 + 1 + W4, y4) === i) {\n                                    o10.push(h.substring(a, u5).replace(E5, e)), h[a = u5 + 1 + W4 + y4] !== e && (u5 = h.indexOf(e, a)), c6 = h.indexOf(i, a), _ = h.indexOf(n, a);\n                                    break;\n                                }\n                                var M3 = H(_);\n                                if (h.substring(u5 + 1 + M3, u5 + 1 + M3 + D) === n) {\n                                    if (o10.push(h.substring(a, u5).replace(E5, e)), j6(u5 + 1 + M3 + D), c6 = h.indexOf(i, a), u5 = h.indexOf(e, a), x5 && ($2(), w)) return A();\n                                    if (p && R.length >= p) return A(!0);\n                                    break;\n                                }\n                                S.push({\n                                    type: \"Quotes\",\n                                    code: \"InvalidQuotes\",\n                                    message: \"Trailing quote on quoted field is malformed\",\n                                    row: R.length,\n                                    index: a\n                                }), u5++;\n                            }\n                        } else u5++;\n                    }\n                    return P3();\n                    function z3(L) {\n                        R.push(L), g = a;\n                    }\n                    function H(L) {\n                        var J2 = 0;\n                        if (L !== -1) {\n                            var B2 = h.substring(u5 + 1, L);\n                            B2 && B2.trim() === \"\" && (J2 = B2.length);\n                        }\n                        return J2;\n                    }\n                    function P3(L) {\n                        return T || (L === void 0 && (L = h.substring(a)), o10.push(L), a = r, z3(o10), x5 && $2()), A();\n                    }\n                    function j6(L) {\n                        a = L, z3(o10), o10 = [], _ = h.indexOf(n, a);\n                    }\n                    function A(L) {\n                        return {\n                            data: R,\n                            errors: S,\n                            meta: {\n                                delimiter: i,\n                                linebreak: n,\n                                aborted: w,\n                                truncated: !!L,\n                                cursor: g + (q4 || 0)\n                            }\n                        };\n                    }\n                    function $2() {\n                        d9(A()), R = [], S = [];\n                    }\n                }, this.abort = function() {\n                    w = !0;\n                }, this.getCharIndex = function() {\n                    return a;\n                };\n            }\n            function me1(t) {\n                var e = t.data, i = U2[e.workerId], n = !1;\n                if (e.error) i.userError(e.error, e.file);\n                else if (e.results && e.results.data) {\n                    var s = {\n                        abort: function() {\n                            n = !0, fe1(e.workerId, {\n                                data: [],\n                                errors: [],\n                                meta: {\n                                    aborted: !0\n                                }\n                            });\n                        },\n                        pause: de1,\n                        resume: de1\n                    };\n                    if (m(i.userStep)) {\n                        for(var d10 = 0; d10 < e.results.data.length && (i.userStep({\n                            data: e.results.data[d10],\n                            errors: e.results.errors,\n                            meta: e.results.meta\n                        }, s), !n); d10++);\n                        delete e.results;\n                    } else m(i.userChunk) && (i.userChunk(e.results, s, e.file), delete e.results);\n                }\n                e.finished && !n && fe1(e.workerId, e.results);\n            }\n            function fe1(t, e) {\n                var i = U2[t];\n                m(i.userComplete) && i.userComplete(e), i.terminate(), delete U2[t];\n            }\n            function de1() {\n                throw new Error(\"Not implemented.\");\n            }\n            function se1(t) {\n                if (typeof t != \"object\" || t === null) return t;\n                var e = Array.isArray(t) ? [] : {};\n                for(var i in t)e[i] = se1(t[i]);\n                return e;\n            }\n            function K1(t, e) {\n                return function() {\n                    t.apply(e, arguments);\n                };\n            }\n            function m(t) {\n                return typeof t == \"function\";\n            }\n            return Q2 && (l.onmessage = function(t) {\n                var e = t.data;\n                if (f.WORKER_ID === void 0 && e && (f.WORKER_ID = e.workerId), typeof e.input == \"string\") l.postMessage({\n                    workerId: f.WORKER_ID,\n                    results: f.parse(e.input, e.config),\n                    finished: !0\n                });\n                else if (l.File && e.input instanceof File || e.input instanceof Object) {\n                    var i = f.parse(e.input, e.config);\n                    i && l.postMessage({\n                        workerId: f.WORKER_ID,\n                        results: i,\n                        finished: !0\n                    });\n                }\n            }), (ee1.prototype = Object.create(N1.prototype)).constructor = ee1, (te1.prototype = Object.create(N1.prototype)).constructor = te1, (G1.prototype = Object.create(G1.prototype)).constructor = G1, (ie1.prototype = Object.create(N1.prototype)).constructor = ie1, f;\n        });\n    });\n    var _e1 = pe1(he1()), Re = pe1(he1()), { default: Se , ...Oe } = Re, Ie = (_e1.default ?? Se) ?? Oe;\n    function csv_to_json(data, options, functions) {\n        return Ie.parse(data, options);\n    }\n    function json_to_csv(data, options, functions) {\n        return Ie.unparse(data, options);\n    }\n    return {\n        noop: transform,\n        jmespath: transform1,\n        md_to_json: transform2,\n        csv_to_json: csv_to_json,\n        json_to_csv: json_to_csv\n    };\n})();\n";
const CONFIG = {};
let DOMParser;
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
    DOMParser = function() {
        throw new Error("Not currently supported in workers");
    };
} else {
    DOMParser = window.DOMParser;
}
let nanoid = (t1 = 21)=>crypto.getRandomValues(new Uint8Array(t1)).reduce((t, e)=>t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e < 63 ? "_" : "-"
    , "")
;
const LIQUID_ENGINE = new Liquid();
if (typeof CustomEvent == "undefined") {
    global.CustomEvent = class CustomEvent extends Event {
        constructor(message, data){
            super(message, data);
            this.detail = data.detail;
        }
    };
}
function jsEval(str, input, options) {
    let fn = new Function("input", "options", builtinsString + str);
    return fn(input, options);
}
function textIsJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch (e) {}
    return false;
}
const builtins = {
    log (data) {
        console.log(data);
        return data;
    },
    noop (data, transform) {
        return jsEval("return builtins.noop(input, options)", data, transform);
    },
    jmespath (data, transform) {
        return jsEval("return builtins.jmespath(input, options)", data, transform);
    },
    md_to_json (data, transform) {
        return jsEval("return builtins.md_to_json(input, options)", data, transform);
    },
    csv_to_json (data, transform) {
        return jsEval("return builtins.csv_to_json(input, options)", data, transform);
    },
    json_to_csv (data, transform) {
        return jsEval("return builtins.json_to_csv(input, options)", data, transform);
    },
    async script (data, transform) {
        if (transform.value) {
            return jsEval(transform.value, data, transform);
        } else if (transform.src) {
            throw new Error(`Remote module load not implemented yet - ${transform.src}`);
        }
    }
};
const networkLoaders = new Map();
const blockLoaders = new Map();
blockLoaders.set("json", {
    shouldHandle (content) {
        try {
            JSON.parse(content);
            return true;
        } catch (e) {}
    },
    getLikelyBlocks (content) {
        try {
            let obj = JSON.parse(content);
            if (Array.isArray(obj)) {
                return [
                    "default"
                ];
            }
            if (typeof obj == "object") {
                return Object.keys(obj).filter((key)=>{
                    return Array.isArray(obj[key]);
                });
            }
            return true;
        } catch (e) {}
    },
    async getBlock (content, options) {
        let ret = JSON.parse(content);
        let base;
        let id;
        if (options?.base) {
            base = new URL(options?.base);
            id = base && base.hash.substr(1);
        }
        if (options?.id) {
            id = options.id;
        }
        if (id && ret.hasOwnProperty(id)) {
            ret = ret[id];
        }
        if (!Array.isArray(ret)) {
            throw new Error(`JSON must be an array for now: ${content}`);
        }
        if (base) {
            if (ret[0].block) {
                ret[0].block = new URL(ret[0].block, base).toString();
            } else if (ret[0].resource) {
                ret[0].resource = new URL(ret[0].resource, base).toString();
            }
        }
        return ret;
    },
    blockToString (block1) {
        return JSON.stringify(block1);
    }
});
blockLoaders.set("js", {
    shouldHandle (content) {},
    getLikelyBlocks (text) {
        return;
    },
    async getBlock () {
        throw new Error("JS Loader unimplemented");
    }
});
blockLoaders.set("html", {
    shouldHandle (content) {
        return content.indexOf("<fetch-block") != -1;
    },
    getLikelyBlocks (content) {
        let dom = new DOMParser().parseFromString(content, "text/html");
        let allBlocks = dom.querySelectorAll("fetch-block");
        if (allBlocks.length == 1) {
            return [
                "default"
            ];
        }
        return [
            ...allBlocks
        ].filter((block2)=>!!block2.id
        ).map((block3)=>block3.id
        );
    },
    async getBlock (content, options) {
        let dom = new DOMParser().parseFromString(content, "text/html");
        let base;
        let id;
        if (options?.base) {
            base = new URL(options?.base);
            id = base && base.hash.substr(1);
        }
        if (options?.id) {
            id = options.id;
        }
        let htmlBlock;
        if (id) {
            htmlBlock = dom.getElementById(id);
        } else {
            htmlBlock = dom.querySelector("fetch-block");
        }
        if (!htmlBlock) {
            throw new Error(`Can't find a fetchblock ${base?.toString()}`);
        }
        function gatherAttributes(el) {
            let ret = {};
            if (typeof el.attributes.length !== "number") {
                for (let name of Object.keys(el.attributes)){
                    ret[name] = el.getAttribute(name);
                }
            } else {
                for(let i = 0; i < el.attributes.length; i++){
                    var attrib = el.attributes.item(i);
                    ret[attrib.name] = attrib.value;
                }
            }
            return ret;
        }
        let initialBlock = gatherAttributes(htmlBlock);
        if (base) {
            if (initialBlock.resource) {
                initialBlock.resource = new URL(initialBlock.resource, base).toString();
            }
            if (initialBlock.block) {
                initialBlock.block = new URL(initialBlock.block, base).toString();
            }
        }
        let blocks = [
            initialBlock
        ];
        for (let transform of htmlBlock.querySelectorAll("fetch-block-transform, script[type='text/fetch-block-transform']")){
            let transformBlock = Object.assign(gatherAttributes(transform));
            if (transform.tagName == "SCRIPT") {
                transformBlock.type = "script";
                transformBlock.value = transform.textContent;
            }
            blocks.push(transformBlock);
        }
        return blocks;
    }
});
const fetchblocks = (()=>{
    return {
        blockLoaders,
        env: new Map(Object.entries(CONFIG)),
        getLoaderForText (text) {
            let loader;
            for (let [key, value] of blockLoaders.entries()){
                if (value.shouldHandle(text)) {
                    loader = key;
                    break;
                }
            }
            return loader;
        },
        getLikelyBlocksFromText (text, loader) {
            if (!loader) {
                loader = this.getLoaderForText(text);
            }
            if (!blockLoaders.has(loader)) {
                return [];
            }
            let blockLoader = blockLoaders.get(loader);
            let obj = blockLoader.getLikelyBlocks(text);
            return obj || [];
        },
        async loadFromText (text, loader, options = {}) {
            if (!loader) {
                loader = this.getLoaderForText(text);
            }
            if (!blockLoaders.has(loader)) {
                throw new Error(`Couldn't find a valid fetchblock`);
            }
            let blockLoader = blockLoaders.get(loader);
            let obj = await blockLoader.getBlock(text, options);
            try {
                return new fetchblock(obj, {
                    sourceText: text,
                    loader: loader
                });
            } catch (e) {
                throw new Error(`Loader ${loader} returned an empty object. Error: ${e}`);
            }
        },
        async loadFromURI (uri, loader) {
            if (typeof uri == "string") {
                uri = new URL(uri);
            }
            if (!(uri instanceof URL)) {
                throw new Error(`Invalid URI passed in to loadFromURI ${uri}`);
            }
            let response;
            for (let [key, value] of networkLoaders.entries()){
                if (value.shouldHandle(uri)) {
                    response = await value.getContent(uri);
                    break;
                }
            }
            if (!response) {
                response = await fetch(uri);
            }
            if (response.status !== 200) {
                throw new Error(`Fetchblock couldn't be loaded from ${uri.toString()} - status ${response.status}`);
            }
            let text = await response.text();
            let block4 = await this.loadFromText(text, loader, {
                base: uri,
                response
            });
            return block4;
        },
        run (steps, dataset, options = {}) {
            if (!Array.isArray(steps)) {
                throw new Error("fetchblocks.run expects an array of steps");
            }
            let fb = new fetchblock(steps);
            return fb.run(dataset, options);
        }
    };
})();
class fetchblock extends EventTarget {
    constructor(steps, options = {}){
        super();
        if (!Array.isArray(steps) || steps.length === 0) {
            throw new Error("Must provide an array with steps to create a fetchblock");
        }
        this.id = nanoid();
        if (options.sourceText) {
            Object.defineProperty(this, "sourceText", {
                value: options.sourceText,
                writable: false
            });
        }
        if (options.loader) {
            Object.defineProperty(this, "loader", {
                value: options.loader,
                writable: false
            });
        }
        this.remoteBlocks = new Set();
        this.steps = steps;
        if (!this.type) {
            throw new Error("The first step must be either `fetch` or `block`");
        }
        this.addEventListener("PlanReady", (e)=>{
            if (e.detail?.options?.verbose) {
                console.log(`Plan is ready - ${e.detail.plan.length} steps:`);
                console.table(e.detail.plan.map((step)=>[
                        step
                    ]
                ));
            }
        });
        this.addEventListener("StepStarting", (e)=>{
            if (e.detail?.options?.verbose) {
                console.log(`Step #${e.detail.stepNum} starting`, e.detail.step);
            }
        });
        this.addEventListener("StepComplete", (e)=>{
            if (e.detail?.options?.verbose) {
                console.log(`Step #${e.detail.stepNum} complete`, e.detail.step);
            }
        });
        this.addEventListener("RunComplete", (e)=>{
            if (e.detail?.options?.verbose) {
                console.log(`Run complete`, e.detail.value);
            }
        });
    }
    get request() {
        return this.steps[0];
    }
    get transforms() {
        return this.steps.slice(1);
    }
    get type() {
        if (this.request.resource || this.request.stubResponse) {
            return "fetch";
        }
        if (this.request.block) {
            return "block";
        }
    }
    stringify(type) {}
    async fetchData(fetchOptions = {}, options = {}) {
        if (fetchOptions.stubResponse) {
            return fetchOptions.stubResponse;
        }
        let { resource , method , headers , body , mode , credentials , cache , redirect , referrer , integrity , keepalive , signal ,  } = fetchOptions;
        if (!resource) {
            throw new Error("No URL passed in");
        }
        if (options.verbose) {
            console.log(`Fetching`, resource);
        }
        let resp = await fetch(resource, {
            method,
            headers,
            body,
            mode,
            credentials,
            cache,
            redirect,
            referrer,
            integrity,
            keepalive,
            signal
        });
        let type = resp.headers.get("Content-Type") || "";
        if (options.verbose) {
            console.log("Response received - headers:");
            console.table([
                ...resp.headers
            ]);
        }
        if (type.startsWith("application/json")) {
            let json1 = await resp.json();
            return json1;
        }
        let text = await resp.text();
        if (options.verbose) {
            console.log(` Response - text.length: ${text.length}`);
        }
        if (textIsJSON(text)) {
            return JSON.parse(text);
        }
        return text;
    }
    async run(options = {}) {
        let { plan , step  } = await this.plan(options);
        while(plan.currentStep < plan.length){
            await step();
        }
        let value = plan[plan.length - 1].stepValue;
        return value;
    }
    liquify(plan, dataset) {
        for(var property in plan){
            if (plan.hasOwnProperty(property)) {
                if (typeof plan[property] == "object") {
                    plan[property] = this.liquify(plan[property], dataset);
                } else {
                    plan[property] = LIQUID_ENGINE.parseAndRenderSync(plan[property], {
                        dataset
                    });
                }
            }
        }
        return plan;
    }
    async flatten() {
        let flattened = [];
        if (this.type == "block") {
            this.parent = this.request.block;
            if (typeof this.parent == "string" || this.parent instanceof URL) {
                let key = this.parent.toString().toLowerCase();
                if (this.remoteBlocks.has(key)) {
                    throw new Error(`Duplicate block detected: ${key}`);
                }
                this.remoteBlocks.add(key);
                if (key.startsWith("#") && this.sourceText) {
                    this.parent = await fetchblocks.loadFromText(this.sourceText, this.loader, {
                        id: key.substr(1)
                    });
                } else {
                    this.parent = await fetchblocks.loadFromURI(this.parent);
                }
                this.parent.remoteBlocks.add(...this.remoteBlocks.keys());
            }
            let parentFlattened = await this.parent.flatten();
            flattened.push(...parentFlattened);
            flattened.push(...this.transforms);
        } else {
            flattened.push(this.request, ...this.transforms);
        }
        return flattened;
    }
    async plan(options = {}) {
        let plan = await this.flatten();
        let dataset = options.dataset || {};
        let secrets = Object.entries(dataset).filter(([k, v])=>typeof v == "object" && v.hasOwnProperty("value")
        );
        for (let [k, v1] of secrets){
            dataset[k] = v1.value;
        }
        plan = this.liquify(structuredClone(plan), dataset);
        if (secrets.length) {
            let requestURL = new URL(plan[0].resource);
            for (let [k, v] of secrets){
                if (!v.allowedOrigins || !v.allowedOrigins.includes(requestURL.origin)) {
                    throw new Error(`Aborting. Attempted to use a disallowed key: ${k} at origin ${requestURL.origin}. Allowed origins: ${v.allowedOrigins?.join() || "none"}`);
                } else {
                    dataset[k] = v.value;
                }
            }
        }
        plan.currentStep = 0;
        this.dispatchEvent(new CustomEvent("PlanReady", {
            detail: {
                fbid: this.id,
                plan,
                options
            }
        }));
        let step = async ()=>{
            if (plan.currentStep >= plan.length) {
                return;
            }
            let stepValue;
            let thisStep = plan[plan.currentStep];
            this.dispatchEvent(new CustomEvent("StepStarting", {
                detail: {
                    fbid: this.id,
                    stepNum: plan.currentStep + 1,
                    step: thisStep,
                    plan,
                    options
                }
            }));
            if (plan.currentStep == 0) {
                if (options.stubResponse) {
                    stepValue = options.stubResponse;
                } else {
                    stepValue = await this.fetchData(thisStep, options);
                }
                thisStep.stepValue = stepValue;
            } else {
                let lastStep = plan[plan.currentStep - 1];
                let incomingValue = lastStep.stepValue;
                let transform = thisStep;
                if (!builtins[transform.type]) {
                    throw new Error(`Unrecognized builtin: ${transform.type}`);
                }
                stepValue = await builtins[transform.type].call(null, incomingValue, transform);
                thisStep.stepValue = stepValue;
            }
            plan.currentStep = plan.currentStep + 1;
            this.dispatchEvent(new CustomEvent("StepComplete", {
                detail: {
                    fbid: this.id,
                    stepNum: plan.currentStep,
                    step: thisStep,
                    plan,
                    options
                }
            }));
        };
        return {
            plan,
            step
        };
    }
}
export { fetchblock as fetchblock, fetchblocks as fetchblocks };
export { jsEval as jsEval };
