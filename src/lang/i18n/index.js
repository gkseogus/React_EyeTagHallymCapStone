import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./ko-KR.json";
import en from "./en-US.json";
import cn from "./cn-CH.json";
import jp from "./jp-JP.json";

const resource = {
  ko: {
    translations: ko,
  },
  en: {
    translations: en,
  },
  ch: {
    translations: cn,
  },
  jp: {
    translations: jp,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,

  // 초기 설정 언어
  lng: "en",
  fallbackLng: "en",
  debug: true,
  defaultNS: "translations",
  ns: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
