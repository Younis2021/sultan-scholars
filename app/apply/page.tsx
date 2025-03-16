'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ApplicationForm from './components/ApplicationForm';
import SuccessDialog from './components/SuccessDialog';
import SupportDialog from './components/SupportDialog';

export default function Apply() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            Your Dream Education <span className="text-red-500">Made Easy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Let us handle everything while you focus on your future
          </motion.p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ApplicationForm />
        </div>
      </section>

      {/* Success Dialog */}
      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />

      {/* Support Dialog */}
      <SupportDialog open={showSupport} onOpenChange={setShowSupport} />

      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="fixed bottom-8 right-8 shadow-lg gradient-bg"
        onClick={() => window.open('https://wa.me/901234567890', '_blank')}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Chat on WhatsApp
      </Button>
    </main>
  );
}