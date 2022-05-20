import { fetchblock, fetchblocks, jsEval } from "../mod.js";
import { DOMParser } from "../deps.js";

// deno run -A ./scripts/generate_test_data.js

let spOpen = await fetchblocks.loadFromURI(
  new URL("../testdata/blocks/sp-to-csv.html#open-issues", import.meta.url)
);
let page1 = await spOpen.run({
  verbose: true,
  dataset: {
    per_page: 1,
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

let vehicles = await fetchblocks.loadFromURI(
  new URL("../testdata/blocks/vehicles.html#base", import.meta.url)
);
Deno.writeTextFileSync("./testdata/getallmakes.json", JSON.stringify(await vehicles.run()));

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

statesToCSV();

// Todo: make this a reference block (without being a "builtin" by allowing ESM imports from custom script)
// Pass jsdom into the sandbox as a builtin
// Todo: test this using WPT (generating expected results by copy/pasting into sheets)
// https://wpt.live/html/semantics/tabular-data/
function statesToCSV() {
  let document = new DOMParser().parseFromString(
    Deno.readTextFileSync("./testdata/list-of-states-outerhtml.html"),
    "text/html"
  );

  // let dom = new jsdom.JSDOM(outerHTML);
  // let document =
  // Todo: handle complicatd header colspan/rowspan like wikipedia has
  let includeHeaders = true;
  var table = document.querySelector("table");
  var rows = [];
  var numHeaderRows = 0;
  if (includeHeaders) {
    let headerRows = table.querySelectorAll("thead tr");
    for (let i = 0; i < headerRows.length; i++) {
      rows.push(headerRows[i]);
    }
    rows = rows.concat(...table.querySelectorAll("thead tr"));
    numHeaderRows = rows.length;
  }
  var rows = rows.concat(...table.querySelectorAll("tbody tr"));
  // console.log(rows);
  function childCells(row) {
    return [...row.children].filter((c) => {
      return c.tagName == "TD" || c.tagName == "TH";
    });
  }
  let maxRowLength = Math.max.apply(
    null,
    rows.map((r) => childCells(r).length)
  );
  let minRowLength = Math.min.apply(
    null,
    rows.map((r) => childCells(r).length)
  );
  console.log(maxRowLength, minRowLength);
  var records = rows.map((row) => new Array(maxRowLength).fill(null));
  console.log(records[0].length);

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = childCells(row);
    var currentCellIndex = 0;
    cells.forEach((cell, j) => {
      let rowSpan = cell.rowSpan || 1;
      let colSpan = cell.colSpan || 1;
      // records[i][currentCellIndex] = cell.textContent;
      // if (cell.rowSpan > 1 || cell.colSpan > 1) {
      for (var y = 0; y < colSpan; y++) {
        for (var z = 0; z < rowSpan; z++) {
          // Todo: find the next open one (i.e. if a previous rowspan expanded)
          while (records[i + z][currentCellIndex]) {
            currentCellIndex += 1;
          }
          if (currentCellIndex > maxRowLength) {
            console.error(cell.textContent);
            throw new Error(
              "Too many cells (total colspan larger than cells) " +
                i +
                "  " +
                j +
                " " +
                currentCellIndex +
                "  " +
                maxRowLength
            );
          }
          // console.log()
          records[i + z][currentCellIndex] = cell;
        }
        currentCellIndex += 1;
        // records[i + z][j] = cell.textContent;
      }
      // }
      // if (cell.colSpan > 1) {
      //   for (var z = 1; z < cell.colSpan; z++) {
      //     records[i][j + z] = cell.textContent;
      //   }
      // }
    });
  }

  console.log(
    Math.max.apply(
      null,
      rows.map((r) => childCells(r).length)
    ),
    Math.min.apply(
      null,
      rows.map((r) => childCells(r).length)
    )
  );

  if (includeHeaders && numHeaderRows > 1) {
    let labels = new Array(maxRowLength).fill("");
    console.log("NUM HEADER", records[0].length, numHeaderRows, labels.length);
    // let labels = new Array(rows[0].length).fill("");
    let colTitles = [];
    for (let j = 0; j < maxRowLength; j++) {
      let titleSet = new Set();
      for (let i = 0; i < numHeaderRows; i++) {
        titleSet.add(records[i][j]);
        // colTitles[colTitles.length - 1] += (records[i][j]?.textContent?.trim() || "ERR");
        // labels[j] += records[i][j]?.textContent?.trim() || "ERR";
      }
      colTitles.push(
        [...titleSet.values()]
          .map((el) => el.textContent.trim())
          .filter((text) => text != "")
          .join(" - ")
      );
      // labels[i][j] ? labels[i][j] + rows[i][j] : rows[i][j];
    }
    // console.log(labels);
    records = records.slice(numHeaderRows);
    records.unshift(colTitles);
  }

  function toCSV(arr) {
    var output = "";
    arr.forEach((o, i) => {
      o.forEach((p, j) => {
        p = (typeof p == "string" ? p : p.textContent)
          .trim()
          .replaceAll("\n", "\\n");
        output += `"${p}"`;
        if (j < o.length - 1) {
          output += ",";
        }
      });
      output += "\n";
    });
    return output;
  }

  var csv = toCSV(records);
  console.log(csv);

  Deno.writeTextFileSync(
    "./testdata/list-of-states-outerhtml.csv",
    csv.split("\n").join("\n")
  );
}
