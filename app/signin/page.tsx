import SignIn from "@/components/Pages/SignIn";
import { createPageMetadata } from "@/lib/seo/site";
export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Sign In",
  description: "Login to your account to access your notes.",
  path: "/signin",
  noIndex: true,
});

export default function Page() {
  return <SignIn />;
}
