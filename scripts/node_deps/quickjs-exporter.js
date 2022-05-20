const quickjs = require("quickjs-emscripten");
const esprima = require("esprima");
const MEMORY_LIMIT = 1024 * 1024 * 32;
// Interrupt computation after N calls to the interrupt handler
const MAX_INTERRUPTS = 1024;

function parseScript(script) {
  // We expect to fail if there's an import/export:
  try {
    let parsed = esprima.parseScript(script);
    return {
      isModule: false,
      parsed,
    };
  } catch (e) {}
  try {
    let parsed = esprima.parseModule(script);
    return {
      isModule: true,
      parsed,
    };
  } catch (e) {}

  throw new Error("Unable to parse script");
}

function isValidHttpUrl(string, base) {
  let url;

  try {
    url = new URL(string, base);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

async function getNewContextWithGlobals(exposed = {}, importMap = {}) {
  // const qjs = await quickjs.getQuickJS();
  // const runtime = qjs.newRuntime();
  const qjs = await quickjs.newQuickJSAsyncWASMModule();
  const runtime = qjs.newRuntime();

  runtime.setMemoryLimit(MEMORY_LIMIT);
  let interruptCycles = 0;
  runtime.setInterruptHandler(() => ++interruptCycles > MAX_INTERRUPTS);

  // Toy omdule loader
  // See https://github.com/justjake/quickjs-emscripten/issues/55
  runtime.setModuleLoader(
    async (moduleName) => {
      console.log("module name", moduleName, isValidHttpUrl(moduleName));
      if (importMap[moduleName]) {
        return importMap[moduleName];
      }
      if (isValidHttpUrl(moduleName)) {
        let url = new URL(moduleName);
        let resp = await fetch(url);
        let text = await resp.text();
        return text;
      }

      throw new Error("Can't find module " + moduleName);

      // return `export default '${moduleName}'`;
    },
    (baseModuleName, moduleNameRequest) => {
      console.log(
        "baseModuleName",
        baseModuleName,
        "moduleNameRequest",
        moduleNameRequest
      );
      if (isValidHttpUrl(moduleNameRequest, baseModuleName)) {
        return new URL(moduleNameRequest, baseModuleName).toString();
      }
      return moduleNameRequest;
    }
  );

  const vm = runtime.newContext();

  for (let name in exposed) {
    const val = exposed[name];
    const json = typeof val === "undefined" ? "undefined" : JSON.stringify(val);
    vm.evalCode(`const ${name} = ${json};`);
  }

  // Add partial console:
  const logHandle = vm.newFunction("log", (...args) => {
    const nativeArgs = args.map(vm.dump);
    console.log("fetchblock sandbox:", ...nativeArgs);
  });
  const consoleHandle = vm.newObject();
  vm.setProp(consoleHandle, "log", logHandle);
  vm.setProp(vm.global, "console", consoleHandle);
  consoleHandle.dispose();
  logHandle.dispose();
  return vm;
}

/*
  let result = await exec(`
    import foo from "foo.js";
    export default function({exposed1, exposed2}) {
      return foo.bar(exposed1, exposed2, "from module")
    }
  `, {
    entry: "default",
    exposedGlobals: {
      exposed1: "string",
      exposed2: {
        key: "value"
      }
    },
    importMap: {
      "foo.js": `
        function bar(arg1, arg2, arg3) {
          console.log("Call inside of import", arg1, arg2, arg3);
          return `hello ${arg3}`;
        }
      `
    },
  });
  console.log(result); // hello from module
*/
async function exec(code, exposedGlobals, importMap) {

}


async function executeCodeInSandbox(code, input, options, builtinsString) {
  let isModule;
  try {
    isModule = parseScript(code).isModule;
  } catch (e) {
    // try {
    //   code = `(async () => { ${code} })()`;
    //   isModule = parseScript(code).isModule;
    // } catch (e) {
    //   throw new Error("Unable to parse script");
    // }
  }
  // const wrappedCode = isModule
  //   ? code
  //   : `export default async function() { ${code} };`;
  // console.log(wrappedCode);
  // Inject our own globals into scope:
  const exposed = {
    input,
    options,
  };
  const importMap = {
    "eval-module.js": code,
  };
  if (isModule) {
    code = `
      import mod from "eval-module.js";
      globalThis.result = mod(input, options);
      `;
  }
  const vm = await getNewContextWithGlobals(exposed, importMap);

  if (builtinsString) {
    vm.evalCode(builtinsString);
  }

  // If we didn't want to do async we could just do:
  // let result = vm.evalCode(`(() => { ${code} })()`);
  // Not a use case to worry about atm
  let asyncResult;
  if (isModule) {
    asyncResult = await vm.evalCodeAsync(code);
  } else {
    asyncResult = vm.evalCode(`(async() => { ${code} })()`);
  }

  const promise = vm
    .unwrapResult(asyncResult)
    .consume((result) => vm.resolvePromise(result));
  vm.runtime.executePendingJobs();
  let result = await promise;

  if (result.error) {
    let error = vm.dump(result.error);
    result.error.dispose();
    vm.dispose();
    vm.runtime.dispose();
    let err = new Error(error.message + "\n" + error.stack);
    err.name = error.name;
    throw err;
  }

  let value = vm.dump(result.value);
  if (isModule) {
    value = vm.getProp(vm.global, "result").consume(vm.dump);
  }
  result.value.dispose();
  vm.dispose();
  vm.runtime.dispose();
  return value;
}
module.exports = {
  quickjs,
  executeCodeInSandbox,
};
