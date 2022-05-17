For the following projects, create ESM builds that will work in the browser and deno:
https://github.com/jsdom/jsdom
https://github.com/justjake/quickjs-emscripten

Todo: rewrite __proto__ to Object.setPrototypeOf in the quickjs runtime
https://github.com/denoland/deno/discussions/10105

cd scripts/node_deps

npx browserify quickjs-exporter.js --standalone quickjs > quickjs-browser.js && npx esbuild quickjs-browser.js --format=esm > ../../quickjs-module.js
npx browserify jsdom-exporter.js  --standalone jsdom > jsdom-browser.js && npx esbuild jsdom-browser.js --format=esm > ../../jsdom-module.js
