'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const shouldReduceMotion = useReducedMotion();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);

    onClick?.();

    if (element) {
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: shouldReduceMotion ? 'auto' : 'smooth'
        });
      }, 0);
    }
  };

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className="relative font-sans text-cream hover:text-primary transition-colors font-medium py-2 group">
      {item.label}
      {!shouldReduceMotion && (
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-coral"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      )}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-teal backdrop-blur-sm shadow-sm`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#home"
            className="font-display text-xl sm:text-2xl text-cream"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}>
            HTC
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          <motion.button
            className="md:hidden w-10 h-10 flex items-center justify-center text-coral cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}>
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[9px] h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
              />
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-teal/10 overflow-hidden"
              variants={shouldReduceMotion ? {} : mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <div className="flex flex-col gap-4 text-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}>
                    <NavLink item={item} onClick={() => setMobileMenuOpen(false)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
