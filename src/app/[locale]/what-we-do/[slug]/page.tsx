import { getPageData } from "@/lib/data/pageLoader";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";
import PageRenderer from "@/components/sections/PageRenderer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const validSlugs = ["branding-strategy", "web-digital", "content-marketing", "ai-video-production"] as const;

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
  const data = getPageData(`what-we-do/sub/${slug}`);
  if (!data) return {};
  return {
    title: getLocalizedString(data.metaTitle, locale as LocaleCode),
    description: getLocalizedString(data.metaDescription, locale as LocaleCode),
  };
}

export default async function SubPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!validSlugs.includes(slug as typeof validSlugs[number])) notFound();
  const data = getPageData(`what-we-do/sub/${slug}`);
  if (!data) notFound();
  return (
    <main>
      <PageRenderer sections={data.sections} locale={locale as LocaleCode} />
    </main>
  );
}
