"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { messages, Lang } from "@/app/locales";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof messages)[Lang];
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const t = messages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
