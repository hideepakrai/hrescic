"use client";

import { FaCircleCheck } from "react-icons/fa6";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface FeatureColumn {
  title: LocalizedString;
  description: LocalizedString;
}

interface FeatureGridSectionProps {
  title: LocalizedString;
  columns: FeatureColumn[];
}

export default function FeatureGridSection({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as FeatureGridSectionProps;

  const title = getLocalizedString(props.title, locale);
  const columns = (props.columns || []).map((col) => ({
    title: getLocalizedString(col.title, locale),
    description: getLocalizedString(col.description, locale),
  }));

  return (
    <section className="container-xl mx-auto py-18 my-20 md:my-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center px-4 md:px-0">
        <h2 className="text-2xl font-semibold text-[#1D2931] md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 px-4 md:px-0">
        {columns.map((col, index) => (
          <div key={index} className="rounded-[16px] bg-[#F5F7FA] p-6 border border-black/5 hover:border-[#37C100]/20 transition-all">
            <h3 className="text-[17px] font-bold text-[#1D2931] mb-3">
              {col.title}
            </h3>
            <div className="h-px w-full bg-[#00000012] mb-4" />
            <div className="flex items-start gap-3">
              <span className="mt-0.5 pt-1">
                <FaCircleCheck className="text-[#37C100] text-lg" />
              </span>
              <p className="text-sm leading-6 text-black/75">{col.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
