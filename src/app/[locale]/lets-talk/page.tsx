import letsTalkData from "@/lib/data/pages/letsTalkPage.json";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";

import LetsTalkPageRenderer from "@/components/pages/letstalk/LetsTalkPageRenderer";
import type { Metadata } from "next";
import { PageBlock } from "@/lib/store/pages/pageType";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metaTitle = letsTalkData.metaTitle;
  const metaDescription = letsTalkData.metaDescription;
  
  return {
    title: metaTitle ? getLocalizedString(metaTitle as any, locale as LocaleCode) : "",
    description: metaDescription ? getLocalizedString(metaDescription as any, locale as LocaleCode) : "",
  };
}

export default async function LetsTalkPage({ params }: Props) {
  const { locale } = await params;
  const sections = (letsTalkData.content || []) as PageBlock[];
  
  return (
    <main>
      <LetsTalkPageRenderer sections={sections} locale={locale as LocaleCode} />
    </main>
  );
}
