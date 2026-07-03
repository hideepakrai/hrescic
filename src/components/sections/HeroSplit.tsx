"use client";

import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface HeroSplitProps {
  heading: LocalizedString;
  subheading: LocalizedString;
  primaryButtonText: LocalizedString;
  primaryButtonHref: string;
  secondaryButtonText: LocalizedString;
  secondaryButtonHref: string;
}

export default function HeroSplit({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as HeroSplitProps;

  const heading = getLocalizedString(props.heading, locale);
  const subheading = getLocalizedString(props.subheading, locale);
  const primaryButtonText = getLocalizedString(props.primaryButtonText, locale);
  const secondaryButtonText = getLocalizedString(props.secondaryButtonText, locale);

  return (
    <section className="w-full px-0 pt-3 sm:px-4 lg:px-5">
      <div className="container-xl mx-auto">
        <div className="relative overflow-hidden rounded-[18px] bg-[#1D2931] lg:rounded-[20px]">
          <div className="grid md:grid-cols-[55%_45%] gap-10 items-center px-6 md:px-16 py-20">
            {/* Left Column: Content */}
            <div className="max-w-xl">
              <h1 
                className="text-white font-sans text-3xl sm:text-4xl lg:text-[52px] leading-tight mb-6"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
              <p className="text-gray-300 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                {subheading}
              </p>
              <div className="flex items-center gap-4">
                <a href={props.primaryButtonHref}>
                  <button className="bg-[#37C100] hover:bg-[#2d9802] text-white md:px-6 md:py-3 px-4 py-3 text-xs rounded-full md:text-sm font-medium transition-all duration-300">
                    {primaryButtonText}
                  </button>
                </a>
                <a href={props.secondaryButtonHref}>
                  <button className="flex items-center gap-2 bg-[#FFFFFF1A] hover:bg-[#37C100] hover:text-white text-white md:px-6 md:py-3 px-5 py-3 text-xs rounded-full md:text-sm transition-all duration-300">
                    {secondaryButtonText}
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column: Glassmorphic Masonry Panels */}
            <div className="hidden md:grid grid-cols-6 grid-rows-3 gap-5 h-[360px] w-full md:-ms-8">
              <div className="relative rounded-2xl bg-[#FFFFFF14] col-span-3 row-span-2 col-start-4 row-start-1 border border-white/10"></div>
              <div className="relative rounded-2xl bg-[#FFFFFF1A] col-span-2 row-span-1 col-start-2 row-start-2 border border-white/10"></div>
              <div className="relative rounded-2xl bg-[#FFFFFF12] col-span-2 row-span-1 col-start-5 row-start-3 border border-white/10"></div>
              <div className="relative rounded-2xl bg-[#FFFFFF1F] col-span-3 row-span-1 col-start-2 row-start-3 border border-white/10"></div>
              <div className="relative rounded-2xl bg-[#FFFFFF18] hidden border border-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
