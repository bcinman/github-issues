import * as React from "react";
import { render } from "react-dom";
import styled from "react-emotion";

import "./reset";
import App from "./components/App";
import { IssueStore } from "./stores/IssueStore";
import { UIStore } from "./stores/UIStore";
import GithubClient from "./githubClient";

const githubClient = new GithubClient();
const issueStore = new IssueStore(githubClient, "Microsoft", "TypeScript");
const uiStore = new UIStore();

issueStore.loadIssues();

render(
  <App issueStore={issueStore} uiStore={uiStore} />,
  document.getElementById("app")
);
