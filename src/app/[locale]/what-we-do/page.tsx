import whatWeDoData from "@/lib/data/pages/whatWeDoPage.json";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";

import WhatWeDoPageRenderer from "@/components/pages/whatwedo/WhatWeDoPageRenderer";
import type { Metadata } from "next";
import { PageBlock } from "@/lib/store/pages/pageType";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metaTitle = whatWeDoData.metaTitle;
  const metaDescription = whatWeDoData.metaDescription;
  
  return {
    title: metaTitle ? getLocalizedString(metaTitle as any, locale as LocaleCode) : "",
    description: metaDescription ? getLocalizedString(metaDescription as any, locale as LocaleCode) : "",
  };
}

export default async function WhatWeDoPage({ params }: Props) {
  const { locale } = await params;
  const sections = (whatWeDoData.content || []) as PageBlock[];
  
  return (
    <main>
      <WhatWeDoPageRenderer sections={sections} locale={locale as LocaleCode} />
    </main>
  );
}
