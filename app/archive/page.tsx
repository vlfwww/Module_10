import ArchivePage from "@/components/Pages/ArchivePage";
import { createPageMetadata } from "@/lib/seo/site";
export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Archive",
  description: "View all your archived notes and tasks.",
  path: "/archive",
  noIndex: true,
});

export default function Page() {
  return <ArchivePage />;
}
