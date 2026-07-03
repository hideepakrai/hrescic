"use client";

import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";
import MasonryShuffleBlocks from "./MasonryShuffleBlocks";

interface HeroSubPageProps {
  heading: LocalizedString;
  subheading: LocalizedString;
  primaryButtonText: LocalizedString;
  primaryButtonHref: string;
  secondaryButtonText: LocalizedString;
  secondaryButtonHref: string;
  reviewNote: LocalizedString;
}

export default function HeroSubPage({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as HeroSubPageProps;

  const heading = getLocalizedString(props.heading, locale);
  const subheading = getLocalizedString(props.subheading, locale);
  const primaryText = getLocalizedString(props.primaryButtonText, locale);
  const secondaryText = getLocalizedString(props.secondaryButtonText, locale);
  const reviewNote = getLocalizedString(props.reviewNote, locale);

  return (
    <section className="w-full px-0 pt-3 sm:px-4 lg:px-5 pb-0 md:pb-8">
      <div className="container-xl mx-auto">
        <div className="relative overflow-hidden rounded-[18px] mx-4 md:mx-0 bg-[#1D2931] lg:rounded-[20px]">
          <div className="grid md:grid-cols-[55%_45%] gap-10 items-center px-6 md:px-16 py-20">
            <div className="max-w-xl">
              <h1 className="text-white font-sans text-3xl sm:text-4xl lg:text-[50px] leading-tight mb-6 whitespace-pre-line">
                {heading}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                {subheading}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={props.primaryButtonHref}>
                  <button className="bg-[#37C100] hover:bg-[#2d9802] text-white md:px-8 md:py-3.5 px-6 py-3 rounded-full text-xs md:text-sm font-semibold transition-all">
                    {primaryText}
                  </button>
                </a>
                <a href={props.secondaryButtonHref}>
                  <button className="flex items-center gap-2 bg-[#FFFFFF1A] hover:bg-[#37C100] hover:text-white text-white md:px-8 md:py-3.5 px-6 py-3 rounded-full text-xs md:text-sm transition-all">
                    {secondaryText}
                  </button>
                </a>
              </div>
              <p className="mt-4 text-[13px] text-white/60 italic">
                {reviewNote}
              </p>
            </div>
            <MasonryShuffleBlocks />
          </div>
        </div>
      </div>
    </section>
  );
}
