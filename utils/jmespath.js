import jmespath from "https://cdn.skypack.dev/jmespath";

// TODO just export all of jmespath so it's easier to use from non builtins

export default function transform({input, options}) {
  // Todo: rename callers
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
