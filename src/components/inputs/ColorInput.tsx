import React from "react";
import styled from "styled-components";

import RgbInput from "./RgbInput";
import HexInput from "./HexInput";

import Color from "types/Color";
import ColorPreview from "components/ColorPreview";

const StyledColorInput = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0.5em;
  padding: 0.25em;
  width: min-content;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 0.5em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }
`;

const StyledColorPreview = styled(ColorPreview)`
  margin: 0.25em;
  height: 1.875em;
  border-radius: 0.25em;
`;

type ColorInputProps = {
  value: Color;
  onChange: (color: Color) => void;
};

const ColorInput: React.FC<ColorInputProps> = (props) => (
  <StyledColorInput>
    <Row>
      <StyledColorPreview color={props.value} />
    </Row>
    <Row>
      <RgbInput {...props} />
    </Row>
    <Row>
      <HexInput {...props} />
    </Row>
  </StyledColorInput>
);

export default ColorInput;
