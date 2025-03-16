'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden turkish-pattern">
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-20 h-20 mx-auto text-white mb-4" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
        >
          How We Help You <span className="text-red-500">Succeed</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto"
        >
          Your journey to academic excellence in Türkiye starts here
        </motion.p>
      </div>
    </section>
  );
}