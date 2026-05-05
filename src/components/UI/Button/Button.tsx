import React from 'react';
import style from './Button.module.css';
import { ButtonProps } from '../../../types/common';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  textColor,
  style: inlineStyle,
  ...props
}) => {
  return (
    <button
      className={`${style.customButton} ${className}`}
      onClick={onClick}
      style={{ color: textColor, ...inlineStyle }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
