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

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
  }

  &::-moz-color-swatch {
    border: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125em ${({ theme }) => theme.foregroundSecondary};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled::-webkit-color-swatch {
    opacity: 0.5;
  }

  &:disabled::-moz-color-swatch {
    opacity: 0.5;
  }
`;

type ColorInputProps = {
  value: Color;
  onChange: (color: Color) => void;
  disabled?: boolean | undefined;
};

const ColorInput: React.FC<ColorInputProps> = ({
  value,
  onChange,
  disabled,
  ...props
}) => (
  <StyledColorInput
    type="color"
    value={colorToHex(value)}
    onChange={(event) => {
      onChange(hexToColor(event.target.value)!);
    }}
    disabled={disabled}
    {...props}
  />
);

export default ColorInput;
