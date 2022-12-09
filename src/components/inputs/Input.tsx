import styled from "styled-components";

type InputProps = {
  $invalid?: boolean | undefined;
};

const Input = styled.input<InputProps>`
  margin: 0.25em;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  border: solid 0.125em
    ${({ $invalid, theme }) =>
      $invalid ? theme.red : theme.foregroundTertiary};
  background-color: ${({ theme }) => theme.backgroundTertiary};

  font-size: 1em;
  color: ${({ theme }) => theme.foreground};

  transition: border-color 0.125s ease;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    border-color: ${({ $invalid, theme }) =>
      $invalid ? theme.red : theme.foregroundSecondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.foregroundSecondary};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export default Input;
