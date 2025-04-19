"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: " - Portfolio Website",
    description: "Un site pour présenter mes projets",
    tech: ["Next.js", "Tailwind", "Typescript", "Framer Motion", "HTML", "CSS"],
    link: "#",
  },
  {
    title: "API REST",
    description: "Une API pour gérer des utilisateurs",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projets" className="py-20 px-6 bg-white dark:bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        {t.Projects.title}
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
