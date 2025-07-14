'use client';

import { usePathname, useRouter } from 'next/navigation';
import i18n from '@/i18n';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = async (lng: string) => {
        const segments = pathname.split('/');
        segments[1] = lng;
        const newPath = segments.join('/');

        await i18n.changeLanguage(lng); // ✅ սպասում ենք մինչև լեզուն փոխվի

        router.push(newPath);
    };


    return (
        <div className="flex gap-4 p-1">
            <button
                className="p-1 border border-black rounded-2xl"
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
            <button
                className="p-1 border border-black rounded-2xl"
                onClick={() => changeLanguage('hy')}
            >
                Հայերեն
            </button>
        </div>
    );
}
