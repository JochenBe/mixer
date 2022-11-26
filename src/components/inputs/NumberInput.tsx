import React, { useState, useRef, useEffect } from "react";

import Input from "./Input";

type NumberInputProps = {
  min?: number | undefined;
  max?: number | undefined;
  placeholder?: string | undefined;
  default?: number | undefined;
  value: number;
  onChange: (number: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  min,
  max,
  placeholder: p,
  default: d,
  value: v,
  onChange: oc,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === "") {
      setInvalid(true);
      setValue(value);
      oc(d ?? NaN);
      return;
    }

    let newV = parseInt(value);

    if (isNaN(newV)) {
      setInvalid(true);
      return;
    }

    if (min !== undefined) newV = Math.max(newV, min);
    if (max !== undefined) newV = Math.min(newV, max);

    setInvalid(false);
    setValue(newV.toString());
    oc(newV);
  };

  return (
    <Input
      type="number"
      placeholder={p ?? d?.toString()}
      min={min}
      max={max}
      step={1}
      value={value}
      onChange={handleChange}
      invalid={invalid}
    />
  );
};

export default NumberInput;
