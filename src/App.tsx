import React, { useState } from "react";
import styled from "styled-components";

import ColorPreview from "components/ColorPreview";
import Colors from "components/Colors";

import Color from "types/Color";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([
    { red: 0, green: 0, blue: 0 },
  ]);

  return (
    <StyledApp>
      <ColorPreview $color={colors[0]} />
      <Colors value={colors} onChange={setColors} />
    </StyledApp>
  );
};

export default App;
