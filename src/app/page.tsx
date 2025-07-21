'use client';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AboutMe from './components/AboutMe';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <main className="relative">
      {/* Floating Hero Layer */}
      <motion.div
        ref={heroRef}
        className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none"
        style={{ opacity }}
      >
        <Hero />
      </motion.div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <section className="min-h-screen pt-[100vh] pb-24 flex items-center justify-center bg-[#111827] text-white">
          <Skills />
        </section>

        <section className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
          <AboutMe />
        </section>

        <section className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
          <Projects />
        </section>

        <section className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
          <Timeline />
        </section>

        <section className="min-h-screen flex items-center justify-center bg-[#1c1f26] text-white">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
