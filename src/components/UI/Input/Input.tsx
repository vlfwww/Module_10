import React, { useState } from "react";
import style from "./Input.module.css";
import { InputProps } from "../../../types/common";
import validIcon from "../../../assets/images/check.svg";
import invalidIcon from "../../../assets/images/cross-small.svg";
import errorCircleIcon from "../../../assets/images/fi-sr-info.svg";
import infoIcon from "../../../assets/images/Info Tooltip.svg";
import eye from "../../../assets/images/fi-rr-eye.svg";
import eyeCrossed from "../../../assets/images/fi-rr-eye-crossed.svg";
import successThumbIcon from "../../../assets/images/fi-sr-thumbs-up.svg";

const Input: React.FC<InputProps> = ({
  label,
  iconSrc,
  type,
  errorMessage,
  isError,
  isValid,
  pageType,
  ...props
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const canShowSuccess = pageType !== "signin";

  const canShowStrongMsg = pageType === "signup" && isPassword;

  const showErrorMessage = isTouched && isError && !isFocused;
  const showGeneralSuccess = isTouched && isValid && !isError && !isFocused && canShowSuccess;
  const showStrongPasswordMessage = showGeneralSuccess && canShowStrongMsg;

  return (
    <div className={style.inputGroup}>
      <div className={style.label}>
        <div className={style.labelWrapper}>
          <img src={iconSrc} alt={label.toLowerCase()} />
          <p>{label}</p>
        </div>
        <div className={style.statusIndicator}>
          {showGeneralSuccess && <img src={validIcon} alt="valid" />}
          {showErrorMessage && <img src={invalidIcon} alt="invalid" />}
        </div>
      </div>

      <div className={style.inputWrapper}>
        <input
          {...props}
          className={`${style.inputField} ${showErrorMessage ? style.inputError : ""}`}
          type={inputType}
          placeholder={`Enter ${label.toLowerCase()}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsTouched(true);
            setIsFocused(false);
          }}
        />
        {isPassword && (
          <button
            type="button"
            className={style.eyeButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={showPassword ? eyeCrossed : eye} alt="toggle" />
          </button>
        )}
      </div>

      <div
        className={`${style.errorWrapper} ${
          showErrorMessage || showStrongPasswordMessage ? style.visible : ""
        }`}
      >
        <div className={style.errorContainer}>
          <div className={style.errorTextWrapper}>
            <img src={showErrorMessage ? errorCircleIcon : successThumbIcon} alt="status" />
            <span className={showStrongPasswordMessage ? style.successText : style.errorText}>
              {showErrorMessage ? errorMessage : "Your password is strong"}
            </span>
          </div>
          {showErrorMessage && <img src={infoIcon} alt="info" className={style.infoIcon} />}
        </div>
      </div>
    </div>
  );
};

export default Input;
