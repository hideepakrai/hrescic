"use client";
import { useState } from "react";

import { getIconSvg } from "./icons/CaseStudyIcons";

interface CaseStudyData {
  type?: string;
  theme?: Record<string, string>;
  hero: {
    breadcrumbLabel: string;
    breadcrumbSub: string;
    heading: string;
    headingHighlight?: string;
    subtext: string;
    image: string;
    tabs?: { label: any; target: string }[];
  };
  stats?: { value: string; label: string }[];
  intro?: {
    heading: string;
    text: string;
  };
  challenge?: {
    heading: any;
    text: any;
    image: string;
    listHeading: any;
    listItems: any[];
    quoteText?: any;
  };
  results?: {
    heading: string;
    subheading: string;
    cards: {
      image: string;
      title: string;
      text: string;
      bullets: string[];
    }[];
  };
  role?: {
    heading: string;
    text: string;
    cards: {
      icon: string;
      title: string;
      text: string;
    }[];
    bottomText: string;
    bottomAccentText: string;
    bottomImage: string;
  };
  partnership?: {
    heading: string;
    text: string;
  };
  cta?: {
    heading: string;
    subtext: string;
    button1Text: string;
    button1Href: string;
  };
  appreciation?: {
    heading: any;
    text1: any;
    text2: any;
  };
  resultsIntro?: {
    heading: any;
    subheading: any;
  };
  platform?: {
    heading: any;
    text1: any;
    text2: any;
    images: {
      big: string;
      small1: string;
      small2: string;
    };
    navigation: {
      title: any;
      columns: {
        title: any;
        items: { label: any; icon: string }[];
      }[];
      ctaText: any;
      ctaHref: string;
    };
  };
  grid?: {
    title: any;
    bottomText: any;
    images: string[];
  };
  summit?: {
    title: any;
    image: string;
  };
  delivery?: {
    title: any;
    image: string;
  };
  breadcrumb?: any;
  breadcrumbSub?: any;
  heading?: any;
  image?: string;
  video?: {
    thumbnail: string;
    title: any;
    subtext: any;
    brandLabel?: any;
    youtubeId?: string;
  };
  [key: string]: any;
}

const renderHighlightedText = (fullText: string, accentText: string, accentColor: string, defaultColor: string) => {
  if (!accentText) return <span style={{ color: defaultColor }}>{fullText}</span>;
  const parts = fullText.split(accentText);
  if (parts.length < 2) return <span style={{ color: defaultColor }}>{fullText}</span>;
  return (
    <span style={{ color: defaultColor }}>
      {parts[0]}
      <span style={{ color: accentColor }} className="ps-2">
        {accentText}
      </span>
      {parts[1]}
    </span>
  );
};

