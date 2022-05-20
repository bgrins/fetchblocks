// builtins/noop.js
function transform(data) {
  return data;
}

// builtins/jmespath.js
import jmespath from "https://cdn.skypack.dev/jmespath";
function transform2(data, options, functions) {
  if (typeof data != "object") {
    throw new Error("Can't use jmespath on non object: " + typeof data);
  }
  if (!options) {
    throw new Error("Empty jmespath passed in");
  }
  if (typeof options !== "string") {
    throw new Error("Non string jmespath passed in");
  }
  const ret = jmespath.search(data, options);
  return ret;
}

// builtins/md_to_json.js
import * as marked from "https://esm.sh/marked/";
function transform3(input, options, functions) {
  if (typeof input != "string") {
    throw new Error("Can't use md_to_json on non string");
  }
  return marked.lexer(input);
}

// builtins/csv.js
import papaparse from "https://esm.sh/papaparse/";
function csv_to_json(data, options, functions) {
  return papaparse.parse(data, options);
}
function json_to_csv(data, options, functions) {
  return papaparse.unparse(data, options);
}
export {
  csv_to_json,
  transform2 as jmespath,
  json_to_csv,
  transform3 as md_to_json,
  transform as noop
};
