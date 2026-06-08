import React from "react";
import style from "./AuthMessage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container} role="status">
      <p className={style.signIn}>
        {t("auth_message.signin_part1")}
        <Link to="/signin">{t("auth_message.signin_link")}</Link>
        {t("auth_message.signin_part2")}
      </p>

      <p className={style.signUp}>
        {t("auth_message.signup_part1")}
        <Link to="/signup">{t("auth_message.signup_link")}</Link>
      </p>
    </div>
  );
};

export default AuthMessage;
