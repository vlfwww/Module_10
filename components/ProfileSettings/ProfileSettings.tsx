"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import style from "./ProfileSettings.module.css";
import Input from "../UI/Input/Input";
import Switch from "../UI/Switch/Switch";
import { useSettings } from "../../context/SettingsContext";
import { useNotification } from "../../context/NotificationContext";
import { useUpdateGlobalBackground } from "@/hooks/useTodos/useTodos";
import { withBasePath } from "@/lib/paths";

const ProfileSettings: React.FC = () => {
  const { i18n, t } = useTranslation();
  const { showNotification } = useNotification();
  const { isListView, toggleView, fontSize, changeFontSize, theme, toggleTheme } = useSettings();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [localFontSize, setLocalFontSize] = useState<string>(String(fontSize));

  const { mutate: updateBackground, isPending: isUploading } = useUpdateGlobalBackground();

  useEffect(() => {
    setLocalFontSize(String(fontSize));
  }, [fontSize]);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setIsDragActive(true);
    else if (e.type === "dragleave") setIsDragActive(false);
  }, []);

  const handleFile = useCallback(
    (file: File) => {
      if (!file) return;
      const validTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        showNotification(t("settings.upload_error_type"), "warning");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        showNotification(t("settings.upload_error_size"), "warning");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        updateBackground(base64String, {
          onSuccess: () => showNotification(t("settings.upload_success"), "success"),
          onError: () => showNotification(t("settings.upload_fail"), "error"),
        });
      };
      reader.readAsDataURL(file);
    },
    [showNotification, updateBackground, t],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
    },
    [handleFile],
  );

  const onZoneClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files?.[0]) handleFile(event.target.files[0]);
    },
    [handleFile],
  );

  const handleLanguageChange = useCallback(
    (event: { target: { value: string } }) => {
      i18n.changeLanguage(event.target.value);
    },
    [i18n],
  );

  const handleFontSizeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFontSize(event.target.value);
  }, []);

  const handleFontSizeBlur = useCallback(() => {
    const val = parseFloat(localFontSize);
    const clamped = Math.min(Math.max(val || 1, 0.8), 2);
    changeFontSize(clamped);
    setLocalFontSize(String(clamped));
  }, [changeFontSize, localFontSize]);

  return (
    <div className={style.settingsContainer}>
      <div className={style.languageSetter}>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel id="lang-label" sx={{ color: "var(--text-main)" }}>
            {t("settings.language")}
          </InputLabel>
          <Select
            labelId="lang-label"
            value={i18n.language}
            label={t("settings.language")}
            sx={{
              color: "var(--text-main)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--border-color)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--accent-color)",
              },
            }}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Русский</MenuItem>
          </Select>
        </FormControl>
        <div className={style.helperText}>
          <img src={withBasePath("/assets/images/Info Tooltip.svg")} alt="" aria-hidden="true" />
          <span>{t("settings.lang_help")}</span>
        </div>
      </div>

      <Switch label={t("settings.theme")} checked={theme === "dark"} onChange={toggleTheme} />

      <div className={style.fontSizeChangeWrapper}>
        <Input
          data-testid="font-size-input"
          type="number"
          className={style.numberInput}
          value={localFontSize}
          step="0.1"
          label={t("settings.font_size")}
          min="0.8"
          max="2"
          onChange={handleFontSizeChange}
          onBlur={handleFontSizeBlur}
        />
        <div className={style.helperText}>
          <img src={withBasePath("/assets/images/Info Tooltip.svg")} alt="" aria-hidden="true" />
          <span>{t("settings.font_help")}</span>
        </div>
      </div>

      <div className={style.listViewSetter}>
        <Switch label={t("settings.list_view")} checked={isListView} onChange={toggleView} />
        <div className={style.helperText}>
          <img src={withBasePath("/assets/images/Info Tooltip.svg")} alt="" aria-hidden="true" />
          <span>{t("settings.list_view_help")}</span>
        </div>
      </div>

      <div className={style.uploadSection}>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileInputChange}
        />
        <div
          className={`${style.dropZone} ${isDragActive ? style.dragActive : ""}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={onZoneClick}
          role="button"
          tabIndex={0}
          aria-label={t("settings.upload_title")}
        >
          <img
            src={withBasePath("/assets/images/fi-rr-file-download.svg")}
            alt=""
            aria-hidden="true"
          />
          <div className={style.uploadInfo}>
            <p className={style.uploadTitle}>
              {isUploading ? t("settings.uploading") : t("settings.upload_title")}
            </p>
            <p className={style.uploadSubtitle}>{t("settings.upload_subtitle")}</p>
          </div>
        </div>
        <div className={style.helperText}>
          <img src={withBasePath("/assets/images/Info Tooltip.svg")} alt="" aria-hidden="true" />
          <span>{t("settings.upload_help")}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileSettings);
