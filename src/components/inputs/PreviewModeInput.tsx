import React from "react";
import styled from "styled-components";

import ColorMode from "images/ColorMode";
import RectangleMode from "images/RectangleMode";
import TextMode from "images/TextMode";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

type ButtonProps = {
  $selected?: boolean | undefined;
};

const Button = styled.button<ButtonProps>`
  box-sizing: content-box;

  margin: 0 1em;
  width: 32px;
  height: 32px;
  border-radius: 1em;
  border: solid 0.25em;
  border-color: ${({ $selected, theme }) =>
    $selected ? theme.shadowLight : "transparent"};
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.shadowLight : "transparent"};

  cursor: pointer;

  transition: 0.125s ease;
  transition-property: background-color, box-shadow;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.shadowLight};
    background-color: ${({ theme }) => theme.shadowLight};
  }
`;

export type PreviewMode = "color" | "rectangle" | "text";

type PreviewModeInputProps = {
  value: PreviewMode;
  onChange: (previewMode: PreviewMode) => void;
};

const PreviewModeInput: React.FC<PreviewModeInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <Row {...props}>
    <Button
      $selected={value === "color"}
      onClick={() => {
        onChange("color");
      }}
    >
      <ColorMode />
    </Button>
    <Button
      $selected={value === "rectangle"}
      onClick={() => {
        onChange("rectangle");
      }}
    >
      <RectangleMode />
    </Button>
    <Button
      $selected={value === "text"}
      onClick={() => {
        onChange("text");
      }}
    >
      <TextMode />
    </Button>
  </Row>
);

export default PreviewModeInput;
