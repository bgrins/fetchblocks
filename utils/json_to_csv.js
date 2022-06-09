import papaparse from "https://esm.sh/papaparse/";

export default function json_to_csv({ input, options = {} }) {
  let header =
    options.header === false || options.header === "false" ? false : true;
  let newline = options.newline || "\n";
  let opts = {
    header,
    newline,
  };
  const csv = papaparse.unparse(input, opts);
  return csv;
}
