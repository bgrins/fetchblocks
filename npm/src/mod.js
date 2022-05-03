import * as dntShim from "./_dnt.shims.js";
import { CONFIG, DOMParser, Liquid } from "./deps.js";

const LIQUID_ENGINE = new Liquid();

function run() {
  let doc = new DOMParser().parseFromString(`<html></html>`, "text/html");
  return doc.documentElement.outerHTML;
}
function runWithEnv() {
  console.log(CONFIG);
  return `HELLO ${CONFIG["HELLO"]}`;
}
async function fetchRemote(url) {
  let resp = await dntShim.fetch(url);
  let text = await resp.text();
  return text;
}

export { run, runWithEnv, fetchRemote };
