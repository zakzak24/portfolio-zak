"use client";

import { useState } from "react";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  "Next.js": <SiNextdotjs />,
  Javascript: <SiJavascript />,
  Typescript: <SiTypescript />,
  "Node.js": <FaNodeJs />,
  FastAPI: <SiFastapi />,
  MongoDB: <SiMongodb />,
  Postman: <SiPostman />,
  GitHub: <SiGithub />,
  CSS: <FaCss3Alt />,
  "Framer Motion": <TbBrandFramerMotion />,
};

export default function ProjectCard({
  title,
  description,
  link,
  tech,
}: {
  title: string;
  description: string;
  link: string;
  tech: string[];
}) {
  return (
    <div className="w-full max-w-sm bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:ring-2 hover:ring-indigo-400/50">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1 text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded dark:bg-indigo-900 dark:text-indigo-200"
          >
            <span className="text-lg">{techIcons[item]}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
