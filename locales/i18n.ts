import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { withBasePath } from "@/lib/paths";

export const i18nReady = i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: withBasePath("/locales/{{lng}}/{{ns}}.json"),
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
