import { createI18nServer } from "next-international/server";
import { LOCALES_IMPORTS } from "./locale";

export const { getCurrentLocale, getI18n, getScopedI18n, getStaticParams } =
  createI18nServer(LOCALES_IMPORTS);
