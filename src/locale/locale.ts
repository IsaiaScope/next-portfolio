
export const LOCALES = ['en', 'it'] as const;
export const DEFAULT_LOCALE = LOCALES[0];

export type Locales = typeof LOCALES[number];

// NOTE not dynamic import for type safety
export const LOCALES_IMPORTS = {
  en:() => import('./dictionaries/en.ts'),
  it: () => import('./dictionaries/it.ts')
}
