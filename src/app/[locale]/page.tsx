import homeData from "@/lib/data/pages/homePageV1.json";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";

import HomePageRenderer from "@/components/pages/homepages/HomePageRenderer";
import type { Metadata } from "next";
import { PageBlock } from "@/lib/store/pages/pageType";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metaTitle = homeData.metaTitle;
  const metaDescription = homeData.metaDescription;
  
  return {
    title: metaTitle ? getLocalizedString(metaTitle as any, locale as LocaleCode) : "",
    description: metaDescription ? getLocalizedString(metaDescription as any, locale as LocaleCode) : "",
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const sections = (homeData.content || []) as PageBlock[];
  
  return (
    <main>
      <HomePageRenderer sections={sections} locale={locale as LocaleCode} />
    </main>
  );
}
