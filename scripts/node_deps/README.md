For the following projects, create ESM builds that will work in the browser and deno:
https://github.com/jsdom/jsdom
https://github.com/justjake/quickjs-emscripten

Todo:
* rewrite __proto__ to Object.setPrototypeOf in the quickjs runtime
https://github.com/denoland/deno/discussions/10105
* ignore the intermediate files / pass straight from browserify into esbuild
* is there a tool that can effectively tree shake jsdom?

cd scripts/node_deps

npx browserify jsdom-exporter.js  --standalone DOMParser > jsdom-browser.js && npx esbuild jsdom-browser.js --format=esm --minify > ../../jsdom-module.js

Quickjs doesn't like this module:

```
qjs jsdom-module.js 
SyntaxError: invalid escape sequence in regular expression
    at jsdom-module.js:135960
```


        exports3.name = (potentialName) => {
          return /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/u.test(potentialName);
        };