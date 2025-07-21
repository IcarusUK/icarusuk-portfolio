'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'ResistBot – Discord Moderation Chatbot',
    description:
      'A custom-built moderation and utility chatbot for Resist Gaming\'s Discord server, supporting real-time user management, auto-moderation filters, and command logging.',
    stack: ['Python', 'MongoDB', 'discord.py', 'Heroku'],
    image: '/projects/resistbot.png',
  },
  {
    title: 'DisasterResponsePlatform – Final Year Dissertation',
    description:
      'A full-stack web app for real-time disaster reporting and crowdsourced assistance. Included interactive maps, AI risk assessments, push notifications, user roles, and audit logs.',
    stack: ['React', 'Firebase', 'Firestore', 'Google Maps API', 'Tailwind CSS'],
    image: '/projects/disaster-response.png',
  },
  {
    title: 'Online CV & Portfolio Web App',
    description:
      'A responsive, animated personal portfolio built with Next.js, showcasing projects, interactive sections, and particle backgrounds with custom scroll logic.',
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/projects/portfolio.png',
  },
  {
    title: 'Minecraft PvP Arena Plugin – Emenbee Realms',
    description:
      'Custom Java plugin for Emenbee\'s Minecraft server network. Added PvP arena logic, matchmaking, combat tracking, and player stats with in-game commands.',
    stack: ['Java', 'Bukkit API', 'MySQL', 'Linux VPS'],
    image: '/projects/arena-plugin.png',
  },
  {
    title: 'Tekkit SMP Private Modded Server',
    description:
      'Hosted and configured a private modded Minecraft SMP using the Tekkit Technic modpack. Solved networking and mod compatibility issues, hosted via home server.',
    stack: ['Java', 'Tekkit Modpack', 'Shell Scripts', 'No-IP DDNS'],
    image: '/projects/tekkit-server.png',
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#0f172a] overflow-hidden text-white py-24">
      
      {/* Full-width Hex Background */}
      <div className="absolute top-0 left-0 w-screen h-full z-0 pointer-events-none overflow-hidden">
        <svg
          className="block w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="hexPattern"
              patternUnits="userSpaceOnUse"
              width="60"
              height="52"
            >
              <path
                d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z"
                stroke="#38bdf8"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" opacity="0.12" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 z-10">
        <motion.h2
          className="text-left text-5xl font-mono font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 font-mono">{project.title}</h3>
                <p className="text-sm text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 px-2 py-1 rounded-md border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
