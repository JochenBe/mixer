import React from "react";

import Image from "../";

import settings_light from "./settings-light.png";
import settings_light_2x from "./settings-light@2x.png";
import settings_light_3x from "./settings-light@3x.png";
import settings_dark from "./settings-dark.png";
import settings_dark_2x from "./settings-dark@2x.png";
import settings_dark_3x from "./settings-dark@3x.png";

type SettingsProps = {
  isDark?: boolean | undefined;
};

const Settings: React.FC<SettingsProps> = ({ isDark, ...props }) => (
  <Image
    alt="Settings"
    width={32}
    height={32}
    srcSet={
      isDark
        ? [
            [settings_dark, "1x"],
            [settings_dark_2x, "2x"],
            [settings_dark_3x, "3x"],
          ]
        : [
            [settings_light, "1x"],
            [settings_light_2x, "2x"],
            [settings_light_3x, "3x"],
          ]
    }
    {...props}
  />
);

export default Settings;
