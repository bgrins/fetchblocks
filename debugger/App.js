import React from "react";
import {
  Button,
  defaultTheme,
  Provider,
  ActionGroup,
  ComboBox,
  Item,
  Grid,
  View,
  Tabs,
  TabList,
  TabPanels,
  ProgressCircle,
  Text,
  Flex,
} from "@adobe/react-spectrum";
import Draw from "@spectrum-icons/workflow/Draw";
import Checkmark from "@spectrum-icons/workflow/Checkmark";
import { fetchblock, fetchblocks } from "../web/bundle-module.js";
import RailRightClose from "@spectrum-icons/workflow/RailRightClose";
import RailRightOpen from "@spectrum-icons/workflow/RailRightOpen";

const EXAMPLES = [
  {
    name: "Basic",
    mode: "application/json",
    content: `[
  { "resource": "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" }
]`,
  },
  {
    name: "Steps",
    mode: "application/json",
    content: `[
  { "resource": "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" },
  { "type": "script", "value": "return input.hex;" }
]`,
  },
  {
    name: "Vehicles",
    mode: "application/json",
    content: `[
  {
    "resource":
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
  },
  { "type": "jmespath", "value": "Results[].{name: Make_Name, id: Make_ID}" },
  { "type": "jmespath", "value": "[?name == \`ASTON MARTIN\`]" }
]`,
  },

  {
    name: "Watched Repos",
    mode: "application/json",
    content: `[
    { "resource": "https://api.github.com/users/{{dataset.user}}/subscriptions?per_page={{ dataset.per_page | default: 5 }}" },
    { "type": "jmespath", "value": "[].{id: id, node_id: node_id, name: name, full_name: full_name, private: private, owner: owner.login, html_url: html_url, description: description, created_at: created_at, updated_at: updated_at, pushed_at: pushed_at, homepage: homepage, size: size, stargazers_count: stargazers_count, watchers_count: watchers_count, language: language, has_wiki: has_wiki, has_pages: has_pages, forks_count: forks_count, archived: archived, disabled: disabled, open_issues_count: open_issues_count, topics: topics, forks: forks, open_issues: open_issues, watchers: watchers }" },
    { "type": "json_to_csv" }
  ]`,
    defaultDataset: {
      per_page: 6,
      user: "bgrins",
    },
  },
  {
    name: "HTML block",
    mode: "text/html",
    content: `<fetch-block resource="https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF">
  <fetch-block-transform type="jmespath" value="hex"></fetch-block-transform>
  <script type="text/fetch-block-transform">
    return input.toLowerCase();
  </script>
</fetch-block>
`,
  },
  {
    name: "Gists",
    mode: "application/json",
    content: `{
       "public_activity": [
         { "resource": "https://api.github.com/gists/public" },
         { "type": "script", "value": "return input.map(gist => Object.keys(gist.files).map(key => gist.files[key].filename));" }
 
       ]
     }`,
  },
  {
    name: "Datasets",
    mode: "application/json",
    content: `[
  { "resource": "https://x-colors.herokuapp.com/api/random/{{dataset.hue}}" },
  { "type": "jmespath", "value": "hex" }
]`,
    defaultDataset: {
      hex: "00FF00",
    },
  },
  {
    name: "HTML to CSV",
    mode: "application/json",
    content: `[
{ "resource": "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" }
]`,
  },
  {
    name: "JSON with multiple",
    mode: "application/json",
    content: `{
  "top_stars": [
    {
      "resource": "https://raw.githubusercontent.com/EvanLi/Github-Ranking/master/Top100/Top-100-stars.md"
    }
  ],
  "n_top_stars": [
    {
      "block": "#top_stars"
    },
    {
      "type": "md_to_json"
    },
    {
      "type": "jmespath",
      "value": "[].rows[0:{{dataset.num_rows}}]"
    },
    {
      "type": "jmespath",
      "value": "[][1:4].text"
    },
    {
      "type": "json_to_csv"
    }
  ]
}`,
  },
];

function RunResults(props) {
  // TODO: plumb this in to an actual fetchblock
  let { activeSteps, isRunning } = props;
  const steps = [];

  if (Array.isArray(activeSteps)) {
    for (const [index, value] of activeSteps.entries()) {
      // TODO: should probably pass step values separetely in the event instead
      // of tacking on to the array
      let noValue = Object.assign({}, value);
      delete noValue.stepValue;
      const stepContent =
        activeSteps.currentStep <= index ? (
          <span>Waiting to complete</span>
        ) : (
          <>
            <span>
              Value:{" "}
              <Button
                onPress={(e) =>
                  navigator.clipboard.writeText(
                    e.target.parentNode.nextElementSibling.textContent
                  )
                }
              >
                Copy to clipboard
              </Button>
            </span>
            <pre>
              {/* todo this includes line breaks from fields within csv */}
              {typeof value.stepValue == "string"
                ? value.stepValue
                : JSON.stringify(value.stepValue, null, 2)}
            </pre>
          </>
        );

      steps.push(
        <details
          key={index}
          open
          className={activeSteps.currentStep == index ? "active" : ""}
        >
          <summary>
            <Flex>
              <View flex="1">
                Step #{index} -{" "}
                {value.type || (value.resource ? "fetch" : "error")}
              </View>
              {activeSteps.currentStep <= index ? (
                <ProgressCircle aria-label="Waiting" isIndeterminate />
              ) : (
                <Checkmark></Checkmark>
              )}
            </Flex>
          </summary>
          {/* <code>{JSON.stringify(noValue)}</code> */}
          {stepContent}
        </details>
      );
    }
  }
  let waiting = <></>;
  if (isRunning && steps.length == 0) {
    waiting = (
      <>
        Waiting for plan to complete
        <ProgressCircle aria-label="Waiting for plan" isIndeterminate />;
      </>
    );
  }
  return (
    <>
      {waiting}
      {steps.length ? steps : ""}
    </>
  );
}

