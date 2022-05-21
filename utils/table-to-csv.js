import * as _jsdom from "../jsdom-module.js";
const jsdom = _jsdom.default;
class DOMParser {
  parseFromString(string, mimeType) {
    // TODO: if we exposed this from the browserified thing instead could we tree shake and make this
    // smaller
    const { window: jsdomwindow } = new jsdom.JSDOM(``);
    const jsdomparser = new jsdomwindow.DOMParser();
    return jsdomparser.parseFromString(string, mimeType);
  }
}

// TODO: go to JSON first
// TODO: import jsdom
// TODO: can browserify pull down esm.sh jsdom instead of going the other way?

// Todo: make this a reference block (without being a "builtin" by allowing ESM imports from custom script)
// Pass jsdom into the sandbox as a builtin
// Todo: test this using WPT (generating expected results by copy/pasting into sheets)
// https://wpt.live/html/semantics/tabular-data/
function toCSV(table, options = {}) {
  let json = toJSON(table, options);

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

  var csv = toCSV(json);
  console.log(csv);

  return csv;
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

  if (includeheaders && numHeaderRows > 1) {
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

export default function transform(input, options = {}) {
  let tableSelector = options.table || "table";

  let document = new DOMParser().parseFromString(input, "text/html");

  var table = document.querySelector(tableSelector);

  if (!table) {
    throw new Error(`No table matching selector: ${table}`);
  }
  return toCSV(table, {
    includeheaders: options.includeheaders,
  });
}

// console.log(
//   transform(
//     "<table><thead><tr><td>hi</td><td>there</td></tr></thead><tr><td>0</td><td>1</td></tr></table>",
//     {
//       includeheaders: true,
//     }
//   )
// );
