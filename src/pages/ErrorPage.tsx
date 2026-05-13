import AppLayout from "../components/AppLayout/AppLayout";
import ErrorView from "../components/ErrorView/ErrorView";

const ErrorPage = () => {
  return (
    <AppLayout hideSidebar>
      <ErrorView />
    </AppLayout>
  );
};

export default ErrorPage;