function FileList(props) {
  let { activeFile, setActiveFile, setActiveSteps, setIsRunning } = props;

  const items = [];

  for (const [index, value] of EXAMPLES.entries()) {
    items.push(<Item key={index}>{value.name}</Item>);
  }
  return (
    <>
      <Tabs
        UNSAFE_style={{ paddingLeft: 3 }}
        aria-label="FetchBlock examples"
        orientation="vertical"
        selectedKey={activeFile.toString()}
        onSelectionChange={(e) => {
          setActiveFile(e);
          setActiveSteps([]);
          setIsRunning(false);
        }}
      >
        <TabList>{items}</TabList>
      </Tabs>
    </>
  );
}

function Editor(props) {
  return (
    <>
      <div id="blockEditor" style={{ height: "100%" }}></div>
    </>
  );
}
function Actions() {
  let [action, setAction] = React.useState(0);

  return (
    <>
      <ActionGroup onAction={setAction}>
        <Item key="edit">
          <Draw />
          <Text>Edit</Text>
        </Item>
      </ActionGroup>
    </>
  );
}

function runBlock(blocks, options) {
  // var worker = new Worker(new URL("../web/bundle-module.js", import.meta.url), {
  //   type: "module",
  // });
  // worker.onmessage = function (e) {
  //   console.log(e);
  // };
  // worker.postMessage({
  //   type: "fetchblocks.run",
  //   blocks,
  //   options,
  // });
}

async function runActiveBlock(activeBlockId) {
  console.log("Active block id", activeBlockId);
  let id =
    activeBlockId && activeBlockId != "default" ? activeBlockId : undefined;
  let dataset = {};
  let datasetValue = window.datasetEditor?.getValue();

  try {
    dataset = JSON.parse(datasetValue);
  } catch (e) {}
  document.dispatchEvent(new CustomEvent("DebuggerRunStarted"));
  try {
    // TODO: how to handle multiple blocks in the same editor?
    // Maybe a dropdown.
    // TODO: abort signal
    // window.block?.destroy();
    window.block = null;
    let block = await fetchblocks.loadFromText(window.editor.getValue(), null, {
      id,
    });
    window.block = block;

    block.addEventListener("PlanReady", (e) => {
      console.log("Plan ready", e.detail);
      document.dispatchEvent(
        new CustomEvent("PlanReady", {
          detail: e.detail,
        })
      );
    });
    block.addEventListener("StepStarting", (e) => {
      document.dispatchEvent(
        new CustomEvent("StepStarting", {
          detail: e.detail,
        })
      );
    });
    block.addEventListener("StepComplete", (e) => {
      document.dispatchEvent(
        new CustomEvent("StepComplete", {
          detail: e.detail,
        })
      );
    });
    block.addEventListener("RunComplete", (e) => {
      document.dispatchEvent(
        new CustomEvent("RunComplete", {
          detail: e.detail,
        })
      );
    });

    runBlock(block.steps, {
      dataset,
    });
    await block.run({
      dataset,
    });
  } catch (e) {
    window.block = null;
    console.error("No valid block", e);
    document.dispatchEvent(
      new CustomEvent("DebuggerRunError", {
        detail: e.toString(),
      })
    );
  }
}

