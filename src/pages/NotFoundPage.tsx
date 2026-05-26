import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import NotFound from "../components/NotFound/NotFound";

const NotFoundPage: React.FC = () => {
  return (
    <AppLayout hideSidebar>
      <div role="alert" aria-live="assertive">
        <NotFound />
      </div>
    </AppLayout>
  );
};

export default React.memo(NotFoundPage);
