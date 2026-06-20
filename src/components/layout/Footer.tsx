"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { socialLinkVariants } from "@/lib/animations";

const socialLinks = [
  { icon: "/social/linkedin.png", href: "https://linkedin.com/in/haider-ali-tariq-n129", label: "LinkedIn" },
  { icon: "/social/github.png", href: "https://github.com/Haider-Ali-7", label: "Github" },
  { icon: "/social/twitter.png", href: "https://x.com/htc007Cheema", label: "Twitter" }
];

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-teal text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-white/80">&copy; 2026 Haider Ali Tariq Cheema.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-coral-dark transition-colors"
                aria-label={link.label}
                variants={shouldReduceMotion ? {} : socialLinkVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Image src={link.icon} alt={link.label} width={20} height={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
