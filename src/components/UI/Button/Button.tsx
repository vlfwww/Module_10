import React from "react";
import style from "./Button.module.css";
import { ButtonProps } from "../../../types/common";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  textColor,
  style: inlineStyle,
  isFullWidth = false,
  ...props
}) => {
  const buttonClasses =
    `${style.customButton} ${isFullWidth ? style.fullWidth : ""} ${className}`.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={{ color: textColor, ...inlineStyle }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
