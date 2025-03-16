'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 turkish-title">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards your international education. Our expert advisors are here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Free Consultation
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Chat with an Advisor
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}