import React, { useState } from "react";

import RgbPicker from "components/pickers/RgbPicker";
import ColorPreview from "components/ColorPreview";

import Color from "types/Color";

const App: React.FC = () => {
  const [color, setColor] = useState<Color>({ red: 0, green: 0, blue: 0 });

  return (
    <ColorPreview color={color}>
      <RgbPicker value={color} onChange={setColor} />
    </ColorPreview>
  );
};

export default App;
