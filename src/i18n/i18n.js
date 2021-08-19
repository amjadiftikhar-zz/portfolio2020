import i18n from "i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEn from '../assets/resume_eng.json';
import translationDk from '../assets/resume_dk.json';

const resources = {
    en: {
        translation: translationEn
    },
    dk:{
        translation: translationDk
    }
}

i18n.use(Backend).use(languageDetector).use(initReactI18next).init({
    resources,
    lng: 'dk',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        caches: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n;
