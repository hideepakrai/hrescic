import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";
import IndustrySubPage from "@/components/sections/who-we-create-for/IndustrySubPage";
import CaseStudyPage from "@/components/sections/who-we-create-for/CaseStudyPage";

import tourismTravelData from "@/lib/data/pages/who-we-create-for/sub/tourism-travel.json";
import educationELearningData from "@/lib/data/pages/who-we-create-for/sub/education-e-learning.json";
import healthPharmaBeautyData from "@/lib/data/pages/who-we-create-for/sub/health-pharma-beauty.json";
import localBoutiqueBrandsData from "@/lib/data/pages/who-we-create-for/sub/local-boutique-brands.json";
import myrentData from "@/lib/data/pages/who-we-create-for/sub/myrent.json";
import cdcData from "@/lib/data/pages/who-we-create-for/sub/cdc.json";
import castaniaData from "@/lib/data/pages/who-we-create-for/sub/castania.json";
import polidermaData from "@/lib/data/pages/who-we-create-for/sub/poliderma.json";
import expoLifeFarBeyondData from "@/lib/data/pages/who-we-create-for/sub/expo-life-far-beyond.json";
import lorealData from "@/lib/data/pages/who-we-create-for/sub/loreal.json";
import navadaData from "@/lib/data/pages/who-we-create-for/sub/navada.json";
import minglanjeVKlanjcuData from "@/lib/data/pages/who-we-create-for/sub/minglanje-v-klanjcu.json";
import idsData from "@/lib/data/pages/who-we-create-for/sub/ids.json";

const industrySlugs = ["tourism-travel", "education-e-learning", "health-pharma-beauty", "local-boutique-brands"];
const caseStudySlugs = ["myrent", "cdc", "castania", "poliderma", "expo-life-far-beyond", "loreal", "navada", "minglanje-v-klanjcu", "ids"];
const allSlugs = [...industrySlugs, ...caseStudySlugs];

const dataMap: Record<string, Record<string, unknown>> = {
  "tourism-travel": tourismTravelData,
  "education-e-learning": educationELearningData,
  "health-pharma-beauty": healthPharmaBeautyData,
  "local-boutique-brands": localBoutiqueBrandsData,
  "myrent": myrentData,
  "cdc": cdcData,
  "castania": castaniaData,
  "poliderma": polidermaData,
  "expo-life-far-beyond": expoLifeFarBeyondData,
  "loreal": lorealData,
  "navada": navadaData,
  "minglanje-v-klanjcu": minglanjeVKlanjcuData,
  "ids": idsData,
};

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return allSlugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "hr", slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!allSlugs.includes(slug)) return {};
  const data = dataMap[slug];
  return {
    title: getLocalizedString(data.metaTitle as { en: string; hr?: string }, locale as LocaleCode),
    description: getLocalizedString(data.metaDescription as { en: string; hr?: string }, locale as LocaleCode),
  };
}

function isLocalizedString(value: unknown): value is { en: string; hr?: string } {
  return typeof value === "object" && value !== null && "en" in value && typeof (value as Record<string, unknown>).en === "string";
}

function resolveLocaleStrings(obj: Record<string, unknown>, locale: LocaleCode): Record<string, unknown> {
  if (typeof obj !== "object" || obj === null) return obj;
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (isLocalizedString(value)) {
      result[key] = getLocalizedString(value, locale);
    } else if (Array.isArray(value)) {
      result[key] = value.map((item) => {
        if (isLocalizedString(item)) return getLocalizedString(item, locale);
        if (typeof item === "object" && item !== null) return resolveLocaleStrings(item as Record<string, unknown>, locale);
        return item;
      });
    } else if (typeof value === "object" && value !== null) {
      result[key] = resolveLocaleStrings(value as Record<string, unknown>, locale);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export default async function WhoWeCreateForSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!allSlugs.includes(slug)) notFound();
  const rawData = dataMap[slug];
  const localeCode = locale as LocaleCode;
  const resolvedData = resolveLocaleStrings(rawData, localeCode);

  const isIndustry = industrySlugs.includes(slug);
  const Component = isIndustry ? IndustrySubPage : CaseStudyPage;

  return (
    <main>
      <Component data={resolvedData as never} />
    </main>
  );
}
