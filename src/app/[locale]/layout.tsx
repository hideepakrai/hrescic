import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import LocaleScript from "./LocaleScript";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const validLocale = locale === "hr" ? "hr" : "en";

  return (
    <>
      <LocaleScript locale={validLocale} />
      <Header locale={validLocale} />
      {children}
      <Footer locale={validLocale} />
    </>
  );
}
