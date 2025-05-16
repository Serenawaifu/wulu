import { motion } from 'framer-motion';
import { SocialLinks } from '@/config/constants';

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Project Name</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          
          <div className="flex gap-6">
            {SocialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:text-white"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
