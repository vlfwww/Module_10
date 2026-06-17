import AppLayout from "@/components/AppLayout/AppLayout";
import NotFound from "@/components/NotFound/NotFound";

export default function NotFoundPage() {
  return (
    <AppLayout hideSidebar>
      <NotFound />;
    </AppLayout>
  );
}
