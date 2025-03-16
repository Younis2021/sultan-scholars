'use client';

import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ServiceDetails from './components/ServiceDetails';
import ProcessTimeline from './components/ProcessTimeline';
import PricingSection from './components/PricingSection';
import SuccessStories from './components/SuccessStories';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

export default function Services() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <ServiceDetails />
      <ProcessTimeline />
      <PricingSection />
      <SuccessStories />
      <FAQSection />
      <CTASection />
    </main>
  );
}