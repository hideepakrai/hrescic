"use client";

import { createContext, useContext } from "react";
import type { LocaleCode } from "./locale";

const LocaleContext = createContext<LocaleCode>("en");

export function LocaleProvider({ locale, children }: { locale: LocaleCode; children: React.ReactNode }) {
  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleCode {
  return useContext(LocaleContext);
}
