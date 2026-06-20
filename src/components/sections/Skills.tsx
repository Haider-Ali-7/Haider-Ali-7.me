"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SkillIcon } from "@/components/ui/SkillIcon";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { GiBearFace } from "react-icons/gi";
import {
  SiAnthropic,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { TbCursorText } from "react-icons/tb";
import { EASINGS, DURATIONS } from "@/lib/animations";

interface Skill {
  icon: IconType;
  label: string;
  bgColor: string;
}

const skills: Skill[] = [
  { icon: SiTypescript, label: "TypeScript", bgColor: "bg-[#3178c6]" },
  { icon: SiJavascript, label: "JavaScript", bgColor: "bg-[#f7df1e]" },
  { icon: SiReact, label: "React", bgColor: "bg-[#61dafb]" },
  { icon: SiNextdotjs, label: "Next.js", bgColor: "bg-[#000000]" },
  { icon: SiReact, label: "React Native", bgColor: "bg-[#61dafb]" },
  { icon: SiExpo, label: "Expo", bgColor: "bg-[#000020]" },
  { icon: SiTailwindcss, label: "Tailwind CSS", bgColor: "bg-[#06b6d4]" },
  { icon: SiRedux, label: "Redux", bgColor: "bg-[#764abc]" },
  { icon: GiBearFace, label: "Zustand", bgColor: "bg-[#433e38]" },
  { icon: SiNodedotjs, label: "Node.js", bgColor: "bg-[#339933]" },
  { icon: SiExpress, label: "Express.js", bgColor: "bg-[#000000]" },
  { icon: SiMongodb, label: "MongoDB", bgColor: "bg-[#47a248]" },
  { icon: FaAws, label: "AWS", bgColor: "bg-[#232f3e]" },
  { icon: SiGithubactions, label: "CI/CD", bgColor: "bg-[#2088ff]" },
  { icon: SiAnthropic, label: "Claude", bgColor: "bg-[#d4a27f]" },
  { icon: TbCursorText, label: "Cursor", bgColor: "bg-[#000000]" },
  { icon: SiGit, label: "Git", bgColor: "bg-[#f05032]" },
  { icon: SiGithub, label: "Github", bgColor: "bg-[#010101]" }
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 }
  }
};

const skillItemVariants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASINGS.entrance }
  }
};

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-50px" }}
        >
          {skills.map(skill => (
            <motion.div key={skill.label} variants={shouldReduceMotion ? {} : skillItemVariants}>
              <SkillIcon Icon={skill.icon} label={skill.label} bgColor={skill.bgColor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
