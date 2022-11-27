import React from "react";
import styled from "styled-components";

import Color, { colorToRgb } from "types/Color";

type ColorPreviewProps = {
  $color: Color;
};

const ColorPreview: React.FC<
  React.PropsWithChildren<ColorPreviewProps>
> = styled.div<ColorPreviewProps>`
  flex: 1;

  background-color: ${({ $color }) => colorToRgb($color)};
`;

export default ColorPreview;
