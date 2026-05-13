import React, { useState } from "react";
import style from "./ProfileSettings.module.css";
import { useTheme } from "../../context/ThemeContext";
import infoIcon from "../../assets/images/fi-sr-info-grey.svg";
import uploadIcon from "../../assets/images/fi-rr-file-download.svg";
import Input from "../UI/Input/Input";
import Switch from "../UI/Switch/Switch";
import { useSettings } from "../../context/SettingsContext";

const ProfileSettings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isListView, toggleView } = useSettings();

  const [fontSize, setFontSize] = useState(1);

  return (
    <div className={style.settingsContainer}>
      <Switch
        label="Dark theme"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      <div className={style.fontSizeChangeWrapper}>
        <div className={style.inputWrapper}>
          <Input
            type="number"
            className={style.numberInput}
            value={fontSize}
            step="0.1"
            label="Font size ratio"
            min="0.8"
            max="2"
            onChange={(e) => setFontSize(parseFloat(e.target.value))}
          />
        </div>
        <div className={style.helperText}>
          <img src={infoIcon} alt="info" />
          <span>
            Adjust the font size ratio for the whole application from 0.8 to 2.
            Default is 1.
          </span>
        </div>
      </div>

      <div className={style.listViewSetter}>
        <Switch label="List View" checked={isListView} onChange={toggleView} />
        <div className={style.helperText}>
          <img src={infoIcon} alt="info" />
          <span>
            Switch Grid View to List View for notes list on the Home page
          </span>
        </div>
      </div>

      <div className={style.uploadSection}>
        <div className={style.dropZone}>
          <img src={uploadIcon} alt="upload" className={style.uploadIcon} />
          <div className={style.uploadInfo}>
            <p className={style.uploadTitle}>
              Select a file or drag and drop here
            </p>
            <p className={style.uploadSubtitle}>
              JPG, PNG or PDF, file size no more than 10MB
            </p>
          </div>
        </div>
        <div className={style.helperText}>
          <img src={infoIcon} alt="info" />
          <span>Upload the image to apply as a note’s background image</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
