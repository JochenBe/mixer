import React from "react";

import Image from "../";

import github_light from "./github-light.png";
import github_light_2x from "./github-light@2x.png";
import github_light_3x from "./github-light@3x.png";
import github_dark from "./github-dark.png";
import github_dark_2x from "./github-dark@2x.png";
import github_dark_3x from "./github-dark@3x.png";

type GitHubProps = {
  isDark?: boolean | undefined;
};

const GitHub: React.FC<GitHubProps> = ({ isDark, ...props }) => (
  <Image
    alt="GitHub"
    width={32}
    height={32}
    srcSet={
      isDark
        ? [
            [github_dark, "1x"],
            [github_dark_2x, "2x"],
            [github_dark_3x, "3x"],
          ]
        : [
            [github_light, "1x"],
            [github_light_2x, "2x"],
            [github_light_3x, "3x"],
          ]
    }
    {...props}
  />
);

export default GitHub;
