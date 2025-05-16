'use client';

import { motion } from 'framer-motion';
import { ROADMAP } from '@/config/constants';

export default function Roadmap() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
      {ROADMAP.map((phase, index) => (
        <motion.div
          key={phase.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="rounded-lg bg-white p-6 shadow-xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-8 bg-primary" />
            <span className="text-sm font-bold text-gray-500">
              Phase {index + 1}
            </span>
          </div>
          <h3 className="mb-2 text-2xl font-bold">{phase.title}</h3>
          <p className="text-gray-600">{phase.content}</p>
        </motion.div>
      ))}
    </div>
  );
}
