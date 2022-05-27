import { DOMParser } from "https://unpkg.com/linkedom/worker";

// Todo: move this to a separate repo
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
    if (i < arr.length - 1) {
      output += "\n";
    }
  });
  return output;
}

function childRows(tableContainer) {
  return [...tableContainer.children].filter((c) => {
    return c.tagName == "TR";
  });
}

function childCells(row) {
  return [...row.children].filter((c) => {
    return c.tagName == "TD" || c.tagName == "TH";
  });
}

export function tableToJSON(table, options = {}) {
  let includeheaders = options.includeheaders || false;
  var rows = [];
  var numHeaderRows = 0;
  if (includeheaders) {
    var thead = [...table.children].find((c) => c.tagName == "THEAD");
    // Todo: handle special case of no thead but a first row containing only th's
    if (thead) {
      rows = rows.concat(...childRows(thead));
      numHeaderRows = rows.length;
    }
  }

  var tbody = [...table.children].find((c) => c.tagName == "TBODY") || table;
  console.log(tbody.tagName);
  var rows = rows.concat(...childRows(tbody));
  let rowLengths = rows.map((r) => childCells(r).length);
  let maxRowLength = Math.max(...rowLengths.concat(0));
  let minRowLength = Math.min(...rowLengths.concat(0));
  console.log(
    `\n  max row length: ${maxRowLength}\n  min row length: ${minRowLength}`
  );
  var records = rows.map((_) => new Array(maxRowLength).fill(null));

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = childCells(row);
    var currentCellIndex = 0;
    cells.forEach((cell, j) => {
      let { rowSpan, colSpan } = cell;
      // linkedom doesn't support this as a property on the node - look up attr instead:
      if (!rowSpan || !colSpan) {
        rowSpan = parseInt(cell.getAttribute("rowspan") || "1", 10);
        colSpan = parseInt(cell.getAttribute("colspan") || "1", 10);
      }

      // records[i][currentCellIndex] = cell.textContent;
      // if (cell.rowSpan > 1 || cell.colSpan > 1) {
      for (var _ = 0; _ < colSpan; _++) {
        for (var row = 0; row < rowSpan; row++) {
          let currentRowIndex = row + i;
          // Find the next open cell to apply to (i.e. if a previous rowspan expanded into this space.
          // Todo: consult with spec/wpt to see if there are some good test cases to make sure this
          // works as expected
          while (records[currentRowIndex][currentCellIndex]) {
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
          // Todo: should we just expand out to a string here? Maybe keeping a reference to cell is helpful
          // for the header row merging later? If not then just remove this.
          records[currentRowIndex][currentCellIndex] = cell;
        }
        currentCellIndex += 1;
      }
    });
  }

  // This is handling cases like https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States
  // with complicated multi row headers. Basically merge header rows together into a new row and remove the others.
  // Todo: add this to test_utils.js
  if (includeheaders && numHeaderRows > 1) {
    let colTitles = [];
    for (let j = 0; j < maxRowLength; j++) {
      let titleSet = new Set();
      for (let i = 0; i < numHeaderRows; i++) {
        titleSet.add(records[i][j]);
      }
      colTitles.push(
        [...titleSet.values()]
          .map((el) => el.textContent.trim())
          .filter((text) => text != "")
          .join(" - ")
      );
    }
    records = records.slice(numHeaderRows);
    records.unshift(colTitles);
  }

  for (let [rowIndex, row] of records.entries()) {
    for (let [colIndex, col] of row.entries()) {
      if (!records[rowIndex][colIndex]) {
        console.error("Error: missing cell", rowIndex, colIndex);
        records[rowIndex][colIndex] = "";
      }
      records[rowIndex][colIndex] = (
        typeof col == "string" ? col : col.textContent
      )
        .trim()
        .replaceAll("\r\n", "\\r\\n")
        .replaceAll("\n", "\\n");
    }
  }

  return records;
}

export default function transform({ input, options = {} }) {
  let tableSelector = options.tableSelector || "table";

  let document = new DOMParser().parseFromString(input, "text/html");
  var table = document.querySelector(tableSelector);

  if (!table) {
    console.error("About to throw");
    throw new Error(`No table matching selector: ${tableSelector}`);
  }

  let json = tableToJSON(table, options);
  return toCSV(json, {
    includeheaders: options.includeheaders,
  });
}
