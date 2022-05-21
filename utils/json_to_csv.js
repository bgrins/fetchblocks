import papaparse from "https://esm.sh/papaparse/";

export default function json_to_csv({input, options}) {
  const csv = papaparse.unparse(input);
  return csv;
}
