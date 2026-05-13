import AppLayout from "../components/AppLayout/AppLayout";
import NotFound from "../components/NotFound/NotFound";

const NotFoundPage = () => {
  return (
    <AppLayout hideSidebar>
      <NotFound />
    </AppLayout>
  );
};

export default NotFoundPage;
