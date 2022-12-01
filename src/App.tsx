import React, { useState } from "react";
import styled from "styled-components";

import GitHubLink from "components/GitHubLink";
import ColorPreview from "components/ColorPreview";
import WeightedColors from "components/WeightedColors";

import Color, { isDark, calculateWeightedColor } from "types/Color";
import Weighted from "types/Weighted";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  const [colors, setColors] = useState<Weighted<Color>[]>([
    { red: 0, green: 0, blue: 0, weight: 1 },
  ]);

  const weightedColor = calculateWeightedColor(colors);

  return (
    <StyledApp>
      <GitHubLink isDark={isDark(weightedColor)} />
      <ColorPreview color={weightedColor} />
      <WeightedColors value={colors} onChange={setColors} />
    </StyledApp>
  );
};

export default App;
