"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { buttonVariants, buttonTransition } from "@/lib/animations";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  onClick,
  className = ""
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-colors duration-200 relative overflow-hidden";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-teal text-white hover:bg-teal/90",
    outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    handleRipple(e);
    onClick?.();
  };

  const rippleElements = ripples.map(ripple => (
    <motion.span
      key={ripple.id}
      className="absolute rounded-full bg-white/30 pointer-events-none"
      style={{ left: ripple.x, top: ripple.y }}
      initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.5 }}
      animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  ));

  if (shouldReduceMotion) {
    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={buttonTransition}
        onClick={handleRipple}
      >
        {children}
        {rippleElements}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      className={classes}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={buttonTransition}
    >
      {children}
      {rippleElements}
    </motion.button>
  );
}
