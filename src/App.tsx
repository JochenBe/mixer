import React, { useState } from "react";
import styled from "styled-components";

import SettingsInput from "components/inputs/SettingsInput";
import GitHubLink from "components/GitHubLink";
import ColorPreview from "components/ColorPreview";
import WeightedColors from "components/WeightedColors";

import Settings, { settingsToBackgroundColor } from "types/Settings";
import Color, { isDark, calculateWeightedColor } from "types/Color";
import Weighted from "types/Weighted";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    previewMode: "color",
    backgroundColor: { red: 0, green: 0, blue: 0 },
  });

  const [colors, setColors] = useState<Weighted<Color>[]>([
    { red: 0, green: 0, blue: 0, weight: 1 },
  ]);

  const weightedColor = calculateWeightedColor(colors);
  const dark = isDark(settingsToBackgroundColor(settings, weightedColor));

  return (
    <StyledApp>
      <SettingsInput isDark={dark} value={settings} onChange={setSettings} />
      <GitHubLink isDark={dark} />
      <ColorPreview color={weightedColor} settings={settings} />
      <WeightedColors value={colors} onChange={setColors} />
    </StyledApp>
  );
};

export default App;
