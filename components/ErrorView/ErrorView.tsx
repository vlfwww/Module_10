import React from "react";
import { useTranslation } from "react-i18next";
import CrossIcon from "../UI/Icons/CrossIcon";
import Button from "../UI/Button/Button";
import * as S from "./ErrorView.styles";
import { ErrorViewProps } from "@/types/common";

const ErrorView: React.FC<ErrorViewProps> = ({ message, onRetry }) => {
  const { t } = useTranslation();
  return (
    <S.ErrorContainer role="alert">
      <CrossIcon className="crossIcon" />
      <h1>{t("error_view.title")}</h1>
      <p>{message || t("error_view.default_message")}</p>
      {onRetry && <Button onClick={onRetry}>{t("error_view.retry")}</Button>}
    </S.ErrorContainer>
  );
};

export default ErrorView;
