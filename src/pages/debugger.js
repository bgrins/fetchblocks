import React from "react";
import * as ReactDOM from "react-dom";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Head from "@docusaurus/Head";
import {
  Button,
  defaultTheme,
  Provider,
  ActionGroup,
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
import RailRightClose from "@spectrum-icons/workflow/RailRightClose";
import RailRightOpen from "@spectrum-icons/workflow/RailRightOpen";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const EXAMPLES = [
  {
    name: "Basic",
    mode: "json",
    content: `[
  { "resource": "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" }
]`,
  },
  {
    name: "Steps",
    mode: "json",
    content: `[
  { "resource": "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" },
  { "type": "script", "value": "return input.hex;" }
]`,
  },
  {
    name: "Datasets",
    mode: "json",
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
    mode: "json",
    content: `[
{ "resource": "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF" }
]`,
  },
];

export default function Hello() {
  return (
    <Layout title="Debugger" description="FetchBlocks Debugger">
      <Head>
        {/*
        Docusaurus doesn't like when the bundle is imported as a module and you try to build static 
        This file is just copied in from the main branch, something like
        cp web/bundle-classic.js ../fetchblocks-docs/static.
        So it either needs to be updated when the lib changes, or this should point to a CDN
        */}
        <script src="/bundle-classic.js"></script>
      </Head>
      <BrowserOnly>
        {() => <div id="container"></div>}
      </BrowserOnly>
    </Layout>
  );
}

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
          <ProgressCircle aria-label="Waiting" isIndeterminate />
        ) : (
          <>
            <span>Value:</span>
            <pre>{JSON.stringify(value.stepValue, null, 2)}</pre>
          </>
        );
      steps.push(
        <details
          key={index}
          open
          className={activeSteps.currentStep == index ? "active" : ""}
        >
          <summary>
            Step #{index} - {value.type || (value.resource ? "fetch" : "error")}
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

async function runActiveBlock() {
  let dataset = {};
  let datasetValue = window.datasetEditor?.getValue();

  try {
    dataset = JSON.parse(datasetValue);
  } catch (e) {}
  document.dispatchEvent(new CustomEvent("DebuggerRunStarted"));
  try {
    // TODO: how to handle multiple blocks in the same editor?
    // Maybe a dropdown.
    console.log(window.block);
    // TODO: abort signal
    // window.block?.destroy();
    window.block = null;
    // Todo: This is bundled weirdly
    let block = await window.fetchblocks.fetchblocks.loadFromText(
      window.editor.getValue()
    );
    window.block = block;

    block.addEventListener("PlanReady", (e) => {
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
function App() {
  let [activeSteps, setActiveSteps] = React.useState(null);
  let [isRunning, setIsRunning] = React.useState(false);
  // let [runVisible, setRunVisible] = React.useState(true);
  let [activeFile, setActiveFile] = React.useState(0);
  console.log("Rendering with", activeSteps, isRunning, activeFile);
  React.useEffect(() => {
    console.log("REACT EFFECT REGISTERED");
    document.addEventListener("DebuggerRunStarted", (e) => {
      setIsRunning(true);
      // setActiveSteps(null);
    });
    document.addEventListener("DebuggerRunError", (e) => {
      setIsRunning(false);
      setActiveSteps(null);
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
    // window.editor?.mode = EXAMPLES[activeFile]?.mode || "htmlmixed";
    window.editor?.setValue(fileObject.content);
    if (fileObject.defaultDataset) {
      window.datasetEditor?.setValue(JSON.stringify(fileObject.defaultDataset));
    } else {
      // TODO: remember edits to restore
      window.datasetEditor?.setValue("");
    }
  }, [activeFile]);

  return (
    <>
      <Provider theme={defaultTheme} colorScheme="light">
        <Grid
          areas={["sidebar content results", "footer  footer footer"]}
          columns={["auto", "1fr", "minmax(300px, 30vw)"]}
          rows={["1fr", "auto"]}
          height="calc(100vh - 60px)"
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
            UNSAFE_style={{ paddingInlineStart: 5, overflow: "auto" }}
          >
            <Flex flex="1" justifyContent="end">
              <Button
                variant="cta"
                onPress={async () => {
                  runActiveBlock();
                }}
              >
                Run
              </Button>
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
            Status area
          </View>
        </Grid>
      </Provider>
    </>
  );
}

function clientapp() {
  ReactDOM.render(<App></App>, document.querySelector("#container"));
  window.editor = new CodeMirror(document.querySelector("#blockEditor"), {
    lineNumbers: true,
    mode: EXAMPLES[Object.keys(EXAMPLES)[0]].mode,
  });
  window.editor.on("change", async () => {
    EXAMPLES[window.activeFile].content = window.editor.getValue();
  });

  window.datasetEditor = CodeMirror(document.querySelector("#datasetEditor"), {
    mode: "javascript",
    value: `{
  "dataset": {

  }
}`,
  });
}

if (ExecutionEnvironment.canUseDOM) {
  window.onload = clientapp;
}
