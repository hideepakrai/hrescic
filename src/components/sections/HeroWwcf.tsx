"use client";

import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface HeroWwcfProps {
  heading: LocalizedString;
  highlight: LocalizedString;
  primaryButtonText: LocalizedString;
  primaryButtonHref: string;
  secondaryButtonText: LocalizedString;
  secondaryButtonHref: string;
}

export default function HeroWwcf({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as HeroWwcfProps;

  const heading = getLocalizedString(props.heading, locale);
  const highlight = getLocalizedString(props.highlight, locale);
  const primaryText = getLocalizedString(props.primaryButtonText, locale);
  const secondaryText = getLocalizedString(props.secondaryButtonText, locale);

  return (
    <section className="relative bg-white pt-20 pb-8 md:pt-28 md:pb-12 overflow-hidden">
      <div className="container-xl mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-semibold leading-[1.15] text-[#1D2931] mb-4">
          {heading}
        </h1>
        <p className="text-xl sm:text-2xl md:text-[28px] text-[#37C100] font-medium mb-8 leading-snug">
          {highlight}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={props.primaryButtonHref}>
            <button className="bg-[#37C100] hover:bg-[#2d9802] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all">
              {primaryText}
            </button>
          </a>
          <a href={props.secondaryButtonHref}>
            <button className="border border-[#37C100] text-[#1D2931] hover:bg-[#37C100] hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all">
              {secondaryText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
