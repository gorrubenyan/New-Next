'use client';

import { useTranslation } from 'react-i18next';
import { useSyncI18nWithUrl } from '@/hooks/useSyncI18nWithUrl';
import { useState, useEffect } from 'react';
import i18n from '@/i18n';

export default function HomePage() {
    const [ready, setReady] = useState(false);

    useSyncI18nWithUrl();

    useEffect(() => {
        if (i18n.isInitialized) {
            setReady(true);
        }
    }, []);

    const { t } = useTranslation('common');

    if (!ready) return null; // կամ լոգո/լոադինգ

    return <h1>{t('welcome')}</h1>;
}
