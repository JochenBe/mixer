import React, { useEffect } from "react";
import styled from "styled-components";

import Button from "components/Button";

import Input from "./Input";
import NumberInput from "./NumberInput";

const StyledWeightInput = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;

    font-family: ${({ theme }) => theme.fontMonospace};
  }

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

const StyledNumberInput = styled(NumberInput)`
  width: 6ch;

  text-align: center;
`;

type WeightInputProps = {
  value: number;
  onChange: (weight: number) => void;
};

const WeightInput: React.FC<WeightInputProps> = ({ value, onChange }) => {
  useEffect(() => {
    if (value >= 0 && value <= 255 && value % 1 === 0) return;

    onChange(Math.round(Math.min(Math.max(0, value), 255)));
  }, [value, onChange]);

  return (
    <StyledWeightInput>
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
        max={255}
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
    </StyledWeightInput>
  );
};

export default WeightInput;
