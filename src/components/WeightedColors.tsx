import React from "react";
import styled from "styled-components";

import ColorInput from "./inputs/WeightedColorInput";

import Color from "types/Color";
import Weighted from "types/Weighted";

const StyledColors = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.5em;
  padding-right: 1em;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};

  overflow-x: auto;
`;

const AddButton = styled.button`
  margin: 0.25em;
  padding: 0.125em 4em;
  border: none;
  border-radius: 0.5em;
  background-color: ${({ theme }) => theme.backgroundSecondary};

  font-size: 2em;
  font-weight: 300;
  color: ${({ theme }) => theme.foregroundSecondary};

  transition: color 0.125s ease;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.foreground};
  }
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
        onRemove={
          value.length > 1
            ? () => {
                const newValue = [...value];
                newValue.splice(index, 1);
                onChange(newValue);
              }
            : undefined
        }
      />
    ))}
    <AddButton
      onClick={() => {
        onChange([...value, { red: 0, green: 0, blue: 0, weight: 1 }]);
      }}
    >
      +
    </AddButton>
  </StyledColors>
);

export default WeightedColors;
