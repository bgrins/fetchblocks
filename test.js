import {
  assertEquals,
  assertObjectMatch,
  assert,
} from "https://deno.land/std@0.137.0/testing/asserts.ts";

import { fetchblock, fetchblocks, jsEval, qjs } from "./mod.js";
import { isDeno, isNode } from "https://deno.land/x/which_runtime/mod.ts";

// Building for node and web:
// deno run -A --unstable scripts/build.js 0.1.0

// Publishing:
// deno run -A --unstable scripts/build.js 0.1.2 && git commit -am 'tag' && git tag 0.1.2 && && npm publish --access=public npm/ && git push && git push origin --tags

// Installing:
// https://deno.land/manual/getting_started/installation
// https://deno.land/manual/tools/script_installer
// deno install -A -f -n fetchblocks ./cmd.js

// Testing:
// deno test -A test.js
// npm --prefix npm test

// Running:
// deno run --allow-read --allow-net cmd.js

// Importing:
/*
Deno:
import { fetchblocks } from "https://deno.land/x/fetchblocks/mod.js";

Web:
<script type="module">
  import { fetchblocks } from "https://esm.sh/@bgrins/fetchblocks/web/mod.js";
</script>

Node (TODO):
cjs:
require("@bgrins/fetchblocks")
esm:
import { fetchblocks } from "@bgrins/fetchblocks"
*/

// deno test --watch --allow-net --allow-read

fetchblocks.env.set("NOTION_TOKEN", {
  value: fetchblocks.env.get("NOTION_TOKEN"),
  allowedOrigins: ["https://api.notion.com"],
});
Deno.test("fetchblocks - jseval", async () => {
  // console.log(quickjs);
  await qjs();
  // await qjs("1+1", null, {
  //   foo: "bar"
  // });
  // await qjs("1+1", null, {
  //   foo: "bar"
  // });

});

Deno.test("fetchblocks - builtins", async () => {
  // Directly test builtin functions. For now this is done by essentially eval'ing
  // but the intention here is that this will be wasmboxed

  assertEquals(
    jsEval(
      "return builtins.jmespath(input, options)",
      { a: 1 },
      { value: "a" }
    ),
    1
  );

  assertEquals(jsEval("return builtins.noop(input, options)", { a: 1 }), {
    a: 1,
  });

  assertEquals(
    jsEval("return builtins.csv_to_json(input, options)", "foo,bar,baz", {}),
    {
      data: [["foo", "bar", "baz"]],
      errors: [],
      meta: {
        aborted: false,
        cursor: 11,
        delimiter: ",",
        linebreak: "\n",
        truncated: false,
      },
    }
  );

  assertEquals(
    jsEval(
      "return builtins.json_to_csv(input, options)",
      [["foo", "bar", "baz"]],
      {}
    ),
    "foo,bar,baz"
  );
  // console.log(csv_to_json());
  // console.log(json_to_csv([["foo", "bar", "baz"]]));

  // TODO: shouldn't this assertEquals? The assertion doesn't show a diff but still fails
  assertObjectMatch(
    jsEval("return builtins.md_to_json(input, options)", "# header"),
    [
      {
        depth: 1,
        raw: "# header",
        text: "header",
        tokens: [
          {
            raw: "header",
            text: "header",
            type: "text",
          },
        ],
        type: "heading",
      },
    ]
  );
});

