"use client";

import { useEffect } from "react";
import Loader from "../UI/Loader/Loader";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const normalizedPathname =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const isPublicPage = normalizedPathname === "/signin" || normalizedPathname === "/signup";

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated && !isPublicPage) {
      router.replace("/signin");
    } else if (isAuthenticated && isPublicPage) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, isPublicPage, router]);

  if (isLoading && !isPublicPage) return <Loader />;

  if (!isAuthenticated && !isPublicPage) return null;

  return <>{children}</>;
}
