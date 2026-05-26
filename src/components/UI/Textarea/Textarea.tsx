import React, { useState } from "react";
import style from "./Textarea.module.css";
import { TextareaProps } from "../../../types/common";
import errorCircleIcon from "../../../assets/images/fi-sr-info.svg";
import infoIcon from "../../../assets/images/fi-sr-info-grey.svg";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, iconSrc, className, value, onFocus, onBlur, ...props }, ref) => {
    const maxLength = 200;
    const currentLength = typeof value === "string" ? value.length : 0;

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const shouldShowError = currentLength >= maxLength && isFocused;

    return (
      <div className={style.inputGroup}>
        <div className={style.label}>
          {iconSrc && <img src={iconSrc} alt="pencil" className={style.icon} />}
          <p>{label}</p>
        </div>

        <textarea
          ref={ref}
          className={`${style.textareaField} ${shouldShowError ? style.inputError : ""} ${className}`}
          value={value}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        <div className={`${style.errorWrapper} ${style.visible}`}>
          <div className={style.errorContainer}>
            <div className={style.errorTextWrapper}>
              <img
                src={shouldShowError ? errorCircleIcon : infoIcon}
                alt="status"
                className={shouldShowError ? "" : style.greyIcon}
              />
              <span className={shouldShowError ? style.errorText : style.infoText}>
                {shouldShowError ? `Reached the ${maxLength} text limit` : `Max ${maxLength} chars`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
