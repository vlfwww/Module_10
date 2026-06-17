import ProfilePage from "@/components/Pages/ProfilePage";
import { createPageMetadata } from "@/lib/seo/site";
export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Profile",
  description: "Manage your profile settings.",
  path: "/profile",
  noIndex: true,
});

export default function Page() {
  return <ProfilePage />;
}
