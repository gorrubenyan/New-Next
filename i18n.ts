// i18n.ts
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

if (!i18n.isInitialized) {
    i18n
        .use(HttpBackend)
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            supportedLngs: ['en', 'hy'],
            ns: ['common'],
            defaultNS: 'common',
            debug: false,
            interpolation: {
                escapeValue: false,
            },
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
            },
            react: {
                useSuspense: false,
            },
        });
}

export default i18n;
