import whoWeCreateForData from "@/lib/data/pages/whoWeCreateForPage.json";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";

import WhoWeCreateForPageRenderer from "@/components/pages/whowecreatefor/WhoWeCreateForPageRenderer";
import type { Metadata } from "next";
import { PageBlock } from "@/lib/store/pages/pageType";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metaTitle = whoWeCreateForData.metaTitle;
  const metaDescription = whoWeCreateForData.metaDescription;
  
  return {
    title: metaTitle ? getLocalizedString(metaTitle as any, locale as LocaleCode) : "",
    description: metaDescription ? getLocalizedString(metaDescription as any, locale as LocaleCode) : "",
  };
}

export default async function WhoWeCreateForPage({ params }: Props) {
  const { locale } = await params;
  const sections = (whoWeCreateForData.content || []) as PageBlock[];
  
  return (
    <main>
      <WhoWeCreateForPageRenderer sections={sections} locale={locale as LocaleCode} />
    </main>
  );
}
