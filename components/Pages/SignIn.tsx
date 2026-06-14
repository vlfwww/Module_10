"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm/AuthForm";
import AppLayout from "@/components/AppLayout/AppLayout";
import { validateEmail } from "@/utils/validation/validation";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();

  const fromPage = searchParams.get("from") || "/";

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(fromPage);
    }
  }, [isAuthenticated, router, fromPage]);

  const handleSignIn = useCallback(
    async (email: string, password: string) => {
      try {
        setError("");
        await login(email, password);
      } catch {
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
        key="signin-form"
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
