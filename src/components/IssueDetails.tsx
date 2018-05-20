import * as React from "react";
import styled from "react-emotion";
import { Issue } from "../stores/IssueStore";
import StateLabel from "./StateLabel";
import Avatar from "./Avatar";

const Wrapper = styled("div")`
  display: flex;
  flex: 1;
  overflow: auto;
`;

const Main = styled("div")`
  padding: 20px 50px;
  flex: 1;
`;

const Title = styled("h1")`
  font-weight: 300;
`;

const Label = styled("span")`
  display: inline-block;
  border: 1px solid #${props => props.color};
  line-height: 22px;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 4px;
  margin: 4px 0 0 4px;
`;

type Props = {
  issue: Issue;
};

export default (props: Props) => {
  const { issue } = props;
  if (!issue) return null;
  return (
    <Wrapper>
      <Main>
        <StateLabel state={issue.state}>{issue.state}</StateLabel>
        <Title>{issue.title}</Title>
        <p>
          #244 opened {issue.createdTimeAgo} ago by{" "}
          <Avatar src={issue.user.avatar_url} />
          {issue.user.login}
        </p>

        <p>
          <strong>Labels:</strong>{" "}
          {issue.labels.map(label => (
            <Label color={label.color}>{label.name}</Label>
          ))}
        </p>

        <div dangerouslySetInnerHTML={{ __html: issue.bodyFormatted }} />
      </Main>
    </Wrapper>
  );
};
