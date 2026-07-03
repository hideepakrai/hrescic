import { NextResponse, NextRequest } from "next/server";
import { getPageData } from "@/lib/data/pageLoader";

interface Context {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const data = getPageData(`what-we-do/sub/${slug}`);
  
  if (!data) return NextResponse.json({ error: "Page not found" }, { status: 404 });
  return NextResponse.json(data);
}
