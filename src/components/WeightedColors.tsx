import React from "react";
import styled from "styled-components";

import ColorInput from "./inputs/WeightedColorInput";

import Color from "types/Color";
import Weighted from "types/Weighted";

const StyledColors = styled.div`
  padding: 0.5em;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;

type WeightedColorsProps = {
  value: Weighted<Color>[];
  onChange: (colors: Weighted<Color>[]) => void;
};

const WeightedColors: React.FC<WeightedColorsProps> = ({
  value,
  onChange,
  ...props
}) => (
  <StyledColors {...props}>
    {value.map((color, index) => (
      <ColorInput
        key={index}
        value={color}
        onChange={(color) => {
          const newValue = [...value];
          newValue[index] = color;
          onChange(newValue);
        }}
      />
    ))}
  </StyledColors>
);

export default WeightedColors;
