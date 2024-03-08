"use client"

import { createI18nClient } from "next-international/client";
import { LOCALES_IMPORTS } from "./locale";

export const {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
  useScopedI18n,
  I18nProviderClient,
} = createI18nClient(LOCALES_IMPORTS);
