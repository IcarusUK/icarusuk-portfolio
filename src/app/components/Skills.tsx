'use client';

import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFirebase,
  SiGoogle,
  SiAdobe,
  SiMysql,
  SiJirasoftware,
  SiDotnet,
  SiDocker,
  SiGit,
  SiApachenetbeanside
} from 'react-icons/si';
import { FaDatabase, FaMicrosoft, FaProjectDiagram } from 'react-icons/fa';

const skillGroups = {
  Languages: [
    { name: 'JavaScript', icon: <SiJavascript />, experience: '6 Years (A Level)' },
    { name: 'TypeScript', icon: <SiTypescript />, experience: '3 Years (University)' },
    { name: 'HTML', icon: <SiHtml5 />, experience: '8 Years (GCSE)' },
    { name: 'CSS', icon: <SiCss3 />, experience: '8 Years (GCSE)' },
    { name: 'Python', icon: <SiPython />, experience: '8 Years (GCSE & Personal/Freelance)' },
    { name: 'C#', icon: <FaProjectDiagram />, experience: '6 Years (Personal/Freelance)' },
    { name: 'Java', icon: <FaProjectDiagram />, experience: '6 Years (A Level & Personal)' },
    { name: 'SQL', icon: <FaDatabase />, experience: '6 Years (A Level)' },
    { name: 'XML', icon: <SiHtml5 />, experience: '6 Years (Personal)' },
    { name: 'JSP', icon: <FaProjectDiagram />, experience: '3 Years (University)' },
    { name: 'JSX', icon: <SiReact />, experience: '2 Years (University)'},
  ],
  Frameworks: [
    { name: 'React', icon: <SiReact />, experience: '3 Years (University)' },
    { name: 'Next.js', icon: <SiNextdotjs />, experience: '2 Years (Personal/Freelance)' },
    { name: '.NET', icon: <SiDotnet />, experience: '6 Years (Personal/Freelance'},
    { name: 'Firebase', icon: <SiFirebase />, experience: '1 Year (Personal/Freelance)' },
    { name: 'Google APIs', icon: <SiGoogle />, experience: '1 Year (Personal/Freelance)' },
  ],
  Tools: [
    { name: 'Adobe Creative Suite', icon: <SiAdobe />, experience: '8 Years (Personal & Esports)' },
    { name: 'SQL (MySQL)', icon: <SiMysql />, experience: '6 Years (A Level)' },
    { name: 'Docker', icon: <SiDocker />, experience: '1 Year (Personal/Freelance)'},
    { name: 'Agile', icon: <SiJirasoftware />, experience: '3 Years (University)' },
    { name: 'Scrum', icon: <FaProjectDiagram />, experience: '3 Years (University)' },
    { name: 'Graphic Design', icon: <SiAdobe />, experience: '8 Years (GCSE & Personal)' },
    { name: 'Marketing', icon: <FaProjectDiagram />, experience: '4 Years (Personal & Esports)' },
    { name: 'CI/CD (Git)', icon: <SiGit />, experience: '3 Years (University)'},
  ],
  IDEs: [
    { name: 'VS Code', icon: <FaMicrosoft />, experience: '8 Years (All fields)'},
    { name: 'Apache NetBeans', icon: <SiApachenetbeanside />, experience: '3 Years (University)'}
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="relative z-0 min-h-screen flex flex-col justify-center px-4 pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7f9cf5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g stroke="url(#grad)" strokeWidth="0.5">
            {[...Array(100)].map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 800}
                y1={Math.random() * 600}
                x2={Math.random() * 800}
                y2={Math.random() * 600}
              />
            ))}
          </g>
        </svg>
      </div>

      <motion.h2
        className="text-left text-5xl font-mono font-bold mb-10 text-white relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Skills
      </motion.h2>

      <div className="w-full max-w-5xl space-y-12 relative z-10">
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-6 text-left text-white font-mono">{category}</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skills.map(({ name, icon, experience }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition-transform duration-300 hover:bg-white/20 text-white"
                  variants={itemVariants}
                  title={`${name} — ${experience}`}
                >
                  <div className="text-3xl mb-2">{icon}</div>
                  <span className="text-sm font-medium text-center">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
