import LanguageChanger from '@/components/ui/language-changer';
import ServerComponent from '@/components/ui/server-componet';
import TranslationsProvider from "@/providers/translations-provider";
import initTranslations from "@/utils/i18n";

export default async function SettingsPage({
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
      <main className="flex h-dvh min-h-screen flex-col items-center justify-between p-24">
        <div>Settings</div>
        <ServerComponent params={locale}/>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
