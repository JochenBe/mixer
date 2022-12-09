import React from "react";
import styled from "styled-components";

import Color, { isDark, colorToRgb, colorToHex } from "types/Color";
import Settings, { settingsToBackgroundColor } from "types/Settings";

type ColorProps = {
  $color: Color;
};

const StyledColorPreview = styled.div<ColorProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  background-color: ${({ $color }) => colorToRgb($color)};

  font-size: 3em;
  font-family: ${({ theme }) => theme.fontMonospace};

  @media only screen and (max-width: 56rem) {
    font-size: 2.5em;
  }

  @media only screen and (max-width: 40rem) {
    font-size: 2em;
  }

  @media only screen and (max-width: 28rem) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 20rem) {
    font-size: 1em;
  }
`;

type ModeProps = {
  $isDark?: boolean | undefined;
};

const Mode = styled.div<ModeProps>`
  text-align: center;
  color: ${({ $isDark, theme }) => ($isDark ? theme.dark : theme.light)};
`;

const RectangleMode = styled(Mode)<ColorProps>`
  padding: 1em;
  border-radius: 0.5em;
  background-color: ${({ $color }) => colorToRgb($color)};
`;

const TextMode = styled(Mode)<ColorProps>`
  color: ${({ $color }) => colorToRgb($color)};
`;

type ColorPreviewProps = {
  color: Color;
  settings: Settings;
};

const ColorPreview: React.FC<ColorPreviewProps> = ({
  color,
  settings,
  ...props
}) => {
  const colorCodes = (
    <>
      <p>{colorToHex(color)}</p>
      <p>{colorToRgb(color)}</p>
    </>
  );

  let preview: JSX.Element = <></>;
  switch (settings.previewMode) {
    case "color":
      preview = (
        <Mode $isDark={!isDark(settings.backgroundColor)}>{colorCodes}</Mode>
      );
      break;
    case "rectangle":
      preview = (
        <RectangleMode $color={color} $isDark={!isDark(color)}>
          {colorCodes}
        </RectangleMode>
      );
      break;
    case "text":
      preview = <TextMode $color={color}>{colorCodes}</TextMode>;
      break;
  }

  return (
    <StyledColorPreview
      $color={settingsToBackgroundColor(settings, color)}
      {...props}
    >
      {preview}
    </StyledColorPreview>
  );
};

export default ColorPreview;
