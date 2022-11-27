import styled from "styled-components";

const Button = styled.button`
  margin: 0.25em;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;
  border: solid 0.125em ${({ theme }) => theme.foregroundTertiary};
  background-color: ${({ theme }) => theme.backgroundTertiary};

  font-size: 1em;
  color: ${({ theme }) => theme.foreground};

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
