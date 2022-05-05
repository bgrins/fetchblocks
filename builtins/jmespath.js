import jmespath from "https://cdn.skypack.dev/jmespath";

export function transform(data, options, functions) {
  if (typeof data != "object") {
    throw new Error("Can't use jmespath on non object");
  }
  if (!options.value) {
    throw new Error("Empty jmespath passed in");
  }
  return jmespath.search(data, options.value);
}
