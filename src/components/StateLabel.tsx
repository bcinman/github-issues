import * as React from "react";
import styled from "react-emotion";

type Props = {
  state: string;
};

export default styled<Props, "span">("span")`
  display: inline-block;
  line-height: 22px;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0 5px;
  border-radius: 4px;
  background-color: ${props => (props.state === "open" ? "green" : "red")};
`;