Deno.test("fetchblocks - templating", async () => {
  let template = await fetchblocks.loadFromText(
    `[
       {
         "resource":
           "https://api.github.com/repos/mozilla/standards-positions/issues?state=open&page={{ dataset.page | default: 1 }}&per_page={{ dataset.per_page | default: 1 }}"
       }
     ]`
  );
  assertEquals(
    (
      await template.plan({
        dataset: {
          page: 2,
          per_page: 100,
        },
      })
    ).plan[0],
    {
      resource:
        "https://api.github.com/repos/mozilla/standards-positions/issues?state=open&page=2&per_page=100",
    }
  );
  assertEquals(
    (
      await template.plan({
        dataset: {
          per_page: 100,
        },
      })
    ).plan[0],
    {
      resource:
        "https://api.github.com/repos/mozilla/standards-positions/issues?state=open&page=1&per_page=100",
    }
  );
  assertEquals(
    (
      await template.plan({
        dataset: {
          page: 2,
        },
      })
    ).plan[0],
    {
      resource:
        "https://api.github.com/repos/mozilla/standards-positions/issues?state=open&page=2&per_page=1",
    }
  );
});
Deno.test("fetchblocks - transform only", async () => {
  assertEquals(
    await fetchblocks.run([{ type: "jmespath", value: "a" }], {
      stubResponse: { a: "val" },
    }),
    "val"
  );
});
// TODO: replace this with something else
Deno.test("fetchblocks - jmespath", async () => {
  assertEquals(
    await fetchblocks.run([
      {
        resource:
          "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
      },
      { type: "jmespath", value: "Results[].{name: Make_Name, id: Make_ID}" },
      { type: "jmespath", value: "[?name == `ASTON MARTIN`]" },
    ]),
    [
      {
        id: 440,
        name: "ASTON MARTIN",
      },
    ]
  );

  // TODO
  // assertEquals(
  //   await fetchblocks.run([
  //     {
  //       resource:
  //         "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
  //     },
  //     { type: "jmespath", value: "Results[].{name: Make_Name, id: Make_ID}" },
  //     { type: "json_to_csv" },
  //     { type: "script", value: "return input.split('\\n').slice(0, 5).join('\\n')" },
  //   ]),
  //   [
  //     {
  //       id: 440,
  //       name: "ASTON MARTIN",
  //     },
  //   ]
  // );
});

Deno.test("fetchblocks - notion", async () => {
  // This is the internal JSON representation which can be used directly,
  // or you can use the HTML Custom Element syntax
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
    {
      type: "jmespath",
      value: "{{dataset.jmespath}}",
    },
  ]);

  let childBlock = new fetchblock([
    // Todo: external reference?
    { block },
    {
      type: "jmespath",
      value: "*",
    },
  ]);

  assertEquals((await block.plan()).plan.length, 2);
  assertEquals((await childBlock.plan()).plan.length, 3);

  let ret = await block.run({
    dataset: {
      databaseid: "c8892e5095404ed89ce0a4807e050d0f",
      bearer: fetchblocks.env.get("NOTION_TOKEN"),
      jmespath:
        'results[*].{id: id, due: properties."Date Created".created_time, content: properties.Name.title[0].plain_text}',
    },
  });
  assertEquals(ret, [
    {
      content: "Make dinner",
      due: "2022-05-13T23:13:00.000Z",
      id: "87233bfa-99c5-40eb-b00e-d8bb61fb7356",
    },

    {
      content: "Take fig on walk",
      due: "2022-05-02T20:42:00.000Z",
      id: "419c593d-6105-4467-b295-7de3eb6e9ee3",
    },
    {
      content: "Go to park",
      due: "2022-05-02T20:42:00.000Z",
      id: "bcc33e0c-8377-438f-b5cd-3eb89f75234c",
    },
    {
      content: "Demo stuff",
      due: "2022-05-02T20:42:00.000Z",
      id: "e925f5ab-dc32-48df-a63d-259aa359b0ad",
    },
  ]);
});

Deno.test("fetchblocks throws on disallowed origin", async () => {
  fetchblocks.env.set("DISALLOWED_USE", {
    value: "test",
    // Throw an exception if this is attempted to be used on another domain
    allowedOrigins: ["https://example.com"],
  });
  try {
    await fetchblocks.run([{ resource: "http://example.com/{{token}}" }], {
      dataset: {
        token: fetchblocks.env.get("DISALLOWED_USE"),
      },
    });
    assert(false, "Should have thrown");
  } catch (e) {
    assert(true, `Threw ${e}`);
  }
  try {
    await fetchblocks.run([{ resource: "http://example.com/{{token}}" }], {
      dataset: {
        token: {
          value: "foo",
        },
      },
    });
    assert(false, "Should have thrown");
  } catch (e) {
    assert(true, `Threw ${e} with no allowedOrigins set`);
  }
  try {
    await fetchblocks.run([{ resource: "http://example.com/{{token}}" }], {
      dataset: {
        token: {
          value: "test",
          // Throw an exception if this is attempted to be used on another domain
          allowedOrigins: ["https://example.com"],
        },
      },
    });
    assert(false, "Should have thrown");
  } catch (e) {
    assert(true, `Threw ${e}`);
  }
});
Deno.test("loadFromText with inheritance", async () => {
  if (isNode) {
    // TODO: dnt shim doesn't seem to like file URLs. Could juse use Deno.file to read the contents
    // and loadfromtext instead.
    return;
  }
  let block = await fetchblocks.loadFromText(
    Deno.readTextFileSync("./testdata/blocks/multiple-json.json"),
    null,
    {
      id: "n_top_stars",
    }
  );
  let ret = await block.run({
    dataset: {
      num_rows: 3,
    },
  });
  assertEquals(
    ret,
    "[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp),345335,28583\r\n[996.ICU](https://github.com/996icu/996.ICU),262092,21527\r\n[free-programming-books](https://github.com/EbookFoundation/free-programming-books),232213,48692"
  );
});

