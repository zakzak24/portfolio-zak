"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} TonNom. Made with Next.js & Tailwind CSS
          💻
        </p>

        <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-xl">
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
