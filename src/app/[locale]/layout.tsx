import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import type { RootParams } from '@/types/params';
import { dir } from 'i18next';
import type { Metadata } from "next";
import localFont from "next/font/local";
import i18nConfig from '../../../i18nConfig';
import { MainMenu } from '@/components/ui/main-menu';

// https://fonts.google.com/variablefonts (Better because includes more weights)
// https://fonts.google.com/specimen/Onest
// [DOC]: https://nextjs.org/docs/app/api-reference/components/font
// [DOC]: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
const customLocalFont = localFont({
  src: "../../../public/fonts/Onest-Variable.ttf",
  display: "swap",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  adjustFontFallback: "Times New Roman",
  variable: "--font-onest",
});

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};


type RootLayoutProps = {
  children: React.ReactNode;
} & RootParams;

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<
  RootLayoutProps
>) {

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body
        className={`${customLocalFont.className} ${customLocalFont.variable}`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainMenu />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