export default function CaseStudyPage({ data }: { data: CaseStudyData }) {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (data.type === "cdc") {
    return <CDCCaseStudyPage data={data} handleScroll={handleScroll} />;
  }

  if (data.type === "expo") {
    return <ExpoCaseStudyPage data={data} />;
  }

  if (data.type === "loreal") {
    return <LorealCaseStudyPage data={data} />;
  }

  if (data.type === "poliderma") {
    return <PolidermaPage data={data} />;
  }

  if (data.type === "castania") {
    return <CastaniaPage data={data} />;
  }

  if (data.type === "navada") {
    return <NavadaPage data={data} />;
  }

  if (data.type === "minglanje-v-klanjcu") {
    return <MinglanjeVKlanjcuPage data={data} />;
  }

  if (data.type === "ids") {
    return <IdsPage data={data} />;
  }

  const { hero, stats, intro, challenge, results, role, partnership, cta } = data;

  const isRichLayout = !!intro;

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="w-full px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto container-xl">
          <section className="overflow-hidden rounded-[18px] bg-[#003C42] shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:rounded-[22px]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="flex min-h-[360px] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:min-h-[500px] lg:px-16 lg:py-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#7d7772]">
                  <span className="text-[22px] font-semibold text-[#fff]">{hero.breadcrumbLabel}</span>
                  <span className="h-3 w-px bg-[#bcb5af]"></span>
                  <span className="text-[14px] text-[#fff] italic">{hero.breadcrumbSub}</span>
                </div>
                <div className="my-auto pt-10 sm:pt-20 lg:pl-0">
                  <h1 className="hero-title text-[30px] sm:text-[38px] md:text-[40px] lg:text-[38px] font-normal leading-[1.08] tracking-normal text-white">
                    {hero.headingHighlight && (
                      <span className="text-[#49E000] block sm:inline sm:pe-2">{hero.headingHighlight}</span>
                    )}
                    {hero.headingHighlight && <br />}
                    {hero.heading}
                  </h1>
                  <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-white font-light">
                    {hero.subtext}
                  </p>
                  
                  {hero.tabs && (
                    <div className="mt-8 flex max-w-[470px] flex-wrap gap-3 mb-8">
                      {hero.tabs.map((tab, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleScroll(tab.target)}
                          className="w-fit rounded-full bg-[#49E000] px-5 sm:px-6 py-[12px] sm:py-[13px] text-[13px] sm:text-[15px] font-medium leading-none text-[#003C42] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(73,224,0,0.22)]"
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-[500px]">
                <div className="relative h-[300px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[488px]">
                  <img src={hero.image} alt={hero.heading} className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,60,66,0.08)_0%,rgba(0,60,66,0)_24%,rgba(0,0,0,0.03)_100%)]"></div>
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    <a href="/who-we-create-for/myrent">
                      <button type="button" className="inline-flex items-center gap-3 rounded-full bg-white px-5 sm:px-7 py-3 sm:py-4 text-[14px] sm:text-[15px] font-medium text-[#003C42] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:translate-y-[-1px]">
                        Read the Case Study<span className="text-[20px] leading-none">→</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* RICH LAYOUT SECTIONS */}
      {isRichLayout ? (
        <>
          {/* STATS */}
          {stats && (
            <section className="w-full px-3 py-8 sm:px-5 sm:py-10 lg:py-12">
              <div className="mx-auto container">
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0">
                  {stats.map((stat, i) => (
                    <div key={i} className="relative px-4 sm:px-6 lg:ps-8 lg:pe-0">
                      <div className="lg:min-h-[112px]">
                        <h3 className="text-[42px] sm:text-[48px] lg:text-[50px] font-normal leading-[0.95] text-[#32B100]">{stat.value}</h3>
                        <p className="mt-3 max-w-[210px] text-[14px] sm:text-[14px] leading-[1.45] text-[#5B5B5B]">{stat.label}</p>
                      </div>
                      {i < stats.length - 1 && (
                        <div className="hidden lg:block absolute right-0 top-1/2 h-[64px] w-px -translate-y-1/2 bg-[#D4D4D0]"></div>
                      )}
                      {i < stats.length - 1 && (
                        <div className="block sm:hidden mt-8 h-px w-full bg-[#D4D4D0]"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* INTRO */}
          {intro && (
            <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
              <div className="mx-auto container-xl rounded-[2px]">
                <div className="px-4 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-[120px] lg:py-[68px]">
                  <div className="mx-auto text-center md:max-w-[84%]">
                    <h2 className="text-[26px] sm:text-[31px] md:text-[38px] lg:text-[40px] font-normal leading-[1.2] tracking-[-0.02em] text-[#00353A]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                      {intro.heading}
                    </h2>
                    <p className="mx-auto mt-6 text-[14px] sm:text-[18px] leading-[1.55] text-[#555555]">
                      {intro.text}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CHALLENGE */}
          {challenge && (
            <section id="challenge" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
              <div className="mx-auto container-xl">
                <div className="overflow-hidden rounded-[14px] bg-[#F8F8F8]">
                  <div className="grid border-b border-[#e2dbd7] bg-[#00646E] lg:grid-cols-[1.02fr_0.98fr]">
                    <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:ps-[86px] lg:pe-[24px] lg:pb-[56px] lg:pt-[34px]">
                      <h3 className="text-[14px] sm:text-[22px] font-semibold text-[#05C4D9]">{challenge.heading}</h3>
                      <p className="mt-8 sm:mt-10 md:mt-14 lg:mt-[72px] text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-[#fff]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                        {challenge.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-center px-5 py-7 sm:px-8 sm:py-8 md:px-10 lg:px-[46px]">
                      <img src={challenge.image} alt="" className="w-full max-w-[410px] object-contain" />
                    </div>
                  </div>
                  <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
                    <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em] text-[#00353A]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                      {challenge.listHeading}
                    </h3>
                    <div className="mt-6 sm:mt-7 space-y-[14px]">
                      {challenge.listItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-[3px] flex h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-[#05C4D9] text-[14px] font-bold leading-none text-white">!</span>
                          <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[#555555]">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-9 sm:mt-12 lg:mt-[48px] flex items-start gap-3 sm:gap-4">
                      <span className="flex h-[33px] w-[35px] min-w-[30px] items-center justify-center rounded-[6px] bg-[#ECECEC] text-[20px] font-semibold leading-none text-[#05C4D9]">!</span>
                      <p className="text-[20px] sm:text-[22px] font-normal leading-[1.35] tracking-[-0.015em] text-[#00353A]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                        {challenge.quoteText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* RESULTS / CARDS */}
          {results && (
            <section id="goals" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
              <div className="mx-auto container-xl">
                <div className="text-center">
                  <h2 className="text-[26px] sm:text-[31px] md:text-[36px] lg:text-[40px] font-normal leading-[1.18] tracking-[-0.02em] text-[#00353A]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {results.heading}
                  </h2>
                  <p className="mt-2 text-[15px] sm:text-[22px] font-semibold text-[#00353A]">{results.subheading}</p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {results.cards.map((card, i) => (
                    <div key={i} className="overflow-hidden rounded-[16px] bg-[#003C42] h-full">
                      <div className="h-[210px] sm:h-[220px] w-full overflow-hidden">
                        <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="px-4 sm:px-[24px] pb-5 sm:pb-[20px] pt-4 sm:pt-[16px]">
                        <h3 className="border-b border-[#1E6A70] pb-4 text-[16px] sm:text-[17px] font-semibold text-[#fff]">{card.title}</h3>
                        <p className="pt-4 text-[14px] sm:text-[14px] leading-[1.7] text-[#fff]">{card.text}</p>
                        <div className="mt-4 space-y-3">
                          {card.bullets.map((bullet, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <span className="mt-[2px] flex h-[14px] w-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#49E000]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="h-[16px] w-[16px]">
                                  <path d="M6 10H14" stroke="#003C42" stroke-width="2" stroke-linecap="round"></path>
                                  <path d="M11 7L14 10L11 13" stroke="#003C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                              <p className="text-[13px] sm:text-[14px] leading-[1.55] text-white">{bullet}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* OUR STRATEGIC ROLE */}
          {role && (
            <section id="role" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
              <div className="mx-auto md:max-w-[70%] lg:max-w-[70%] max-w-[90%]">
                <div className="mx-auto text-left">
                  <h3 className="text-[16px] sm:text-[22px] font-semibold text-[#003C42]">{role.heading}</h3>
                  <p className="mt-3 text-[22px] sm:text-[26px] md:text-[26px] font-normal leading-[1.33] tracking-[-0.015em] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {role.text}
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {role.cards.map((card, i) => (
                    <div key={i} className="rounded-[16px] bg-[#F2F2F2] px-5 py-6 sm:px-6 sm:py-7">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-[#D9D9D9]">
                        {getIconSvg(card.icon)}
                      </div>
                      <h4 className="mt-5 text-[18px] sm:text-[19px] font-semibold text-[#003C42]">{card.title}</h4>
                      <p className="mt-3 max-w-[210px] text-[14px] sm:text-[15px] leading-[1.6] text-[#666666]">{card.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mx-auto mt-8">
                  <div className="overflow-hidden rounded-xl bg-[#fff] px-4 py-14 lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                    style={{ backgroundImage: `url('${role.bottomImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-[25px]">
                      <p className="text-center text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.38] tracking-[-0.015em] text-[#fff]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                        {renderHighlightedText(role.bottomText, role.bottomAccentText, "#05C4D9", "#ffffff")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* PARTNERSHIP MODEL & RESULTS */}
          {partnership && stats && (
            <section id="results" className="w-full px-3 py-10 sm:px-5 sm:py-12 lg:py-16">
              <div className="mx-auto container-xl">
                <div className="mx-auto max-w-[760px] text-center">
                  <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#003C42]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {partnership.heading}
                  </h2>
                  <p className="mx-auto mt-4 max-w-[720px] text-[15px] sm:text-[16px] leading-[1.75] text-[#666666]">
                    {partnership.text}
                  </p>
                </div>
                <div className="mx-auto mt-8 container-xl rounded-[20px] bg-[#004B53] px-5 py-7 sm:px-8 sm:py-9 lg:mt-10 lg:px-10 lg:py-10">
                  <div className="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
                    {stats.map((stat, i) => (
                      <div key={i} className="relative px-3 lg:px-10">
                        <div className="min-h-[104px]">
                          <h3 className="text-[42px] sm:text-[48px] lg:text-[54px] font-normal leading-[0.95] text-[#49E000]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>{stat.value}</h3>
                          <p className="mt-3 md:max-w-[200px] lg:max-w-[200px] text-[13px] sm:text-[14px] leading-[1.45] text-white/90">{stat.label}</p>
                        </div>
                        {i < stats.length - 1 && (
                          <div className="hidden lg:block absolute right-0 top-1/2 h-[62px] w-px -translate-y-1/2 bg-[#0F6972]"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        /* SIMPLE LAYOUT STATS (CDC, Castania, Poliderma) */
        stats && (
          <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
            <div className="mx-auto container-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl sm:text-4xl font-bold text-[#37C100]">{stat.value}</p>
                    <p className="text-sm text-[#555] mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      )}

      {/* FINAL CTA */}
      <section className="w-full px-3 pb-[54px] pt-3 sm:px-5 sm:pb-[80px] lg:pb-[90px]">
        <div className="mx-auto container-xl">
          <div className="flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 text-center">
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#555555]"
              style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
              {cta?.heading || "Marketing Excellence That Works On Your Terms"}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.6] text-[#555555]">
              {cta?.subtext || "Because great marketing doesn't stop — it evolves."}
            </p>
            <div className="mt-7 flex w-full max-w-[420px] flex-col items-center gap-3">
              {cta ? (
                <a href={cta.button1Href} className="w-full sm:w-fit">
                  <button className="btn-primary w-full">{cta.button1Text}</button>
                </a>
              ) : (
                <>
                  <a href="/lets-talk#demo" className="inline-block w-full sm:w-fit rounded-full bg-[#37C100] px-5 sm:px-7 py-[13px] sm:py-[14px] text-center text-[14px] sm:text-[15px] font-medium leading-[1.35] text-white transition duration-300 hover:bg-[#2d9802]">
                    Book a Free Demo
                  </a>
                  <a href="/lets-talk#ask" className="inline-block w-full sm:w-fit rounded-full border border-[#37C100] px-5 sm:px-7 py-[13px] sm:py-[14px] text-center text-[14px] sm:text-[15px] font-medium leading-[1.35] text-[#1D2931] transition duration-300 hover:bg-[#37C100] hover:text-white">
                    Ask Us Anything
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CDCCaseStudyPage({ data, handleScroll }: { data: CaseStudyData; handleScroll: (target: string) => void }) {
  const theme = data.theme || {};
  const hero = data.hero;

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="w-full px-3 py-3 sm:px-5 sm:py-5">
        <div className="mx-auto container-xl">
          <div className="grid overflow-hidden rounded-[18px] bg-[#F8EDF2] lg:grid-cols-[1fr_1fr]">
            <div className="order-2 flex items-center lg:order-1">
              <div className="w-full px-4 pb-7 sm:px-6 sm:pb-9 md:px-8 md:pb-10 lg:px-[58px] lg:pb-[54px] pt-7">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10 lg:mb-14">
                  <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#1B1642]">
                    <span className="text-[13px] font-semibold text-[#16123F] sm:text-[14px] md:text-[22px]">{hero.breadcrumbLabel}</span>
                    <span className="text-[#8F8A96]">|</span>
                    <span className="text-[12px] italic text-[#16123F] sm:text-[14px]">{hero.breadcrumbSub}</span>
                  </div>
                  <a href="/who-we-create-for">
                    <button type="button" className="rounded-full border border-[#E4D6DE] bg-transparent px-4 py-2 text-[11px] font-medium text-[#8F7F87] transition-all duration-300 hover:bg-white/60 sm:text-[12px]">Back to Portfolio</button>
                  </a>
                </div>
                {theme.heroLogo && (
                  <div className="mb-5 flex items-center gap-2">
                    <img src={theme.heroLogo} alt="Logo" className="h-auto max-w-[34px] sm:max-w-[40px]"/>
                    {theme.heroLogoText && (
                      <span className="text-[20px] font-medium tracking-[-0.03em] text-[#1C1645] sm:text-[22px]">{theme.heroLogoText}</span>
                    )}
                  </div>
                )}
                <h1 className="hero-title max-w-[470px] text-[28px] font-normal leading-[1.08] tracking-[-0.02em] text-transparent sm:text-[34px] md:text-[38px] lg:text-[40px]"
                    style={{
                      fontFamily: "Georgia, Times New Roman, serif",
                      backgroundImage: theme.heroTitleGradient || "none",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text"
                    }}>
                  {hero.heading}
                </h1>
                <p className="mt-5 max-w-[430px] text-[14px] leading-[1.75] text-[#3D3A55] sm:mt-6 sm:text-[15px] md:text-[16px]">
                  {hero.subtext}
                </p>
                {hero.tabs && (
                  <div className="mt-8 flex max-w-[560px] flex-wrap gap-2 sm:mt-9 sm:gap-3">
                    {hero.tabs.map((tab: any, i: number) => (
                      <button key={i} type="button" onClick={() => handleScroll(tab.target)} className="w-fit rounded-full bg-[#5E1DE1] px-4 py-[11px] text-center text-[12px] font-medium leading-none text-white transition duration-300 hover:-translate-y-[1px] hover:bg-[#4e16bd] hover:shadow-[0_12px_24px_rgba(94,29,225,0.22)] sm:px-5 sm:py-[12px] sm:text-[13px] md:px-6 md:py-[13px] md:text-[14px] lg:text-[15px]">
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-full lg:min-h-[560px]">
                <img src={hero.image} alt={hero.heading} className="h-full w-full object-cover object-center"/>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO SLIDER */}
      <div className="bg-white pt-0 pb-16 container-xl">
        <div className=" mx-auto">
          <div className="flex justify-center italic text-sm font-medium text-[#555555]">
            <span className="text-center pb-6">Developed in collaboration with professionals from leading international education and consulting organizations.</span>
          </div>
          <div className="pt-8 px-5 sm:px-5">
            <div className="flex items-center justify-between gap-8 sm:gap-10 md:gap-12 overflow-x-auto no-scrollbar max-w-6xl mx-auto pb-4">
              {[
                { src: "/assets/Image/project-logo.svg", alt: "Partner logo" },
                { src: "/assets/Image/project-logo2.svg", alt: "Partner logo" },
                { src: "/assets/Image/project-logo3.svg", alt: "Partner logo" },
                { src: "/assets/Image/project-logo4.svg", alt: "Partner logo" },
                { src: "/assets/Image/project-logo5.svg", alt: "Partner logo" },
                { src: "/assets/Image/project-logo6.svg", alt: "Partner logo" },
              ].map((logo, i) => (
                <div key={i} className="flex items-center justify-center flex-shrink-0 opacity-90 hover:opacity-100 transition-all">
                  <img src={logo.src} alt={logo.alt} className="h-8 sm:h-9 md:h-10 lg:h-[42px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* APPRECIATION */}
      {data.appreciation && (
        <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10" style={{ marginTop: 0 }}>
          <div className="mx-auto container-xl rounded-[2px]">
            <div className="px-1 sm:px-6 md:px-8 lg:px-[120px]">
              <div className="mt-10 grid gap-y-8 sm:mt-[50px] md:mt-[60px] lg:grid-cols-[1fr_1fr] lg:gap-x-[50px] xl:gap-x-[60px]">
                <div>
                  <p className="mt-4 text-[20px] font-normal leading-[1.3] tracking-[-0.015em] text-[#0F0F3D] sm:mt-5 sm:text-[24px] md:text-[25px] lg:text-[26px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {data.appreciation.heading}
                  </p>
                </div>
                <div className="max-w-[520px]">
                  <div className="mt-2 space-y-[14px] sm:mt-5">
                    <p className="text-[14px] leading-[1.7] text-[#0F0F3D] sm:text-[15px] md:text-[16px]">{data.appreciation.text1}</p>
                    <p className="text-[14px] leading-[1.7] text-[#0F0F3D] sm:text-[15px] md:text-[16px]">{data.appreciation.text2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CHALLENGE */}
      {data.challenge && (
        <section id="challenge" className="w-full px-3 pb-6 pt-16 sm:px-5 sm:pb-8 sm:pt-20 lg:pb-10 lg:pt-24">
          <div className="mx-auto container-xl">
            <div className="overflow-hidden rounded-[14px] bg-[#EBE1F7]">
              <div className="grid border-b border-[#e2dbd7] bg-[#F7F0FF] lg:grid-cols-[1.02fr_0.98fr]">
                <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:pb-[56px] lg:pe-[24px] lg:ps-[86px] lg:pt-[34px]">
                  <h3 className="text-[20px] font-normal text-[#0F0F3D] sm:text-[22px] md:text-[24px] lg:text-[26px]">{data.challenge.heading}</h3>
                  <p className="mt-6 text-[20px] font-normal leading-[1.35] tracking-[-0.015em] text-[#0F0F3D] sm:mt-8 sm:text-[22px] md:mt-10 md:text-[24px] lg:mt-[14px] lg:text-[26px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {data.challenge.text}
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-[46px]">
                  <img src={data.challenge.image} alt="Coaching ecosystem visual" className="w-full max-w-[410px] object-contain"/>
                </div>
              </div>
              <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
                <h3 className="max-w-[680px] text-[20px] font-normal leading-[1.3] tracking-[-0.015em] text-[#0F0F3D] sm:text-[22px] md:text-[24px] lg:text-[26px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                  {data.challenge.listHeading}
                </h3>
                <h3 className="mt-7 text-[20px] font-normal leading-[1.3] tracking-[-0.015em] text-[#0F0F3D] sm:mt-8 sm:text-[22px] md:text-[24px] lg:text-[26px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                  This included:
                </h3>
                <div className="mt-6 space-y-[14px] sm:mt-7">
                  {data.challenge.listItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-[3px] flex h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-[#5E1DE1] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M13 5l7 7-7 7"></path>
                        </svg>
                      </span>
                      <p className="text-[14px] leading-[1.7] text-[#0F0F3D] sm:text-[15px] md:text-[16px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RESULTS INTRO */}
      {data.resultsIntro && (
        <section id="goals" className="px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
          <div className="mx-auto container-xl">
            <div className="text-center">
              <h2 className="text-[24px] font-normal leading-[1.18] tracking-[-0.02em] text-[#0F0F3D] sm:text-[30px] md:text-[34px] lg:text-[40px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {data.resultsIntro.heading}
              </h2>
              <p className="mt-2 px-2 text-[14px] font-normal leading-[1.7] text-[#0F0F3D] sm:text-[15px] md:text-[16px]">
                {data.resultsIntro.subheading}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PLATFORM WEBSITE */}
      {data.platform && (
        <section id="role" className="w-full px-3 pb-6 sm:px-5 lg:pb-10">
          <div className="mx-auto container-xl">
            <div className="rounded-[28px] border border-[#EEEEEE] bg-[#FFF] p-4 sm:p-6 md:p-8 lg:p-20">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#F9F3F3] text-[24px] font-bold text-[#6B28F0]">1</span>
                <h3 className="text-[20px] font-normal tracking-[-0.02em] text-[#1A173F] sm:text-[24px] md:text-[26px]">
                  {data.platform.heading}
                </h3>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-x-12">
                <p className="text-[22px] leading-[1.28] tracking-[-0.02em] text-[#0F0F3D] sm:text-[24px] md:text-[26px] lg:text-[28px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                  {data.platform.text1}
                </p>
                <p className="pt-1 text-[14px] leading-[1.8] text-[#0F0F3D] sm:text-[15px] md:text-[16px]">
                  {data.platform.text2}
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <img src={data.platform.images.big} alt="" className="w-full h-auto object-cover"/>
                </div>
                <div className="grid gap-4 sm:gap-5 lg:col-span-5">
                  <div>
                    <img src={data.platform.images.small1} alt="" className="w-full h-auto object-cover"/>
                  </div>
                  <div>
                    <img src={data.platform.images.small2} alt="" className="w-full h-auto object-cover"/>
                  </div>
                </div>
              </div>

              {/* NAVIGATION FLOWCHART CARD */}
              <div className="mt-8 overflow-hidden rounded-[24px] bg-[#F4EFF1]">
                <div className="px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-5 lg:px-8 lg:pb-12">
                  <p className="text-[11px] italic text-[#C8B9BE]">{data.platform.navigation.title}</p>
                  <div className="relative mt-6">
                    <div className="flex justify-center">
                      <span className="relative z-[2] rounded-full bg-[#D9CCFF] px-5 py-[8px] text-[14px] font-semibold leading-none text-[#5F29E6] shadow-[0_1px_0_rgba(255,255,255,0.55)] sm:text-[15px] md:text-[16px]">Navigation</span>
                    </div>
                    <div className="pointer-events-none absolute left-1/2 top-[17px] hidden h-[84px] w-px -translate-x-1/2 bg-[#D8CED3] lg:block"></div>
                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[64px] hidden h-px bg-[#D8CED3] lg:block"></div>
                    <div className="pointer-events-none absolute left-[12.5%] top-[64px] hidden h-[24px] w-px bg-[#D8CED3] lg:block"></div>
                    <div className="pointer-events-none absolute left-[37.5%] top-[64px] hidden h-[24px] w-px bg-[#D8CED3] lg:block"></div>
                    <div className="pointer-events-none absolute left-[62.5%] top-[64px] hidden h-[24px] w-px bg-[#D8CED3] lg:block"></div>
                    <div className="pointer-events-none absolute left-[87.5%] top-[64px] hidden h-[24px] w-px bg-[#D8CED3] lg:block"></div>
                  </div>
                  <div className="mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:gap-x-10 lg:mt-[72px] lg:grid-cols-4 lg:gap-x-8 xl:px-6">
                    {data.platform.navigation.columns.map((col: any, cIdx: number) => (
                      <div key={cIdx} className="relative">
                        <div className="mb-8 flex justify-center sm:mb-9 lg:mb-11">
                          <span className="rounded-full bg-[#E8E0E4] px-[20px] py-[8px] text-[14px] font-semibold leading-none text-[#6B28F0] sm:px-[22px] sm:text-[15px] md:text-[16px]">
                            {col.title}
                          </span>
                        </div>
                        <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                          {col.items.map((item: any, iIdx: number) => (
                            <div key={iIdx} className="flex items-start gap-3">
                              <span className="flex h-[40px] w-[40px] min-w-[40px] items-center justify-center rounded-[7px] bg-[#EEE7E7] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                                <img src={`/assets/Image/${item.icon}`} alt="" className="h-4 w-4 object-contain"/>
                              </span>
                              <span className="min-w-0 text-[13px] leading-[1.35] text-[#838181] sm:text-[14px]">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation CTA card bottom */}
                <div className="bg-[#EDE6E9] px-4 pb-4 pt-3 sm:px-6 lg:px-8">
                  <p className="text-[11px] italic text-[#C8B9BE]">CTA (Call To Action)</p>
                  <div className="flex justify-center py-8 sm:py-10 md:py-12">
                    <a href={data.platform.navigation.ctaHref}>
                      <button type="button" className="rounded-full bg-[#5E1DE1] px-5 py-[13px] text-[12px] font-medium leading-none text-white transition duration-300 hover:bg-[#4e16bd] hover:shadow-[0_14px_28px_rgba(94,29,225,0.22)] sm:px-7 sm:text-[13px] md:px-8 md:py-[14px] md:text-[14px]">
                        {data.platform.navigation.ctaText}
                      </button>
                    </a>
                  </div>
                  <p className="text-[11px] text-[#C8B9BE]">#F2ECEC</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 12 COLUMN GRID */}
      {data.grid && (
        <section className="w-full px-3 pb-6 sm:px-5 lg:pb-8">
          <div className="mx-auto container-xl">
            <div className="rounded-[28px] bg-[#FBF6F7] p-4 sm:p-6 lg:p-8">
              <p className="text-[12px] italic text-[#C4B6BC]">{data.grid.title}</p>
              <div className="mt-5 overflow-hidden rounded-[26px] bg-[#F6EFF0] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                <div className="mx-auto max-w-[1254px]">
                  <div className="relative">
                    <div className="relative mx-auto max-w-[1254px] pt-7">
                      <div className="absolute left-0 right-0 top-3 h-px bg-[#DCCFD4]"></div>
                      <div className="absolute left-0 top-1 h-4 w-px bg-[#DCCFD4]"></div>
                      <div className="absolute right-0 top-1 h-4 w-px bg-[#DCCFD4]"></div>
                      <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[12px] italic text-[#C4B6BC]">1254 Pix</span>
                    </div>
                    <div className="mt-6">
                      <span className="inline-block text-[12px] italic text-[#C4B6BC]">30 Pix Gutter</span>
                    </div>
                    <div className="mt-4 grid grid-cols-12 gap-2 sm:gap-3 lg:gap-[14px]">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-[64px] rounded-[12px] bg-[#EDE4E6] sm:h-[84px] sm:rounded-[14px] md:h-[96px] lg:h-[110px]"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[11px] text-[#C4B6BC]">#F9F3F3</p>
            </div>
          </div>
        </section>
      )}

      {/* FOCUS TEXT */}
      {data.grid && (
        <section className="w-full px-3 pb-14 pt-8 sm:px-5 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-16">
          <div className="mx-auto container-xl">
            <div className="mx-auto max-w-[560px] text-center">
              <p className="text-[15px] font-normal leading-[1.7] tracking-[-0.02em] text-[#1A173F] sm:text-[16px] lg:text-[16px]">
                The focus was on{" "}
                <span className="font-semibold text-[#5E1DE1]">
                  establishing a clear structural logic through custom graphic creations, shared design language, and flexible components
                </span>{" "}
                that support different client needs while producing one coherent platform vision.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* GALLERY IMAGES */}
      {data.grid && (
        <section className="px-3 sm:px-5">
          <div className="mx-auto container-xl space-y-4 sm:space-y-5">
            {data.grid.images.map((img, i) => (
              <img key={i} src={img} alt="CDC Platform Hero" className="w-full h-auto object-cover" />
            ))}
          </div>
        </section>
      )}

      {/* SUMMIT SECTION */}
      {data.summit && (
        <section className="w-full px-3 pb-6 pt-12 sm:px-5 sm:pt-14 lg:pb-10 lg:pt-16">
          <div className="mx-auto container-xl">
            <div className="rounded-t-[15px] border border-[#EEEEEE] bg-[#FFF]">
              <div className="flex items-center gap-3 p-4 py-8 sm:p-6 sm:py-9 md:p-8 md:py-10 lg:p-20 lg:py-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#F9F3F3] text-[24px] font-bold text-[#6B28F0]">2</span>
                <h3 className="text-[20px] font-normal tracking-[-0.02em] text-[#1A173F] sm:text-[24px] md:text-[26px]">
                  {data.summit.title}
                </h3>
              </div>
            </div>
            <div>
              <img src={data.summit.image} alt="CDC Platform Hero" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* DELIVERY SECTION */}
      {data.delivery && (
        <section id="results" className="w-full px-3 pb-6 pt-12 sm:px-5 sm:pt-14 lg:pb-10 lg:pt-16">
          <div className="mx-auto container-xl">
            <div className="rounded-t-[15px] border border-[#EEEEEE] bg-[#FFF]">
              <div className="flex items-center gap-3 p-4 py-8 sm:p-6 sm:py-9 md:p-8 md:py-10 lg:p-20 lg:py-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#F9F3F3] text-[24px] font-bold text-[#6B28F0]">3</span>
                <h3 className="text-[20px] font-normal tracking-[-0.02em] text-[#1A173F] sm:text-[24px] md:text-[26px]">
                  {data.delivery.title}
                </h3>
              </div>
            </div>
            <div className="bg-[#F8F8F8] p-4 sm:p-8 md:p-10 lg:p-16">
              <img src={data.delivery.image} alt="" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

function ExpoCaseStudyPage({ data }: { data: CaseStudyData }) {
  const { breadcrumb, breadcrumbSub, heading, image, video } = data;
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="min-h-screen bg-transparent p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-4 font-inter">
      <section className="w-full max-w-8xl mx-auto bg-[#242b33] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-start relative py-16">
          <div className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-12 lg:left-16 xl:left-20 flex flex-wrap items-center gap-2 text-white/70 text-[11px] sm:text-xs md:text-sm font-light">
            <span className="text-white font-[600] tracking-wide text-[22px]">{String(breadcrumb || "")}</span>
            <span className="w-[1px] h-3 bg-white/40"></span>
            <span className="max-w-[260px] sm:max-w-none text-[14px]">{String(breadcrumbSub || "")}</span>
          </div>
          <h2 className="text-[25px] md:text-[35px] leading-[120%] text-white pt-20 md:pe-14 pe-4 " style={{ fontFamily: "'Inter', sans-serif" }}>
            {String(heading || "")}
          </h2>
        </div>
        <div className="flex-1 min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[520px] relative">
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
      </section>

      {video && (
        <section id="video-section" className="w-full max-w-8xl mx-auto bg-[#242b33] rounded-2xl shadow-lg flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 mb-6 md:mb-10">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {isPlaying && video.youtubeId ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img src={video.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1 opacity-90">
                      <path d="M4 2.69C4 1.93 4.81 1.44 5.48 1.81L22.4 11.12C23.09 11.5 23.09 12.5 22.4 12.88L5.48 22.18C4.81 22.55 4 22.07 4 21.31V2.69Z"></path>
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-4 sm:mt-6 flex flex-col gap-1 md:px-2">
            <h3 className="text-white text-[1.2rem] sm:text-[1.35rem] md:text-xl lg:text-2xl font-normal tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              {video.title}
            </h3>
            <p className="text-white/70 text-[10px] sm:text-[11px] md:text-xs tracking-wide uppercase font-medium mt-1">
              {video.subtext}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

function LorealCaseStudyPage({ data }: { data: CaseStudyData }) {
  const { breadcrumb, breadcrumbSub, heading, image, video } = data;
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="min-h-screen bg-transparent p-3 sm:p-4 md:p-6 lg:p-8 font-inter">
      <div className="container-xl mx-auto flex flex-col gap-4">

        {/* HERO */}
        <section className="w-full">
          <div className="bg-[#000000] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg">
            {/* Left: Text */}
            <div className="flex-1 md:basis-[45%] p-6 sm:p-8 xl:ps-20 flex flex-col justify-start relative py-16">
              <div className="absolute top-6 sm:top-8 md:top-8 left-6 sm:left-8 md:left-12 lg:left-16 xl:left-20 flex flex-wrap items-center gap-2 text-white/70 text-[11px] sm:text-xs md:text-sm font-light">
                <span className="text-white font-[600] tracking-wide text-[22px]">{String(breadcrumb || "")}</span>
                <span className="w-[1px] h-3 bg-white/40"></span>
                <span className="max-w-[260px] sm:max-w-none text-[14px]">{String(breadcrumbSub || "")}</span>
              </div>
              <h2
                className="text-[25px] md:text-[35px] leading-[120%] text-white md:pt-36 pt-10 md:pe-0 pe-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {String(heading || "")}
              </h2>
            </div>
            {/* Right: Hero Image */}
            <div className="flex-1 md:basis-[55%] min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[520px] relative">
              <img
                src={image}
                alt="L'Oreal Revitalift Laser Renew"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* VIDEO */}
        {video && (
          <section id="video-section" className="w-full bg-[#000000] rounded-2xl shadow-lg flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 mb-6 md:mb-10">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {isPlaying && video.youtubeId ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt="L'Oreal Revitalift Laser Renew video preview"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Brand label overlay */}
                  <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
                    <span className="text-white text-[20px] sm:text-[24px] md:text-[28px] font-light tracking-wide">
                      {video.brandLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1 opacity-90">
                        <path d="M4 2.69C4 1.93 4.81 1.44 5.48 1.81L22.4 11.12C23.09 11.5 23.09 12.5 22.4 12.88L5.48 22.18C4.81 22.55 4 22.07 4 21.31V2.69Z"></path>
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col gap-1 md:px-2">
              <span className="text-white text-[1.2rem] sm:text-[1.35rem] md:text-xl lg:text-[30px] font-semibold tracking-wide">
                {video.title}
              </span>
              <p className="text-white/70 text-[10px] sm:text-[13px] md:text-[13px] tracking-wide uppercase font-medium mt-2">
                {video.subtext}
              </p>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

// ─────────── Arrow icon used in Poliderma lists ───────────
function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="h-[16px] w-[16px] text-[#fff]">
      <path d="M6 10H14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 7L14 10L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PolidermaPage({ data }: { data: CaseStudyData }) {
  const hero = data.hero as any;
  const challenge = data.challenge as any;
  const approach = data.approach as any;
  const results = data.results as any;
  const cta = data.cta as any;

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="w-full px-3 py-3 sm:px-5 sm:py-5">
        <div className="mx-auto container-xl">
          <div className="grid overflow-hidden rounded-[18px] bg-[#F5EDE8] lg:grid-cols-[1fr_1fr]">
            {/* Left */}
            <div className="order-2 flex items-center lg:order-1">
              <div className="w-full px-4 pb-7 sm:px-6 sm:pb-9 md:px-8 md:pb-10 lg:px-[58px] lg:pb-[54px] pt-7">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-10 lg:mb-10">
                  <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#1B1642]">
                    <span className="text-[13px] font-semibold text-[#16123F] sm:text-[14px] md:text-[22px]">Case Study</span>
                    <span className="text-[#8F8A96]">|</span>
                    <span className="text-[12px] italic text-[#16123F] sm:text-[14px]">Health, Pharma &amp; Beauty</span>
                  </div>
                  <a href="/who-we-create-for">
                    <button type="button" className="rounded-full border border-[#E4D6DE] bg-transparent px-4 py-2 text-[11px] font-medium text-[#8F7F87] transition-all duration-300 hover:bg-white/60 sm:text-[12px]">Back to Portfolio</button>
                  </a>
                </div>
                <h1 className="max-w-[470px] text-[28px] font-normal leading-[1.1] tracking-[-0.02em] text-[#685956] sm:text-[32px] md:text-[36px] lg:text-[38px]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                  {hero?.heading}
                </h1>
                {/* Nav tabs */}
                {hero?.tabs && (
                  <div className="mt-8 flex max-w-[560px] flex-wrap gap-2 sm:mt-9 sm:gap-3">
                    {(hero.tabs as any[]).map((tab: any, i: number) => (
                      <a key={i} href={tab.target}>
                        <button type="button" className="w-fit rounded-full bg-[#DD9842] px-4 py-[11px] text-center text-[12px] font-medium leading-none text-white transition duration-300 hover:-translate-y-[1px] hover:bg-[#c88030] hover:shadow-[0_12px_24px_rgba(221,152,66,0.22)] sm:px-5 sm:py-[12px] sm:text-[13px] md:px-6 md:py-[13px] md:text-[14px] lg:text-[15px]">
                          {tab.label}
                        </button>
                      </a>
                    ))}
                  </div>
                )}
                {hero?.cta && (
                  <a href="#challenge" className="mt-6 inline-block text-[14px] font-medium text-[#DD9842] hover:underline">{hero.cta}</a>
                )}
              </div>
            </div>
            {/* Right: image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-full lg:min-h-[560px]">
                <img src={hero?.image} alt="Poliderma case study visual" className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      {data.introHeading && (
        <section className="w-full px-3 pb-6 pt-6 sm:px-5 sm:pb-8 lg:py-14">
          <div className="mx-auto container-xl">
            <div className="text-center">
              <div className="mx-auto max-w-[84%]">
                <h2
                  className="text-[26px] sm:text-[31px] md:text-[38px] lg:text-[40px] font-normal leading-[1.2] tracking-[-0.02em] text-[#00353A]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                >
                  {String(data.introHeading)}
                </h2>
                <p className="mx-auto mt-6 text-[14px] sm:text-[18px] leading-[1.55] text-[#555555]">
                  {String(data.introSubtext || "")}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CHALLENGE ── */}
      {challenge && (
        <section id="challenge" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
          <div className="mx-auto container-xl">
            <div className="overflow-hidden rounded-[14px]" style={{ backgroundColor: "#EDE8E6" }}>
              {/* Top half: text + image */}
              <div className="grid border-b border-[#e2dbd7] lg:grid-cols-[1.02fr_0.98fr]" style={{ backgroundColor: "#F5F1EF" }}>
                <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:ps-[86px] lg:pe-[24px] lg:pb-[56px] lg:pt-[34px]">
                  <h3 className="text-[14px] sm:text-[22px] font-semibold text-[#DD9842]">{challenge.heading}</h3>
                  <p
                    className="mt-8 sm:mt-10 md:mt-14 lg:mt-[72px] text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-[#685956]"
                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                  >
                    {challenge.intro}
                  </p>
                </div>
                <div className="flex items-center justify-center px-5 py-7 sm:px-8 sm:py-8 md:px-10 lg:px-[46px]">
                  <img
                    src="/assets/Image/polyderma-about.png"
                    alt="Health beauty digital ecosystem examples"
                    className="w-full max-w-[410px] object-contain"
                  />
                </div>
              </div>
              {/* Bottom half: issues + conclusion */}
              <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
                <h3
                  className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em] text-[#685956]"
                  style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                >
                  {challenge.issuesLabel}
                </h3>
                <div className="mt-6 sm:mt-7 space-y-[14px]">
                  {(challenge.issues as string[]).map((issue: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-[3px] flex h-[21px] w-[21px] min-w-[14px] items-center justify-center rounded-full bg-[#DD9842] text-[14px] font-bold leading-none text-white">!</span>
                      <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[#685956]">{issue}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-9 sm:mt-12 lg:mt-[48px] flex items-start gap-3 sm:gap-4">
                  <span className="flex h-[33px] w-[35px] min-w-[30px] items-center justify-center rounded-[6px] bg-[#E0D4CF] text-[20px] font-semibold leading-none text-[#DD9842]">!</span>
                  <p
                    className="text-[20px] sm:text-[22px] font-normal leading-[1.35] tracking-[-0.015em] text-[#00353A]"
                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                  >
                    {challenge.conclusion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── APPROACH & DELIVERY ── */}
      {approach && (
        <section id="approach" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
          <div className="mx-auto container-xl">
            <div className="text-center">
              <h2 className="text-[26px] sm:text-[31px] md:text-[36px] lg:text-[40px] font-normal leading-[1.18] tracking-[-0.02em] text-[#685956]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {approach.heading}
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] font-normal text-[#685956]">{approach.subheading}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {(approach.cards as any[]).map((card: any, i: number) => (
                <div key={i} className="overflow-hidden rounded-[16px] bg-[#F5F1EF] h-full">
                  <div className="h-[210px] sm:h-[220px] w-full overflow-hidden">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="px-4 sm:px-[24px] pb-5 sm:pb-[20px] pt-4 sm:pt-[16px]">
                    <h3 className="border-b border-[#1E6A70] pb-4 text-[16px] sm:text-[17px] font-semibold text-[#685956]">{card.title}</h3>
                    <p className="pt-4 text-[14px] leading-[1.7] text-[#685956]">{card.intro}</p>
                    <div className="mt-4 space-y-3">
                      {(card.items as string[]).map((item: string, j: number) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span className="mt-[2px] flex h-[14px] w-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#DD9842]">
                            <ArrowIcon />
                          </span>
                          <p className="text-[13px] sm:text-[14px] leading-[1.55] text-[#685956]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RESULTS ── */}
      {results && (
        <section id="results" className="w-full px-3 pb-10 pt-2 sm:px-5 sm:pb-24 lg:py-20">
          <div className="mx-auto container-xl max-w-[1240px]">
            <div className="text-center">
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#685956]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {results.heading}
              </h2>
              <p className="mx-auto mt-3 max-w-[620px] text-[14px] sm:text-[15px] leading-[1.65] text-[#685956]">{results.subtext}</p>
            </div>

            {/* Desktop gallery */}
            <div className="mt-8 hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 lg:gap-5">
              {/* Column 1 */}
              <div className="grid gap-4 lg:gap-5">
                <div className="grid grid-cols-[0.92fr_1fr] gap-4 lg:gap-5">
                  <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                    <img src="/assets/Image/polyderma-brand-img6.png" alt="Product in hand" className="h-[92px] lg:h-[96px] w-full object-cover" />
                  </div>
                  <div className="flex h-[92px] lg:h-[96px] flex-col justify-center rounded-[18px] bg-transparent px-2">
                    <h3 className="text-[30px] lg:text-[34px] font-normal leading-none text-[#d88d3d]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>100%</h3>
                    <p className="mt-2 max-w-[130px] text-[10px] lg:text-[11px] leading-[1.45] text-[#7a6d67]">Fully booked for months in advance through a single ad campaign</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                  <img src="/assets/Image/polyderma-brand-img.png" alt="Brand content collage" className="h-[92px] lg:h-[96px] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                  <img src="/assets/Image/our-approach-delivery.png" alt="Customer holding product" className="h-[200px] lg:h-[206px] w-full object-cover" />
                </div>
              </div>
              {/* Column 2 */}
              <div className="grid gap-4 lg:gap-5">
                <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                  <img src="/assets/Image/polyderma-brand-img5.png" alt="Main skincare product" className="h-[306px] lg:h-[312px] w-full object-cover" />
                </div>
                <div className="grid grid-cols-[0.9fr_1fr] gap-4 lg:gap-5">
                  <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                    <img src="/assets/Image/our-approach-img2.png" alt="Social post preview" className="h-[94px] lg:h-[98px] w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                    <img src="/assets/Image/our-approach-img1.png" alt="Hand holding product" className="h-[94px] lg:h-[98px] w-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Column 3 */}
              <div className="grid gap-4 lg:gap-5">
                <div className="overflow-hidden rounded-[18px] bg-[#ece7e2]">
                  <img src="/assets/Image/polyderma-brand-img3.png" alt="Red product campaign visual" className="h-[200px] lg:h-[206px] w-full object-cover" />
                </div>
                <div className="grid grid-cols-[0.88fr_1fr] gap-4 lg:gap-5">
                  <div className="flex h-[200px] lg:h-[206px] flex-col justify-between rounded-[18px] bg-transparent py-3">
                    <div className="border-l border-[#d9ccc3] pl-4">
                      <h3 className="text-[34px] lg:text-[38px] font-normal leading-none text-[#d88d3d]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>15+</h3>
                      <p className="mt-2 max-w-[125px] text-[10px] lg:text-[11px] leading-[1.45] text-[#7a6d67]">cosmetic products successfully designed &amp; launched</p>
                    </div>
                    <div className="border-l border-[#d9ccc3] pl-4">
                      <h3 className="text-[34px] lg:text-[38px] font-normal leading-none text-[#d88d3d]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>6X</h3>
                      <p className="mt-2 max-w-[125px] text-[10px] lg:text-[11px] leading-[1.45] text-[#7a6d67]">increase in website traffic for Polderm year-over-year</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[18px] bg-[#f0e5df]">
                    <img src="/assets/Image/polyderma-brand-img-4.png" alt="Skincare lifestyle visual" className="h-[200px] lg:h-[206px] w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile gallery */}
            <div className="mt-8 grid gap-3 md:hidden">
              <div className="grid grid-cols-[1fr_1fr] gap-3">
                <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]">
                  <img src="/assets/Image/polyderma-brand-img6.png" alt="" className="h-[130px] w-full object-cover" />
                </div>
                <div className="rounded-[16px] bg-transparent px-2 py-3 flex flex-col justify-center">
                  <h3 className="text-[34px] font-normal leading-none text-[#d88d3d]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>100%</h3>
                  <p className="mt-2 text-[11px] leading-[1.45] text-[#7a6d67]">Fully booked for months in advance through a single ad campaign</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]"><img src="/assets/Image/polyderma-brand-img5.png" alt="" className="h-[320px] w-full object-cover" /></div>
              <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]"><img src="/assets/Image/polyderma-brand-img3.png" alt="" className="h-[220px] w-full object-cover" /></div>
              <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]"><img src="/assets/Image/polyderma-brand-img.png" alt="" className="h-[140px] w-full object-cover" /></div>
              <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]"><img src="/assets/Image/our-approach-delivery.png" alt="" className="h-[250px] w-full object-cover" /></div>
              <div className="grid grid-cols-[0.95fr_1fr] gap-3">
                <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]"><img src="/assets/Image/our-approach-img2.png" alt="" className="h-[110px] w-full object-cover" /></div>
                <div className="overflow-hidden rounded-[16px] bg-[#ece7e2]"><img src="/assets/Image/our-approach-img1.png" alt="" className="h-[110px] w-full object-cover" /></div>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-3">
                <div className="rounded-[16px] bg-transparent py-4">
                  <div className="border-l border-[#d9ccc3] pl-4">
                    <h3 className="text-[32px] font-normal leading-none text-[#d88d3d]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>15+</h3>
                    <p className="mt-2 text-[11px] leading-[1.45] text-[#7a6d67]">cosmetic products successfully designed &amp; launched</p>
                  </div>
                  <div className="mt-5 border-l border-[#d9ccc3] pl-4">
                    <h3 className="text-[32px] font-normal leading-none text-[#d88d3d]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>6X</h3>
                    <p className="mt-2 text-[11px] leading-[1.45] text-[#7a6d67]">increase in website traffic for Polderm year-over-year</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[16px] bg-[#f0e5df]">
                  <img src="/assets/Image/polyderma-brand-img-4.png" alt="" className="h-full min-h-[220px] w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      {cta && (
        <section className="w-full px-3 pb-[54px] pt-6 sm:px-5 sm:pb-[80px] lg:pb-[90px]">
          <div className="mx-auto container-xl">
            <div className="flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 text-center">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {cta.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.6] text-[#555555]">{cta.subtext}</p>
              <div className="mt-7 flex w-full max-w-[420px] flex-col items-center gap-3">
                <a href={cta.buttonHref} className="w-full sm:w-fit">
                  <button className="btn-primary w-full">{cta.buttonText}</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

function CastaniaPage({ data }: { data: CaseStudyData }) {
  const hero = data.hero as any;
  const challenge = data.challenge as any;
  const goals = data.goals as any;
  const role = data.role as any;
  const results = data.results as any;
  const cta = data.cta as any;

  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="w-full px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto container-xl">
          <section className="overflow-hidden rounded-[18px] bg-[#EEEEEE] shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:rounded-[22px]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="flex min-h-[360px] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:min-h-[500px] lg:px-16 lg:py-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#7d7772]">
                  <span className="text-[22px] font-semibold text-[#555555]">{hero?.breadcrumbLabel}</span>
                  <span className="h-3 w-px bg-[#bcb5af]"></span>
                  <span className="text-[14px] text-[#555555] italic">{hero?.breadcrumbSub}</span>
                </div>
                <div className="my-auto pt-10 sm:pt-20 lg:pl-0">
                  <h1 className="hero-title text-[30px] sm:text-[38px] md:text-[40px] lg:text-[38px] font-normal leading-[1.08] tracking-normal text-[#555555]">
                    <span className="text-[#8DA117]" style={{ fontSize: "36px" }}>{hero?.headingPrefix}</span>
                    <br />
                    {hero?.headingSuffix}
                  </h1>
                  <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-[#555555] font-normal">
                    {hero?.subtext}
                  </p>
                  <div className="mt-8 flex max-w-[470px] flex-wrap gap-3 mb-8">
                    {(hero?.tabs as any[])?.map((tab: any, i: number) => (
                      <a key={i} href={tab.target}>
                        <button type="button" className="w-fit rounded-full bg-[#000000] px-5 sm:px-6 py-[12px] sm:py-[13px] text-[13px] sm:text-[15px] font-medium leading-none text-white transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                          {tab.label}
                        </button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-[500px]">
                <div className="relative h-[300px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[488px]">
                  <img src={hero?.image} alt="Castania case study visual" className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,60,66,0.08)_0%,rgba(0,60,66,0)_24%,rgba(0,0,0,0.03)_100%)]"></div>
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    <a href="#challenge">
                      <button type="button" className="flex items-baseline gap-3 rounded-full bg-[#8DA117] px-5 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:translate-y-[-1px]">
                        {hero?.cta}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ── INTRO ── */}
      {data.intro && (
        <section className="w-full px-3 pb-6 pt-6 sm:px-5 sm:pb-8 lg:py-14">
          <div className="mx-auto container-xl">
            <div className="text-center">
              <div className="mx-auto max-w-[84%]">
                <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-normal leading-[1.3] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                  {String(data.intro).split('\\n\\n').map((paragraph, i) => (
                    <span key={i}>
                      {paragraph}
                      {i !== String(data.intro).split('\\n\\n').length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CHALLENGE ── */}
      {challenge && (
        <section id="challenge" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10 lg:pt-10">
          <div className="mx-auto container-xl">
            <div className="overflow-hidden rounded-[14px] bg-[#F8F8F8]">
              <div className="grid border-b border-[#e2dbd7] bg-[#6B5D39] lg:grid-cols-[1.02fr_0.98fr]" style={{ backgroundImage: "url('/assets/Image/castania-banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:ps-[86px] lg:pe-[0px] lg:pb-[56px] lg:pt-[34px]">
                  <h3 className="text-[14px] sm:text-[22px] font-semibold text-[#fff]">{challenge.heading}</h3>
                  <p className="mt-8 sm:mt-10 md:mt-14 lg:mt-[72px] text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-[#fff]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {challenge.introTop}
                  </p>
                </div>
              </div>
              <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
                <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em] text-[#000000]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                  {challenge.introBottom}
                </h3>
                <div className="mt-6 sm:mt-7 space-y-[14px]">
                  {(challenge.issues as string[]).map((issue: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-[3px] flex h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-[#5FC5D0] text-[13px] font-bold leading-none text-white">!</span>
                      <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[#555555]">{issue}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-9 sm:mt-12 lg:mt-[48px] flex items-start gap-3 sm:gap-4">
                  <span className="flex h-[33px] w-[35px] min-w-[30px] items-center justify-center rounded-[6px] bg-[#ECECEC] text-[20px] font-semibold leading-none text-[#5FC5D0]">!</span>
                  <p className="text-[20px] sm:text-[22px] font-normal leading-[1.35] tracking-[-0.015em] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                    {challenge.conclusion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GOALS ── */}
      {goals && (
        <section id="goals" className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
          <div className="mx-auto container-xl">
            <div className="text-center">
              <h2 className="text-[26px] sm:text-[31px] md:text-[36px] lg:text-[40px] font-normal leading-[1.18] tracking-[-0.02em] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {goals.heading}
              </h2>
              <p className="mt-2 text-[15px] sm:text-[16px] font-normal text-[#555555]">{goals.subheading}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
              {(goals.cards as any[]).map((card: any, i: number) => (
                <div key={i} className="overflow-hidden rounded-[16px] bg-[#000000] h-full">
                  <div className="h-[210px] sm:h-[220px] w-full overflow-hidden">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="px-4 sm:px-[24px] pb-5 sm:pb-[20px] pt-4 sm:pt-[16px]">
                    <h3 className="border-b border-[#404040] pb-4 text-[16px] sm:text-[17px] font-semibold text-[#fff]">{card.title}</h3>
                    <p className="pt-4 text-[14px] sm:text-[14px] leading-[1.7] text-[#fff]">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STRATEGIC ROLE ── */}
      {role && (
        <section id="role" className="w-full px-7 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14">
          <div className="mx-auto md:max-w-[70%]">
            <div className="mx-auto">
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#555555]">{role.heading}</h3>
              <p className="mt-3 text-[20px] sm:text-[24px] font-normal leading-[1.34] tracking-[-0.015em] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {role.intro}
              </p>
              <div className="mt-6 space-y-3">
                {(role.questions as string[]).map((q: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="mt-[2px] flex h-[40px] w-[40px] min-w-[30px] items-center justify-center rounded-[4px] bg-[#EEEEEE]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="h-[28px] w-[28px]">
                        <path d="M6 10H14" stroke="#5FC5D0" strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M11 7L14 10L11 13" stroke="#5FC5D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                    <p className="text-[14px] sm:text-[15px] leading-[1.55] text-[#6A6A6A]">{q}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-[16px] sm:text-[18px] leading-[1.65] text-[#6A6A6A]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {role.conclusion}
              </p>
            </div>
            
            <div className="mt-8 grid gap-3 md:grid-cols-4 xl:grid-cols-4">
              {(role.cards as any[]).map((card: any, i: number) => (
                <div key={i} className="rounded-[14px] bg-[#F3F3F3] p-4 sm:p-5">
                  <div className="flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[10px] ">
                    <img src={card.icon} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                  <h4 className="mt-4 text-[16px] sm:text-[17px] font-semibold leading-[1.3] text-[#2C2C2C]">{card.title}</h4>
                  <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.65] text-[#666666]">{card.text}</p>
                </div>
              ))}
            </div>
            {role.wideCard && (
              <div className="mt-3 rounded-[14px] bg-[#F3F3F3] p-4 sm:p-5">
                <div className="grid gap-4 md:grid-cols-[320px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-[70px] w-[80px] overflow-hidden rounded-[10px] ">
                      <img src={role.wideCard.icon} alt={role.wideCard.title} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold leading-[1.3] text-[#2C2C2C]">{role.wideCard.title}</h4>
                    </div>
                  </div>
                  <p className="text-[13px] sm:text-[14px] leading-[1.65] text-[#666666]">{role.wideCard.text}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── RESULTS ── */}
      {results && (
        <section id="results" className="w-full px-3 pb-10 pt-2 sm:px-5 sm:pb-14 lg:pt-16 lg:pb-28">
          <div className="mx-auto container-xl max-w-[1240px]">
            <div className="text-center">
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#5A5A5A]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {results.heading}
              </h2>
              <p className="mx-auto mt-3 max-w-[620px] text-[14px] sm:text-[15px] leading-[1.65] text-[#8A8A8A]">{results.subtext}</p>
            </div>
            
            {/* Desktop gallery */}
            <div className="mt-8 hidden md:grid gap-3" style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gridTemplateRows: "repeat(4, 112px)" }}>
              <div className="col-span-4 row-span-2 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img1.png" alt="Castania result visual 1" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-4 row-span-3 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img2.png" alt="Castania result visual 2" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-4 row-span-1 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img3.png" alt="Castania result visual 3" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-4 row-span-1 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img4.png" alt="Castania result visual 4" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-4 row-span-2 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img9.png" alt="Castania jar product" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 row-span-1 rounded-[16px] px-5 py-4 flex flex-col justify-center">
                <h3 className="text-[48px] font-normal leading-[0.95] text-[#8DA117]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>+60%</h3>
                <p className="mt-0 max-w-[150px] text-[11px] leading-[1.5] text-[#777777]">After rebrand, company achieves steady annual growth of over 60%.</p>
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img5.png" alt="Castania result visual 5" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img8.png" alt="Castania result visual 8" className="h-full w-full object-fill" />
              </div>
              <div className="col-span-4 row-span-1 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img7.png" alt="Castania result visual 7" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img6.png" alt="Castania result visual 6" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Mobile gallery */}
            <div className="mt-8 grid gap-3 md:hidden">
              <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img1.png" alt="Castania mobile gallery 1" className="h-[220px] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img2.png" alt="Castania mobile gallery 2" className="h-[320px] w-full object-cover" />
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                  <img src="/assets/Image/partner-model-img3.png" alt="Castania mobile gallery 3" className="h-[140px] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                  <img src="/assets/Image/partner-model-img4.png" alt="Castania mobile gallery 4" className="h-[140px] w-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-[1fr_110px] gap-3">
                <div className="rounded-[16px] bg-[#F5F3EA] px-5 py-5 flex flex-col justify-center">
                  <h3 className="text-[42px] font-normal leading-[0.95] text-[#8DA117]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>+60%</h3>
                  <p className="mt-3 max-w-[180px] text-[12px] leading-[1.5] text-[#777777]">After rebrand, company achieves steady annual growth of over 60%.</p>
                </div>
                <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                  <img src="/assets/Image/partner-model-img9.png" alt="Castania mobile gallery 5" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img5.png" alt="Castania mobile gallery 6" className="h-[220px] w-full object-cover" />
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-3">
                <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                  <img src="/assets/Image/partner-model-img6.png" alt="Castania mobile gallery 7" className="h-[120px] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                  <img src="/assets/Image/partner-model-img7.png" alt="Castania mobile gallery 8" className="h-[120px] w-full object-cover" />
                </div>
              </div>
              <div className="overflow-hidden rounded-[16px] bg-[#F2F2F2]">
                <img src="/assets/Image/partner-model-img8.png" alt="Castania mobile gallery 9" className="h-[180px] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      {cta && (
        <section className="w-full px-3 pb-[54px] pt-6 sm:px-5 sm:pb-[80px] lg:pb-[90px]">
          <div className="mx-auto container-xl">
            <div className="flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 text-center">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.02em] text-[#555555]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>
                {cta.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.6] text-[#555555]">{cta.subtext}</p>
              <div className="mt-7 flex w-full max-w-[420px] flex-col items-center gap-3">
                <a href={cta.buttonHref} className="w-full sm:w-fit">
                  <button className="btn-primary w-full">{cta.buttonText}</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function NavadaPage({ data }: { data: CaseStudyData }) {
  const hero = data.hero as any;
  const dictionary = data.dictionary as any;
  const gate = data.gate as any;
  const fonts = data.fonts as any;
  const gallery = data.gallery as any;

  return (
    <div className="min-h-screen text-[#221d19]">
      <section className="w-full px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto container-xl">
          <section className="overflow-hidden rounded-[18px] bg-[#e8e2dc] shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:rounded-[22px]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="flex min-h-[360px] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:min-h-[500px] lg:px-16 lg:py-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#7d7772]">
                  <span className="text-[22px] font-semibold text-[#000000]">{hero?.breadcrumbLabel}</span>
                  <span className="h-3 w-px bg-[#bcb5af]"></span>
                  <span className="text-[14px] text-[#000000] italic">{hero?.breadcrumbSub}</span>
                </div>
                <div className="my-auto pt-10 sm:pt-12 lg:pl-0">
                  <div className="mb-6 w-[70px] sm:w-[82px]">
                    <img src={hero?.logo} alt="navada-logo" className="h-auto w-full" />
                  </div>
                  <h1 className="text-[36px] leading-[1.08] tracking-[-0.03em] text-[#1d1815] sm:text-[44px] lg:text-[48px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    {hero?.heading}
                  </h1>
                  <p className="mt-6 text-[13px] leading-6 text-[#6f6964] sm:text-[16px]">
                    {hero?.subtext}
                  </p>
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-[500px]">
                <img src={hero?.image} alt="Navada hero" className="h-full w-full object-cover" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {dictionary && (
        <section className="w-full px-3 py-12 sm:px-5 sm:py-16 lg:py-28">
          <div className="mx-auto container-xl">
            <section className="grid gap-10 px-1 md:grid-cols-2 md:items-center lg:px-16">
              <div className="text-[20px] leading-8 text-[#6f6964]">
                <p>{dictionary.text}</p>
              </div>
              <div className="flex items-center justify-start md:justify-center">
                <img src={dictionary.image} className="mx-auto w-[200px] md:w-[50%]" alt="navada" />
              </div>
            </section>
          </div>
        </section>
      )}

      {gate && (
        <section className="w-full px-3 sm:px-5">
          <div className="mx-auto container-xl">
            <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.03)] sm:rounded-[20px]">
                <img src={gate.image1} alt="Navada illustration" className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="rounded-[18px] bg-[#e8e2dc] px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.02)] sm:rounded-[20px] sm:px-8 sm:py-10 lg:min-h-[274px] lg:px-12 lg:py-12">
                  <p className="text-[14px] leading-7 text-[#6f6964] sm:text-[18px]">
                    {gate.text}
                  </p>
                </div>
                <div className="flex justify-end">
                  <img src={gate.image2} alt="navada-logo" className="w-[200px]" />
                </div>
              </div>
            </section>
          </div>
        </section>
      )}

      {fonts && (
        <section className="w-full px-3 pt-10 sm:px-5 sm:pt-14 lg:pt-16">
          <div className="mx-auto container-xl">
            <section>
              <h2 className="text-[34px] leading-none text-[#1e1a17] sm:text-[38px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{fonts.heading}</h2>
              <div className="mt-6 grid gap-6 rounded-[18px] bg-transparent sm:mt-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-8">
                <div>
                  <h6 className="text-[14px] text-[#807a75]">{fonts.primary}</h6>
                  <div style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    <h3 className="mt-2 text-[18px] leading-[1.5] text-[#555555] md:text-[22px]">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
                    <h4 className="mt-2 text-[16px] leading-[1.5] text-[#555555] md:text-[22px]">abcdefghijklmnopqrstuvwxyz</h4>
                    <h5 className="mt-2 text-[14px] leading-[1.5] text-[#555555] md:text-[22px]">0123456789</h5>
                  </div>
                </div>
                <div className="hidden bg-[#cfc8c2] lg:block"></div>
                <div>
                  <h6 className="text-[14px] text-[#807a75]">{fonts.secondary}</h6>
                  <div style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    <h3 className="mt-2 text-[18px] leading-[1.5] text-[#555555] md:text-[22px]">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
                    <h4 className="mt-2 text-[16px] leading-[1.5] text-[#555555] md:text-[22px]">abcdefghijklmnopqrstuvwxyz</h4>
                    <h5 className="mt-2 text-[14px] leading-[1.5] text-[#555555] md:text-[22px]">0123456789</h5>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}

      {gallery && (
        <section className="w-full px-3 pt-24 sm:px-5">
          <div className="mx-auto container-xl">
            <section>
              <h6 className="mb-2 text-[14px] text-[#555555]">{gallery.subtext}</h6>
              <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                <div className="grid gap-4">
                  <div>
                    <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.03)] sm:rounded-[20px]">
                      <img src={gallery.image1} alt="gallery" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <img src={gallery.image2} alt="gallery" />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.03)] sm:rounded-[20px]">
                    <img src={gallery.image3} alt="gallery" className="h-full w-full object-cover" />
                  </div>
                  <div className="w-full sm:max-w-[290px]">
                    <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.03)] sm:rounded-[20px]">
                      <img src={gallery.image4} alt="gallery" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}

      <section className="w-full px-3 sm:px-5">
        <div className="mx-auto container-xl">
          <div className="h-12 sm:h-16 lg:h-24"></div>
        </div>
      </section>
    </div>
  );
}

function MinglanjeVKlanjcuPage({ data }: { data: CaseStudyData }) {
  const hero = data.hero as any;
  const illustration = data.illustration as any;
  const quote = data.quote as any;
  const result = data.result as any;
  const gallery = data.gallery as any;

  return (
    <div className="w-full bg-white pb-20 font-inter">
      <section className="container-xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] px-4 md:px-0 py-6">
          <div className="flex-1 bg-[#F4F3F0] p-8 sm:px-12 md:px-16 lg:px-20 relative flex flex-col justify-start md:rounded-s-[15px] rounded-t-[15px]">
            <div className="flex items-center gap-2 text-[12px] sm:text-[14px] text-gray-800 font-medium mb-16 sm:mb-24">
              <span className="font-semibold">{hero?.breadcrumbLabel}</span>
              <span className="w-[1px] h-3 bg-gray-400"></span>
              <span className="font-light text-gray-500">{hero?.breadcrumbSub}</span>
            </div>
            <div className="mt-8">
              <div className="relative w-20 sm:w-24 mb-6">
                <img src={hero?.logo} alt="logo" />
              </div>
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-[#555555] leading-[1.3] font-light mt-4 pb-14" style={{ fontFamily: "'Inter', 'Times New Roman', serif" }}>
                {hero?.heading}
              </h2>
            </div>
          </div>
          <div className="flex-1 relative md:min-h-auto">
            <img src={hero?.image} alt="Hero" className="absolute inset-0 w-full h-full object-cover rounded-e-[15px]" />
          </div>
        </div>
      </section>

      {illustration && (
        <section className="container-xl mx-auto">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4 md:px-0 mb-20 sm:mb-32">
            <div className="flex-1 flex justify-center flex-col items-center relative">
              <img src={illustration.image} alt="illustration" className="w-full object-contain" />
            </div>
            <div className="flex-[0.8] text-gray-800 text-[13px] sm:text-[14px] md:text-[20px] leading-relaxed font-light">
              <p className="mb-6 md:text-[20px] max-w-[380px]">{illustration.text1}</p>
              <p className="md:text-[20px] max-w-[380px]">{illustration.text2}</p>
            </div>
          </div>
        </section>
      )}

      {quote && (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-0 mb-16 sm:mb-24">
          <div className="w-full bg-[#f9f9f9] rounded-[20px] p-10 sm:p-16 md:p-24 flex flex-col items-center shadow-sm">
            <div className="max-w-[500px] w-full flex flex-col items-start text-left">
              <p className="text-[20px] sm:text-[24px] md:text-[28px] text-[#444444] italic leading-[1.3] font-light" style={{ fontFamily: "'Inter', 'Times New Roman', serif" }}>{quote.text}</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                  <img src={quote.image} alt={quote.name} className="w-full h-full object-cover grayscale opacity-70" />
                </div>
                <span className="text-[12px] sm:text-[14px] font-[700] tracking-[0.5em] text-gray-900 uppercase">{quote.name}</span>
              </div>
            </div>
          </div>
          <p className="text-[#555555] text-[10px] sm:text-[14px] mt-4 px-2 tracking-wide font-normal max-w-[1400px] mx-auto">{quote.subtext}</p>
        </section>
      )}

      {result && (
        <section className="w-full max-w-[1400px] mx-auto px-4 lg:px-0 flex flex-col items-center">
          <h3 className="text-[20px] sm:text-[40px] text-[#555555] mb-10 sm:mb-6 text-center" style={{ fontFamily: "'Inter', 'Times New Roman', serif" }}>{result.heading}</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[1400px]">
            <div className="w-full rounded-2xl overflow-hidden relative aspect-square sm:aspect-[4/5] bg-black">
              <img src={result.card1.image} alt="Marda event" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-6 right-6 text-right text-white">
                <h4 className="text-[32px] sm:text-[40px] leading-none mb-2" style={{ fontFamily: "'Inter', 'Times New Roman', serif" }}>{result.card1.title}</h4>
                <p className="text-[10px] sm:text-[12px] font-sans tracking-wide">{result.card1.text}</p>
              </div>
            </div>
            <div className="w-full rounded-2xl overflow-hidden relative aspect-square sm:aspect-[4/5]">
              <img src={result.card2.image} alt="Mug with logo" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {gallery && (
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-0 mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-6 pb-20">
          {(gallery as string[]).map((img, i) => (
            <div key={i} className="w-full rounded-[24px] overflow-hidden shadow-sm">
              <img src={img} alt={`Gallery image ${i}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function IdsPage({ data }: { data: CaseStudyData }) {
  const hero = data.hero as any;
  const videoSection = data.videoSection as any;
  const mockupSection = data.mockupSection as any;

  return (
    <div className="min-h-screen px-4 md:px-0 bg-white pt-10 sm:pt-20 md:pt-24 lg:pt-12 pb-14 sm:pb-20 md:pb-24">
      <section className="container-xl mx-auto">
        <div className="relative overflow-hidden rounded-[18px] bg-[#f3f3f3] sm:rounded-[22px] lg:rounded-[24px]">
          <div className="grid min-h-[420px] grid-cols-1 lg:min-h-[560px] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative z-20 flex flex-col justify-start ps-5 pb-8 pt-6 sm:ps-8 sm:pb-10 sm:pt-8 md:ps-10 md:pb-12 md:pt-10 lg:ps-[56px] lg:pb-16 lg:pt-8 xl:ps-[58px]">
              <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-[#5a5a5a] sm:mb-10 sm:text-[12px] md:mb-32 md:text-[12.5px]">
                <span className="font-semibold text-[#353535] text-[22px]">{hero?.breadcrumbLabel}</span>
                <span className="h-3.5 w-px bg-[#cfcfcf]"></span>
                <span className="italic text-[#7b7b7b] text-[14px]">{hero?.breadcrumbSub}</span>
              </div>
              <div className="mb-5 h-8 w-fit sm:h-10 md:h-11 lg:mb-6">
                <img src={hero?.logo} alt="Logo" className="h-full w-auto object-contain" />
              </div>
              <h1 className="text-[28px] font-light leading-[1.1] text-[#6c6c6c] sm:text-[34px] md:text-[38px] lg:text-[38px] xl:text-[38px]" style={{ fontFamily: "'Inter', 'Times New Roman', serif" }}>
                {hero?.heading}
              </h1>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-full">
              <div className="absolute inset-0 lg:left-auto lg:w-full">
                <img src={hero?.image} alt="Hero image" className="h-full w-full object-cover object-center sm:object-right-top lg:object-contain lg:object-right-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {videoSection && (
        <section className="container-xl mx-auto">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.02fr_0.98fr] md:gap-10 lg:gap-16 my-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px] bg-[#efefef] sm:rounded-[22px] lg:rounded-[24px]">
              <img src={videoSection.image} alt="Video thumbnail" className="absolute inset-0 h-full w-full object-cover" />
              <button aria-label="Play video" className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#d83a6b] shadow-[0_14px_30px_rgba(216,58,107,0.28)] transition duration-300 hover:scale-105 sm:h-14 sm:w-14">
                <svg className="ml-0.5 h-5 w-5 text-white sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </button>
              <div className="pointer-events-none absolute bottom-3 left-3 z-10 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5">
                <p className="text-[8px] font-light tracking-wide text-white drop-shadow-md sm:text-[9px] md:text-[10px]">{videoSection.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center md:justify-center lg:justify-start">
              <p className="text-[14px] leading-[1.7] text-[#373737] sm:text-[15px] md:text-[22px] lg:text-[20px]">{videoSection.text}</p>
            </div>
          </div>
        </section>
      )}

      {mockupSection && (
        <section className="flex container-xl mx-auto justify-start md:justify-end">
          <div className="relative w-full overflow-hidden rounded-[18px] bg-[#efefef] sm:rounded-[22px] md:w-[62%] lg:w-[52%] lg:rounded-[24px]">
            <img src={mockupSection.image} alt="Mockup" className="h-auto w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 via-black/25 to-transparent sm:h-20 md:h-24"></div>
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 md:bottom-5 md:left-6">
              <p className="text-[11px] font-medium tracking-wide text-white sm:text-[12px] md:text-[13px]">{mockupSection.label}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
