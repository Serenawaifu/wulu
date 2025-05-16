'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TEAM } from '@/config/constants';

export default function Team() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {TEAM.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="group relative overflow-hidden rounded-xl"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={600}
            height={800}
            className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/20" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-gray-200">{member.role}</p>
            <p className="mt-2 text-sm text-gray-300">{member.bio}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
