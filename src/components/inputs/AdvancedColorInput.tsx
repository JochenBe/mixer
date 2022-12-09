import React from "react";
import styled from "styled-components";

import ColorInput from "./ColorInput";
import RgbInput from "./RgbInput";
import HexInput from "./HexInput";

import Color from "types/Color";

const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }
`;

type AdvancedColorInputProps = {
  value: Color;
  onChange: (color: Color) => void;
  disabled?: boolean | undefined;
};

const AdvancedColorInput: React.FC<AdvancedColorInputProps> = (props) => (
  <>
    <Row>
      <ColorInput {...props} />
    </Row>
    <Row>
      <RgbInput {...props} />
    </Row>
    <Row>
      <HexInput {...props} />
    </Row>
  </>
);

export default AdvancedColorInput;
