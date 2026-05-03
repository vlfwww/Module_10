import React from "react";
import style from "./Input.module.css";
import { InputProps } from "../../../types/common";


const Input: React.FC<InputProps> = ({ label, iconSrc, type, isError, ...props }) => {
  return (
    <div className={style.inputGroup}>
      <div className={style.label}>
        <img src={iconSrc} alt={label.toLowerCase()} />
        <p>{label}</p>
      </div>
      <input
        className={`${style.inputField} ${isError ? style.inputError : ""}`}
        type={type || "text"}
        placeholder={`Enter ${label.toLowerCase()}`}
        {...props}
      />
    </div>
  );
};

export default Input;