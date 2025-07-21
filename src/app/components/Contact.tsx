'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="relative w-full py-32 text-white px-6">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -left-[10%] w-[120vw] h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="techDots"
              patternUnits="userSpaceOnUse"
              width="48"
              height="48"
            >
              <circle cx="4" cy="4" r="1" fill="#38bdf8" />
              <circle cx="24" cy="24" r="1.2" fill="#38bdf8" />
              <circle cx="44" cy="44" r="1" fill="#38bdf8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techDots)" opacity="0.08" />
        </svg>
      </div>

      <motion.h2
        className="text-left text-5xl font-mono font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Contact
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 z-10 relative">
        <div className="flex-1 space-y-6 font-mono">
          <p className="text-lg text-white/80">Let's connect and build something great together.</p>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <a href="mailto:mrmagraham@gmail.com" className="hover:underline">
                mrmagraham@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-cyan-400" />
              <a href="https://github.com/icarusuk" target="_blank" className="hover:underline">
                github.com/icarusuk
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-cyan-400" />
              <a href="https://linkedin.com/in/mrmagraham" target="_blank" className="hover:underline">
                linkedin.com/in/mrmagraham
              </a>
            </div>
          </div>
        </div>

        <form className="flex-1 space-y-6 font-mono">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-[#1e293b] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-[#1e293b] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full bg-[#1e293b] border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Leave a message :)"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-2 rounded-xl transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
