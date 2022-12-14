import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./translationLANG/ko-KR.json";
import en from "./translationLANG/en-US.json";
import ch from "./translationLANG/ch-CH.json";
import jp from "./translationLANG/jp-JP.json";

const resource = {
  ko: {
    translations: ko,
  },
  en: {
    translations: en,
  },
  ch: {
    translations: ch,
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
  defaultNS: "translations",
  ns: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
