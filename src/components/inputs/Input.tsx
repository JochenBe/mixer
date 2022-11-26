import styled from "styled-components";

type InputProps = {
  invalid?: boolean | undefined;
};

const Input = styled.input<InputProps>`
  border: solid 1px ${({ invalid }) => (invalid ? "red" : "black")};
`;

export default Input;
