import React from "react";
import styled from "styled-components";

import ColorPreview from "components/ColorPreview";
import RgbInput from "./RgbInput";
import HexInput from "./HexInput";
import WeightInput from "./WeightInput";
import Button from "components/Button";
import Input from "./Input";

import Color from "types/Color";
import Weighted from "types/Weighted";

const StyledColorInput = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0.5em;
  padding: 0.25em;
  width: min-content;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 0.5em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }
`;

const StyledColorPreview = styled(ColorPreview)`
  margin: 0.25em;
  height: 1.875em;
  border-radius: 0.25em;
`;

const WeightRow = styled(Row)`
  & > ${Button}:not(:first-child),
  & > ${Input}:not(:first-child) {
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > ${Button}:not(:last-child),
  & > ${Input}:not(:last-child) {
    margin-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;right
  }

  & > ${Button}:not(:first-child) {
    border-left: none;
  }

  & > ${Button}:not(:last-child) {
    border-right: none;
  }
`;

type WeightedColorInputProps = {
  value: Weighted<Color>;
  onChange: (color: Weighted<Color>) => void;
};

const WeightedColorInput: React.FC<WeightedColorInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <StyledColorInput {...props}>
    <Row>
      <StyledColorPreview $color={value} />
    </Row>
    <Row>
      <RgbInput
        value={value}
        onChange={(color) => {
          onChange({ ...value, ...color });
        }}
      />
    </Row>
    <Row>
      <HexInput
        value={value}
        onChange={(color) => {
          onChange({ ...value, ...color });
        }}
      />
    </Row>
    <WeightRow>
      <WeightInput
        value={value.weight}
        onChange={(weight) => {
          onChange({ ...value, weight });
        }}
      />
    </WeightRow>
  </StyledColorInput>
);

export default WeightedColorInput;
