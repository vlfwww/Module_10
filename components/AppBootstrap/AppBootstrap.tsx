"use client";

import React, { useEffect, useState } from "react";
import { i18nReady } from "@/locales/i18n";
import Loader from "@/components/UI/Loader/Loader";

export default function AppBootstrap({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        await Promise.all([
          import("@sidekick-monorepo/internship-backend")
            .then(({ startMockingNotes }) => startMockingNotes("."))
            .catch((err: unknown) => console.warn("MSW failed:", err)),
          i18nReady.catch((err: unknown) => console.error("i18n failed:", err)),
        ]);
      } finally {
        setIsReady(true);
      }
    }

    bootstrap();
  }, []);

  if (!isReady) {
    return <Loader message="Loading application..." />;
  }

  return <>{children}</>;
}
