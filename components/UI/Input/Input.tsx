"use client";

import React, { useState, useId } from "react";
import { useTranslation } from "react-i18next";
import { InputProps } from "../../../types/common";
import { withBasePath } from "@/lib/paths";
import * as S from "./Input.styles";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, iconSrc, type, errorMessage, isError, isValid, pageType, ...props }, ref) => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const errorId = useId();

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const showErrorMessage = isError;
    const showGeneralSuccess = isValid && pageType !== "signin";
    const showStrongPasswordMessage = showGeneralSuccess && pageType === "signup" && isPassword;

    const isErrorWrapperVisible = showErrorMessage || showStrongPasswordMessage;

    return (
      <S.InputGroup>
        <S.Label>
          <S.LabelWrapper>
            {iconSrc && <img src={withBasePath(iconSrc)} alt="" aria-hidden="true" />}
            <p>{label}</p>
          </S.LabelWrapper>
          <S.StatusIndicator aria-live="polite">
            {showGeneralSuccess && <img src={withBasePath("/assets/images/check.svg")} alt="✓" />}
            {showErrorMessage && (
              <img src={withBasePath("/assets/images/cross-small.svg")} alt="✕" />
            )}
          </S.StatusIndicator>
        </S.Label>

        <S.InputWrapper>
          <S.InputField
            ref={ref}
            $isError={!!showErrorMessage}
            type={inputType}
            placeholder={`${t("input.enter")} ${label.toLowerCase()}`}
            aria-invalid={isError ? "true" : "false"}
            aria-describedby={showErrorMessage ? errorId : undefined}
            {...props}
          />
          {isPassword && (
            <S.EyeButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={t("input.toggle_password")}
            >
              <img
                src={
                  showPassword
                    ? withBasePath("/assets/images/fi-rr-eye-crossed.svg")
                    : withBasePath("/assets/images/fi-rr-eye.svg")
                }
                alt=""
                aria-hidden="true"
              />
            </S.EyeButton>
          )}
        </S.InputWrapper>

        <S.ErrorWrapper
          $visible={!!isErrorWrapperVisible}
          id={errorId}
          role={isError ? "alert" : undefined}
        >
          <S.ErrorContainer>
            <S.ErrorTextWrapper>
              <img
                src={
                  showErrorMessage
                    ? withBasePath("/assets/images/fi-sr-info.svg")
                    : withBasePath("/assets/images/fi-sr-thumbs-up.svg")
                }
                alt=""
                aria-hidden="true"
              />
              {showStrongPasswordMessage ? (
                <S.SuccessText>{t("input.password_strong")}</S.SuccessText>
              ) : (
                <S.ErrorText>{errorMessage}</S.ErrorText>
              )}
            </S.ErrorTextWrapper>
            {showErrorMessage && (
              <S.InfoIcon
                src={withBasePath("/assets/images/Info Tooltip.svg")}
                alt="info"
                aria-hidden="true"
              />
            )}
          </S.ErrorContainer>
        </S.ErrorWrapper>
      </S.InputGroup>
    );
  },
);

Input.displayName = "Input";

export default React.memo(Input);
