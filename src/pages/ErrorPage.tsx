import React from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "../components/AppLayout/AppLayout";
import ErrorView from "../components/ErrorView/ErrorView";
import { ErrorPageProps } from "../types/common";

const ErrorPage: React.FC<ErrorPageProps> = ({ message, onRetry }) => {
  const { t } = useTranslation();

  return (
    <AppLayout hideSidebar>
      <div role="alert" aria-live="assertive">
        <ErrorView message={message || t("error_page.default_message")} onRetry={onRetry} />
      </div>
    </AppLayout>
  );
};

export default React.memo(ErrorPage);
