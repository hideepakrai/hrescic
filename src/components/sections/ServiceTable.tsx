"use client";

import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface ServiceTableProps {
  sectionTitle: LocalizedString;
  sectionDescription: LocalizedString;
  services: {
    name: LocalizedString;
    problem: LocalizedString;
    deliverable: LocalizedString;
    impact: LocalizedString;
  }[];
}

export default function ServiceTable({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as ServiceTableProps;

  const sectionTitle = getLocalizedString(props.sectionTitle, locale);
  const sectionDescription = getLocalizedString(props.sectionDescription, locale);
  const services = (props.services || []).map((s) => ({
    name: getLocalizedString(s.name, locale),
    problem: getLocalizedString(s.problem, locale),
    deliverable: getLocalizedString(s.deliverable, locale),
    impact: getLocalizedString(s.impact, locale),
    id: getLocalizedString(s.name, "en").toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")
  }));

  return (
    <section className="container-xl mx-auto py-16 sm:px-6 lg:px-8 md:mt-0 mt-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-light tracking-tight text-gray-800 md:text-4xl">
          {sectionTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed whitespace-pre-line">
          {sectionDescription}
        </p>
      </div>

      <div className="mb-3 text-center text-[13px] text-[#666]">
        Service Overview:
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Column 1: Services */}
        <div className="rounded-[16px] bg-[#F5F7FA] p-5">
          <h3 className="text-[16px] font-semibold text-[#1D2931]">Service</h3>
          <div className="my-4 h-px bg-[#00000012]"></div>
          <ul className="space-y-6 text-[15px] text-[#56545c]">
            {services.map((service) => (
              <li key={service.name} id={service.id} className="scroll-mt-24 font-normal">
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Problems */}
        <div className="rounded-[16px] bg-[#EEF1F4] p-5">
          <h3 className="text-[16px] font-semibold text-[#1D2931]">Problem It Solves</h3>
          <div className="my-4 h-px bg-[#00000012]"></div>
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.name} className="flex items-start gap-3 text-[13px] leading-6 text-[#5f5a68]">
                <span className="mt-1 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#37C100] text-[10px] font-bold text-white">
                  ✓
                </span>
                <span>{service.problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: What You Get */}
        <div className="rounded-[16px] bg-[#E9EDF2] p-5">
          <h3 className="text-[16px] font-semibold text-[#1D2931]">What You Get</h3>
          <div className="my-4 h-px bg-[#00000012]"></div>
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.name} className="flex items-start gap-3 text-[13px] leading-6 text-[#5f5a68]">
                <span className="mt-1 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#37C100] text-[10px] font-bold text-white">
                  ✓
                </span>
                <span>{service.deliverable}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Impact */}
        <div className="rounded-[16px] bg-[#E3E8EF] p-5">
          <h3 className="text-[16px] font-semibold text-[#1D2931]">How It Supports Growth</h3>
          <div className="my-4 h-px bg-[#00000012]"></div>
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.name} className="flex items-start gap-3 text-[13px] leading-6 text-[#5f5a68]">
                <span className="mt-1 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#37C100] text-[10px] font-bold text-white">
                  ✓
                </span>
                <span>{service.impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
