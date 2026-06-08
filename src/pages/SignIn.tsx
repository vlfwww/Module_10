import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import AuthForm from "./../components/AuthForm/AuthForm";
import AppLayout from "../components/AppLayout/AppLayout";
import { validateEmail } from "../utils/validation/validation";
import { LocationState } from "../types/common";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = (location.state as LocationState)?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) navigate(fromPage, { replace: true });
  }, [isAuthenticated, navigate, fromPage]);

  const handleSignIn = useCallback(
    async (email: string, password: string) => {
      try {
        await login(email, password);
      } catch (err: unknown) {
        setError(t("signin.error_failed"));
      }
    },
    [login, t],
  );

  const signInRules = useMemo(
    () => ({
      email: {
        required: t("signin.email_req"),
        validate: (value: string) => validateEmail(value) || t("signin.email_invalid"),
      },
      password: {
        required: t("signin.pass_req"),
      },
    }),
    [t],
  );

  return (
    <AppLayout hideSidebar pageType="signin">
      <AuthForm
        title={t("signin.title")}
        subtitle={t("signin.subtitle")}
        buttonText={t("signin.button")}
        onSubmit={handleSignIn}
        error={error}
        setError={setError}
        pageType="signin"
        validationRules={signInRules}
      />
    </AppLayout>
  );
};

export default React.memo(SignIn);
