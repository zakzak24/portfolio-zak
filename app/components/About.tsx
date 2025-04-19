"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-indigo-600 dark:text-indigo-300">
        {t.About.title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {t.About.description}
      </p>
    </section>
  );
}
