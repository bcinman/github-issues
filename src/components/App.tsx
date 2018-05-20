import * as React from "react";
import styled from "react-emotion";
import { observer } from "mobx-react";

import Sidebar from "./Sidebar";
import IssueDetails from "./IssueDetails";
import { IssueStore } from "../stores/IssueStore";
import { UIStore } from "../stores/UIStore";

const Wrapper = styled("div")`
  height: 100vh;
  display: flex;
`;

type Props = {
  issueStore: IssueStore;
  uiStore: UIStore;
};

export default observer((props: Props) => {
  const { issueStore, uiStore } = props;
  return (
    <Wrapper>
      <Sidebar issueStore={issueStore} uiStore={uiStore} />
      <IssueDetails issue={uiStore.issueActive} />
    </Wrapper>
  );
});
