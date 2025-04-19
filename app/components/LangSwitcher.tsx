"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";

export default function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("fr")}
        className={lang === "fr" ? "font-bold underline" : ""}
      >
        FR
      </button>
      |
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "font-bold underline" : ""}
      >
        EN
      </button>
    </div>
  );
}
