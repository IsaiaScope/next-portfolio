'use client';

import initTranslations from '@/utils/i18n';
import { Resource, createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider defaultNS={'common'} i18n={i18n}>{children}</I18nextProvider>;
}