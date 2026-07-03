"use client";

import type { LocaleCode } from "@/lib/i18n/locale";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import type { PageBlock } from "@/lib/data/pageLoader";
import HeroSection from "./HeroSection";
import LogoCloud from "./LogoCloud";
import ServiceCards from "./ServiceCards";
import IndustryCards from "./IndustryCards";
import StatsBar from "./StatsBar";
import PortfolioGrid from "./PortfolioGrid";
import CtaCentered from "./CtaCentered";
import HeroSplit from "./HeroSplit";
import ServiceTable from "./ServiceTable";
import ProcessSteps from "./ProcessSteps";
import PricingTable from "./PricingTable";
import ComparisonTable from "./ComparisonTable";
import DynamicForm from "./DynamicForm";
import ContactInfo from "./ContactInfo";
import VideoEmbed from "./VideoEmbed";
import IndustryDetailCards from "./IndustryDetailCards";
import HeroCentered from "./HeroCentered";
import LetsTalkForm from "./LetsTalkForm";
import WhatToExpect from "./WhatToExpect";
import HeroSubPage from "./HeroSubPage";
import FeatureGridSection from "./FeatureGridSection";
import PracticalFlowSection from "./PracticalFlowSection";
import CtaSubPage from "./CtaSubPage";
import HeroWwcf from "./HeroWwcf";

const sectionRegistry: Record<string, React.FC<{ block: PageBlock }>> = {
  hero: HeroSection,
  "hero-split": HeroSplit,
  "hero-centered": HeroCentered,
  "logo-cloud": LogoCloud,
  "service-cards": ServiceCards,
  "industry-cards": IndustryCards,
  "stats-bar": StatsBar,
  "portfolio-grid": PortfolioGrid,
  "cta-centered": CtaCentered,
  "service-table": ServiceTable,
  "process-steps": ProcessSteps,
  "pricing-table": PricingTable,
  "comparison-table": ComparisonTable,
  form: DynamicForm,
  "contact-info": ContactInfo,
  "video-embed": VideoEmbed,
  "industry-detail-cards": IndustryDetailCards,
  "lets-talk-form": LetsTalkForm,
  "what-to-expect": WhatToExpect,
  "hero-sub-page": HeroSubPage,
  "feature-grid": FeatureGridSection,
  "practical-flow": PracticalFlowSection,
  "cta-sub-page": CtaSubPage,
  "hero-wwcf": HeroWwcf,
};

export default function PageRenderer({ sections, locale }: { sections: PageBlock[]; locale: LocaleCode }) {
  return (
    <LocaleProvider locale={locale}>
      {sections.map((block) => {
        const Section = sectionRegistry[block.type];
        if (!Section) {
          console.warn(`Unknown section type: ${block.type}`);
          return null;
        }
        return <Section key={block.id} block={block} />;
      })}
    </LocaleProvider>
  );
}
