import { NextResponse } from "next/server";
import { getPageData } from "@/lib/data/pageLoader";

export async function GET() {
  const data = getPageData("what-we-do");
  if (!data) return NextResponse.json({ error: "Page not found" }, { status: 404 });
  return NextResponse.json(data);
}