Deno.test("fetchblocks loaders", async () => {
  if (isNode) {
    // TODO: dnt shim doesn't seem to like file URLs. Could juse use Deno.file to read the contents
    // and loadfromtext instead.
    return;
  }
  assert(fetchblocks.loadFromText);
  assert(fetchblocks.loadFromURI);

  let block = await fetchblocks.loadFromText(
    '[{ "resource": "http://example.com" }, { "type": "noop" }]',
    "json"
  );
  let resp = await block.run({
    verbose: true,
  });
  assert(resp.indexOf("<html") != -1);

  block = await fetchblocks.loadFromText(
    `<fetch-block resource="http://example.com">`,
    "html"
  );
  resp = await block.run({
    verbose: true,
  });
  assert(resp.indexOf("<html") != -1);

  block = await fetchblocks.loadFromText(
    `
<fetch-block
id="multistep"
resource="https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json">
  <fetch-block-transform type="jmespath" value="Results[].{name: Make_Name, id: Make_ID}"></fetch-block-transform>
  <fetch-block-transform type="jmespath" value="[?name == \`ASTON MARTIN\`]"></fetch-block-transform>
  <script type="text/fetch-block-transform">
    return input[0].id + " " + input[0].name;
  </script>
</fetch-block>
  `,
    "html"
  );
  resp = await block.run({
    verbose: true,
  });
  assertEquals(resp, "440 ASTON MARTIN");

  console.log(
    new URL("./testdata/blocks/vehicles.html#multistep", import.meta.url),
    new URL(
      "./testdata/blocks/vehicles.html#multistep",
      import.meta.url
    ).toString()
  );
  block = await fetchblocks.loadFromURI(
    new URL("./testdata/blocks/vehicles.html#multistep", import.meta.url),
    "html"
  );
  resp = await block.run({
    verbose: true,
  });
  assertEquals(resp, "440 ASTON MARTIN");

  // block = await fetchblocks.loadFromURI(new URL("./testdata/blocks/vehicles.html#base", import.meta.url), "html");
  // resp = await block.run({
  //   verbose: true,
  // });
  // assertEquals(resp, "440 ASTON MARTIN");
});
Deno.test("dependency graphs", async () => {
  if (isNode) {
    // TODO: dnt shim doesn't seem to like file URLs. Could juse use Deno.file to read the contents
    // and loadfromtext instead.
    return;
  }

  let resp;
  try {
    let block = await fetchblocks.loadFromURI(
      new URL("./testdata/blocks/external3.html#cycle", import.meta.url),
      "html"
    );
    resp = await block.run();
    assert(false, "Cyclic dependency should throw");
  } catch (e) {
    assert(true, "Threw exception: " + e);
  }
});
Deno.test("remote html load", async () => {
  if (isNode) {
    // TODO: dnt shim doesn't seem to like file URLs. Could juse use Deno.file to read the contents
    // and loadfromtext instead.
    return;
  }
  let block = await fetchblocks.loadFromURI(
    new URL("./testdata/blocks/vehicles.html#multistep", import.meta.url),
    "html"
  );
  let resp = await block.run({
    // verbose: true,
  });
  assertEquals(resp, "440 ASTON MARTIN");

  // Todo: relative path test
  block = await fetchblocks.loadFromURI(
    new URL("./testdata/blocks/relativepath.html#base", import.meta.url),
    "html"
  );
  resp = await block.run({
    verbose: true,
  });
  assertEquals(
    resp,
    [
      "[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp),345335,28583",
      "[996.ICU](https://github.com/996icu/996.ICU),262092,21527",
      "[free-programming-books](https://github.com/EbookFoundation/free-programming-books),232213,48692",
      "[coding-interview-university](https://github.com/jwasham/coding-interview-university),218997,59344",
      "[awesome](https://github.com/sindresorhus/awesome),199687,23351",
      "[vue](https://github.com/vuejs/vue),195472,32037",
      "[developer-roadmap](https://github.com/kamranahmedse/developer-roadmap),193881,27921",
      "[public-apis](https://github.com/public-apis/public-apis),191014,22043",
      "[react](https://github.com/facebook/react),187420,38539",
      "[system-design-primer](https://github.com/donnemartin/system-design-primer),178874,32626",
    ].join("\r\n")
  );
});
Deno.test("fetchblocks custom script calling builtin", async () => {
  assertEquals(
    await fetchblocks.run(
      [
        { resource: "http://example.com" },
        {
          type: "script",
          value: "return builtins.jmespath(input, { value: 'a' })",
        },
      ],
      { stubResponse: { a: 1 } }
    ),
    1
  );
});

