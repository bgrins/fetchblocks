importScripts("../web/bundle-classic.js");
console.log(self);

// Todo: health check interval for host to kill. Export events like when steps complete
// to terminate hung requests, steps, etc.
let { jsEval, fetchblocks, fetchblock } = self.fetchblocks;

self.onmessage = async function (e) {
  console.log(e, e.data);

  if (e.data.type == "fetchblocks.run") {
    try {
      let block = new fetchblock(e.data.blocks);

      block.addEventListener("PlanReady", (e) => {
        console.log(e);
        self.postMessage({
          type: e.type,
          detail: e.detail,
        });
      });
      block.addEventListener("StepStarting", (e) => {
        self.postMessage({
          type: e.type,
          detail: e.detail,
        });
      });
      block.addEventListener("StepComplete", (e) => {
        self.postMessage({
          type: e.type,
          detail: e.detail,
        });
      });
      block.addEventListener("RunComplete", (e) => {
        self.postMessage({
          type: e.type,
          detail: e.detail,
        });
      });

      let value = await block.run(e.data.options);
      self.postMessage({
        type: "RunComplete",
        detail: {
          value,
        },
      });
    } catch (e) {
      self.postMessage({
        type: "BlockError",
        detail: {
          e: e.toString(),
        },
      });
    }
  } else if (e.data.type == "parentEval") {
    console.log(e.data.message);
    let f = new Function(e.data.message);
    let resp = await f();
    self.postMessage(resp);
  } else if (e.data.type == "jsEval") {
    self.postMessage(jsEval(e.data.message));
  } else {
  }
};
