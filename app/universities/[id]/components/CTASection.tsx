'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, MessageCircle, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type CTASectionProps = {
  universityName: string;
};

export default function CTASection({ universityName }: CTASectionProps) {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl font-bold mb-6 turkish-title">Ready to Join {universityName}?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              Take the first step towards your international education journey. Our expert advisors will guide you through every step of the application process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/apply">
                  Apply Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">
                  Schedule a Consultation
                  <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h3 className="text-xl font-bold mb-4">Contact Our Advisors</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+90 (212) 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>admissions@sultanscholars.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  <span>Live Chat Available</span>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Contact Us Now
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}