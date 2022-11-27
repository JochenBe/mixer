import React, { useState } from "react";
import styled from "styled-components";

import ColorPreview from "components/ColorPreview";
import WeightedColors from "components/WeightedColors";

import Color, { calculateWeightedColor } from "types/Color";
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

  return (
    <StyledApp>
      <ColorPreview $color={calculateWeightedColor(colors)} />
      <WeightedColors value={colors} onChange={setColors} />
    </StyledApp>
  );
};

export default App;
