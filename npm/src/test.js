import * as dntShim from "./_dnt.test_shims.js";
import {
  assertEquals,
  assertObjectMatch,
  assert,
} from "./deps/deno.land/std@0.137.0/testing/asserts.js";

import { run, runWithEnv, fetchRemote, jsEval } from "./mod.js";
import { fetchblock, fetchblocks } from "./mod.js";

// Building for node and web:
// deno run -A --unstable scripts/build.js 0.1.0

// Publishing:
// deno run -A --unstable scripts/build.js 0.1.2 && git commit -am 'tag' && git tag 0.1.2 && && npm publish --access=public npm/ && git push && git push origin --tags

// Testing:
// deno test -A test.js
// npm --prefix npm test

// Running:
// deno run --allow-read --allow-net cmd.js

// Importing:
/*
Deno:
import { run } from "https://deno.land/x/fetchblocks/mod.js";

Web:
<script type="module">
  import { run } from "https://esm.sh/@bgrins/fetchblocks/web/mod.js";
</script>

Node (TODO):
cjs: require("@bgrins/fetchblocks")
esm import { run } from "@bgrins/fetchblocks"
*/

dntShim.Deno.test("run", async () => {
  let resp = run();
  assertEquals(resp, "<html><head></head><body></body></html>");
});

dntShim.Deno.test("run with env", async () => {
  let resp = runWithEnv();
  assertEquals(resp, "HELLO WORLD");
});

dntShim.Deno.test("fetch in node", async () => {
  let text = await fetchRemote("https://example.com");
  assert(text, "Fetch worked");
});

// deno test --watch --allow-net --allow-read

fetchblocks.env.set("NOTION_TOKEN", {
  value: fetchblocks.env.get("NOTION_TOKEN"),
  allowedOrigins: ["https://api.notion.com"],
});

dntShim.Deno.test("fetchblocks - builtins", async () => {
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

  assertEquals(
    jsEval(
      "return builtins.noop(input, options)",
      { a: 1 }
    ),
    { a: 1 }
  );

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

// TODO: replace this with something else
dntShim.Deno.test("fetchblocks - jmespath", async () => {
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
});

dntShim.Deno.test("fetchblocks - notion", async () => {
  // This is the internal JSON representation which can be used directly,
  // or you can use the HTML Custom Element syntax
  let block = new fetchblock(
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
    }
  );

  let childBlock = new fetchblock(
    // Todo: external reference?
    { block },
    {
      type: "jmespath",
      value: "*",
    }
  );

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
      content: "Take Fig on a walk",
      due: "2022-05-02T20:42:00.000Z",
      id: "419c593d-6105-4467-b295-7de3eb6e9ee3",
    },
    {
      content: "Add more todos",
      due: "2022-05-02T20:42:00.000Z",
      id: "bcc33e0c-8377-438f-b5cd-3eb89f75234c",
    },
    {
      content: "Demo stuff",
      due: "2022-05-02T20:42:00.000Z",
      id: "e925f5ab-dc32-48df-a63d-259aa359b0ad",
    },
  ]);

  let graphQLBlock = new fetchblock({
    resource: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      Authorization: "Bearer {{dataset.bearer}}",
    },
    body: `{{dataset.graphql}}`,
  });
  ret = await graphQLBlock.run({
    dataset: {
      graphql: JSON.stringify({
        query: `
    query { repository(owner:"octocat", name:"Hello-World") { issues(last:1,
      states:CLOSED) { edges { node { title url labels(first:5) { edges { node {
      name } } } } } } } }`,
      }),
      bearer: fetchblocks.env.get("GITHUB_TOKEN"),
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
                  edges: [],
                },
                title: "Hello world!",
                url: "https://github.com/octocat/Hello-World/issues/2273",
              },
            },
          ],
        },
      },
    },
  });
});

dntShim.Deno.test("fetchblocks throws on disallowed origin", async () => {
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
dntShim.Deno.test("fetchblocks loaders", async () => {
  assert(fetchblocks.loadFromText);
  assert(fetchblocks.load);

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
});
dntShim.Deno.test("fetchblocks custom script calling builtin", async () => {
  assertEquals(await fetchblocks.run([
    { resource: "http://example.com" },
    { type: "script", value: "return builtins.jmespath(input, { value: 'a' })" },
  ], { stubResponse: { a: 1}}), 1)
});

dntShim.Deno.test("fetchblocks custom script", async () => {
  assertEquals(
    await new fetchblock(
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
      }
    ).run({
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

dntShim.Deno.test("ideas", async () => {
  // Fetch data from https://github.com/public-apis/public-apis with CORS=yes and auth=no
});