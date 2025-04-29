"use client";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { AuthProvider } from "./Providers";

function LocaleProviders({ children }) {
    const locale = useLocale();
    console.log("locale", locale);
  return (
      <AuthProvider>
        <html lang={locale}>
          <body> {children}</body>
        </html>
      </AuthProvider>
  );
}
export default LocaleProviders;