Deno.test("fetchblocks custom script", async () => {
  assertEquals(
    await new fetchblock([
      {
        resource:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQCOT-EoZK8XhAeGWaH4nCMsWPuPJNAW-7SeWfaeKxH1MSr6IRwYO3W5t69ZnisVHWcjuQ8xtnlWjPj/pub?gid=0&single=true&output=csv",
      },
      {
        type: "script",
        value: `
        let todos = [];
        // Todo - share some proper csv utils
        for (let row of input.split("\\r\\n")) {
          let cols = row.split(",");
          todos.push({
            id: cols[2],
            content: cols[0],
            due: cols[1],
          });
        }
        return todos;
        `,
      },
    ]).run({
      // TODO: simplify this to take a single options thing with dataset as key
      verbose: true,
      dataset: {},
    }),
    [
      {
        content: "Name",
        due: "Due Date",
        id: "Id",
      },
      {
        content: "Prep for talk",
        due: "5/2/2022",
        id: "1",
      },
      {
        content: "Grocery Shopping",
        due: "5/2/2022",
        id: "2",
      },
      {
        content: "Pack for trip",
        due: "5/4/2022",
        id: "3",
      },
      {
        content: "Flight",
        due: "5/5/2022",
        id: "4",
      },
    ]
  );
});

Deno.test("md to csv", async () => {
  let block = new fetchblock([
    {
      resource:
        "https://raw.githubusercontent.com/EvanLi/Github-Ranking/0c2124166834124c6225ebb3de989a8d5b916e00/Top100/Top-100-stars.md",
    },
    { type: "md_to_json" },

    // Grab the first N rows
    { type: "jmespath", value: "[].rows[0:{{dataset.num_rows}}]" },

    // Grab the relevant columns (name, stars, forks)
    { type: "jmespath", value: "[][1:4].text" },
  ]);

  let ret = await block.run({
    dataset: {
      num_rows: 3,
    },
  });

  assertEquals(ret, [
    [
      "[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)",
      "345335",
      "28583",
    ],
    ["[996.ICU](https://github.com/996icu/996.ICU)", "262092", "21527"],
    [
      "[free-programming-books](https://github.com/EbookFoundation/free-programming-books)",
      "232213",
      "48692",
    ],
  ]);

  ret = await fetchblocks.run(
    [
      { block },
      { type: "json_to_csv" },
      // { type: "slice"},
    ],
    {
      verbose: true,

      dataset: {
        num_rows: 3,
      },
    }
  );
  assertEquals(
    ret,
    "[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp),345335,28583\r\n[996.ICU](https://github.com/996icu/996.ICU),262092,21527\r\n[free-programming-books](https://github.com/EbookFoundation/free-programming-books),232213,48692"
  );
});
Deno.test("multiple json blocks", async () => {
  if (isNode) {
    // TODO: dnt shim doesn't seem to like file URLs. Could juse use Deno.file to read the contents
    // and loadfromtext instead.
    return;
  }
  for (let uri of [
    "./testdata/blocks/multiple-json.json#n_top_stars",
    "./testdata/blocks/multiple-json.json#n_top_stars_external_reference",
  ]) {
    let resource = new URL(uri, import.meta.url).toString();
    let block = await fetchblocks.loadFromURI(resource);
    let ret = await block.run({
      dataset: {
        num_rows: 3,
      },
    });
    assertEquals(
      ret,
      "[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp),345335,28583\r\n[996.ICU](https://github.com/996icu/996.ICU),262092,21527\r\n[free-programming-books](https://github.com/EbookFoundation/free-programming-books),232213,48692"
    );
  }

  // TODO: see #n_top_stars_pure_transform. Should there be a way to share a set of transforms that
  // don't have a fetch so that it's easier to share the steps with different fetches?
  // For example:
  /* {
    "transforms":
      [{ "type": "csv_to_json", }, { ... }],
    "fetch_1": {
      [ { resource: "example.com" }, { "block": "#transforms" }],
    "fetch_2": {
      [ { resource: "example.org" }, { "block": "#transforms" }],
    }
  } */
  // The rules would be that a pure transform block must not have a top level fetch / block,
  // While a normal block must have a top level fetch / block.
});
Deno.test("likely blocks", async () => {
  assertEquals(
    fetchblocks.getLikelyBlocksFromText(`{
      "fetch_1": [{ "resource": "example.com" }],
      "fetch_2": [{ "resource": "example.org" }]
    }`),
    ["fetch_1", "fetch_2"]
  );
  assertEquals(
    fetchblocks.getLikelyBlocksFromText(`[{ "resource": "example.com" }]`),
    ["default"]
  );
  assertEquals(fetchblocks.getLikelyBlocksFromText(`invalid block text`), []);
  assertEquals(
    fetchblocks.getLikelyBlocksFromText(`
    <fetch-block id="fetch_1" resource="http://example.com"></fetch-block>
    <fetch-block id="fetch_2" resource="http://example.com"></fetch-block>
    `),
    ["fetch_1", "fetch_2"]
  );
  assertEquals(
    fetchblocks.getLikelyBlocksFromText(
      `<fetch-block resource="http://example.com"></fetch-block>`
    ),
    ["default"]
  );
  assertEquals(fetchblocks.getLikelyBlocksFromText(`<div></div>`), []);
});

