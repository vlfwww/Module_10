"use client";

import React, { useState, useCallback } from "react";
import style from "./Textarea.module.css";
import { TextareaProps } from "@/types/common";
import { withBasePath } from "@/lib/paths";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, iconSrc, className, value, onFocus, onBlur, ...props }, ref) => {
    const maxLength = 200;
    const currentLength = typeof value === "string" ? value.length : 0;

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );

    const shouldShowError = currentLength >= maxLength && isFocused;

    return (
      <div className={style.inputGroup}>
        <div className={style.label}>
          {iconSrc && <img src={withBasePath(iconSrc)} alt="pencil" className={style.icon} />}
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
                src={
                  shouldShowError
                    ? withBasePath("/assets/images/fi-sr-info.svg")
                    : withBasePath("/assets/images/Info Tooltip.svg")
                }
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

export default React.memo(Textarea);
