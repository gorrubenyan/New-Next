'use client';

import { useEffect } from 'react';
import i18n from '@/i18n';
import { usePathname } from 'next/navigation';

export const useSyncI18nWithUrl = () => {
    const pathname = usePathname();

    useEffect(() => {
        const locale = pathname.split('/')[1];
        if (['en', 'hy'].includes(locale) && i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
    }, [pathname]);

};
