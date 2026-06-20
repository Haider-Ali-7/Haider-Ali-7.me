'use client';

import { imageGalleryVariants, imageItemVariants, modalBackdropVariants, modalContentVariants } from '@/lib/animations';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';

export interface Project {
  title: string;
  description: string;
  images?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (project?.images?.length) {
        if (e.key === 'ArrowLeft') {
          setSelectedImageIndex(i => (i > 0 ? i - 1 : project.images!.length - 1));
        }
        if (e.key === 'ArrowRight') {
          setSelectedImageIndex(i => (i < project.images!.length - 1 ? i + 1 : 0));
        }
      }
    },
    [onClose, project]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setSelectedImageIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={shouldReduceMotion ? {} : modalBackdropVariants}
          initial="initial"
          animate="animate"
          exit="exit">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative bg-coffee-bean rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            variants={shouldReduceMotion ? {} : modalContentVariants}
            onClick={e => e.stopPropagation()}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal">
              <IoClose size={24} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {project.images && project.images.length > 0 ? (
                <div className="relative">
                  <div className="relative aspect-[16/10] bg-teal">
                    <Image
                      src={project.images[selectedImageIndex]}
                      alt={`${project.title} screenshot ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 896px) 100vw, 896px"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === selectedImageIndex ? 'bg-white' : 'bg-white/40'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImageIndex(i => (i > 0 ? i - 1 : project.images!.length - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        aria-label="Previous image">
                        <IoChevronBack size={24} />
                      </button>
                      <button
                        onClick={() => setSelectedImageIndex(i => (i < project.images!.length - 1 ? i + 1 : 0))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        aria-label="Next image">
                        <IoChevronForward size={24} />
                      </button>
                    </>
                  )}

                  {project.images.length > 1 && (
                    <motion.div
                      className="flex gap-2 p-4 overflow-x-auto bg-teal/30"
                      variants={shouldReduceMotion ? {} : imageGalleryVariants}
                      initial="initial"
                      animate="animate">
                      {project.images.map((img, idx) => (
                        <motion.button
                          key={idx}
                          variants={shouldReduceMotion ? {} : imageItemVariants}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            idx === selectedImageIndex ? 'border-coral' : 'border-transparent'
                          }`}>
                          <Image
                            src={img}
                            alt={`${project.title} thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center">
                  <span className="text-6xl font-display text-white/20">
                    {project.title
                      .split(' ')
                      .map(w => w[0])
                      .join('')
                      .slice(0, 3)}
                  </span>
                </div>
              )}

              <div className="p-6">
                <h2 className="font-display text-2xl text-tan mb-4">{project.title}</h2>
                <p className="font-sans text-tan/80 leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
