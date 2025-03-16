'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, MessageCircle } from 'lucide-react';
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
          <h2 className="text-4xl font-bold mb-6 turkish-title">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Take the first step towards your international education adventure</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/apply">
                Apply Now <ChevronRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">
                Talk to an Advisor <MessageCircle className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}