// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'hy'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    console.log('Middleware pathname:', request.nextUrl.pathname);

    // Բացառում ենք API-ները և public ֆայլերը (.css, .js, .png, ...)
    const isPublicFile = /\.(.*)$/.test(pathname);
    const isSpecial = pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico';

    if (isPublicFile || isSpecial) {
        return NextResponse.next();
    }

    // Եթե ուղին չունի լեզվի փաթեթ՝ վերաուղորդիր
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = defaultLocale;
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}${pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};

