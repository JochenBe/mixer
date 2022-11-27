import Weighted from "./Weighted";

type Color = {
  red: number;
  green: number;
  blue: number;
};

export const equals = (color1: Color, color2: Color) =>
  color1.red === color2.red &&
  color1.green === color2.green &&
  color1.blue === color2.blue;

export const colorToRgb = (color: Color): string =>
  `rgb(${color.red}, ${color.green}, ${color.blue})`;

const hexRadix = 16;

export const colorToHex = (color: Color): string => {
  const prepareHex = (string: string): string =>
    string.toUpperCase().padStart(2, "0");
  const red = prepareHex(color.red.toString(hexRadix));
  const green = prepareHex(color.green.toString(hexRadix));
  const blue = prepareHex(color.blue.toString(hexRadix));
  return `#${red}${green}${blue}`;
};

export const hexToColor = (hex: string): Color | undefined => {
  if (!/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/g.test(hex)) return;

  if (hex.length === 4) {
    const red = hex.slice(1, 2);
    const green = hex.slice(2, 3);
    const blue = hex.slice(3, 4);
    return {
      red: parseInt(red + red, hexRadix),
      green: parseInt(green + green, hexRadix),
      blue: parseInt(blue + blue, hexRadix),
    };
  } else if (hex.length === 7) {
    return {
      red: parseInt(hex.slice(1, 3), hexRadix),
      green: parseInt(hex.slice(3, 5), hexRadix),
      blue: parseInt(hex.slice(5, 7), hexRadix),
    };
  }
};

export const calculateWeightedColor = (colors: Weighted<Color>[]): Color => {
  const color = colors.reduce(
    (previousValue, currentValue) => ({
      red: previousValue.red + currentValue.red * currentValue.weight,
      green: previousValue.green + currentValue.green * currentValue.weight,
      blue: previousValue.blue + currentValue.blue * currentValue.weight,
      weight: previousValue.weight + currentValue.weight,
    }),
    { red: 0, green: 0, blue: 0, weight: 0 }
  );

  return {
    red: Math.floor(color.red / color.weight),
    green: Math.floor(color.green / color.weight),
    blue: Math.floor(color.blue / color.weight),
  };
};

export default Color;
