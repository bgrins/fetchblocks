const quickjs = require("quickjs-emscripten");
const { Arena } = require("quickjs-emscripten-sync");

async function executeCodeInSandbox(code, input, options) {
  const exposed = {
    input,
    options,
    console: {
      log: console.log,
    },
  };
  const vm = (await quickjs.getQuickJS()).newContext();
  const arena = new Arena(vm, {
    isMarshalable: (target) => {
      // prevent passing globalThis to QuickJS
      if (target === exposed.console || target == exposed.console.log) {
        return true;
      }
      if (target === exposed.input || target === exposed.options) {
        return "json";
      }
      return false;
    },
  });
  arena.expose(exposed);

  // https://github.com/reearth/quickjs-emscripten-sync/blob/fa03b25083654f68508ca202ad8add11beb274a9/src/index.ts#L84
  // const handle = arena.vm.evalCodeAsync(`(async() => { return 2; })()`);
  // const result = arena._unwrapResultAndUnmarshal(handle);

  let result = await arena.evalCode(`(() => { ${code} })()`);
  return result;
}

async function testArena() {
  const input = {
    a: 1,
    b: 2,
  };
  const options = {
    c: 3,
  };
  const exposed = {
    input,
    options,
    console: {
      log: console.log,
    },
  };
  const vm = (await quickjs.getQuickJS()).newContext();

  const arena = new Arena(vm, {
    isMarshalable: (target) => {
      console.log("HERE", target);
      // prevent passing globalThis to QuickJS
      if (target === exposed.console || target == exposed.console.log) {
        return true;
      }
      if (target === exposed.input || target === exposed.options) {
        console.log("wanting input");
        return "json";
      }
      return false;
    },
  });
  arena.expose(exposed);

  // const arena = new Arena(vm, { isMarshalable: true });

  // class Cls {
  //   field = 0;

  //   method() {
  //     return ++this.field;
  //   }
  // }

  // // We can pass objects to the VM and run code safely
  // const exposed = {
  //   Cls,
  //   cls: new Cls(),
  //   syncedCls: arena.sync(new Cls()),
  // };
  // arena.expose(exposed);

  // let x = arena.evalCode(`input.a + input.b * options.c`);

  let x = arena.evalCode(`console.log("here"); Math.floor(1, 2)`);
  console.log(x);
  arena.evalCode(`input.a = 30`);
  let y = arena.evalCode(`input.b = 100; console.log(input, input.b); input`);
  console.log(y, exposed);
  // arena.evalCode(`cls instanceof Cls`); // returns true
  // arena.evalCode(`cls.field`); // returns 0
  // arena.evalCode(`cls.method()`); // returns 1
  // arena.evalCode(`cls.method()`); // returns 1
  // arena.evalCode(`cls.field`); // returns 1

  // arena.evalCode(`syncedCls.field`); // returns 0
  // exposed.syncedCls.method(); // returns 1
  // arena.evalCode(`syncedCls.field`); // returns 1

  arena.dispose();
  vm.dispose();

  // console.log(x, exposed, y)
  // console.log("here", y);
}

module.exports = {
  quickjs,
  testArena,
  executeCodeInSandbox,
};
