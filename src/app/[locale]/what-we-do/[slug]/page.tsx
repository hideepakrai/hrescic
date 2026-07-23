import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";

import WhatWeDoSubPageRenderer from "@/components/pages/whatwedo/WhatWeDoSubPageRenderer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBlock } from "@/lib/store/pages/pageType";

import brandingStrategyData from "@/lib/data/pages/what-we-do/sub/branding-strategy.json";
import webDigitalData from "@/lib/data/pages/what-we-do/sub/web-digital.json";
import contentMarketingData from "@/lib/data/pages/what-we-do/sub/content-marketing.json";
import aiVideoProductionData from "@/lib/data/pages/what-we-do/sub/ai-video-production.json";

const validSlugs = ["branding-strategy", "web-digital", "content-marketing", "ai-video-production"] as const;

function getSubPageData(slug: string) {
  switch (slug) {
    case "branding-strategy": return brandingStrategyData;
    case "web-digital": return webDigitalData;
    case "content-marketing": return contentMarketingData;
    case "ai-video-production": return aiVideoProductionData;
    default: return null;
  }
}

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return validSlugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "hr", slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!validSlugs.includes(slug as typeof validSlugs[number])) return {};
  const data = getSubPageData(slug);
  if (!data?.metaTitle) return {};
  return {
    title: getLocalizedString(data.metaTitle as any, locale as LocaleCode),
    description: data.metaDescription ? getLocalizedString(data.metaDescription as any, locale as LocaleCode) : "",
  };
}

export default async function SubPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!validSlugs.includes(slug as typeof validSlugs[number])) notFound();
  const data = getSubPageData(slug);
  if (!data) notFound();
  
  const sections = (data.content || []) as PageBlock[];
  
  return (
    <main>
      <WhatWeDoSubPageRenderer sections={sections} locale={locale as LocaleCode} slug={slug} />
    </main>
  );
}
