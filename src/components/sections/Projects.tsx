'use client';

import { FeatureCard } from '@/components/ui/FeatureCard';
import { ProjectModal, type Project } from '@/components/ui/ProjectModal';
import { DURATIONS, EASINGS } from '@/lib/animations';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

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

interface ProjectData extends Project {
  icon?: ProjectIcon;
}

const projects: ProjectData[] = [
  {
    title: 'IBH - Expense Tracker',
    description: `A financial tracking system with real-time data synchronization`,
    icon: 'finance'
  },
  {
    title: 'Rishta Auntie',
    description: `Tired of swiping? Want something more engaging and meaningful? The team at Rishta Auntie is excited to bring you a refreshing experience! We are two millennials from New York who felt that all dating apps were the same, providing only a monotonous experience revolving around lots of swiping and little interaction. Two years ago we thought of creating what the game has been missing; an app where South Asian users can find compatible matches and not waste their time!

The Rishta Auntie app is different. We are passionate about technology, psychology, and meaningful relationships. We broke the standard and took on a new approach with our Rishta formula which was made to highlight your personality while actively giving you suggestions about each profile you look at. Although Rishta Auntie is Muslim owned and operated, we are open to all religions.

Our personality-based quiz and algorithm was developed with the help of a psychiatrist to insightfully give you feedback about each person you encounter on the app. Rishta Auntie intelligently gives you advice on each profile you view based on compatibility factors such as shared values, communication styles, and personality characteristics to allow you to hone your matches before you invest your time!

After countless hours of surveying, research, testing, and tweaks to improve the app, we have built a product that we are confident can bring value to users and create a community that everyone wants to be a part of.

Rishta Auntie is a breath of fresh air and is here to help you find the one because you're more than just a swipe!`,
    images: [
      '/projects/ra/ra-1.png',
      '/projects/ra/ra-2.png',
      '/projects/ra/ra-3.png',
      '/projects/ra/ra-4.png',
      '/projects/ra/ra-5.png'
    ],
    icon: 'communication'
  },
  {
    title: 'Navia',
    description: `A QR-driven utility application enabling secure scanning, API-backed validation, and historical tracking with a clean, maintainable architecture.`,
    images: [
      '/projects/navia/navia-1.jpg',
      '/projects/navia/navia-2.jpg',
      '/projects/navia/navia-3.jpg',
      '/projects/navia/navia-4.jpg',
      '/projects/navia/navia-5.jpg'
    ],
    icon: 'qr'
  },
  {
    title: 'EFYX',
    description: `Efyx brings the expertise of trusted mechanics right to your location. Whether you're at home or work, we're just a tap away.

Expert Inspection, Comprehensive Report! Our signature inspection service sends a skilled inspector to assess your vehicle. Receive an in-depth report and peace of mind, knowing the exact condition of your car.

Unmatched User Experience! Efyx isn't just about car maintenance; it's about providing a seamless, stress-free experience. Enjoy transparent pricing, easy booking, and top-notch customer service.`,
    images: [
      '/projects/efyx/ef-1.png',
      '/projects/efyx/ef-2.png',
      '/projects/efyx/ef-3.png',
      '/projects/efyx/ef-4.png',
      '/projects/efyx/ef-5.png',
      '/projects/efyx/ef-6.png',
      '/projects/efyx/ef-7.png',
      '/projects/efyx/ef-8.jpg',
      '/projects/efyx/ef-9.jpg',
      '/projects/efyx/ef-10.jpg',
      '/projects/efyx/ef-11.jpg',
      '/projects/efyx/ef-12.jpg',
      '/projects/efyx/ef-13.jpg',
      '/projects/efyx/ef-14.jpg',
      '/projects/efyx/ef-15.jpg',
      '/projects/efyx/ef-16.jpg',
      '/projects/efyx/ef-17.jpg',
      '/projects/efyx/ef-18.jpg',
      '/projects/efyx/ef-19.jpg'
    ],
    icon: 'car'
  },
  {
    title: 'CvMaker',
    description: `With CV maker, you can quickly and easily create a distinctive and professional resume within 15 minutes.`,
    icon: 'document'
  },
  {
    title: 'Final Pass Down',
    description: `Final Pass Down is a digital legacy platform designed to help you preserve your memories and plan for the future. With our easy-to-use mobile and web app, you can create a comprehensive digital legacy that includes personal stories, family histories, important documents, and final wishes. Securely store your valuable information and ensure it's accessible to your loved ones when the time comes.`,
    images: [
      '/projects/fpd/fpd-1.png',
      '/projects/fpd/fpd-2.png',
      '/projects/fpd/fpd-3.png',
      '/projects/fpd/fpd-4.png',
      '/projects/fpd/fpd-5.png'
    ],
    icon: 'legacy'
  },
  {
    title: 'Pijn',
    description: `A communication-eccentric application featuring real-time chat, structured contact management, room-based interactions, and reliable push notification.`,
    icon: 'communication'
  },
  {
    title: 'Deliver Cart',
    description: `DeliverCart is an on-demand grocery delivery service. You can choose from over 20,000 grocery and household items from multiple stores and get them delivered to your door in as little as 60 minutes.

DeliverCart is on a mission to transform the way you order groceries. We have a team of experienced personal shoppers that fulfill your order by shopping from national favorites and local speciality stores, bringing you the groceries you love right to your door.`,
    images: [
      '/projects/delivercart/dc-1.png',
      '/projects/delivercart/dc-2.png',
      '/projects/delivercart/dc-3.png',
      '/projects/delivercart/dc-4.png'
    ],
    icon: 'ecommerce'
  },
  {
    title: 'Deliver Cart Driver',
    description: `DeliverCart Driver is a real-time communication app which reduces the communication gap between customer and driver.`,
    icon: 'delivery'
  },
  {
    title: 'SRP Live',
    description: `Use SRP Live to stay in touch with friends and family. SRP Live is free and offers simple, secure, reliable messaging and calling services.`,
    icon: 'communication'
  },
  {
    title: 'ServAll',
    description: `ServAll is the future of service solutions. Our advanced technology brings online reliability to the offline world. No matter where your business takes you, experience peak performance in hospitality and beyond. Experience unmatched reliability and efficiency, no matter where you are.`,
    images: [
      '/projects/servall/serv-1.jpeg',
      '/projects/servall/serv-2.jpeg',
      '/projects/servall/serv-3.jpeg',
      '/projects/servall/serv-4.jpeg',
      '/projects/servall/serv-5.jpeg',
      '/projects/servall/serv-6.jpeg',
      '/projects/servall/serv-7.jpeg',
      '/projects/servall/serv-8.jpeg'
    ],
    icon: 'store'
  },
  {
    title: 'Dkangu',
    description: `An e-commerce service from where user can choose over 10,000 grocery and household items.`,
    icon: 'ecommerce'
  },
  {
    title: 'Scan360',
    description: `A QR-driven utility application with secure scanning capabilities, providing comprehensive 360-degree scanning solutions for various business needs.`,
    images: [
      '/projects/scan360/Scan360-1.jpeg',
      '/projects/scan360/Scan360-2.jpeg',
      '/projects/scan360/Scan360-3.jpeg',
      '/projects/scan360/Scan360-4.jpeg',
      '/projects/scan360/Scan360-5.jpeg',
      '/projects/scan360/Scan360-6.jpeg',
      '/projects/scan360/Scan360-7.jpeg',
      '/projects/scan360/Scan360-8.jpeg',
      '/projects/scan360/Scan360-9.jpeg'
    ],
    icon: 'qr'
  }
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
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

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-20 bg-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={shouldReduceMotion ? {} : headerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: '-50px' }}>
          <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3">Featured Work</p>
          <h2 className="font-gothic text-6xl sm:text-8xl uppercase tracking-wider text-white mb-3">Projects</h2>
          <p className="text-xs tracking-[0.25em] uppercase text-white/60">Code &mdash; Create &mdash; Conquer</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: '-100px' }}>
          {projects.map((project, index) => (
            <motion.div key={`${project.title}-${index}`} variants={shouldReduceMotion ? {} : cardVariants}>
              <FeatureCard
                title={project.title}
                description={project.description}
                images={project.images}
                icon={project.icon}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
