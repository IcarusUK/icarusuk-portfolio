'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeInSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-[#111827] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
}
