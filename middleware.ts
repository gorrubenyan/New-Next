import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'hy'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Բացառում ենք համակարգային ֆայլերը (API, static)
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon.ico') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = defaultLocale;
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}${pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Օգտագործում ենք միայն անհրաժեշտ մասերում
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
