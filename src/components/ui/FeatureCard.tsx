'use client';

import { cardTransition, cardVariants } from '@/lib/animations';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  FaCar,
  FaChartLine,
  FaCode,
  FaComments,
  FaFileAlt,
  FaHeart,
  FaQrcode,
  FaShoppingCart,
  FaStore,
  FaTruck
} from 'react-icons/fa';

type ProjectIcon =
  | 'finance'
  | 'communication'
  | 'ecommerce'
  | 'delivery'
  | 'document'
  | 'legacy'
  | 'qr'
  | 'car'
  | 'store'
  | 'default';

const iconMap: Record<ProjectIcon, React.ComponentType<{ className?: string }>> = {
  finance: FaChartLine,
  communication: FaComments,
  ecommerce: FaShoppingCart,
  delivery: FaTruck,
  document: FaFileAlt,
  legacy: FaHeart,
  qr: FaQrcode,
  car: FaCar,
  store: FaStore,
  default: FaCode
};

interface FeatureCardProps {
  bgColor?: string;
  title: string;
  description: string;
  href?: string;
  images?: string[];
  icon?: ProjectIcon;
  onClick?: () => void;
}

export function FeatureCard({
  bgColor = 'bg-cream',
  title,
  description,
  href,
  images,
  icon = 'default',
  onClick
}: FeatureCardProps) {
  const IconComponent = iconMap[icon];
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;

    if (!shouldReduceMotion) {
      x.set(xPos);
      y.set(yPos);
    }

    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(0.5);
    y.set(0.5);
    e.currentTarget.style.setProperty('--mouse-x', '50%');
    e.currentTarget.style.setProperty('--mouse-y', '50%');
  };

  const cardContent = (
    <motion.div
      className="anime-border-glow group"
      style={
        shouldReduceMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'flat',
              backfaceVisibility: 'hidden'
            }
      }
      variants={cardVariants}
      initial="initial"
      whileHover={shouldReduceMotion ? undefined : 'hover'}
      transition={cardTransition}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden rounded-[calc(1rem-2px)] bg-surface">
        <div className={`aspect-[4/3] ${bgColor} flex items-center justify-center relative overflow-hidden`}>
          {images && images.length > 0 ? (
            <Image
              src={images[0]}
              alt={`${title} thumbnail`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-coral/30 to-teal/30 flex items-center justify-center"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}>
              <IconComponent className="w-10 h-10 text-white/70" />
            </motion.div>
          )}
        </div>
        <div className="p-5 bg-coffee-bean">
          <h3 className="font-display text-lg text-tan mb-2">{title}</h3>
          <p className="font-sans text-sm text-tan/90 leading-relaxed line-clamp-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left cursor-pointer">
        {cardContent}
      </button>
    );
  }

  return cardContent;
}
