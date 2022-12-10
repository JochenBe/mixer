import React from "react";
import styled from "styled-components";

import Settings from "images/Settings";

type StyledSettingsButtonProps = {
  $isDark?: boolean | undefined;
};

const StyledSettingsButton = styled.button<StyledSettingsButtonProps>`
  position: absolute;
  left: 32px;
  top: 32px;

  width: 32px;
  height: 32px;
  border: none;
  border-radius: 15px;
  background-color: transparent;

  cursor: pointer;

  transition: 0.125s ease;
  transition-property: background-color, box-shadow;

  &:focus {
    outline: none;
    background-color: ${({ theme, $isDark }) =>
      $isDark ? theme.shadowLight : theme.shadowDark};
    box-shadow: 0 0 0 0.25em
      ${({ theme, $isDark }) =>
        $isDark ? theme.shadowLight : theme.shadowDark};
  }
`;

type SettingsButtonProps = {
  isDark?: boolean | undefined;
  onClick: () => void;
};

const SettingsButton: React.FC<SettingsButtonProps> = ({
  isDark,
  ...props
}) => (
  <StyledSettingsButton $isDark={isDark} {...props}>
    <Settings isDark={isDark} />
  </StyledSettingsButton>
);

export default SettingsButton;
