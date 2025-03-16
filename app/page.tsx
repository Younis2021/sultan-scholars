'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  GraduationCap, 
  Globe2, 
  Users, 
  Building2,
  Star,
  ArrowRight,
  Play,
  MessageCircle,
  ChevronLeft
} from 'lucide-react';
import { heroImages } from '@/data/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import components
import UniversitiesSection from '@/components/home/UniversitiesSection';
import WhyTurkiyeSection from '@/components/home/WhyTurkiyeSection';
import ScholarshipsSection from '@/components/home/ScholarshipsSection';
import StudentLifeSection from '@/components/home/StudentLifeSection';
import NewsSection from '@/components/home/NewsSection';
import CTASection from '@/components/home/CTASection';

const heroSlides = [
  {
    title: "Study in Türkiye",
    subtitle: "Your Gateway to World-Class Education",
    description: "Join 250,000+ international students in a country where tradition meets innovation",
    image: heroImages.studyInTurkiye,
    badge: "Featured"
  },
  {
    title: "Top Universities",
    subtitle: "200+ Universities to Choose From",
    description: "Access internationally recognized programs at prestigious Turkish institutions",
    image: heroImages.topUniversities,
    badge: "Universities"
  },
  {
    title: "Rich Culture",
    subtitle: "Experience Turkish Hospitality",
    description: "Immerse yourself in a unique blend of Eastern and Western cultures",
    image: heroImages.richCulture,
    badge: "Culture"
  },
  {
    title: "Modern Facilities",
    subtitle: "State-of-the-Art Campus Life",
    description: "Study in modern facilities equipped with the latest technology",
    image: heroImages.modernFacilities,
    badge: "Campus Life"
  }
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white"></span>`;
            },
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          className="w-full h-screen"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-center mb-6"
                    >
                      <Badge className="py-1 px-4 bg-primary/20 text-white border-white/30">
                        <Star className="w-4 h-4 mr-2" />
                        {slide.badge}
                      </Badge>
                    </motion.div>

                    <motion.h1 
                      className="text-5xl md:text-7xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.h2
                      className="text-2xl md:text-3xl font-light text-white/90 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {slide.subtitle}
                    </motion.h2>

                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg md:text-xl text-white/80 mb-8"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-white magnetic-button"
                      >
                        Explore Universities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="text-white border-white bg-white/10 hover:bg-white/20 magnetic-button"
                      >
                        Watch Video
                        <Play className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev">
            <ChevronLeft className="h-6 w-6" />
          </div>
          <div className="swiper-button-next">
            <ChevronRight className="h-6 w-6" />
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center text-white stat-item"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Swiper>
      </section>

      <UniversitiesSection />
      <WhyTurkiyeSection />
      <ScholarshipsSection />
      <StudentLifeSection />
      <NewsSection />
      <CTASection />

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            className="gradient-bg shadow-glow rounded-full p-4"
            size="lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Universities"
  },
  {
    icon: Users,
    value: "250K+",
    label: "International Students"
  },
  {
    icon: GraduationCap,
    value: "60K+",
    label: "Programs"
  },
  {
    icon: Globe2,
    value: "180+",
    label: "Countries"
  }
];