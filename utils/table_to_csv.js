// import * as _jsdom from "../jsdom-module.js";
// const jsdom = _jsdom.default;

// class DOMParser {
//   parseFromString(string, mimeType) {
//     // TODO: if we exposed this from the browserified thing instead could we tree shake and make this
//     // smaller
//     return  jsdom.JSDOM.fragment(string);
//     // return "foo";
//     // const { window: jsdomwindow } = new jsdom.JSDOM(``);
//     // const jsdomparser = new jsdomwindow.DOMParser();
//     // return jsdomparser.parseFromString(string, mimeType);
//   }
// }

// import { DOMParser } from "https://esm.sh/linkedom?target=es2022&bundle";
import { DOMParser } from "https://unpkg.com/linkedom/worker";

// TODO: go to JSON first
// TODO: import jsdom
// TODO: can browserify pull down esm.sh jsdom instead of going the other way?

// Todo: make this a reference block (without being a "builtin" by allowing ESM imports from custom script)
// Pass jsdom into the sandbox as a builtin
// Todo: test this using WPT (generating expected results by copy/pasting into sheets)
// https://wpt.live/html/semantics/tabular-data/
function toCSV(arr, options = {}) {
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

function toJSON(table, options = {}) {
  let includeheaders = options.includeheaders || false;
  var rows = [];
  var numHeaderRows = 0;
  if (includeheaders) {
    let headerRows = table.querySelectorAll("thead tr");
    for (let i = 0; i < headerRows.length; i++) {
      rows.push(headerRows[i]);
    }
    rows = rows.concat(...table.querySelectorAll("thead tr"));
    numHeaderRows = rows.length;
  }
  var rows = rows.concat(...table.querySelectorAll("tr"));
  function childCells(row) {
    // console.log("childCells", row.children.length);
    return [...row.children].filter((c) => {
      return c.tagName == "TD" || c.tagName == "TH";
    });
  }

  let rowLengths = rows.map((r) => childCells(r).length);
  let maxRowLength = Math.max(...rowLengths.concat(0));
  let minRowLength = Math.min(...rowLengths.concat(0));
  console.log(`\n  max row length: ${maxRowLength}\n  min row length: ${minRowLength}`);
  var records = rows.map((_) => new Array(maxRowLength).fill(null));

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

  // Todo: test this
  if (includeheaders && numHeaderRows > 1) {
    let labels = new Array(maxRowLength).fill("");
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

  for (let [rowIndex, row] of records.entries()) {
    for (let [colIndex, col] of row.entries()) {
      records[rowIndex][colIndex] = (
        typeof col == "string" ? col : col.textContent
      )
        .trim()
        .replaceAll("\n", "\\n");
    }
  }

  return records;
}

export default async function transform({ input, options = {} }) {
  let tableSelector = options.tableSelector || "table";

  let document = new DOMParser().parseFromString(input, "text/html");
  var table = document.querySelector(tableSelector);

  if (!table) {
    console.error("About to throw");
    throw new Error(`No table matching selector: ${tableSelector}`);
  }

  let json = toJSON(table, options);
  return toCSV(json, {
    includeheaders: options.includeheaders,
  });
}
