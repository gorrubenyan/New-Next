import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'hy'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Բացառում ենք API, static ֆայլերը, favicon և _next ռեսուրսները
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname === '/favicon.ico' ||
        pathname.match(/\.(\w+)$/) // static files like .js, .css, .png
    ) {
        return NextResponse.next();
    }

    // Եթե URL-ում լեզու չկա՝ ավելացնենք defaultLocale
    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${defaultLocale}${pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Vercel-safe matcher
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
