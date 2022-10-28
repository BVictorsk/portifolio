import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import enJSON from './translations/en.json';
import ptBrJSON from './translations/ptBr.json';

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: enJSON,
        ptBr: ptBrJSON
    }
});

export default i18n;