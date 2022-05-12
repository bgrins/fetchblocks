import { fetchblock, fetchblocks } from "./mod.js";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { resolve } from "https://deno.land/std/path/mod.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";
import { exists, existsSync } from "https://deno.land/std/fs/mod.ts";

// deno run -A cmd.js testdata/blocks/external1.html

async function main(args) {
  const {
    type,
    name,
    not,
    help,
    _: [file = "."],
  } = parse(args);

  const fileFullPath = resolve(Deno.cwd(), file);
  if (existsSync(fileFullPath)) {
    let block = await fetchblocks.loadFromURI(new URL(fileFullPath, import.meta.url));
    let resp = await block.run();
    console.log(resp);
  }
}

main(Deno.args);
