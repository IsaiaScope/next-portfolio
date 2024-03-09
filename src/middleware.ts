import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';
import i18nConfig from '../i18nConfig';

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/static`, `/favicon.ico`, `/robots.txt` or `/_next`
  // - … if they contain a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
