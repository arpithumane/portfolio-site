'use client';

import { motion } from 'framer-motion';

interface BlogHeaderProps {
  title: string;
  subtitle: string;
}

export default function BlogHeader({ title, subtitle }: BlogHeaderProps) {
  return (
    <motion.section className="min-h-[40vh] flex items-center justify-center px-4 md:px-8 py-20">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-300"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
}
