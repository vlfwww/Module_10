import React from "react";
import * as S from "./Button.styles";
import { ButtonProps } from "@/types/common";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  isFullWidth = false,
  ...props
}) => {
  return (
    <S.CustomButton
      className={className}
      onClick={onClick}
      type={type}
      $fullWidth={isFullWidth}
      {...props}
    >
      {children}
    </S.CustomButton>
  );
};

export default React.memo(Button);
