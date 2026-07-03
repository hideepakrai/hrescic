"use client";

import Link from "next/link";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface PortfolioGridProps {
  sectionTitle: LocalizedString;
  sectionDescription: LocalizedString;
  items: { title: LocalizedString; category: LocalizedString; image: string; href: string }[];
}

export default function PortfolioGrid({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as PortfolioGridProps;

  const sectionTitle = getLocalizedString(props.sectionTitle, locale);
  const sectionDescription = getLocalizedString(props.sectionDescription, locale);
  const items = (props.items || []).map((item) => ({
    ...item,
    title: getLocalizedString(item.title, locale),
    category: getLocalizedString(item.category, locale),
  }));

  return (
    <section className="bg-white py-16 md:py-10">
      <div className="container-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold leading-[1.2] text-[#223039] mb-4 md:text-[40px]">
            {sectionTitle}
          </h2>
          <p className="text-[#555555] text-base md:text-lg">
            {sectionDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => {
            const spans = [2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1];
            const span = spans[i % spans.length] || 1;
            const colSpanClass = span === 2 ? "md:col-span-2" : "md:col-span-1";
            
            return (
              <Link
                key={i}
                href={item.href}
                className={`flex flex-col group w-full min-w-0 ${colSpanClass}`}
              >
                <div className="w-full h-[220px] md:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden mb-4 bg-gray-100 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col pl-1">
                  <h3 className="text-[#1F1F1F] text-[16px] md:text-[18px] font-semibold mb-1 group-hover:text-[#3EDA00] transition-colors duration-150">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-[13px] md:text-[14px]">
                    {item.category}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
