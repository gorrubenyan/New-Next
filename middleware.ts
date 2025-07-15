import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'hy'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Բացառում ենք ստատիկ ֆայլերը և հատուկ ուղիները
    const isStaticFile = pathname.match(/\.(.*)$/);
    const isApiOrNext = pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname === '/favicon.ico';

    if (isStaticFile || isApiOrNext) {
        return NextResponse.next();
    }

    // Ստուգում ենք՝ արդյոք արդեն ունի լեզվի փաթեթ
    const hasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (!hasLocale) {
        const url = request.nextUrl.clone();

        // Ապահովում ենք, որ մի քանի / չլինի
        url.pathname = `/${defaultLocale}${pathname}`.replace(/\/{2,}/g, '/');

        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
};
