import styled from "styled-components";

type ButtonProps = {
  $secondary?: boolean | undefined;
};

const Button = styled.button<ButtonProps>`
  margin: 0.25em;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;
  border: solid 0.125em
    ${({ $secondary, theme }) =>
      $secondary ? "transparent" : theme.foregroundTertiary};
  background-color: ${({ $secondary, theme }) =>
    $secondary ? "transparent" : theme.backgroundTertiary};

  font-size: 1em;
  color: ${({ theme }) => theme.foreground};
  text-decoration: ${({ $secondary }) => ($secondary ? "underline" : "none")};

  transition: 0.125s ease;
  transition-property: background-color, border-color;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.foregroundTertiary};
  }

  &:focus {
    outline: none;
  }

  &:active {
    border-color: ${({ theme }) => theme.foregroundSecondary};
    background-color: ${({ theme }) => theme.foregroundSecondary};
  }
`;

export default Button;
