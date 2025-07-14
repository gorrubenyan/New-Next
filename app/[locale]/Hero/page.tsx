'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n';
import { useEffect, useState } from 'react';
import {useSyncI18nWithUrl} from "@/hooks/useSyncI18nWithUrl";

export default function Page() {
    useSyncI18nWithUrl();

    const { t } = useTranslation('common');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // ✅ միայն երբ client-ում ենք՝ բեռնում ենք
    }, []);

    if (!isClient) return null; // կամ loading spinner

    return (
        <div className="text-3xl font-bold bg-green-400" >
            {t('welcome')}

            {t('info')}
        </div>
    );
}
