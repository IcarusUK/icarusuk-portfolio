'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="relative w-full py-32 bg-[#0f172a] text-white px-6">
      <motion.h2
        className="text-left text-5xl font-mono font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto space-y-6 font-mono text-lg text-white/80"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p>
          I was born in the UK and spent my early years in Marlow, Buckinghamshire, where I lived in military housing due to my father's career as an RAF officer. With my mother being a teacher, education has always been important in my upbringing. I later moved to Saudi Arabia, where I completed my secondary education including GCSEs and A-Levels, before returning to the UK for university.
        </p>

        <p>
          Outside of software, I’m passionate about volleyball, snowboarding, video games, and music production. I’ve played guitar since childhood and used to stream gaming content with my friends. These creative outlets have always driven my curiosity and love for digital experiences.
        </p>

        <p>
          I chose software engineering because I love problem solving and I'm deeply motivated by the idea of contributing to technological progress. I have a particular interest in cyber security and digital forensics, but I'm open to all fields of software engineering that allow me to grow and refine my skills.
        </p>

        <p>
          During university, I co-founded a grassroots UK esports company through my university’s esports society. We gained traction in the EU League of Legends regional scene, secured a sponsorship with AGON by AOC, and hosted product giveaways and UK-based tournaments in collaboration with companies like Sweet Cabin.
        </p>

        <p>
          My long-term goal is to work in cyber security, but I’m eager to first contribute to impactful software projects and strengthen my abilities in team environments. I’m always up for a challenge and ready to take opportunities in cyber security whenever they arise.
        </p>

        <p>
          I began learning Spanish at an early age and am currently working to rebuild my fluency. I believe being multilingual is essential in today’s globalized world and strive to maintain that skill alongside my technical work.
        </p>
      </motion.div>
    </section>
  );
}
