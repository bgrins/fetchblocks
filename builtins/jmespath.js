import jmespath from "https://cdn.skypack.dev/jmespath";

// TODO just export all of jmespath so it's easier to use from non builtins

export function transform(data, options, functions) {
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
