"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../i18nConfig";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/shadcn-ui/select";
import { Label } from "../shadcn-ui/label";
import ReactCountryFlag from "react-country-flag";
export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  const localeSelectItem = i18nConfig.locales.map((locale) => (
    <SelectItem key={locale} value={locale}>
      <ReactCountryFlag countryCode={locale} svg />
      {locale}
    </SelectItem>
  ));

  const handleChange = (value: string) => {
    const newLocale = value;
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    // <select onChange={handleChange} value={currentLocale}>
    //   <option value="en">English</option>
    //   <option value="it">Italian</option>
    //   <option value="de">tede</option>
    //   <option value="es">spagnolo</option>
    // </select>
    <>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="🏳" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            {localeSelectItem}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
