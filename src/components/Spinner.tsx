import * as React from "react";
import styled, { keyframes } from "react-emotion";

const spinAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(350deg);
  }
`;

const Wrapper = styled("div")`
  width: 20px;
  height: 20px;
  border: 1px solid transparent;
  border-top-color: #000;
  border-radius: 25px;
  animation: ${spinAnim} 500ms linear infinite;
`;

export default () => <Wrapper />;
