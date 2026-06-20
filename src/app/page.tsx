import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section id="home" className="pt-20">
          <Hero />
        </section>

        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
