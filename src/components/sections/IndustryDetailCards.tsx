"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface IndustryDetailCardsProps {
  sectionTitle: LocalizedString;
  sectionSubtext: LocalizedString;
  industries: {
    slug: string;
    image: string;
    title: LocalizedString;
    pain: LocalizedString;
    painQuestion: LocalizedString;
    painReason: LocalizedString;
    need: LocalizedString;
    needText: LocalizedString;
    stats: LocalizedString;
    suggestedPlan: LocalizedString;
    href: string;
  }[];
}

export default function IndustryDetailCards({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as IndustryDetailCardsProps;

  const sectionTitle = getLocalizedString(props.sectionTitle, locale);
  const sectionSubtext = getLocalizedString(props.sectionSubtext, locale);
  const industries = (props.industries || []).map((ind) => ({
    ...ind,
    title: getLocalizedString(ind.title, locale),
    pain: getLocalizedString(ind.pain, locale),
    painQuestion: getLocalizedString(ind.painQuestion, locale),
    painReason: getLocalizedString(ind.painReason, locale),
    need: getLocalizedString(ind.need, locale),
    needText: getLocalizedString(ind.needText, locale),
    stats: getLocalizedString(ind.stats, locale),
    suggestedPlan: getLocalizedString(ind.suggestedPlan, locale),
  }));

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20">
      <div className="container-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-light text-[#1D2931] mb-3">
            {sectionTitle}
          </h2>
          <p className="text-[15px] sm:text-base text-[#555] max-w-3xl mx-auto">
            {sectionSubtext}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {industries.map((industry) => (
            <div key={industry.slug} className="bg-white rounded-[20px] overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="h-[280px] md:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-[#1D2931] mb-5">{industry.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[#666] uppercase tracking-wider mb-1">{industry.pain}</p>
                      <p className="text-sm text-[#555] leading-relaxed">{industry.painQuestion}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#666] uppercase tracking-wider mb-1">{industry.painReason}</p>
                      <p className="text-sm text-[#555] leading-relaxed">{industry.need}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#666] uppercase tracking-wider mb-1">{industry.needText}</p>
                    </div>
                    <div className="pt-2">
                      <span className="inline-block bg-[#37C100]/10 text-[#37C100] text-sm font-semibold px-3 py-1 rounded-full">
                        {industry.stats}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-[#666]">Suggested: <span className="font-semibold">{industry.suggestedPlan}</span></span>
                    <Link href={industry.href} className="group flex items-center gap-1 text-sm font-medium text-[#37C100] hover:text-[#2d9802]">
                      See {industry.title.split(" ")[0]} Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
