import React, { useState } from "react";

import SettingsButton from "../SettingsButton";
import Dialog from "../Dialog";
import Heading1 from "../Heading1";
import PreviewModeInput from "./PreviewModeInput";
import AdvancedColorInput from "./AdvancedColorInput";

import Settings from "types/Settings";

type SettingsInputProps = {
  isDark?: boolean | undefined;
  value: Settings;
  onChange: (settings: Settings) => void;
};

const SettingsInput: React.FC<SettingsInputProps> = ({
  isDark,
  value,
  onChange,
}) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <>
      <SettingsButton
        isDark={isDark}
        onClick={() => {
          setShowSettings(true);
        }}
      />
      {showSettings ? (
        <Dialog
          onClose={() => {
            setShowSettings(false);
          }}
        >
          <Heading1>Preview Mode</Heading1>
          <PreviewModeInput
            value={value.previewMode}
            onChange={(previewMode) => {
              onChange({ ...value, previewMode });
            }}
          />
          <Heading1>Background Color</Heading1>
          <AdvancedColorInput
            value={value.backgroundColor}
            onChange={(backgroundColor) => {
              onChange({ ...value, backgroundColor });
            }}
            disabled={value.previewMode === "color"}
          />
        </Dialog>
      ) : null}
    </>
  );
};

export default SettingsInput;
