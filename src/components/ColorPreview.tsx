import React from "react";
import styled from "styled-components";

import Color, { isDark, colorToRgb, colorToHex } from "types/Color";
import Settings, { settingsToBackgroundColor } from "types/Settings";

const StyledColorPreview = styled.div`
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

type ModeProps = {
  $isDark?: boolean | undefined;
};

const Mode = styled.div<ModeProps>`
  text-align: center;
  font-size: 3em;
  font-family: ${({ theme }) => theme.fontMonospace};
  color: ${({ $isDark, theme }) => ($isDark ? theme.dark : theme.light)};

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

const RectangleMode = styled(Mode)`
  padding: 1em;
  width: 22ch;
  border-radius: 0.5em;
`;

type ColorPreviewProps = {
  color: Color;
  settings: Settings;
};

const ColorPreview: React.FC<React.PropsWithChildren<ColorPreviewProps>> = ({
  color,
  settings,
  children,
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
      preview = <Mode $isDark={!isDark(color)}>{colorCodes}</Mode>;
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
      {children}
    </StyledColorPreview>
  );
};

export default ColorPreview;
