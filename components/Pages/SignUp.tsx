"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm/AuthForm";
import AppLayout from "@/components/AppLayout/AppLayout";
import { validateEmail, validatePassword } from "@/utils/validation/validation";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState("");
  const { register: registerUser } = useAuth();
  const router = useRouter();

  const handleSignUp = useCallback(
    async (email: string, password: string) => {
      try {
        await registerUser(email, password);
        router.push("/");
      } catch {
        setError(t("signup.error_failed"));
      }
    },
    [registerUser, router, t],
  );

  const signUpRules = useMemo(
    () => ({
      email: {
        required: t("signup.email_req"),
        validate: (value: string) => validateEmail(value) || t("signup.email_invalid"),
      },
      password: {
        required: t("signup.pass_req"),
        validate: (value: string) => validatePassword(value) || t("signup.pass_weak"),
      },
    }),
    [t],
  );

  return (
    <AppLayout hideSidebar pageType="signup">
      <AuthForm
        title={t("signup.title")}
        subtitle={t("signup.subtitle")}
        buttonText={t("signup.button")}
        onSubmit={handleSignUp}
        error={error}
        setError={setError}
        pageType="signup"
        validationRules={signUpRules}
      />
    </AppLayout>
  );
};

export default React.memo(SignUp);
