import LanguageChanger from "@/components/ui/language-changer";
import { useTranslation } from 'react-i18next';

export default function ServerComponent({
  params: { locale },
}: {
  params: { locale: any };
}) {
  // const { t } = await useTranslation(locale);

  // return <div>{t("title")}</div>;
  return <div>title</div>;
}
