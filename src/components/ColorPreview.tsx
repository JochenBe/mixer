import React from "react";
import styled from "styled-components";

import Color, { isDark, colorToRgb, colorToHex } from "types/Color";

type StyledColorPreviewProps = {
  $color: Color;
  $dark: boolean;
};

const StyledColorPreview = styled.div<StyledColorPreviewProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  background-color: ${({ $color }) => colorToRgb($color)};

  font-size: 4em;
  font-family: ${({ theme }) => theme.fontMonospace};
  color: ${({ $dark, theme }) => ($dark ? theme.dark : theme.light)};
`;

type ColorPreviewProps = {
  color: Color;
};

const ColorPreview: React.FC<ColorPreviewProps> = ({ color, ...props }) => (
  <StyledColorPreview $color={color} $dark={!isDark(color)} {...props}>
    <p>{colorToHex(color)}</p>
    <p>{colorToRgb(color)}</p>
  </StyledColorPreview>
);

export default ColorPreview;
