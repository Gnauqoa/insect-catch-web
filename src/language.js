import i18next from "i18next";

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
        hello: "Hello",
        login: { title: "Welcome back!" },
      },
    },
    vi: {
      translation: {
        hello: "Xin chào",
        login: { title: "Chào mừng trở lại" },
      },
    },
  },
});
export { defaultLanguage };
export default i18next;
