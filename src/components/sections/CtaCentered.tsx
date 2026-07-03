"use client";

import Button from "@/components/shared/Button";
import type { PageBlock } from "@/lib/data/pageLoader";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getLocalizedString, type LocalizedString } from "@/lib/i18n/locale";

interface CtaCenteredProps {
  heading: LocalizedString;
  description: LocalizedString;
  buttonText: LocalizedString;
  buttonHref: string;
}

export default function CtaCentered({ block }: { block: PageBlock }) {
  const locale = useLocale();
  const props = block.props as unknown as CtaCenteredProps;

  const heading = getLocalizedString(props.heading, locale);
  const description = getLocalizedString(props.description, locale);
  const buttonText = getLocalizedString(props.buttonText, locale);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-3xl text-center px-4">
        <h2 className="text-3xl font-semibold leading-[1.2] text-[#223039] md:text-[40px]">
          {heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#555] max-w-3xl mx-auto">
          {description}
        </p>
        <div className="mt-10">
          <Button href={props.buttonHref}>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
