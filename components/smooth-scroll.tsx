'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentScroll = 0;
    let isScrolling = false;
    let requestId: number | null = null;

    const smoothScrolling = () => {
      const targetScroll = window.scrollY;
      const delta = targetScroll - currentScroll;
      currentScroll += delta * 0.1;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(0, ${-currentScroll}px, 0)`;
      }

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
      const multiplier = e.deltaMode === 1 ? 20 : 1;
      window.scrollBy({
        top: delta * multiplier,
        behavior: 'auto'
      });
    };

    // Set up virtual scroll container and update body height
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight;
        document.body.style.height = `${height}px`;
      }
    };

    // Initial height setup
    updateHeight();

    // Update height on content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleScroll);
      resizeObserver.disconnect();
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full min-h-screen will-change-transform"
      style={{ 
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
}