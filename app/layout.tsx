import { Providers } from "@/components/Providers/Providers";
import AppBootstrap from "@/components/AppBootstrap/AppBootstrap";
import "./globals.css";
import AuthGuard from "@/components/AuthGuard/AuthGuard";
import { rootMetadata } from "@/lib/seo/site";

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppBootstrap>
          <Providers>
            <AuthGuard>{children}</AuthGuard>
          </Providers>
        </AppBootstrap>
      </body>
    </html>
  );
}
