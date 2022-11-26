import React from "react";
import styled from "styled-components";

import Color, { colorToRgb } from "types/Color";

type ColorPreviewProps = {
  color: Color;
};

const ColorPreview: React.FC<
  React.PropsWithChildren<ColorPreviewProps>
> = styled.div<ColorPreviewProps>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ color }) => colorToRgb(color)};
`;

export default ColorPreview;
