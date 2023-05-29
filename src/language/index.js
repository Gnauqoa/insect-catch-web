import i18next from "i18next";
import login from "./login";
import register from "./register";
import dashboard from "./dashboard";
import device from "./device";
import deviceMenu from "./deviceMenu";
const defaultLanguage = "en";

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
        dashboard: dashboard.en,
        device: device.en,
        deviceMenu: deviceMenu.en,
      },
    },
    vi: {
      translation: {
        deviceMenu: deviceMenu.vi,
        login: login.vi,
        register: register.vi,
        dashboard: dashboard.vi,
        device: device.vi,
      },
    },
  },
});
const validLanguage = (lang) => {
  return lang === "vi" || lang === "en";
};
export { defaultLanguage, validLanguage };
export default i18next;
