import type { Metadata } from "next";
import { getLocalizedString, type LocaleCode } from "@/lib/i18n/locale";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Hrescic Work`,
    description: `Case study: ${title}`,
  };
}

export default async function BrandDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  let data: Record<string, unknown> | null = null;
  try {
    const res = await fetch(`${process.env.APP_URL || "http://localhost:3000"}/api/portfolio?slug=${slug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      data = Array.isArray(json) ? json[0] : json;
    }
  } catch {
    // fallback
  }

  return (
    <main>
      <div className="container-xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-semibold text-[#223039] mb-4 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        {data ? (
          <div>
            <p className="text-lg text-[#555555] mb-4">{String(data.description || "")}</p>
            {Array.isArray(data.gallery) && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {(data.gallery as string[]).map((img, i) => (
                  <img key={i} src={img} alt={`${slug} gallery ${i + 1}`} className="rounded-2xl w-full h-64 object-cover" />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-lg text-[#555555]">Portfolio content loading from CMS...</p>
        )}
      </div>
    </main>
  );
}
