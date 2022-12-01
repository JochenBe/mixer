import React from "react";
import styled from "styled-components";

import GitHub from "images/GitHub";

type StyledGitHubLinkProps = {
  $isDark?: boolean | undefined;
};

const StyledGitHubLink = styled.a<StyledGitHubLinkProps>`
  position: absolute;
  right: 32px;
  top: 32px;

  width: 32px;
  height: 32px;
  border-radius: 16px;

  cursor: pointer;

  transition: box-shadow 0.125s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.25em
      ${({ theme, $isDark }) =>
        $isDark ? theme.shadowLight : theme.shadowDark};
  }
`;

type GitHubLinkProps = {
  isDark?: boolean | undefined;
};

const GitHubLink: React.FC<GitHubLinkProps> = ({ isDark, ...props }) => (
  <StyledGitHubLink
    target="_blank"
    rel="noreferrer"
    href="https://github.com/JochenBe/mixer"
    $isDark={isDark}
    {...props}
  >
    <GitHub isDark={isDark} />
  </StyledGitHubLink>
);

export default GitHubLink;
