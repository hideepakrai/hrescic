"use client";

import { Play } from "lucide-react";
import { useState, useMemo } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";

interface IndustryData {
  hero: {
    heading: string;
    subtext: string;
    button1Text: string;
    button1Href: string;
    button2Text: string;
    button2Href: string;
    image: string;
    breadcrumb: string;
    breadcrumbLabel: string;
    headingGradient?: string;
  };
  theme: Record<string, string>;
  reality: {
    heading: string;
    subtext: string;
    whyHeading: string;
    whyText: string;
    whatHeading: string;
    issues: string[];
  };
  growth: {
    heading: string;
    text: string;
    image: string;
    scaleHeading: string;
    scaleItems: string[];
    quote: string;
  };
  cases: {
    heading: string;
    subheading: string;
    description?: string;
    cards: { title: string; highlight: string; text: string; image: string; bg: string }[];
    ctaText: string;
    ctaHref: string;
  };
  structure: {
    heading: string;
    text: string;
    accentText: string;
    fullText: string;
    bottomText?: string;
    image?: string;
    images?: { big: string; small1: string; small2: string };
  };
  cta: {
    heading: string;
    subtext?: string;
    button1Text: string;
    button1Href: string;
    button2Text: string;
    button2Href: string;
  };
}

const AlertDot = ({ color }: { color: string }) => (
  <span
    className="mt-[3px] flex h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full text-[14px] font-bold leading-none text-white"
    style={{ backgroundColor: color }}
  >
    !
  </span>
);

const QuoteMark = ({ bgColor, textColor }: { bgColor: string; textColor: string }) => (
  <span
    className="flex h-[33px] w-[35px] min-w-[30px] items-center justify-center rounded-[6px] text-[20px] font-semibold leading-none"
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    !
  </span>
);

const renderHighlightedText = (fullText: string, accentText: string, accentColor: string, defaultColor: string) => {
  if (!accentText) return <span style={{ color: defaultColor }}>{fullText}</span>;
  const parts = fullText.split(accentText);
  if (parts.length < 2) return <span style={{ color: defaultColor }}>{fullText}</span>;
  return (
    <span style={{ color: defaultColor }}>
      {parts[0]}
      <span style={{ color: accentColor }} className="ps-1">
        {accentText}
      </span>
      {parts[1]}
    </span>
  );
};

const renderHeroHeading = (heading: string, accentColor: string) => {
  const highlights = [
    "They win on meaning.",
    "Pobjeđuju na značenju."
  ];

  const foundHighlight = highlights.find((h) => heading.includes(h));

  if (foundHighlight && accentColor) {
    const parts = heading.split(foundHighlight);
    return (
      <>
        {parts[0]}
        <span style={{ color: accentColor }}>{foundHighlight}</span>
        {parts[1]}
      </>
    );
  }

  return heading;
};


const GoldButton = ({ children, href, bgColor, textColor, isTourism }: { children: React.ReactNode; href?: string; bgColor: string; textColor: string; isTourism?: boolean }) => {
  const baseClass = `inline-block w-full sm:w-fit rounded-full py-[13px] sm:py-[14px] text-center leading-[1.35] transition duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] ${
    isTourism ? "font-semibold text-[12px] sm:text-[15px] px-3 sm:px-7" : "font-medium text-[14px] sm:text-[15px] px-5 sm:px-7"
  }`;
  const style = { backgroundColor: bgColor, color: textColor };

  if (href) {
    return <a href={href} className={baseClass} style={style}>{children}</a>;
  }
  return <button type="button" className={baseClass} style={style}>{children}</button>;
};

import { useAppSelector } from "@/lib/store/hooks";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useEditable } from "@/lib/store/pages/useEditable";
import EditableText from "@/components/shared/EditableText";

