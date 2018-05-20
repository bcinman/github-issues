import * as React from "react";
import styled from "react-emotion";
import { observer } from "mobx-react";

import { IssueStore, Issue } from "../stores/IssueStore";
import IssueListItem from "./IssueListItem";
import { UIStore } from "../stores/UiStore";
import Spinner from "./Spinner";

const Wrapper = styled("div")`
  background: #fafbfc;
  width: 340px;
  display: flex;
  flex-direction: column;
`;

const RepoName = styled("h2")`
  border-radius: 18px;
  padding: 20px;
  display: flex;
  align-items: center;
  font-weight: 200;
  border-bottom: 1px solid #f2f4f7;
  margin: 0;
`;

const IssueList = styled("div")`
  flex: 1;
  overflow: auto;
`;

const Footer = styled("div")`
  padding: 20px;
`;

const MoreButton = styled("a")`
  background: blue;
  display: inline-block;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

type Props = {
  issueStore: IssueStore;
  uiStore: UIStore;
};

@observer
export default class Sidebar extends React.Component<Props> {
  listEl: HTMLDivElement;

  render() {
    const { issueStore, uiStore } = this.props;
    return (
      <Wrapper>
        <RepoName>Microsoft / TypeScript</RepoName>
        <IssueList innerRef={el => (this.listEl = el)}>
          {issueStore.issues.map((issue: Issue) => (
            <IssueListItem
              key={issue.id}
              issue={issue}
              uiStore={uiStore}
              selected={uiStore.issueActive === issue}
            />
          ))}
          <Footer>
            {issueStore.isLoading ? (
              <Spinner />
            ) : (
              <MoreButton onClick={issueStore.loadMore}>Load More</MoreButton>
            )}
          </Footer>
        </IssueList>
      </Wrapper>
    );
  }
}
