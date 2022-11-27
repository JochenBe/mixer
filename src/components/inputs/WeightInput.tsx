import React, { useEffect } from "react";
import styled from "styled-components";

import Button from "components/Button";
import NumberInput from "components/inputs/NumberInput";

const StyledNumberInput = styled(NumberInput)`
  text-align: center;
`;

type WeightInputProps = {
  value: number;
  onChange: (weight: number) => void;
};

const WeightInput: React.FC<WeightInputProps> = ({ value, onChange }) => {
  useEffect(() => {
    if (value >= 0) return;

    onChange(0);
  }, [value, onChange]);

  return (
    <>
      <Button
        onClick={() => {
          onChange((value + 1) / 2 - 1);
        }}
      >
        ÷
      </Button>
      <Button
        onClick={() => {
          onChange(value - 1);
        }}
      >
        -
      </Button>
      <StyledNumberInput
        min={0}
        default={1}
        value={value}
        onChange={onChange}
      />
      <Button
        onClick={() => {
          onChange(value + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          onChange((value + 1) * 2 - 1);
        }}
      >
        ×
      </Button>
    </>
  );
};

export default WeightInput;
