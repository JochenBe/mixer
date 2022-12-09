import React from "react";
import styled from "styled-components";

import NumberInput from "./NumberInput";

import Color from "types/Color";

const min: number = 0;
const max: number = 255;
const shiftStep: number = 16;
const d: number = min;

const StyledNumberInput = styled(NumberInput)`
  width: 6ch;

  font-family: ${({ theme }) => theme.fontMonospace};
`;

type RgbInputProps = {
  value: Color;
  onChange: (color: Color) => void;
  disabled?: boolean | undefined;
};

const RgbInput: React.FC<RgbInputProps> = ({ value, onChange, disabled }) => (
  <>
    <StyledNumberInput
      min={min}
      max={max}
      shiftStep={shiftStep}
      default={d}
      value={value.red}
      onChange={(red) => {
        onChange({
          ...value,
          red,
        });
      }}
      disabled={disabled}
    />
    <StyledNumberInput
      min={min}
      max={max}
      shiftStep={shiftStep}
      default={d}
      value={value.green}
      onChange={(green) => {
        onChange({
          ...value,
          green,
        });
      }}
      disabled={disabled}
    />
    <StyledNumberInput
      min={min}
      max={max}
      shiftStep={shiftStep}
      default={d}
      value={value.blue}
      onChange={(blue) => {
        onChange({
          ...value,
          blue,
        });
      }}
      disabled={disabled}
    />
  </>
);

export default RgbInput;
