import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tg from "./locales/tg/translation.json";
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    tg: { translation: tg },
    ru: { translation: ru },
    en: { translation: en },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  supportedLngs: ["tg", "ru", "en"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;