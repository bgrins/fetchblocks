import React from "react";
import * as ReactDOM from "react-dom";
import Layout from "@theme/Layout";
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
  Text,
  Flex,
} from "@adobe/react-spectrum";
import Draw from "@spectrum-icons/workflow/Draw";
import RailRightClose from "@spectrum-icons/workflow/RailRightClose";
import RailRightOpen from "@spectrum-icons/workflow/RailRightOpen";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
// import { fetchblock } from "https://esm.sh/@bgrins/fetchblocks/web/bundle-module.js";


export default function Hello() {
  return (
    <>
      <Layout title="Hello" description="Hello React Page">
        <div
          id="container"
          style={
            {
              // height: "calc(100vh - 60px)",
              // width: "100%",
              // position: "absolute",
              // top: "60px",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        ></div>
      </Layout>
    </>
  );
}

function RunResults() {
  // TODO: plumb this in to an actual fetchblock
  let [activeFile, setActiveFile] = React.useState();
  return (
    <>
      <details>
        <summary>Step 1 which has a really long title let's go</summary>
        <div>Hi</div>
      </details>
      <details>
        <summary>Step 2</summary>
        <div>Hi</div>
      </details>
    </>
  );
}

const EXAMPLES = [
  { name: "Basic", content: `{ resource: "http://example.com" }` },
  { name: "Notion", content: `{ resource: "https://api.notion.com" }` },
  { name: "HTML to CSV", content: `{ resource: "http://wikipedia.com" }` },
];
function FileList(props) {
  let { activeFile, setActiveFile } = props;

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
        onSelectionChange={setActiveFile}
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

function App() {
  let [runVisible, setRunVisible] = React.useState(true);
  let [activeFile, setActiveFile] = React.useState(0);
  React.useEffect(() => {
    window.activeFile = activeFile;
    window.editor?.setValue(EXAMPLES[activeFile]?.content || "");
  });

  return (
    <>
      <Provider theme={defaultTheme} colorScheme="light">
        <Grid
          areas={[
            "header  header  header",
            "sidebar content results",
            "footer  footer footer",
          ]}
          columns={["auto", "1fr", "auto"]}
          rows={["auto", "1fr", "auto"]}
          height="calc(100vh - 60px)"
        >
          <View gridArea="header">
            <Flex flex="1">
              <Flex flex="1"></Flex>
              <View>
                <Button
                  variant="cta"
                  onPress={() => setRunVisible(!runVisible)}
                >
                  Run
                </Button>
                {runVisible ? (
                  <Button onPress={() => setRunVisible(!runVisible)}>
                    <RailRightClose />
                  </Button>
                ) : (
                  <Button onPress={() => setRunVisible(!runVisible)}>
                    <RailRightOpen />
                  </Button>
                )}
              </View>
            </Flex>
          </View>
          <View gridArea="sidebar">
            <FileList
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            ></FileList>
          </View>
          <View gridArea="content" UNSAFE_style={{ overflow: "auto" }}>
            <Editor activeFile={activeFile}></Editor>
          </View>
          <View
            gridArea="results"
            isHidden={!runVisible}
            UNSAFE_style={{ paddingInlineStart: 5, overflow: "auto" }}
          >
            <details open="open">
              <summary style={{ userSelect: "none" }}>Dataset</summary>
              <div id="datasetEditor"></div>
            </details>
            <RunResults></RunResults>
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
  });
  window.editor.on("change", () => {
    EXAMPLES[window.activeFile].content = window.editor.getValue();
  });

  window.datasetEditor = CodeMirror(document.querySelector("#datasetEditor"), {
    mode: "javascript",
    value: `{
  dataset: {

  }
}`,
  });

  // (async () => {
  //   let block = new fetchblock([
  //     {
  //       resource: "https://x-colors.herokuapp.com/api/hex2rgb?value=FFFFFF",
  //     },
  //   ]);
  //   let response = await block.run();
  //   console.log(response);
  // })();
}

if (ExecutionEnvironment.canUseDOM) {
  window.onload = clientapp;
}
