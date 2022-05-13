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
  Text,
} from "@adobe/react-spectrum";
import Draw from "@spectrum-icons/workflow/Draw";
import Copy from "@spectrum-icons/workflow/Copy";
import Delete from "@spectrum-icons/workflow/Delete";

import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default function Hello() {
  return (
    <>
      <Layout title="Hello" description="Hello React Page">
        <div
          id="container"
          style={{
            height: "calc(100vh - 60px)",
            width: "100%",
            position: "absolute",
            top: "60px",

            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        ></div>
      </Layout>
    </>
  );
}

function Example() {
  let [action, setAction] = React.useState();

  return (
    <>
      <ActionGroup onAction={setAction}>
        <Item key="edit">
          <Draw />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionGroup>
      <p>Action: {action}</p>
    </>
  );
}

function clientapp() {
  ReactDOM.render(
    <>
      <Provider theme={defaultTheme} colorScheme="light">
        <Grid
          areas={["header  header", "sidebar content", "footer  footer"]}
          columns={["100px", "1fr"]}
          rows={["auto", "1fr", "auto"]}
          height="auto"
        >
          <View backgroundColor="celery-600" gridArea="header">
            <Example></Example>
          </View>
          <View backgroundColor="blue-600" gridArea="sidebar">
            File list
          </View>
          <View backgroundColor="purple-600" gridArea="content">
            <textarea id="myTextarea">Test</textarea>
          </View>
          <View backgroundColor="magenta-600" gridArea="footer">
            <Button variant="cta" onPress={() => alert("Hey there!")}>
              Hello React from client!
            </Button>
          </View>
        </Grid>
      </Provider>
    </>,
    document.querySelector("#container")
  );

  // var editor = CodeMirror.fromTextArea(document.querySelector("#myTextarea"), {
  //   lineNumbers: true,
  // });
}
if (ExecutionEnvironment.canUseDOM) {
  window.onload = clientapp;
}
