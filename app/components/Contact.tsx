"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        {t.Contact.title}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Infos à gauche */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              <FaMapPin /> {t.Contact.cityLabel}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Paris, France</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              <SiMaildotru /> {t.Contact.emailLabel}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              ton.email@mail.com
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              <FaPhoneAlt /> {t.Contact.phoneLabel}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              +33 6 12 34 56 78
            </p>
          </div>
        </div>

        {/* Formulaire à droite */}
        <form
          action="https://formspree.io/f/TON_ID_ICI"
          method="POST"
          className="flex flex-col gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow"
        >
          <input
            type="text"
            name="name"
            placeholder={t.Contact.name}
            required
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder={t.Contact.email}
            required
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder={t.Contact.message}
            rows={5}
            required
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            {t.Contact.cta}
          </button>
        </form>
      </div>
    </section>
  );
}
