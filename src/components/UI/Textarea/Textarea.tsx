import React from "react";
import style from "./Textarea.module.css";
import { TextareaProps } from "../../../types/common";
import errorCircleIcon from "../../../assets/images/fi-sr-info.svg";
import infoIcon from "../../../assets/images/fi-sr-info-grey.svg";

const Textarea: React.FC<TextareaProps> = ({ label, iconSrc, className, value, ...props }) => {
  const maxLength = 200;
  const currentLength = typeof value === "string" ? value.length : 0;

  const isLimitReached = currentLength >= maxLength;

  return (
    <div className={style.inputGroup}>
      <div className={style.label}>
        {iconSrc && <img src={iconSrc} alt="pencil" className={style.icon} />}
        <p>{label}</p>
      </div>

      <textarea
        className={`${style.textareaField} ${isLimitReached ? style.inputError : ""} ${className}`}
        value={value}
        maxLength={maxLength}
        required
        {...props}
      />

      <div className={`${style.errorWrapper} ${style.visible}`}>
        <div className={style.errorContainer}>
          <div className={style.errorTextWrapper}>
            <img
              src={isLimitReached ? errorCircleIcon : infoIcon}
              alt="status"
              className={isLimitReached ? "" : style.greyIcon}
            />
            <span className={isLimitReached ? style.errorText : style.infoText}>
              {isLimitReached ? `Reached the ${maxLength} text limit` : `Max ${maxLength} texts`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
