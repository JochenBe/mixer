import React from "react";

import NumberInput from "components/inputs/NumberInput";

import Color from "types/Color";

const min = 0;
const max = 255;
const d = min;

type RgbInputProps = {
  value: Color;
  onChange: (color: Color) => void;
};

const RgbInput: React.FC<RgbInputProps> = ({ value, onChange }) => (
  <>
    <NumberInput
      min={min}
      max={max}
      default={d}
      value={value.red}
      onChange={(red) => {
        onChange({
          ...value,
          red,
        });
      }}
    />
    <NumberInput
      min={min}
      max={max}
      default={d}
      value={value.green}
      onChange={(green) => {
        onChange({
          ...value,
          green,
        });
      }}
    />
    <NumberInput
      min={min}
      max={max}
      default={d}
      value={value.blue}
      onChange={(blue) => {
        onChange({
          ...value,
          blue,
        });
      }}
    />
  </>
);

export default RgbInput;
