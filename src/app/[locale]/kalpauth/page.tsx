import type { Metadata } from "next";
import dynamic from "next/dynamic";

const KalpAuthForm = dynamic(() => import("@/components/auth/KalpAuthForm"));

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "hr" ? "Prijava — Hrescic" : "Sign In — Hrescic",
    description: locale === "hr" ? "Prijavite se na svoj račun." : "Sign in to your account.",
  };
}

export default async function KalpAuthPage({ params }: Props) {
  return (
    <main>
      <KalpAuthForm />
    </main>
  );
}
