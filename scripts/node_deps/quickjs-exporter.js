const quickjs = require("quickjs-emscripten");
const ASYNC_EXECUTION = true;
const MEMORY_LIMIT = 1024 * 1024 * 32;
// Interrupt computation after N calls to the interrupt handler
const MAX_INTERRUPTS = 1024;

async function getNewContextWithGlobals(exposed) {
  const qjs = await quickjs.getQuickJS();
  const runtime = qjs.newRuntime();

  runtime.setMemoryLimit(MEMORY_LIMIT);
  let interruptCycles = 0;
  runtime.setInterruptHandler(() => ++interruptCycles > MAX_INTERRUPTS);
  // runtime.setModuleLoader((moduleName) => {
  //   console.log("module name", moduleName);
  //   return `export default '${moduleName}'`;
  // });

  const vm = runtime.newContext();

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
async function executeCodeInSandbox(code, input, options, builtinsString) {
  const vm = await getNewContextWithGlobals();

  // Inject our own globals into scope:
  const exposed = {
    input,
    options,
  };

  if (builtinsString) {
    vm.evalCode(builtinsString);
  }

  for (let name in exposed) {
    const val = exposed[name];
    const json = typeof val === "undefined" ? "undefined" : JSON.stringify(val);
    vm.evalCode(
      `const ${name} = ${json};`
    );
  }

  // TODO: check if the code is an esm and don't wrap in a function but instead call the default
  // export (and allow imports)

  // TODO: Check async

  let result;
  if (ASYNC_EXECUTION) {
    let asyncResult = vm.evalCode(`(async() => { ${code} })()`);
    const promise = vm
      .unwrapResult(asyncResult)
      .consume((result) => vm.resolvePromise(result));
    vm.runtime.executePendingJobs();
    result = await promise;
  } else {
    result = vm.evalCode(`(() => { ${code} })()`);
  }

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
  // console.log("fetchblock execution success:", value, "test");
  result.value.dispose();
  vm.dispose();
  vm.runtime.dispose();
  return value;
}
module.exports = {
  quickjs,
  executeCodeInSandbox,
};
