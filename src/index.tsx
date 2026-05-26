import "./locales/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { startMockingNotes } from "@sidekick-monorepo/internship-backend";

export async function enableMocking() {
  const isProduction = process.env.NODE_ENV === "production";
  await startMockingNotes(isProduction ? "Module_10" : ".");
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
});
