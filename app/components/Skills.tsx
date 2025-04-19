"use client";

import { useState, useEffect } from "react";
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiFastapi,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";

import useInView from "@/app/hooks/useinView";
import { motion } from "framer-motion";

const powerAppsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="20"
    height="20"
  >
    <path
      d="M48 0l12 8H36l12 8zm0 96l12-8H36l12 8zm0-24l12-8H36l12 8zm0-24l12-8H36l12 8zm0-24l12-8H36l12 8z"
      fill="#00B0F0"
    />
  </svg>
);

const powerAutomateIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="20"
    height="20"
  >
    <path
      d="M50 0L62 16H38L50 0zM50 100L62 84H38L50 100zM50 28L62 44H38L50 28zM50 72L62 56H38L50 72z"
      fill="#00B0F0"
    />
  </svg>
);

const sharePointIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="20"
    height="20"
  >
    <path
      d="M50 0L62 16H38L50 0zM50 100L62 84H38L50 100zM50 28L62 44H38L50 28zM50 72L62 56H38L50 72z"
      fill="#0078D4"
    />
  </svg>
);

const skills = {
  frontend: [
    { name: "Javascript", icon: <SiJavascript />, level: 85 },
    { name: "React", icon: <FaReact />, level: 50 },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 50 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 15 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 50 },
    { name: "FastAPI", icon: <SiFastapi />, level: 15 },
    { name: "MongoDB", icon: <SiMongodb />, level: 15 },
  ],
  lowcode: [
    { name: "Power Apps", icon: powerAppsIcon, level: 85 },
    { name: "Power Automate", icon: powerAutomateIcon, level: 50 },
    { name: "SharePoint", icon: sharePointIcon, level: 15 },
  ],
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Skills() {
  const { ref, isVisible } = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-indigo-600"
        initial={{ opacity: 0, y: -10 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Mes compétences
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            custom={i}
            variants={categoryVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold mb-4 capitalize text-gray-800 dark:text-white">
              {category === "frontend" && "Frontend"}
              {category === "backend" && "Backend"}
              {category === "tools" && "Outils / DevOps"}
              {category === "lowcode" && "Low-code / No-code"}
            </h3>
            <ul className="space-y-4">
              {items.map((skill, i) => (
                <li key={i}>
                  <div className="flex items-center gap-3 mb-1 text-sm text-indigo-700 dark:text-indigo-200">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-indigo-100 dark:bg-indigo-800 h-2 rounded overflow-hidden">
                    <motion.div
                      className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: hasAnimated ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
