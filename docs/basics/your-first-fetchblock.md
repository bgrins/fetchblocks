---
sidebar_position: 1
---

# Your first fetchblock

## Getting the code

There's a bundle provided for older environments that polyfills some APIs and adds commonjs support.

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

## Making a request

The fetchblock is a JS array of "steps" which can be serialized / deserialized. This constraint is important for later, but in practice you'd call this from the host JS environment like so:

```js
let block = new fetchblock([
  { resource: "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" },
]);
let response = await block.run();
// Object { hex: "#FFFFFF", rgb: "rgb(255, 255, 255)" }
```

The options in the first step reflect onto the Fetch API, so head over to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to see the API. But, for example, a more complex call could look like this:

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
