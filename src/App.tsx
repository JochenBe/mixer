import React, { useState } from "react";

import RgbInput from "components/inputs/RgbInput";
import ColorPreview from "components/ColorPreview";

import Color from "types/Color";

const App: React.FC = () => {
  const [color, setColor] = useState<Color>({ red: 0, green: 0, blue: 0 });

  return (
    <ColorPreview color={color}>
      <RgbInput value={color} onChange={setColor} />
    </ColorPreview>
  );
};

export default App;
