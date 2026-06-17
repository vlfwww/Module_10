import SignUp from "@/components/Pages/SignUp";
import { createPageMetadata } from "@/lib/seo/site";
export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Sign Up",
  description: "Create a new account to access your notes.",
  path: "/signup",
  noIndex: true,
});

export default function Page() {
  return <SignUp />;
}
