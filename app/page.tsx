import MainPage from "@/components/Pages/MainPage";
import JsonLd from "@/components/SEO/JsonLd";
import { createPageMetadata } from "@/lib/seo/site";
import { getWebApplicationSchema, getWebSiteSchema } from "@/lib/seo/structured-data";
export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "My Notes",
  description: "Manage your daily tasks and notes efficiently.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={[getWebApplicationSchema(), getWebSiteSchema()]} />
      <MainPage />
    </>
  );
}
