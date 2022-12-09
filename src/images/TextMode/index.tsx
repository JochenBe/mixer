import React from "react";

import Image from "../";

import text_mode from "./text-mode.png";
import text_mode_2x from "./text-mode@2x.png";
import text_mode_3x from "./text-mode@3x.png";

const TextMode: React.FC = (props) => (
  <Image
    alt="Text Mode"
    width={32}
    height={32}
    srcSet={[
      [text_mode, "1x"],
      [text_mode_2x, "2x"],
      [text_mode_3x, "3x"],
    ]}
    {...props}
  />
);

export default TextMode;
