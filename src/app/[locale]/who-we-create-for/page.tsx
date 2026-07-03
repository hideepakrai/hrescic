import { getPageData } from "@/lib/data/pageLoader";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";
import PageRenderer from "@/components/sections/PageRenderer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const data = getPageData("who-we-create-for")!;
  return {
    title: getLocalizedString(data.metaTitle, locale as LocaleCode),
    description: getLocalizedString(data.metaDescription, locale as LocaleCode),
  };
}

export default async function WhoWeCreateForPage({ params }: Props) {
  const { locale } = await params;
  const data = getPageData("who-we-create-for")!;
  return (
    <main>
      <PageRenderer sections={data.sections} locale={locale as LocaleCode} />
    </main>
  );
}