function RunAction(props) {
  let { likelyBlocks, activeBlockId, setActiveBlockId } = props;
  let options = [];
  likelyBlocks.forEach((value, index) => {
    options.push({ id: index, name: value });
  });
  console.log(options);

  return (
    <>
      {likelyBlocks.length > 1 ? (
        <ComboBox
          defaultItems={options}
          inputValue={activeBlockId || options[0].name}
          onInputChange={setActiveBlockId}
        >
          {(item) => <Item>{item.name}</Item>}
        </ComboBox>
      ) : (
        ""
      )}
      <Button
        variant="cta"
        onPress={async () => {
          runActiveBlock(activeBlockId);
        }}
      >
        Run
      </Button>
    </>
  );
}
export function App() {
  // Remember / restore the last file
  let initialFilename =
    window.localStorage.getItem("lastFile") || EXAMPLES[0].name;
  let initialFileIndex = 0;
  for (let [index, file] of EXAMPLES.entries()) {
    if (file.name == initialFilename) {
      initialFileIndex = index;
      break;
    }
  }

  let [likelyBlocks, setLikelyBlocks] = React.useState([]);
  let [activeBlockId, setActiveBlockId] = React.useState(null);
  let [activeLoader, setActiveLoader] = React.useState(null);
  let [activeSteps, setActiveSteps] = React.useState(null);
  let [isRunning, setIsRunning] = React.useState(false);
  // let [runVisible, setRunVisible] = React.useState(true);
  let [activeFile, setActiveFile] = React.useState(initialFileIndex);
  React.useEffect(() => {
    window.editor = new CodeMirror(document.querySelector("#blockEditor"), {
      lineNumbers: true,
      lineWrapping: true,
      mode: EXAMPLES[activeFile]?.mode,
    });
    window.editor.on("change", async () => {
      // TODO: also store the last known block id in case it becomes invalid during editing
      EXAMPLES[window.activeFile].content = window.editor.getValue();
      setActiveLoader(fetchblocks.getLoaderForText(window.editor.getValue()));
      let likelyBlocks = fetchblocks.getLikelyBlocksFromText(
        window.editor.getValue()
      );
      setLikelyBlocks(likelyBlocks);
      if (likelyBlocks.length) {
        setActiveBlockId(likelyBlocks[0]);
      }
    });

    window.datasetEditor = CodeMirror(
      document.querySelector("#datasetEditor"),
      {
        mode: "application/json",
        value: `{
"dataset": {

}
}`,
      }
    );

    document.addEventListener("DebuggerRunStarted", (e) => {
      setIsRunning(true);
      // setActiveSteps(null);
    });
    document.addEventListener("DebuggerRunError", (e) => {
      // Todo: set error state
      // setIsRunning(false);
      // setActiveSteps(null);
    });
    document.addEventListener("PlanReady", (e) => {
      setActiveSteps(structuredClone(e.detail.plan));
    });
    document.addEventListener("StepStarting", (e) => {
      setActiveSteps(structuredClone(e.detail.plan));
    });
    document.addEventListener("StepComplete", (e) => {
      setActiveSteps(structuredClone(e.detail.plan));
    });
    document.addEventListener("RunComplete", (e) => {
      setIsRunning(false);
    });
  }, []);
  React.useEffect(() => {
    let fileObject = EXAMPLES[activeFile] || {
      content: "",
    };
    window.activeFile = activeFile;
    window.editor?.setOption("mode", EXAMPLES[activeFile]?.mode);
    window.editor?.setValue(fileObject.content);
    if (fileObject.defaultDataset) {
      window.datasetEditor?.setValue(JSON.stringify(fileObject.defaultDataset));
    } else {
      // TODO: remember edits to restore
      window.datasetEditor?.setValue("");
    }

    if (EXAMPLES[activeFile]) {
      window.localStorage.setItem("lastFile", EXAMPLES[activeFile].name);
    }
  }, [activeFile]);

  return (
    <>
      <Provider theme={defaultTheme} colorScheme="light">
        <Grid
          areas={["sidebar content results", "footer  footer footer"]}
          columns={["auto", "1fr", "minmax(300px, 30vw)"]}
          rows={["1fr", "auto"]}
        >
          <View gridArea="header">
            <Flex flex="1">
              <Flex flex="1"></Flex>
              <View>
                {/* {runVisible ? (
                  <Button onPress={() => setRunVisible(!runVisible)}>
                    <RailRightClose />
                  </Button>
                ) : (
                  <Button onPress={() => setRunVisible(!runVisible)}>
                    <RailRightOpen />
                  </Button>
                )} */}
              </View>
            </Flex>
          </View>
          <View gridArea="sidebar">
            <FileList
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              setActiveSteps={setActiveSteps}
              setIsRunning={setIsRunning}
            ></FileList>
          </View>
          <View gridArea="content" UNSAFE_style={{ overflow: "auto" }}>
            <Editor activeFile={activeFile}></Editor>
          </View>
          <View
            gridArea="results"
            id="run-results"
            UNSAFE_style={{ paddingInlineStart: 5, overflow: "auto" }}
          >
            <Flex flex="1" justifyContent="end">
              <RunAction
                likelyBlocks={likelyBlocks}
                activeBlockId={activeBlockId}
                setActiveBlockId={setActiveBlockId}
              ></RunAction>
            </Flex>
            <details open="open">
              <summary style={{ userSelect: "none" }}>Dataset</summary>
              <div id="datasetEditor"></div>
            </details>
            <RunResults
              activeSteps={activeSteps}
              isRunning={isRunning}
            ></RunResults>
          </View>
          <View backgroundColor="gray-500" gridArea="footer">
            {/* Todo: emit timings from module */}
            {activeLoader
              ? `Mode: ${activeLoader}`
              : "No blocks detected in text"}
            {likelyBlocks.length
              ? ` - ${likelyBlocks.length} ${
                  likelyBlocks.length == 1 ? "block" : "blocks"
                }`
              : ""}
          </View>
        </Grid>
      </Provider>
    </>
  );
}
