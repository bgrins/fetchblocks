import { fetchblock, fetchblocks, jsEval } from "../mod.js";

// deno run -A ./scripts/generate_test_data.js

// Deno.writeTextFileSync(
//   "./testdata/getallmakes.json",
//   await fetchblocks.run([
//     {
//       resource:
//         "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
//     },
//   ])
// );

// let top100 = await new fetchblock([
//   {
//     resource:
//       "https://raw.githubusercontent.com/EvanLi/Github-Ranking/0c2124166834124c6225ebb3de989a8d5b916e00/Top100/Top-100-stars.md",
//   },
//   { type: "md_to_json" },

//   // Grab the first N rows
//   { type: "jmespath", value: "[].rows[0:{{dataset.num_rows}}]" },

//   // Grab the relevant columns (name, stars, forks)
//   { type: "jmespath", value: "[][1:4].text" }
// ]).run({ verbose: true, dataset: { num_rows: 10 } });

// Deno.writeTextFileSync(
//   "./testdata/top10.json",
//   JSON.stringify(top100, null, 2)
// );

// Deno.writeTextFileSync(
//   "./testdata/top10.csv",
//   await fetchblocks.run([{ stubResponse: top100 }, { type: "json_to_csv" }])
// );

// let graphQLBlock = new fetchblock([{
//   resource: "https://api.github.com/graphql",
//   method: "POST",
//   headers: {
//     Authorization: "Bearer {{dataset.bearer}}",
//   },
//   body: `{{dataset.graphql}}`,
// }]);

// Deno.writeTextFileSync(
//   "./testdata/graphql-github-issues.json",
//   JSON.stringify(
//     await graphQLBlock.run({
//       verbose: true,
//       dataset: {
//         graphql: JSON.stringify({
//           query: `
//     query { repository(owner:"bgrins", name:"devtools-demos") { issues(last:1,
//       states:CLOSED) { edges { node { title url labels(first:5) { edges { node {
//       name } } } } } } } }`,
//         }),
//         bearer: {
//           value: fetchblocks.env.get("GITHUB_TOKEN"),
//           allowedOrigins: ["https://api.github.com"],
//         },
//       },
//     }),
//     null,
//     2
//   )
// );

let sp = await fetchblocks.loadFromURI(
  new URL("../testdata/blocks/sp-to-csv.html", import.meta.url)
);
Deno.writeTextFileSync(
  "./testdata/sp.csv",
  await sp.run({
    verbose: true,
  })
);

let spOpen = await fetchblocks.loadFromURI(
  new URL("../testdata/blocks/sp-to-csv.html#open-issues", import.meta.url)
);
let page1 = await spOpen.run({
  verbose: true,
  dataset: {
    per_page: 100,
    page: 1,
  },
});
// TODO: pass option to skip headers on subsequent conversions to csv
let page2 = await spOpen.run({
  verbose: true,
  dataset: {
    per_page: 100,
    page: 2,
  },
});

Deno.writeTextFileSync(
  "./testdata/spOpen.csv",
  page1 + "\r\n" + page2.split("\r\n").slice(1).join("\r\n")
);

let aw = await fetchblocks.loadFromText(`
[
  { "resource": "https://api.github.com/users/{{dataset.user}}/subscriptions?per_page={{ dataset.per_page | default: 5 }}" },
  { "type": "jmespath", "value": "[].{id: id, node_id: node_id, name: name, full_name: full_name, private: private, owner: owner.login, html_url: html_url, description: description, created_at: created_at, updated_at: updated_at, pushed_at: pushed_at, homepage: homepage, size: size, stargazers_count: stargazers_count, watchers_count: watchers_count, language: language, has_wiki: has_wiki, has_pages: has_pages, forks_count: forks_count, archived: archived, disabled: disabled, open_issues_count: open_issues_count, topics: topics, forks: forks, open_issues: open_issues, watchers: watchers }" },
    {
      "type": "json_to_csv"
    }
]
`);
Deno.writeTextFileSync(
  "./testdata/aw.csv",
  await aw.run({
    verbose: true,
    dataset: {
      user: "bgrins",
      per_page: 6,
    },
  })
);
