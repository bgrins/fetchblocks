npx parcel index.html --no-cache
Open http://localhost:1234

Todo: build and embed into the serve cli command

Vendoring codemirror:

```
cp node_modules/codemirror/mode/css/css.js codemirror/
cp node_modules/codemirror/mode/javascript/javascript.js codemirror/
cp node_modules/codemirror/mode/xml/xml.js codemirror/  
cp node_modules/codemirror/mode/htmlmixed/htmlmixed.js codemirror/
cp node_modules/codemirror/mode/json/json.js codemirror/
```

Remove the following block from each of the mode headers:

```
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
```