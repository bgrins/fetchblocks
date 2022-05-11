import { fetchblock, fetchblocks } from "../web/bundle-module.js";

let blocks = [
  { resource: "https://x-colors.herokuapp.com/api/random/{{dataset.hue}}" },
  { type: "jmespath", value: "hex" },
];
let f = fetchblocks.run(blocks, {
  dataset: {
    hue: 228, // See https://x-colors.herokuapp.com/
    mysecret: {
      value: "secret",
      allowedOrigins: ["https://x-colors.herokuapp.com"],
    },
  },
});

f.then((r) => console.log(r));

// let resolvedScript = new URL("../web/bundle-classic.js", document.location)
//   .href;
// var blob = new Blob(
//   [
//     document
//       .querySelector("#worker")
//       .textContent.replace("RESOLVED_SCRIPT", resolvedScript),
//   ],
//   { type: "text/javascript" }
// );

let blockhistory = {};

function runBlock(blocks, options) {
  var worker = new Worker("./playground-worker.js");
  worker.onmessage = function (e) {
    console.log(e);
    if (e.data.type == "PlanReady") {
      blockhistory[e.data.detail.fbid] = e.data.detail.plan;
    }
    if (e.data.type == "StepComplete") {
      blockhistory[e.data.detail.fbid] = e.data.detail.plan;
    }
    console.log(blockhistory);
  };

  worker.postMessage({
    type: "fetchblocks.run",
    blocks,
    options,
  });
}

runBlock([
  { resource: "https://x-colors.herokuapp.com/api/random" },
  { type: "jmespath", value: "hex" },
]);

function evalInWorker(script) {
  var worker = new Worker("./playground-worker.js");

  worker.onmessage = function (e) {
    console.log("Received: ", e.data);
  };
  // worker.postMessage({
  //   type: "jsEval",
  //   message: "return 1+1",
  // });
  worker.postMessage({
    type: "parentEval",
    message: script,
  });
}

require.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs",
  },
});
require(["vs/editor/editor.main"], function () {
  var runEditor = (window.runEditor = monaco.editor.create(
    document.getElementById("run-editor"),
    {
      value: `

let blocks = [
  { resource: "https://x-colors.herokuapp.com/api/random/{{dataset.hue}}" },
  { type: "jmespath", value: 'hex' }
];
return fetchblocks.run(blocks, {
  dataset: {
    hue: 228, // See https://x-colors.herokuapp.com/
    mysecret: {
      value: "secret",
      allowedOrigins: ["https://x-colors.herokuapp.com"],
    }
  }    
})
`,
      language: "javascript",
      readOnly: false,
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8,
      },

      minimap: {
        enabled: false,
      },
    }
  ));
  var blockEditorJSON = (window.blockEditorJSON = monaco.editor.create(
    document.getElementById("block-editor"),
    {
      value: `[
  { "resource": "http://api.zippopotam.us/us/{{dataset.zip}}" },
  { "type": "jmespath", "value": "places[*].{lat: latitude, lng: longitude, name: \\"place name\\"" }
]`,
      language: "json",
      readOnly: false,
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8,
      },
      wordWrap: "wordWrapColumn",
      wordWrapColumn: 80,
      // wordWrapMinified: true,
      // wrappingIndent: "indent",

      minimap: {
        enabled: false,
      },
    }
  ));

  function render() {
    let value = runEditor.getModel().getValue();
    document.querySelector("#results").textContent = value;
  }
  runEditor.getModel().onDidChangeContent((event) => {
    evalInWorker(runEditor.getModel().getValue());
    render();
  });
  evalInWorker(runEditor.getModel().getValue());
  render();
});
