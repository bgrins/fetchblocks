import { fetchblock, fetchblocks, jsEval } from "../mod.js";

// deno run -A ./scripts/generate_test_data.js

Deno.writeTextFileSync(
  "./testdata/getallmakes.json",
  await fetchblocks.run([
    {
      resource:
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",
    },
  ])
);

let top100 = await new fetchblock(
  {
    resource:
      "https://raw.githubusercontent.com/EvanLi/Github-Ranking/0c2124166834124c6225ebb3de989a8d5b916e00/Top100/Top-100-stars.md",
  },
  { type: "md_to_json" },

  // Grab the first N rows
  { type: "jmespath", value: "[].rows[0:{{dataset.num_rows}}]" },

  // Grab the relevant columns (name, stars, forks)
  { type: "jmespath", value: "[][1:4].text" }
).run({ verbose: true, dataset: { num_rows: 10 } });

Deno.writeTextFileSync(
  "./testdata/top10.json",
  JSON.stringify(top100, null, 2)
);

Deno.writeTextFileSync(
  "./testdata/top10.csv",
  await fetchblocks.run([{ stubResponse: top100 }, { type: "json_to_csv" }])
);
