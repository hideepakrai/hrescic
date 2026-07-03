import type { LocalizedString } from "@/lib/i18n/locale";
// Cache buster: 2026-06-27T05:18
import homePageJson from "./pages/homePage.json";
import whatWeDoPageJson from "./pages/whatWeDoPage.json";
import whoWeCreateForPageJson from "./pages/whoWeCreateForPage.json";
import letsTalkPageJson from "./pages/letsTalkPage.json";
import headerDataJson from "./pages/headerData.json";
import footerDataJson from "./pages/footerData.json";

export interface PageBlock {
  id: string;
  type: string;
  layout: string;
  adminTitle: string;
  props?: Record<string, unknown>;
  content?: PageBlock[];
}

export interface PageData {
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  sections: PageBlock[];
}

import brandingStrategyJson from "./pages/what-we-do/sub/branding-strategy.json";
import webDigitalJson from "./pages/what-we-do/sub/web-digital.json";
import contentMarketingJson from "./pages/what-we-do/sub/content-marketing.json";
import aiVideoProductionJson from "./pages/what-we-do/sub/ai-video-production.json";
export const pageRegistry: Record<string, PageData> = {
  home: homePageJson as PageData,
  "what-we-do": whatWeDoPageJson as PageData,
  "who-we-create-for": whoWeCreateForPageJson as PageData,
  "lets-talk": letsTalkPageJson as PageData,
  "what-we-do/sub/branding-strategy": brandingStrategyJson as PageData,
  "what-we-do/sub/web-digital": webDigitalJson as PageData,
  "what-we-do/sub/content-marketing": contentMarketingJson as PageData,
  "what-we-do/sub/ai-video-production": aiVideoProductionJson as PageData,
};

export function getPageData(slug: string): PageData | null {
  return pageRegistry[slug] ?? null;
}

export type HeaderData = typeof headerDataJson;
export type FooterData = typeof footerDataJson;

export { headerDataJson as headerData, footerDataJson as footerData };
