'use client';

import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VisionMissionSection from './components/VisionMissionSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import CTASection from './components/CTASection';

export default function About() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <VisionMissionSection />
      <TeamSection />
      <ValuesSection />
      <CTASection />
    </main>
  );
}