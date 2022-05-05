
// This is bundled at buildtime so that it can run in the sandbox
// (as opposed to loading these deps in the parent runtime)
import * as marked from "https://esm.sh/marked/";

export function transform(input, options, functions) {
  // console.log(input, options, functions);
  if (typeof input != "string") {
    throw new Error("Can't use md_to_json on non string");
  }
  return marked.lexer(input);
}

