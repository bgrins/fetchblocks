// deno run --unstable -A scripts/bundle_builtins.js   

import { bundleBuiltins } from "./tasks.js";
await bundleBuiltins();
