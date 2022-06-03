import papaparse from "https://esm.sh/papaparse/";

export default function json_to_csv({ input, options }) {
  let header =
    options.header === false || options.header === "false" ? false : true;
  let opts = {
    header,
  };
  const csv = papaparse.unparse(input, opts);
  return csv;
}
