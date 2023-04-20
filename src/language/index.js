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
export { defaultLanguage };
export default i18next;
