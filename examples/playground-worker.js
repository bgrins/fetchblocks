
      importScripts("../web/bundle-classic.js");
      console.log(self);
      let { jsEval, fetchblocks, fetchblock } = self.fetchblocks;

      self.onmessage = async function(e) {
        console.log(e, e.data);

        if (e.data.type == "fetchblocks.run") {
          console.log("running");
          let resp = await fetchblocks.run(e.data.blocks, e.data.options);
          self.postMessage({
            resp
          })
        } else if (e.data.type == "parentEval") {
          console.log(e.data.message);
          let f = new Function(e.data.message);
          let resp = await f();
          self.postMessage(resp);
        } else if (e.data.type == "jsEval") {
          self.postMessage(jsEval(e.data.message));
        } 
        else {
        }
      };