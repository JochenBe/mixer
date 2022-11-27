import React from "react";
import styled from "styled-components";

import Color, { isDark, colorToRgb, colorToHex } from "types/Color";

type StyledColorPreviewProps = {
  $color: Color;
};

const StyledColorPreview = styled.div<StyledColorPreviewProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $color }) => colorToRgb($color)};
`;

type ValuesProps = {
  $dark: boolean;
};

const Values = styled.div<ValuesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5em;

  color: ${({ $dark, theme }) => ($dark ? theme.dark : theme.light)};
  font-size: 4em;
  font-family: ${({ theme }) => theme.fontMonospace};
`;

type ColorPreviewProps = {
  color: Color;
  showValues?: boolean | undefined;
};

const ColorPreview: React.FC<ColorPreviewProps> = ({ color, showValues }) => (
  <StyledColorPreview $color={color}>
    {showValues ? (
      <Values $dark={!isDark(color)}>
        <p>{colorToHex(color)}</p>
        <p>{colorToRgb(color)}</p>
      </Values>
    ) : null}
  </StyledColorPreview>
);

export default ColorPreview;
