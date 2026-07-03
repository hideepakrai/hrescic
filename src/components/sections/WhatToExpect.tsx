"use client";

import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface WhatToExpectProps {
  heading: LocalizedString;
  items: { text: LocalizedString }[];
}

export default function WhatToExpect({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as WhatToExpectProps;

  const heading = getLocalizedString(props.heading, locale);
  const items = (props.items || []).map((item) => ({
    text: getLocalizedString(item.text, locale),
  }));

  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#F8F8F8] rounded-[20px] min-h-[260px] md:min-h-[320px] flex flex-col items-center justify-center text-center px-6 md:px-10">
          <h2 className="text-2xl md:text-[48px] font-medium text-[#555555] mb-4">
            {heading}
          </h2>
          <ul className="text-sm md:text-[18px] text-[#555555] space-y-2 list-disc list-inside text-start">
            {items.map((item, i) => (
              <li key={i}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