Deno.test("graphql", async () => {
  if (isNode) {
    // TODO: dnt shim doesn't seem to like file URLs. Could juse use Deno.file to read the contents
    // and loadfromtext instead.
    return;
  }
  let resource = new URL(
    "./testdata/graphql-github-issues.json",
    import.meta.url
  ).toString();
  let ret = await fetchblocks.run([{ resource }]);
  // let graphQLBlock = new fetchblock([{
  //   resource: "https://api.github.com/graphql",
  //   method: "POST",
  //   headers: {
  //     Authorization: "Bearer {{dataset.bearer}}",
  //   },
  //   body: `{{dataset.graphql}}`,
  // });

  // let ret = await graphQLBlock.run({
  //   verbose: true,
  //   dataset: {
  //     graphql: JSON.stringify({
  //       query: `
  //   query { repository(owner:"bgrins", name:"devtools-demos") { issues(last:1,
  //     states:CLOSED) { edges { node { title url labels(first:5) { edges { node {
  //     name } } } } } } } }`,
  //     }),
  //     bearer: {
  //       value: fetchblocks.env.get("GITHUB_TOKEN"),
  //       allowedOrigins: ["https://api.github.com"],
  //     },
  //   },
  // });
  assertEquals(ret, {
    data: {
      repository: {
        issues: {
          edges: [
            {
              node: {
                labels: {
                  edges: [
                    {
                      node: {
                        name: "wontfix",
                      },
                    },
                  ],
                },
                title: "test issue",
                url: "https://github.com/bgrins/devtools-demos/issues/15",
              },
            },
          ],
        },
      },
    },
  });
});
Deno.test("gist", async () => {
  let graphQLBlock = await fetchblocks.loadFromURI(
    "https://gist.githubusercontent.com/bgrins/8e22f70708edf41cefd2b35479eaa82e/raw/graphql-block.json"
  );
  let ret = await graphQLBlock.run({
    dataset: {
      graphql: JSON.stringify({
        query: `
    query { repository(owner:"bgrins", name:"devtools-demos") { issues(last:1,
      states:CLOSED) { edges { node { title url labels(first:5) { edges { node {
      name } } } } } } } }`,
      }),
      bearer: {
        value: fetchblocks.env.get("GITHUB_TOKEN"),
        allowedOrigins: ["https://api.github.com"],
      },
    },
  });
  assertEquals(ret, {
    data: {
      repository: {
        issues: {
          edges: [
            {
              node: {
                labels: {
                  edges: [
                    {
                      node: {
                        name: "wontfix",
                      },
                    },
                  ],
                },
                title: "test issue",
                url: "https://github.com/bgrins/devtools-demos/issues/15",
              },
            },
          ],
        },
      },
    },
  });
});

Deno.test("ideas", async () => {
  // Fetch data from https://github.com/public-apis/public-apis with CORS=yes and auth=no
});
