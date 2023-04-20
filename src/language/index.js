import i18next from "i18next";
import login from "./login";
import register from "./register";
const defaultLanguage = "vi";

i18next.init({
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        login: login.en,
        register: register.en,
      },
    },
    vi: {
      translation: {
        login: login.vi,
        register: register.vi,
      },
    },
  },
});
const validLanguage = (lang) => {
  return lang === "vi" || lang === "en";
};
export { defaultLanguage, validLanguage };
export default i18next;
