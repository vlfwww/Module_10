import React from "react";
import { useTranslation } from "react-i18next";
import ErrorIcon from "../UI/Icons/ErrorIcon";
import style from "./NotFound.module.css";
import { useSettings } from "../../context/SettingsContext";

const NotFound: React.FC = () => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  return (
    <div className={style.notFoundWrapper} data-theme={theme} role="main">
      <ErrorIcon className={style.errorIcon} aria-hidden="true" />
      <h1 role="status">{t("not_found.title")}</h1>
    </div>
  );
};

export default NotFound;
