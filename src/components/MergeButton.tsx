import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledMergeButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: 2em;

  transform: translateX(-50%);
`;

type MergeButtonProps = {
  onClick: () => void;
};

const MergeButton: React.FC<MergeButtonProps> = (props) => (
  <StyledMergeButton {...props}>Merge</StyledMergeButton>
);

export default MergeButton;
