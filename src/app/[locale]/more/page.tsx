import { DarkModeToggle } from '@/components/ui/dark-mode-toggle';
import LanguageChanger from '@/components/ui/language-changer';
import ServerComponent from '@/components/ui/server-componet';
import TranslationsProvider from "@/providers/translations-provider";
import initTranslations from "@/utils/i18n";

export default async function MorePage({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const { t, resources } = await initTranslations(locale, ['common', 'home']);
  // console.log(`🧊 ~ resources: `, resources);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['home']}
    >
      <main className="flex h-dvh min-h-screen flex-col items-center justify-between p-3">
        <header>
        <h1>More Page</h1>
        </header>
        <section>
          <DarkModeToggle/>
        </section>
        <ServerComponent params={locale}/>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}