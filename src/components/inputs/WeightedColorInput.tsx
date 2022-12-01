import React from "react";
import styled from "styled-components";

import ColorInput from "./ColorInput";
import RgbInput from "./RgbInput";
import HexInput from "./HexInput";
import WeightInput from "./WeightInput";
import Button from "components/Button";
import Input from "./Input";

import Color from "types/Color";
import Weighted from "types/Weighted";

const RemoveButton = styled.button`
  position: absolute;
  top: -0.25em;
  right: -0.25em;

  width: 1.25em;
  height: 1.25em;
  border: none;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.foreground};

  font-size: 1em;
  color: ${({ theme }) => theme.background};

  cursor: pointer;

  opacity: 0;

  transition: opacity 0.125s ease;
`;

const StyledWeightedColorInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0.25em;
  width: min-content;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.backgroundSecondary};

  &:hover ${RemoveButton} {
    opacity: 1;
  }

  @media (hover: none) {
    & ${RemoveButton} {
      opacity: 1;
    }
  }

  & ${Input}, & button {
    font-family: ${({ theme }) => theme.fontMonospace};
  }

  & input[type="number"] {
    width: 6ch;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }
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
  onRemove?: (() => void) | undefined;
};

const WeightedColorInput: React.FC<WeightedColorInputProps> = ({
  value,
  onChange,
  onRemove,
  ...props
}) => (
  <StyledWeightedColorInput {...props}>
    {onRemove ? <RemoveButton onClick={onRemove}>×</RemoveButton> : null}
    <Row>
      <ColorInput
        value={value}
        onChange={(color) => {
          onChange({ ...value, ...color });
        }}
      />
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
  </StyledWeightedColorInput>
);

export default WeightedColorInput;
