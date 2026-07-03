"use client";

import Button from "@/components/shared/Button";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface HeroCenteredProps {
  heading: LocalizedString;
  subheading?: LocalizedString;
  highlight?: LocalizedString;
  primaryButtonText?: LocalizedString;
  primaryButtonHref?: string;
  secondaryButtonText?: LocalizedString;
  secondaryButtonHref?: string;
}

export default function HeroCentered({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as HeroCenteredProps;

  const heading = getLocalizedString(props.heading, locale);
  const subheading = getLocalizedString(props.subheading, locale);
  const highlight = getLocalizedString(props.highlight, locale);
  const primaryButtonText = getLocalizedString(props.primaryButtonText, locale);
  const secondaryButtonText = getLocalizedString(props.secondaryButtonText, locale);

  return (
    <section className="pt-14 bg-white">
      <div className=" mx-auto text-start max-w-6xl px-4">
        <h1 className="text-4xl md:text-[50px] font-semibold leading-[1.2] text-[#223039] mb-6">
          {heading}
        </h1>
        {highlight && (
          <p className="text-[#41C717] text-xl  font-medium mb-0">
            {highlight}
          </p>
        )}
        {subheading && (
          <p className="text-lg text-[#555555] max-w-xl  text-start mb-0">
            {subheading}
          </p>
        )}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryButtonText && (
              <Button href={props.primaryButtonHref}>{primaryButtonText}</Button>
            )}
            {secondaryButtonText && (
              <Button variant="outline" href={props.secondaryButtonHref}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
