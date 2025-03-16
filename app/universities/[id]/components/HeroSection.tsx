'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Trophy, Play, Star, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type HeroSectionProps = {
  name: string;
  city: string;
  established: number;
  ranking: string;
  coverImage: string;
  onWatchVideo: () => void;
};

export default function HeroSection({
  name,
  city,
  established,
  ranking,
  coverImage,
  onWatchVideo
}: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <motion.img
        src={coverImage}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <Badge variant="outline" className="border-white/30 text-white">
            Top-Rated University
          </Badge>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
        >
          {name}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
            <MapPin className="mr-2 h-4 w-4" />
            {city}
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
            <Calendar className="mr-2 h-4 w-4" />
            Est. {established}
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
            <Trophy className="mr-2 h-4 w-4" />
            {ranking}
          </Badge>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-red-500 text-white hover:bg-red-600 border-2 border-white/20 shadow-glow"
              onClick={onWatchVideo}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch University Video
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Take a Virtual Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <ChevronRight className="h-10 w-10 text-white transform rotate-90" />
      </motion.div>
    </section>
  );
}