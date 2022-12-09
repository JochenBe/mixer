import Color from "./Color";

export type PreviewMode = "color" | "rectangle" | "text";

type Settings = {
  previewMode: PreviewMode;
  backgroundColor: Color;
};

export const settingsToBackgroundColor = (
  settings: Settings,
  color: Color
): Color =>
  settings.previewMode === "color" ? color : settings.backgroundColor;

export default Settings;
