import React from "react";
import styled from "styled-components";

import Color, { colorToHex, hexToColor } from "types/Color";

const StyledColorInput = styled.input`
  margin: 0.25em;
  height: 1.875em;
  border: none;
  border-radius: 0.5em;
  background-color: transparent;

  font-size: 1em;

  overflow: hidden;

  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch,
  &::-moz-color-swatch {
    border: none;
  }
`;

type ColorInputProps = {
  value: Color;
  onChange: (color: Color) => void;
};

const ColorInput: React.FC<ColorInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <StyledColorInput
    type="color"
    value={colorToHex(value)}
    onChange={(event) => {
      onChange(hexToColor(event.target.value)!);
    }}
    {...props}
  />
);

export default ColorInput;
