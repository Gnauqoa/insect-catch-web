import i18next from "i18next";
import login from "./login";

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
      },
    },
    vi: {
      translation: {
        login: login.vi,
      },
    },
  },
});
const validLanguage = (lang) => {
  return lang === "vi" || lang === "en";
};
export { defaultLanguage, validLanguage };
export default i18next;
