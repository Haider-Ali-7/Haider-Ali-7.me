"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, EASINGS, DURATIONS } from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-12, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const textVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance }
    }
  };

  const heroStaggerContainer = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
          <div className="relative w-full h-full bg-gradient-to-br from-coral/20 via-gold/20 to-teal/20 rounded-bl-[100px]">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={shouldReduceMotion ? {} : { y: y1 }}
            >
              <div className="relative">
                <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-96 bg-coral rounded-t-full rounded-b-lg shadow-2xl flex items-end justify-center pb-8">
                  <div className="w-12 h-12 bg-teal rounded-full" />
                </div>
                <motion.div
                  className="absolute -left-16 top-1/2 w-8 h-8 bg-gold rounded-full"
                  style={shouldReduceMotion ? {} : { y: y2, rotate: rotate1 }}
                />
                <motion.div
                  className="absolute -right-12 top-1/4 w-6 h-6 bg-teal/50 rounded-full"
                  style={shouldReduceMotion ? {} : { y: y3, scale: scale1 }}
                />
                <div className="absolute left-1/2 -bottom-8 w-24 h-12 bg-teal/30 rounded-full blur-sm" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 w-12 h-16 bg-coral/60 rounded-lg"
              style={shouldReduceMotion ? { transform: "rotate(-12deg)" } : { y: y2, rotate: rotate2 }}
            />
            <motion.div
              className="absolute top-16 right-16 hidden lg:block"
              style={shouldReduceMotion ? {} : { y: y1 }}
            >
              <div className="w-16 h-16 border-4 border-gold rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-xl"
          variants={shouldReduceMotion ? {} : heroStaggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-teal leading-tight mb-6"
            variants={shouldReduceMotion ? {} : textVariants}
          >
            <motion.span className="inline-block" variants={shouldReduceMotion ? {} : textVariants}>
              Haider Ali
            </motion.span>
            <br />
            <motion.span className="inline-block text-coral" variants={shouldReduceMotion ? {} : textVariants}>
              Tariq
            </motion.span>
            <br />
            <motion.span className="inline-block" variants={shouldReduceMotion ? {} : textVariants}>
              Cheema
            </motion.span>
          </motion.h1>
          <motion.p
            className="font-sans text-teal/70 text-lg mb-8 max-w-md"
            variants={shouldReduceMotion ? {} : textVariants}
          >
            Full Stack AI Engineer - Turning ideas into dynamic and scalable solutions.
          </motion.p>
          <motion.div variants={shouldReduceMotion ? {} : textVariants}>
            <Button href="#projects" variant="primary" size="lg">
              Explore Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
