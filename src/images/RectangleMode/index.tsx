import React from "react";

import Image from "../";

import rectangle_mode from "./rectangle-mode.png";
import rectangle_mode_2x from "./rectangle-mode@2x.png";
import rectangle_mode_3x from "./rectangle-mode@3x.png";

const RectangleMode: React.FC = (props) => (
  <Image
    alt="Rectangle Mode"
    width={32}
    height={32}
    srcSet={[
      [rectangle_mode, "1x"],
      [rectangle_mode_2x, "2x"],
      [rectangle_mode_3x, "3x"],
    ]}
    {...props}
  />
);

export default RectangleMode;
