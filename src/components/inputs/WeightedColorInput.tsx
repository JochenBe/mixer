import React from "react";
import styled from "styled-components";

import AdvancedColorInput from "./AdvancedColorInput";
import WeightInput from "./WeightInput";

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
  font-family: ${({ theme }) => theme.fontMonospace};
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
    <AdvancedColorInput
      value={value}
      onChange={(color) => {
        onChange({ ...value, ...color });
      }}
    />
    <WeightInput
      value={value.weight}
      onChange={(weight) => {
        onChange({ ...value, weight });
      }}
    />
  </StyledWeightedColorInput>
);

export default WeightedColorInput;
