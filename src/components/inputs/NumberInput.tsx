import React, { useState, useRef, useEffect } from "react";

import Input from "./Input";

type NumberInputProps = {
  min?: number | undefined;
  max?: number | undefined;
  shiftStep?: number | undefined;
  placeholder?: string | undefined;
  default?: number | undefined;
  value: number;
  onChange: (number: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  min,
  max,
  shiftStep,
  placeholder: p,
  default: d,
  value: v,
  onChange: oc,
  ...props
}) => {
  const [invalid, setInvalid] = useState<boolean>(false);
  const [value, setValue] = useState<string>(v.toString());
  const previousV = useRef<number>(v);

  useEffect(() => {
    if (v === previousV.current) return;
    previousV.current = v;

    if (v === d && value === "") return;

    setInvalid(isNaN(v));
    setValue(v.toString());
  }, [v, d, value]);

  const set = (value: number) => {
    if (min !== undefined) value = Math.max(value, min);
    if (max !== undefined) value = Math.min(value, max);

    setInvalid(false);
    setValue(value.toString());
    oc(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === "") {
      setInvalid(true);
      setValue(value);
      oc(d ?? NaN);
      return;
    }

    const newV = parseInt(value, 10);

    if (isNaN(newV)) {
      setInvalid(true);
      return;
    }

    set(newV);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !shiftStep ||
      !event.shiftKey ||
      (event.key !== "ArrowUp" && event.key !== "ArrowDown")
    )
      return;

    event.preventDefault();

    let newV = invalid ? 0 : parseInt(value, 10);
    switch (event.key) {
      case "ArrowUp":
        newV += newV === 0 ? shiftStep - 1 : shiftStep;
        break;
      case "ArrowDown":
        newV -= shiftStep;
        break;
    }

    set(newV);
  };

  return (
    <Input
      type="number"
      placeholder={p ?? d?.toString()}
      min={min}
      max={max}
      step={1}
      pattern="\d*"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      $invalid={invalid}
      {...props}
    />
  );
};

export default NumberInput;
