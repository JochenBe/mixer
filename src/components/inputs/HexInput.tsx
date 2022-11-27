import React, { useState, useRef, useEffect } from "react";

import Input from "./Input";

import Color, { equals, colorToHex, hexToColor } from "types/Color";

const d: Color = {
  red: 0,
  green: 0,
  blue: 0,
};

type HexInputProps = {
  value: Color;
  onChange: (color: Color) => void;
};

const HexInput: React.FC<HexInputProps> = ({ value: v, onChange: oc }) => {
  const [invalid, setInvalid] = useState<boolean>(false);
  const [value, setValue] = useState<string>(colorToHex(v));
  const previousV = useRef<Color>(v);

  useEffect(() => {
    if (equals(v, previousV.current)) return;
    previousV.current = v;

    if (v === d && value === "") return;

    const color = hexToColor(value);
    if (color && equals(v, color)) return;

    setInvalid(false);
    setValue(colorToHex(v));
  }, [v, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();

    if (!/^(#[0-9A-F]{0,6})?$/g.test(value)) return;

    setValue(value);

    if (value === "") {
      setInvalid(true);
      oc(d);
      return;
    }

    let newV = hexToColor(value);

    if (!newV) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    oc(newV);
  };

  return (
    <Input
      type="text"
      placeholder="#000000"
      minLength={4}
      maxLength={7}
      pattern="#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?"
      value={value}
      onChange={handleChange}
      $invalid={invalid}
    />
  );
};

export default HexInput;
