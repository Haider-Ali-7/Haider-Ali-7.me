'use client';

import { DURATIONS, EASINGS } from '@/lib/animations';
import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.entrance }
  }
};

const headerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance }
  }
};

const iconHoverVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5 }
};

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-20 bg-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={shouldReduceMotion ? {} : headerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: '-50px' }}>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Get in <span className="text-coral">Touch</span>
          </h2>
          <p className="font-sans mt-4 text-white/70 max-w-xl mx-auto">
            🌎 Building products globally. 🤝 Open to collaborations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: '-50px' }}>
          <motion.div
            className="bg-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 text-center"
            variants={shouldReduceMotion ? {} : cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.3 }}>
            <motion.div
              variants={shouldReduceMotion ? {} : iconHoverVariants}
              whileHover="hover"
              transition={{ duration: 0.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </motion.div>
            <span className="font-sans text-white/70 text-sm font-medium uppercase tracking-wider">Email</span>
            <motion.a
              href=" https://mail.google.com/mail/?view=cm&to=haideralitariqcheema@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-cream hover:text-gold transition-colors text-base font-medium break-all"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}>
              haideralitariqcheema@gmail.com
            </motion.a>
          </motion.div>

          <motion.div
            className="bg-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 text-center"
            variants={shouldReduceMotion ? {} : cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.3 }}>
            <motion.div
              variants={shouldReduceMotion ? {} : iconHoverVariants}
              whileHover="hover"
              transition={{ duration: 0.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-400 shrink-0">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </motion.div>

            <span className="font-sans text-white/70 text-sm font-medium uppercase tracking-wider">Availability</span>
            <div className="flex flex-col gap-3 w-full items-center">
              <div className="flex items-center gap-3">
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0"
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="font-sans text-cream text-base font-medium">Available for hire</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
