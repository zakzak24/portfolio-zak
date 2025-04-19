"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import LangSwitcher from "@/app/components/LangSwitcher";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-blue-100 via-white to-white dark:from-gray-900 dark:via-gray-800  overflow-hidden z-[1000]">
      {/*dark:to-black*/}
      {/* Lang Switcher */}
      <header className="absolute top-4 right-4">
        <LangSwitcher />
      </header>
      {/* Nom animé */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 animate-fade-in-up">
        Ton prénom ici
      </h1>
      {/* Sous-titre animé */}
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6 animate-fade-in-up delay-150">
        {t.Hero.subtitle}
      </p>
      {/* Illustration avec animation */}
      <div className="mb-6 animate-zoom-in delay-300">
        <Image
          src="/hero-illustration.svg"
          alt="Illustration développeur"
          width={300}
          height={300}
        />
      </div>
      {/* CTA + Icônes */}
      <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-500">
        <Link
          href="#projets"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition duration-300"
        >
          {t.Hero.cta}
        </Link>

        <div className="flex justify-center gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/ton-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-2xl transition duration-300"
          >
            {/* GitHub */}
          </a>
          <a
            href="https://linkedin.com/in/ton-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-2xl transition duration-300"
          >
            {/* LinkedIn */}
          </a>
        </div>
      </div>
    </section>
  );
}
