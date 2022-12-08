import React, { useState } from "react";

import SettingsButton from "./SettingsButton";
import Dialog from "./Dialog";

type SettingsProps = {
  isDark?: boolean | undefined;
};

const Settings: React.FC<SettingsProps> = ({ isDark }) => {
  const [showSettings, setShowSettings] = useState<boolean>(true);

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
          Settings
        </Dialog>
      ) : null}
    </>
  );
};

export default Settings;
