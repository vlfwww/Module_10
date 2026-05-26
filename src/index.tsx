import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { startMockingNotes } from "@sidekick-monorepo/internship-backend";
import { i18nReady } from "./locales/i18n";

function getMswBasePath(): string {
  const publicUrl = process.env.PUBLIC_URL ?? "";
  const basePath = publicUrl.replace(/^\/+|\/+$/g, "");
  return basePath || ".";
}

export async function enableMocking() {
  await startMockingNotes(getMswBasePath());
}

async function bootstrap() {
  await enableMocking();
  await i18nReady;

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
}

bootstrap();
