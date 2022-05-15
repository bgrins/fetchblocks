// deno run --unstable -A scripts/bundle_web.js   

import { bundleWeb } from "./tasks.js";

// The web/ folder has a separate set of deps to make a web-compatible ESM
Deno.copyFileSync("mod.js", "web/mod.js");
await bundleWeb();
