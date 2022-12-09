import React from "react";

import Image from "../";

import color_mode from "./color-mode.png";
import color_mode_2x from "./color-mode@2x.png";
import color_mode_3x from "./color-mode@3x.png";

const ColorMode: React.FC = (props) => (
  <Image
    alt="Color Mode"
    width={32}
    height={32}
    srcSet={[
      [color_mode, "1x"],
      [color_mode_2x, "2x"],
      [color_mode_3x, "3x"],
    ]}
    {...props}
  />
);

export default ColorMode;
