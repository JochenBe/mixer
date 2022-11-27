import React from "react";
import styled from "styled-components";

import ColorInput from "./inputs/ColorInput";

import Color from "types/Color";

const StyledColors = styled.div`
  padding: 0.5em;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;

type ColorsProps = {
  value: Color[];
  onChange: (colors: Color[]) => void;
};

const Colors: React.FC<ColorsProps> = ({ value, onChange }) => (
  <StyledColors>
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

export default Colors;
