import React from "react";
import styled from "styled-components";

import Color, { isDark, colorToRgb, colorToHex } from "types/Color";
import Settings, { settingsToBackgroundColor } from "types/Settings";

const StyledColorPreview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

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

const RectangleMode = styled(Mode)`
  padding: 1em;
  border-radius: 0.5em;
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
        <RectangleMode
          $isDark={!isDark(color)}
          style={{ backgroundColor: colorToRgb(color) }}
        >
          {colorCodes}
        </RectangleMode>
      );
      break;
    case "text":
      preview = <Mode style={{ color: colorToRgb(color) }}>{colorCodes}</Mode>;
      break;
  }

  return (
    <StyledColorPreview
      style={{
        backgroundColor: colorToRgb(settingsToBackgroundColor(settings, color)),
      }}
      {...props}
    >
      {preview}
    </StyledColorPreview>
  );
};

export default ColorPreview;
