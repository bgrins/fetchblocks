import jmespath from "https://cdn.skypack.dev/jmespath";

// Todo: type annotations for options param
export default function transform({input, options}) {
  options = options.value;
  if (typeof input != "object") {
    throw new Error("Can't use jmespath on non object: " + typeof input);
  }
  if (!options) {
    throw new Error("Empty jmespath passed in");
  }
  if (typeof options !== "string") {
    throw new Error("Non string jmespath passed in");
  }
  const ret = jmespath.search(input, options);
  return ret;
}
