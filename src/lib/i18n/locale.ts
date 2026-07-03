export type LocaleCode = "en" | "hr";

export interface LocalizedString {
  en: string;
  hr?: string | null;
}

export function getLocalizedString(
  value: LocalizedString | string | null | undefined,
  locale: LocaleCode = "en",
): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (locale === "hr" && value.hr) return value.hr;
  return value.en;
}

export function toLocalized(input: string, hr = ""): LocalizedString {
  return { en: input, hr: hr || null };
}
