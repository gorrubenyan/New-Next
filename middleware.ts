import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'hy'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname === '/favicon.ico' ||
        pathname.match(/\.(.*)$/)
    ) {
        return NextResponse.next();
    }

    const hasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (!hasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${defaultLocale}${pathname}`.replace(/\/{2,}/g, '/');
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
};
