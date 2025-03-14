'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);

    let currentScroll = 0;
    let isScrolling = false;
    let requestId: number | null = null;

    const smoothScrolling = () => {
      const targetScroll = window.scrollY;
      
      // Smooth interpolation
      const delta = targetScroll - currentScroll;
      currentScroll += delta * 0.1;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(0, ${-currentScroll}px, 0)`;
      }

      // Continue animation if not close enough to target
      if (Math.abs(targetScroll - currentScroll) > 0.1) {
        requestId = requestAnimationFrame(smoothScrolling);
      } else {
        isScrolling = false;
      }
    };

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestId = requestAnimationFrame(smoothScrolling);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const multiplier = e.deltaMode === 1 ? 20 : 1; // Adjust for different scroll modes
      window.scrollBy({
        top: delta * multiplier,
        behavior: 'auto'
      });
    };

    // Set up virtual scroll container
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight;
      document.body.style.height = `${height}px`;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleScroll);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-primary animate-glow"
        >
          Sultan Scholars
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />
      <div 
        ref={containerRef}
        className="fixed top-0 left-0 w-full will-change-transform"
        style={{ 
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </div>
    </>
  );
}

function ParallaxProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}

export function ParallaxSection({ 
  children, 
  depth = 0.5,
  className = ""
}: { 
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, depth * 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}