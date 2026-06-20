import type { Variants, Transition } from "framer-motion";

export const DURATIONS = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  entrance: 0.6
} as const;

export const EASINGS = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  snappy: [0.4, 0, 0.2, 1] as const,
  entrance: [0.22, 1, 0.36, 1] as const
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance }
  }
};

export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance }
  }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.entrance }
  }
};

export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
  },
  tap: { scale: 0.97 }
};

export const buttonTransition: Transition = {
  duration: DURATIONS.fast,
  ease: EASINGS.snappy
};

export const cardVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  }
};

export const cardTransition: Transition = {
  duration: DURATIONS.normal,
  ease: EASINGS.smooth
};

export const skillIconVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.15,
    transition: { duration: DURATIONS.normal, ease: EASINGS.bounce }
  }
};

export const skillIconInnerVariants: Variants = {
  initial: { y: 0, rotate: 0 },
  hover: {
    y: [-2, 2, -1, 0],
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

export const skillGlowVariants: Variants = {
  initial: { boxShadow: "0 0 0 rgba(255,255,255,0)" },
  hover: { boxShadow: "0 0 20px rgba(255,255,255,0.3)" }
};

export const socialLinkVariants: Variants = {
  initial: { scale: 1, rotate: 0, y: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    y: -3,
    transition: { duration: 0.2, ease: EASINGS.bounce }
  }
};

export const sectionEntranceVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATIONS.slow, ease: EASINGS.entrance }
  }
};

export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance }
  }
};

export const slideFromRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.entrance, ease: EASINGS.entrance, delay: 0.2 }
  }
};

export const modalBackdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DURATIONS.normal } },
  exit: { opacity: 0, transition: { duration: DURATIONS.fast } }
};

export const modalContentVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATIONS.normal, ease: EASINGS.entrance }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: DURATIONS.fast }
  }
};

export const imageGalleryVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

export const imageItemVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.normal, ease: EASINGS.entrance }
  }
};
