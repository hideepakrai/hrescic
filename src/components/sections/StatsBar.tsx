"use client";

import Button from "@/components/shared/Button";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface StatsBarProps {
  background: string;
  textColor: string;
  accentColor: string;
  stats: { value: string; label: LocalizedString }[];
}

export default function StatsBar({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as StatsBarProps;
  const stats = (props.stats || []).map((s) => ({
    ...s,
    label: getLocalizedString(s.label, locale),
  }));

  return (
    <section className="bg-white py-16 md:py-18">
      <div className="container-xl mx-auto">
        <div className="rounded-2xl bg-[#1D2931] p-10 text-center text-white md:p-14">
          <h3 className="mx-auto max-w-[960px] px-0 py-5 text-[24px] font-semibold leading-[1.2] md:mb-12 md:px-4 md:text-[40px]">
           Delivering on-demand excellence <br></br>for brands around the world
          </h3>
          <div className="mb-10 grid grid-cols-1 gap-8 md:mb-12 md:grid-cols-3 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 text-[#41C717]">
                  <h3 className="text-4xl font-semibold lg:text-[50px]">{stat.value}</h3>
                </div>
                <p className="mx-auto max-w-[250px] text-[14px] font-light text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Button href="/lets-talk">Let's Talk</Button>
        </div>
      </div>
    </section>
  );
}
