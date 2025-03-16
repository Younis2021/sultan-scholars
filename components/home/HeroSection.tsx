"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/home";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, MessageCircle, Play, Star } from "lucide-react";
import { useRef } from "react";
import CountUp from "react-countup";

type HeroSectionProps = {
  onConsultation: () => void;
  onVideo: () => void;
};

export default function HeroSection({
  onConsultation,
  onVideo,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_3.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <Badge className="py-1 px-4 bg-primary/20 text-primary border-primary/30">
              <Star className="w-4 h-4 mr-2" />
              #1 Study Abroad Agency in Türkiye
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Your Global Education{" "}
            <span className="text-gradient animate-glow">Journey</span> Starts
            Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
          >
            Join <CountUp end={5000} suffix="+" className="font-bold" />{" "}
            successful students who trusted us to guide their educational
            journey. Expert admission support, personalized counseling, and
            guaranteed university placement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white magnetic-button"
              onClick={onConsultation}
            >
              Get Free Consultation
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white bg-white/10 hover:bg-white/20 magnetic-button"
              onClick={onVideo}
            >
              Watch Success Stories
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-4 gap-8 max-w-3xl"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center text-white">
                <achievement.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1">
                  <CountUp end={achievement.value} suffix="+" />
                </div>
                <p className="text-sm text-white/80">{achievement.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronRight className="w-8 h-8 rotate-90" />
      </motion.div>
    </section>
  );
}
