import papaparse from "https://esm.sh/papaparse/";

export function csv_to_json(data, options, functions) {
  return papaparse.parse(data, options);
}

export function json_to_csv(data, options, functions) {
  return papaparse.unparse(data, options);
}
