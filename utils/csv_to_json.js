import papaparse from "https://esm.sh/papaparse/";

export default function csv_to_json({input}) {
  const json = papaparse.parse(input);
  // Note: this returns an object like `{ data: [], errors: [], meta: [] }`.
  // For now just throw on any error and return `data` to make it easier
  // for the next step to process it.
  if (json.errors.length) {
    console.error(json);
    throw new Error("Error transforming csv to json: " + JSON.stringify(json.errors))
  }
  return json.data;
}