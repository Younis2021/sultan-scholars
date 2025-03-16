'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 turkish-title">Start Your Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">Let us help you achieve your academic goals in Türkiye</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule Consultation
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}