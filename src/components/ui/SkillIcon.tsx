"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { skillIconVariants, skillIconInnerVariants, skillGlowVariants } from "@/lib/animations";

interface SkillIconProps {
  Icon: IconType;
  label: string;
  bgColor?: string;
}

export function SkillIcon({ Icon, label, bgColor = "bg-teal/10" }: SkillIconProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="p-2 sm:p-3 rounded-full">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${bgColor} flex items-center justify-center`}>
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
        <span className="font-sans text-xs sm:text-sm text-teal font-medium text-center">{label}</span>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      variants={skillIconVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div className="p-2 sm:p-3 rounded-full" variants={skillGlowVariants}>
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${bgColor} flex items-center justify-center`}>
          <motion.div variants={skillIconInnerVariants}>
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
        </div>
      </motion.div>
      <span className="text-xs sm:text-sm text-teal font-medium text-center">{label}</span>
    </motion.div>
  );
}
