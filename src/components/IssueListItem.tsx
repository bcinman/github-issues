import * as React from "react";
import { css } from "emotion";
import styled from "react-emotion";

import { Issue } from "../stores/IssueStore";
import { UIStore } from "../stores/UiStore";
import StateLabel from "./StateLabel";

type WrapperProps = { selected?: boolean };

const selectedStyle = (props: WrapperProps) => {
  if (props.selected) {
    return css`
      background-color: #f2f4f7;
    `;
  }
};

const Wrapper = styled<WrapperProps, "a">("a")`
  color: #000;
  display: block;
  padding: 20px;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f2f4f7;
  }
  ${selectedStyle};
`;

const Meta = styled("p")`
  font-size: 13px;
  font-weight: 300;
  color: #979797;
  margin: 0;
`;

type Props = {
  issue: Issue;
  uiStore: UIStore;
  selected?: boolean;
};

export default class IssueListItem extends React.Component<Props> {
  handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.uiStore.setActiveIssue(this.props.issue);
  };

  render() {
    const { issue, selected } = this.props;
    return (
      <Wrapper selected={selected} onClick={this.handleClick}>
        <StateLabel state={issue.state}>{issue.state}</StateLabel>
        <h5>{issue.title}</h5>
        <Meta>
          #234 opened {issue.createdTimeAgo} ago by {issue.user.login}
        </Meta>
      </Wrapper>
    );
  }
}
