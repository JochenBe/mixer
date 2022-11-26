type Color = {
  red: number;
  green: number;
  blue: number;
};

export const colorToRgb = (color: Color): string =>
  `rgb(${color.red}, ${color.green}, ${color.blue})`;

export default Color;
