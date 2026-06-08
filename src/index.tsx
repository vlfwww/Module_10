import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { startMockingNotes } from "@sidekick-monorepo/internship-backend";
import { i18nReady } from "./locales/i18n";
import Loader from "./components/UI/Loader/Loader";

function getMswBasePath(): string {
  const publicUrl = process.env.PUBLIC_URL ?? "";
  const basePath = publicUrl.replace(/^\/+|\/+$/g, "");
  return basePath || ".";
}

export async function enableMocking() {
  await startMockingNotes(getMswBasePath());
}

async function bootstrap() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element #root not found");
  }

  const root = ReactDOM.createRoot(rootElement);

  root.render(<Loader message="Loading application..." />);

  await Promise.all([
    enableMocking().catch((error) => {
      console.warn("MSW failed to start, continuing without mocks:", error);
    }),
    i18nReady.catch((error) => {
      console.error("i18n failed to initialize:", error);
    }),
  ]);

  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
}

bootstrap();
