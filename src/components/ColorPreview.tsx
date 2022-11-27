import React from "react";
import styled from "styled-components";

import Color, { colorToRgb, colorToHex } from "types/Color";

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

const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5em;

  color: white;
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
      <Values>
        <p>{colorToHex(color)}</p>
        <p>{colorToRgb(color)}</p>
      </Values>
    ) : null}
  </StyledColorPreview>
);

export default ColorPreview;
