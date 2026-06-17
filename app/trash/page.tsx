import TrashPage from "@/components/Pages/TrashPage";
import { createPageMetadata } from "@/lib/seo/site";
export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Trash",
  description: "Deleted notes that will be removed permanently.",
  path: "/trash",
  noIndex: true,
});

export default function Page() {
  return <TrashPage />;
}
