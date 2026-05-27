import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import style from "./AuthForm.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import envelopeIcon from "../../assets/images/envelope.svg";
import eyeIcon from "../../assets/images/eye.svg";
import { AuthFormProps, AuthInputs } from "../../types/auth";
import { useAuth } from "../../context/AuthContext";

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  buttonText,
  onSubmit,
  error,
  setError,
  pageType,
  validationRules,
}) => {
  const { isLoading } = useAuth();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm<AuthInputs>({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const handleFormSubmit = async (data: AuthInputs) => {
    if (error) setError("");
    await onSubmit(data.email, data.password);
  };

  return (
    <div className={style.authContainer}>
      <div className={style.authCard} role="form" aria-labelledby="form-title">
        <h1 id="form-title" className={style.title}>
          {title}
        </h1>
        <p className={style.subtitle}>{subtitle}</p>

        <form className={style.authForm} onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            label={t("auth.email")}
            iconSrc={envelopeIcon}
            type="email"
            pageType={pageType}
            disabled={isLoading}
            isError={touchedFields.email && !!errors.email}
            isValid={touchedFields.email && !errors.email && emailValue.length > 0}
            errorMessage={errors.email?.message as string}
            {...register("email", validationRules.email)}
          />

          <Input
            label={t("auth.password")}
            iconSrc={eyeIcon}
            type="password"
            pageType={pageType}
            disabled={isLoading}
            isError={touchedFields.password && !!errors.password}
            isValid={touchedFields.password && !errors.password && passwordValue.length > 0}
            errorMessage={errors.password?.message as string}
            {...register("password", validationRules.password)}
          />

          <Button className={style.submitButton} disabled={isLoading} isFullWidth>
            {isLoading ? t("auth.please_wait") : buttonText}
          </Button>
        </form>

        {error && (
          <p className={style.errorText} role="alert">
            {error}
          </p>
        )}

        {pageType === "signin" ? (
          <p className={style.footerText}>
            {t("auth.signin_prompt")}
            <Link
              to={isLoading ? "#" : "/signup"}
              className={isLoading ? style.linkDisabled : style.link}
            >
              {t("auth.signup_link")}
            </Link>
          </p>
        ) : (
          <>
            <p className={style.policyText}>
              {t("auth.terms_prefix")}
              <span className={style.link}>{t("auth.terms")}</span> <br />
              {t("auth.privacy")}
            </p>
            <p className={style.footerText}>
              {t("auth.signup_prompt")}
              <Link
                to={isLoading ? "#" : "/signin"}
                className={isLoading ? style.linkDisabled : style.link}
              >
                {t("auth.signin_link")}
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
