import { fetchblock, fetchblocks } from "./mod.js";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { resolve } from "https://deno.land/std/path/mod.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";
import { exists, existsSync } from "https://deno.land/std/fs/mod.ts";

// deno run -A cmd.js testdata/blocks/external1.html --dataset foo=bar --dataset bar=baz
// deno run -A cmd.js testdata/blocks/top-stars.json --dataset num_rows=10

async function main(args) {
  const parsed = parse(args);
  const { format, help, verbose = false, dataset, _ } = parsed;
  const dryRun = parsed["dry-run"];
  const [file] = _;

  if (help) {
    console.log("Todo: help text");
    return;
  }

  if (file === "new") {
    let resource = _[1];
    console.log(
      JSON.stringify(
        {
          resource,
        },
        null,
        2
      )
    );
    return;
  }

  let ds = {};
  if (dataset) {
    if (Array.isArray(dataset)) {
      for (let data of dataset) {
        let split = data.split("=");
        ds[split[0]] = split[1];
      }
    } else {
      let split = dataset.split("=");
      ds[split[0]] = split[1];
    }
  }

  let url;
  try {
    url = new URL(file);
  } catch (e) {
    const fileFullPath = resolve(Deno.cwd(), file);
    if (existsSync(fileFullPath)) {
      url = new URL(fileFullPath, import.meta.url);
    }
  }

  if (!url) {
    console.error("No valid URL or file passed in");
    return;
  }

  let block = await fetchblocks.loadFromURI(url);

  let resp;
  if (dryRun) {
    resp = await block.plan({
      dataset: ds,
      verbose,
    });
    console.log(`Not running because --dry-run was passed. Here's the plan (${resp.plan.length} steps)`);
    console.table(resp.plan.map((step) => [step]));
  } else {
    resp = await block.run({
      dataset: ds,
      verbose,
    });
    console.log(resp);
  }
}

main(Deno.args);
