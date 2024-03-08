import { DEFAULT_LOCALE, LOCALES } from "@/locale/locale";
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: (req) => {
    console.log(`🧊 ~ req: `, req);
    return 'en'
  
  }
});

export function middleware(request: NextRequest) {
  console.log(`🧊 ~ request: `, request);
  return I18nMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/static`, `/favicon.ico`, `/robots.txt` or `/_next`
  // - … if they contain a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