export default function IndustrySubPage({ data }: { data: IndustryData }) {
  const { hero, theme, reality, growth, cases, structure, cta } = data;
  const [loadVideo, setLoadVideo] = useState(false);

  const pathname = usePathname();
  const locale = useLocale();
  const currentPages = useAppSelector((state) => state.pages.currentPages);

  const slug = useMemo(() => {
    if (!pathname) return "home";
    const segments = pathname.split('/').filter(Boolean);
    const hasLocalePrefix = SUPPORTED_LOCALES.includes(segments[0] as any);
    const pathSegments = hasLocalePrefix ? segments.slice(1) : segments;
    return pathSegments.join('/') || "home";
  }, [pathname]);

  const blockId = currentPages?.content?.[0]?.id;
  const { isEditable, handleChange } = useEditable(blockId || "");

  // Read raw localizable props from Redux if slug matches
  const reduxProps = useMemo(() => {
    if (currentPages && (currentPages.slug === slug || currentPages.slug?.replace(/\/sub\//g, '/') === slug)) {
      const content = Array.isArray(currentPages.content) ? currentPages.content[0] : null;
      return content?.props;
    }
    return null;
  }, [currentPages, slug]);

  const val = (localizableField: any) => {
    if (localizableField && typeof localizableField === "object") {
      return localizableField[locale] || localizableField["en"] || "";
    }
    return localizableField || "";
  };

  const isTourism = hero.breadcrumbLabel.toLowerCase().includes("tourism");
  const heroTextColor = isTourism ? "#ffffff" : theme.textColor;
  const bodyTextColor = isTourism ? "#555555" : theme.textColor;
  const growthTextColor = isTourism ? "#ffffff" : theme.textColor;
  const ctaTextColor = isTourism ? "#555555" : theme.textColor;
  const videoId = "A5Euw5nAYxo";

  const ytOpts: YouTubeProps["opts"] = useMemo(() => ({
    width: "100%", height: "100%",
    playerVars: { autoplay: 1, controls: 1, rel: 0, modestbranding: 1 },
  }), []);

  const handleManualPlay = () => setLoadVideo(true);
  const handlePlay = (_e: YouTubeEvent<number>) => {};

  return (
    <div className="w-full bg-white overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* HERO */}
      <section className="w-full px-3 py-3 sm:px-5 sm:py-5">
        <div className="mx-auto container-xl">
          <div className="grid overflow-hidden rounded-[18px] lg:grid-cols-[0.98fr_1.02fr]" style={{ backgroundColor: theme.bgColor }}>
            <div className="flex items-center order-2 lg:order-1">
              <div className="w-full px-4 py-7 sm:px-8 sm:py-10 md:px-10 md:py-7 lg:pb-[74px] lg:ps-[75px] lg:pe-8">
                <div className="mb-7 flex flex-wrap items-center gap-2 sm:gap-3 sm:mb-10 lg:mb-12">
                  <EditableText
                    text={reduxProps ? val(reduxProps.hero?.breadcrumb) : hero.breadcrumb}
                    editable={isEditable}
                    onChange={handleChange(`props.hero.breadcrumb.${locale}`)}
                    tag="span"
                    className="text-[14px] sm:text-[20px] font-semibold"
                    style={{ color: heroTextColor }}
                  />
                  <span className="text-[#9b9b9b]">|</span>
                  <EditableText
                    text={reduxProps ? val(reduxProps.hero?.breadcrumbLabel) : hero.breadcrumbLabel}
                    editable={isEditable}
                    onChange={handleChange(`props.hero.breadcrumbLabel.${locale}`)}
                    tag="span"
                    className="text-[13px] italic"
                    style={{ color: heroTextColor }}
                  />
                </div>
                <div className="pt-8">
                  {isEditable ? (
                    <EditableText
                      text={reduxProps ? val(reduxProps.hero?.heading) : hero.heading}
                      editable={isEditable}
                      onChange={handleChange(`props.hero.heading.${locale}`)}
                      tag="h1"
                      className="pe-4 text-[28px] sm:text-[34px] md:text-[40px] lg:text-[38px] font-[400] leading-[1.08] tracking-[-0.03em]"
                      style={{
                        fontFamily: isTourism ? "Georgia, Times New Roman, serif" : (hero.headingGradient ? "Inter, Georgia, Times New Roman, serif" : "Georgia, Times New Roman, serif"),
                        color: isTourism ? "#fff" : theme.textColor,
                        backgroundImage: !isTourism && hero.headingGradient ? hero.headingGradient : "none",
                      }}
                      multiline
                    />
                  ) : isTourism ? (
                    <h1 className="pe-4 hero-title text-[28px] sm:text-[34px] md:text-[40px] lg:text-[38px] font-[400] leading-[1.08] tracking-[-0.03em] text-[#fff]"
                      style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                      <span className="text-[#3EDA00] pe-2">Tourism & Travel brands</span>
                      <br className="hidden lg:block" />
                      need more than campaigns. They need clarity that converts. Directly.
                    </h1>
                  ) : hero.headingGradient ? (
                    <h1 className="pe-4 text-[28px] sm:text-[34px] md:text-[40px] lg:text-[38px] font-[400] leading-[1.08] tracking-[-0.03em] text-transparent bg-clip-text"
                      style={{ fontFamily: "Inter, Georgia, Times New Roman, serif", backgroundImage: hero.headingGradient }}>
                      {hero.heading}
                    </h1>
                  ) : (
                    <h1 className="pe-4 text-[28px] sm:text-[34px] md:text-[40px] lg:text-[38px] font-[400] leading-[1.08] tracking-[-0.03em]"
                      style={{ fontFamily: "Georgia, Times New Roman, serif", color: theme.textColor }}>
                      {renderHeroHeading(hero.heading, theme.accentColor)}
                    </h1>
                  )}
                  <EditableText
                    text={reduxProps ? val(reduxProps.hero?.subtext) : hero.subtext}
                    editable={isEditable}
                    onChange={handleChange(`props.hero.subtext.${locale}`)}
                    tag="p"
                    className="mt-5 sm:mt-6 lg:mt-4 max-w-[430px] text-[15px] sm:text-[17px] leading-[1.75]"
                    style={{ color: heroTextColor }}
                    multiline
                  />
                  <div className="mt-4 sm:mt-8 lg:mt-6 flex flex-col gap-3">
                    <GoldButton bgColor={theme.buttonColor} textColor={theme.buttonTextColor} href={hero.button1Href} isTourism={isTourism}>
                      <EditableText
                        text={reduxProps ? val(reduxProps.hero?.button1Text) : hero.button1Text}
                        editable={isEditable}
                        onChange={handleChange(`props.hero.button1Text.${locale}`)}
                        tag="span"
                      />
                    </GoldButton>
                    <GoldButton bgColor={theme.buttonColor} textColor={theme.buttonTextColor} href={hero.button2Href} isTourism={isTourism}>
                      <EditableText
                        text={reduxProps ? val(reduxProps.hero?.button2Text) : hero.button2Text}
                        editable={isEditable}
                        onChange={handleChange(`props.hero.button2Text.${locale}`)}
                        tag="span"
                      />
                    </GoldButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 p-[2px]">
              {isTourism ? (
                <a href="#video-section" className="block relative h-[260px] overflow-hidden sm:h-[340px] md:h-[430px] lg:h-full lg:min-h-[552px] cursor-pointer group">
                  <img src={hero.image} alt={hero.breadcrumbLabel} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_28%,rgba(255,255,255,0)_100%)] group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all group-hover:bg-black/30 group-hover:scale-105">
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 ml-1 fill-white" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative h-[260px] overflow-hidden sm:h-[340px] md:h-[430px] lg:h-full lg:min-h-[552px]">
                  <img src={hero.image} alt={hero.breadcrumbLabel} className="h-full w-full object-cover object-center" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_28%,rgba(255,255,255,0)_100%)]" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
        <div className="mx-auto container-xl rounded-[2px]">
          <div className="px-4 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-[120px] lg:py-[68px]">
            <div className="mx-auto text-center" style={{ maxWidth: reality.issues.length > 4 ? "700px" : undefined }}>
              <EditableText
                text={reduxProps ? val(reduxProps.reality?.heading) : reality.heading}
                editable={isEditable}
                onChange={handleChange(`props.reality.heading.${locale}`)}
                tag="h2"
                className="text-[26px] sm:text-[31px] md:text-[38px] lg:text-[40px] font-normal leading-[1.2] tracking-[-0.02em]"
                style={{ fontFamily: "Georgia, Times New Roman, serif", color: theme.textColor }}
                multiline
              />
              <EditableText
                text={reduxProps ? val(reduxProps.reality?.subtext) : reality.subtext}
                editable={isEditable}
                onChange={handleChange(`props.reality.subtext.${locale}`)}
                tag="p"
                className="mx-auto mt-3 max-w-[420px] text-[14px] sm:text-[15px] leading-[1.55]"
                style={{ color: bodyTextColor }}
                multiline
              />
            </div>
            <div className="mt-10 sm:mt-[60px] grid gap-y-10 lg:grid-cols-[1fr_1.14fr] lg:gap-x-[70px] xl:gap-x-[110px]">
              <div className="max-w-[390px]">
                <EditableText
                  text={reduxProps ? val(reduxProps.reality?.whyHeading) : reality.whyHeading}
                  editable={isEditable}
                  onChange={handleChange(`props.reality.whyHeading.${locale}`)}
                  tag="h3"
                  className="text-[16px] sm:text-[17px] font-semibold leading-[1.3]"
                  style={{ color: theme.textColor }}
                />
                <EditableText
                  text={reduxProps ? val(reduxProps.reality?.whyText) : reality.whyText}
                  editable={isEditable}
                  onChange={handleChange(`props.reality.whyText.${locale}`)}
                  tag="p"
                  className="mt-4 sm:mt-5 text-[22px] sm:text-[26px] md:text-[26px] font-normal leading-[1.28] tracking-[-0.015em]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif", color: bodyTextColor }}
                  multiline
                />
              </div>
              <div className="max-w-[520px]">
                <EditableText
                  text={reduxProps ? val(reduxProps.reality?.whatHeading) : reality.whatHeading}
                  editable={isEditable}
                  onChange={handleChange(`props.reality.whatHeading.${locale}`)}
                  tag="h3"
                  className="text-[16px] sm:text-[17px] font-semibold leading-[1.3]"
                  style={{ color: theme.textColor }}
                />
                <div className="mt-4 sm:mt-5 space-y-[14px]">
                  {reality.issues.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 w-full">
                      <AlertDot color={theme.accentColor} />
                      <EditableText
                        text={reduxProps && Array.isArray(reduxProps.reality?.issues) ? val(reduxProps.reality.issues[i]) : item}
                        editable={isEditable}
                        onChange={handleChange(`props.reality.issues.${i}.${locale}`)}
                        tag="p"
                        className="text-[14px] sm:text-[15px] leading-[1.5] w-full"
                        style={{ color: bodyTextColor }}
                        multiline
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO (only for tourism) */}
      {hero.breadcrumbLabel.includes("Tourism") && (
        <section id="video-section" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10 mb-14">
          <div className="mx-auto container-xl">
            <div
              className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[600px] mt-8"
              style={{
                backgroundColor: theme.bgColor,
                backgroundImage: !loadVideo ? `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')` : "none",
                backgroundSize: "cover", backgroundPosition: "center",
              }}
            >
              {!loadVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button onClick={handleManualPlay}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/30"
                    aria-label="Play video" type="button">
                    <Play className="h-8 w-8 fill-white" />
                  </button>
                </div>
              )}
              {loadVideo && (
                <div className="absolute inset-0">
                  <YouTube videoId={videoId} opts={ytOpts} className="h-[600px] w-full" iframeClassName="h-full w-full" onPlay={handlePlay} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* GROWTH */}
      <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
        <div className="mx-auto container-xl">
          <div className="overflow-hidden rounded-[14px]" style={{ backgroundColor: theme.growthPanelBg }}>
            <div className="grid border-b border-[#e2dbd7] lg:grid-cols-[1.02fr_0.98fr]" style={{ backgroundColor: theme.growthBg }}>
              <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:ps-[86px] lg:pe-[24px] lg:pb-[56px] lg:pt-[34px]">
                <EditableText
                  text={reduxProps ? val(reduxProps.growth?.heading) : growth.heading}
                  editable={isEditable}
                  onChange={handleChange(`props.growth.heading.${locale}`)}
                  tag="h3"
                  className="text-[14px] sm:text-[22px] font-semibold"
                  style={{ color: theme.accentColor }}
                />
                <EditableText
                  text={reduxProps ? val(reduxProps.growth?.text) : growth.text}
                  editable={isEditable}
                  onChange={handleChange(`props.growth.text.${locale}`)}
                  tag="p"
                  className="mt-8 sm:mt-10 md:mt-14 lg:mt-[72px] text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif", color: growthTextColor }}
                  multiline
                />
              </div>
              <div className="flex items-center justify-center px-5 py-7 sm:px-8 sm:py-8 md:px-10 lg:px-[46px]">
                <img src={growth.image} alt="" className="w-full max-w-[410px] object-contain" />
              </div>
            </div>
            <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
              <EditableText
                text={reduxProps ? val(reduxProps.growth?.scaleHeading) : growth.scaleHeading}
                editable={isEditable}
                onChange={handleChange(`props.growth.scaleHeading.${locale}`)}
                tag="h3"
                className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em]"
                style={{ fontFamily: "Georgia, Times New Roman, serif", color: theme.textColor }}
              />
              <div className="mt-6 sm:mt-7 space-y-[14px]">
                {growth.scaleItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 w-full">
                    <AlertDot color={theme.accentColor} />
                    <EditableText
                      text={reduxProps && Array.isArray(reduxProps.growth?.scaleItems) ? val(reduxProps.growth.scaleItems[i]) : item}
                      editable={isEditable}
                      onChange={handleChange(`props.growth.scaleItems.${i}.${locale}`)}
                      tag="p"
                      className="text-[14px] sm:text-[15px] leading-[1.5] w-full"
                      style={{ color: bodyTextColor }}
                      multiline
                    />
                  </div>
                ))}
              </div>
              <div className="mt-9 sm:mt-12 lg:mt-[48px] flex items-start gap-3 sm:gap-4">
                <QuoteMark bgColor={isTourism ? "#ECECEC" : theme.growthPanelBg} textColor={theme.accentColor} />
                <EditableText
                  text={reduxProps ? val(reduxProps.growth?.quote) : growth.quote}
                  editable={isEditable}
                  onChange={handleChange(`props.growth.quote.${locale}`)}
                  tag="p"
                  className="text-[20px] sm:text-[22px] font-normal leading-[1.35] tracking-[-0.015em]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif", color: theme.textColor }}
                  multiline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
        <div className="mx-auto container-xl">
          <div className="text-center">
            <EditableText
              text={reduxProps ? val(reduxProps.cases?.heading) : cases.heading}
              editable={isEditable}
              onChange={handleChange(`props.cases.heading.${locale}`)}
              tag="h2"
              className="text-[26px] sm:text-[31px] md:text-[36px] lg:text-[40px] font-normal leading-[1.18] tracking-[-0.02em]"
              style={{ fontFamily: "Georgia, Times New Roman, serif", color: theme.textColor }}
              multiline
            />
            {(cases.description || isEditable) && (
              <EditableText
                text={reduxProps ? val(reduxProps.cases?.description) : (cases.description || "")}
                editable={isEditable}
                onChange={handleChange(`props.cases.description.${locale}`)}
                tag="p"
                className="mt-2 text-[15px] sm:text-[16px] font-[500] text-[#555555] py-3 whitespace-pre-line"
                multiline
              />
            )}
            <EditableText
              text={reduxProps ? val(reduxProps.cases?.subheading) : cases.subheading}
              editable={isEditable}
              onChange={handleChange(`props.cases.subheading.${locale}`)}
              tag="p"
              className="mt-2 text-[15px] sm:text-[22px] font-semibold"
              style={{ color: theme.textColor }}
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cases.cards.map((card, i) => {
              const isCardBgDark = card.bg === "bg-[#000000]" || card.bg === "bg-[#003C42]" || card.bg.includes("003C42");
              const cardTextColor = isCardBgDark ? "#ffffff" : theme.textColor;
              
              let inlineBgColor = "";
              let bgClassName = "";
              if (card.bg.startsWith("bg-[") && card.bg.endsWith("]")) {
                inlineBgColor = card.bg.slice(4, -1);
              } else {
                bgClassName = card.bg;
              }

              return (
                <div 
                  key={i} 
                  className={`overflow-hidden rounded-[16px] ${bgClassName}`}
                  style={inlineBgColor ? { backgroundColor: inlineBgColor } : {}}
                >
                  <div className="h-[210px] sm:h-[220px] w-full overflow-hidden">
                    <img src={card.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="px-4 sm:px-[18px] pb-5 sm:pb-[26px] pt-4 sm:pt-[16px]">
                    <h3 className="border-b border-[#dfd8d4] pb-3 text-[16px] sm:text-[17px] font-semibold flex flex-wrap"
                      style={{ color: cardTextColor }}>
                      <EditableText
                        text={reduxProps && Array.isArray(reduxProps.cases?.cards) ? val(reduxProps.cases.cards[i]?.title) : card.title}
                        editable={isEditable}
                        onChange={handleChange(`props.cases.cards.${i}.title.${locale}`)}
                        tag="span"
                      />
                      <EditableText
                        text={reduxProps && Array.isArray(reduxProps.cases?.cards) ? val(reduxProps.cases.cards[i]?.highlight) : card.highlight}
                        editable={isEditable}
                        onChange={handleChange(`props.cases.cards.${i}.highlight.${locale}`)}
                        tag="span"
                        style={{ color: theme.accentColor }}
                        className="ps-1"
                      />
                    </h3>
                    <EditableText
                      text={reduxProps && Array.isArray(reduxProps.cases?.cards) ? val(reduxProps.cases.cards[i]?.text) : card.text}
                      editable={isEditable}
                      onChange={handleChange(`props.cases.cards.${i}.text.${locale}`)}
                      tag="p"
                      className="pt-4 text-[14px] sm:text-[15px] leading-[1.65]"
                      style={{ color: cardTextColor }}
                      multiline
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <GoldButton bgColor={theme.buttonColor} textColor={theme.buttonTextColor} href={cases.ctaHref} isTourism={isTourism}>
              <EditableText
                text={reduxProps ? val(reduxProps.cases?.ctaText) : cases.ctaText}
                editable={isEditable}
                onChange={handleChange(`props.cases.ctaText.${locale}`)}
                tag="span"
              />
            </GoldButton>
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
        <div className="mx-auto container-xl">
          <div className="mx-auto max-w-[760px] text-left lg:ml-[108px]">
            <EditableText
              text={reduxProps ? val(reduxProps.structure?.heading) : structure.heading}
              editable={isEditable}
              onChange={handleChange(`props.structure.heading.${locale}`)}
              tag="h3"
              className="text-[16px] sm:text-[22px] font-semibold"
              style={{ color: theme.textColor }}
            />
            <EditableText
              text={reduxProps ? val(reduxProps.structure?.text) : structure.text}
              editable={isEditable}
              onChange={handleChange(`props.structure.text.${locale}`)}
              tag="p"
              className="mt-3 text-[22px] sm:text-[26px] md:text-[28px] font-normal leading-[1.33] tracking-[-0.015em]"
              style={{ fontFamily: "Georgia, Times New Roman, serif", color: bodyTextColor }}
              multiline
            />
          </div>
          <div className="mx-auto mt-8 md:container-xl lg:px-[108px]">
            {(() => {
              const structureImage = structure.image || theme.structureImage;
              return (
                <div 
                  className={`overflow-hidden lg:grid lg:grid-cols-[0.95fr_1.05fr] ${
                    structure.images ? "bg-white border border-gray-200 rounded-[16px] p-4" : "rounded-t-xl"
                  }`}
                  style={!structure.images ? { backgroundColor: theme.structureCardBg || theme.growthBg } : undefined}
                >
                  {structure.images ? (
                    <>
                      {isEditable ? (
                        <div className="flex flex-col gap-2 p-4 w-full justify-center">
                          <div>
                            <span className="text-xs text-gray-400">Full Text:</span>
                            <EditableText
                              text={reduxProps ? val(reduxProps.structure?.fullText) : structure.fullText}
                              editable={isEditable}
                              onChange={handleChange(`props.structure.fullText.${locale}`)}
                              tag="p"
                              className="text-[20px] font-normal leading-[1.38]"
                              style={{ color: theme.textColor, fontFamily: "Georgia, Times New Roman, serif" }}
                              multiline
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-400">Accent Text (to highlight in accent color):</span>
                            <EditableText
                              text={reduxProps ? val(reduxProps.structure?.accentText) : structure.accentText}
                              editable={isEditable}
                              onChange={handleChange(`props.structure.accentText.${locale}`)}
                              tag="p"
                              className="text-[20px] font-normal leading-[1.38]"
                              style={{ color: theme.accentColor, fontFamily: "Georgia, Times New Roman, serif" }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-[25px]">
                          <p className="text-center text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.38] tracking-[-0.015em]" style={{ color: theme.textColor, fontFamily: "Georgia, Times New Roman, serif" }}>
                            {renderHighlightedText(structure.fullText, structure.accentText, "#CE1DB7", theme.textColor)}
                          </p>
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-4 p-4">
                        <div className="col-span-1 row-span-2 rounded-[12px] overflow-hidden bg-[#F2EAF8]">
                          <img src={structure.images.big} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="rounded-[12px] overflow-hidden bg-[#F8EAF2]">
                          <img src={structure.images.small1} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="rounded-[12px] overflow-hidden bg-[#F3EAF8]">
                          <img src={structure.images.small2} alt="" className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </>
                  ) : structureImage ? (
                    <>
                      {isEditable ? (
                        <div className="flex flex-col gap-2 p-4 w-full justify-center">
                          <div>
                            <span className="text-xs text-gray-400">Full Text:</span>
                            <EditableText
                              text={reduxProps ? val(reduxProps.structure?.fullText) : structure.fullText}
                              editable={isEditable}
                              onChange={handleChange(`props.structure.fullText.${locale}`)}
                              tag="p"
                              className="text-[20px] font-normal leading-[1.38]"
                              style={{ color: isTourism ? "#ffffff" : "#73635b", fontFamily: "Georgia, Times New Roman, serif" }}
                              multiline
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-400">Accent Text:</span>
                            <EditableText
                              text={reduxProps ? val(reduxProps.structure?.accentText) : structure.accentText}
                              editable={isEditable}
                              onChange={handleChange(`props.structure.accentText.${locale}`)}
                              tag="p"
                              className="text-[20px] font-normal leading-[1.38]"
                              style={{ color: theme.accentColor, fontFamily: "Georgia, Times New Roman, serif" }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-[25px]">
                          <p className="text-center text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.38] tracking-[-0.015em]"
                            style={{ fontFamily: "Georgia, Times New Roman, serif", color: isTourism ? "#ffffff" : "#73635b" }}>
                            {renderHighlightedText(structure.fullText, structure.accentText, theme.accentColor, isTourism ? "#ffffff" : "#73635b")}
                          </p>
                        </div>
                      )}
                      <div className="h-full min-h-[220px] sm:min-h-[260px]">
                        <img src={structureImage} alt="" className="h-full w-full object-cover" />
                      </div>
                    </>
                  ) : (
                    <>
                      {isEditable ? (
                        <div className="flex flex-col gap-2 p-4 w-full justify-center">
                          <div>
                            <span className="text-xs text-gray-400">Full Text:</span>
                            <EditableText
                              text={reduxProps ? val(reduxProps.structure?.fullText) : structure.fullText}
                              editable={isEditable}
                              onChange={handleChange(`props.structure.fullText.${locale}`)}
                              tag="p"
                              className="text-[20px] font-normal leading-[1.38]"
                              style={{ color: isTourism ? "#ffffff" : "#73635b", fontFamily: "Georgia, Times New Roman, serif" }}
                              multiline
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-400">Accent Text:</span>
                            <EditableText
                              text={reduxProps ? val(reduxProps.structure?.accentText) : structure.accentText}
                              editable={isEditable}
                              onChange={handleChange(`props.structure.accentText.${locale}`)}
                              tag="p"
                              className="text-[20px] font-normal leading-[1.38]"
                              style={{ color: theme.accentColor, fontFamily: "Georgia, Times New Roman, serif" }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-[25px]">
                          <p className="text-center text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.38] tracking-[-0.015em]"
                            style={{ fontFamily: "Georgia, Times New Roman, serif", color: isTourism ? "#ffffff" : "#73635b" }}>
                            {renderHighlightedText(structure.fullText, structure.accentText, theme.accentColor, isTourism ? "#ffffff" : "#73635b")}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })()}
            {(structure.bottomText || structure.images || isEditable) && (
              <div className="text-center py-6 rounded-b-[16px] mt-[-6px]"
                style={{ backgroundColor: structure.images ? "#F3F3F3" : (isTourism ? theme.growthBg : theme.bgColor) }}>
                <EditableText
                  text={reduxProps ? val(reduxProps.structure?.bottomText) : (structure.bottomText || "")}
                  editable={isEditable}
                  onChange={handleChange(`props.structure.bottomText.${locale}`)}
                  tag="p"
                  className="text-[18px] sm:text-[22px]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif", color: structure.images ? theme.textColor : "#fff" }}
                  multiline
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full px-3 pb-[54px] pt-3 sm:px-5 sm:pb-[80px] lg:pb-[90px]">
        <div className="mx-auto container-xl">
          <div className="flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 text-center">
            <EditableText
              text={reduxProps ? val(reduxProps.cta?.heading) : cta.heading}
              editable={isEditable}
              onChange={handleChange(`props.cta.heading.${locale}`)}
              tag="h2"
              className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[41px] font-normal leading-[1.15] tracking-[-0.02em]"
              style={{ fontFamily: "Georgia, Times New Roman, serif", color: ctaTextColor }}
              multiline
            />
            {(cta.subtext || isEditable) && (
              <EditableText
                text={reduxProps ? val(reduxProps.cta?.subtext) : (cta.subtext || "")}
                editable={isEditable}
                onChange={handleChange(`props.cta.subtext.${locale}`)}
                tag="p"
                className="mt-4 max-w-[470px] text-[15px] sm:text-[16px] leading-[1.6]"
                style={{ color: ctaTextColor }}
                multiline
              />
            )}
            <div className="mt-7 flex w-full max-w-[420px] flex-col items-center gap-3">
              <GoldButton bgColor={theme.buttonColor} textColor={theme.buttonTextColor} href={cta.button1Href} isTourism={isTourism}>
                <EditableText
                  text={reduxProps ? val(reduxProps.cta?.button1Text) : cta.button1Text}
                  editable={isEditable}
                  onChange={handleChange(`props.cta.button1Text.${locale}`)}
                  tag="span"
                />
              </GoldButton>
              <GoldButton bgColor={theme.buttonColor} textColor={theme.buttonTextColor} href={cta.button2Href} isTourism={isTourism}>
                <EditableText
                  text={reduxProps ? val(reduxProps.cta?.button2Text) : cta.button2Text}
                  editable={isEditable}
                  onChange={handleChange(`props.cta.button2Text.${locale}`)}
                  tag="span"
                />
              </GoldButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
