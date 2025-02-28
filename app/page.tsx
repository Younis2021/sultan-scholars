'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Play, 
  GraduationCap, 
  Building2, 
  Users, 
  ChevronRight, 
  Globe2,
  BookOpen,
  Lightbulb,
  Trophy,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Sparkles,
  Rocket,
  Zap,
  Music,
  Coffee,
  Smartphone,
  Laptop,
  Gamepad,
  Camera,
  Plane,
  ArrowRight,
  MessageCircle,
  Search,
  FileCheck,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [count, setCount] = useState({ students: 0, universities: 0, success: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => ({
        students: Math.min(prev.students + 50, 5000),
        universities: Math.min(prev.universities + 2, 100),
        success: Math.min(prev.success + 5, 500)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(featureInterval);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 hero-gradient opacity-90 z-0"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute inset-0 hero-pattern opacity-20 z-0"
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Sparkles className="w-20 h-20 mx-auto text-yellow-300 mb-4 animate-pulse" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-6 turkish-title"
          >
            Your Future Starts <span className="text-gradient animate-glow">Here</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Study in Türkiye - Where ancient traditions meet modern innovation
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-x-4"
          >
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow hover-shake">
              <Link href="/universities">
                Find Your Program <ChevronRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 hover-bounce">
              <Link href="/why-turkiye">
                Take the Quiz <Zap className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Rocket, text: "Launch Your Career" },
              { icon: Globe2, text: "Global Experience" },
              { icon: Sparkles, text: "Discover Yourself" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-12 h-12 text-yellow-300"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <GraduationCap className="w-full h-full" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-10 h-10 text-blue-400"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Globe2 className="w-full h-full" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/5 w-8 h-8 text-pink-400"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Heart className="w-full h-full" />
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-9 h-9 text-green-400"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4.5,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Laptop className="w-full h-full" />
        </motion.div>

        <motion.div 
          className="absolute top-1/2 right-1/3 w-7 h-7 text-purple-400"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Music className="w-full h-full" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center card-hover border-2 border-red-500/20 hover:shadow-glow">
                <GraduationCap className="mx-auto mb-4 text-red-500 h-12 w-12" />
                <h3 className="text-4xl font-bold mb-2">{count.students.toLocaleString()}+</h3>
                <p className="text-muted-foreground">International Students</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center card-hover border-2 border-blue-500/20 hover:shadow-glow">
                <Building2 className="mx-auto mb-4 text-blue-500 h-12 w-12" />
                <h3 className="text-4xl font-bold mb-2">{count.universities}+</h3>
                <p className="text-muted-foreground">Partner Universities</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center card-hover border-2 border-cyan-500/20 hover:shadow-glow">
                <Trophy className="mx-auto mb-4 text-cyan-500 h-12 w-12" />
                <h3 className="text-4xl font-bold mb-2">{count.success}+</h3>
                <p className="text-muted-foreground">Success Stories</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/30">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              Why Choose Türkiye
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Your Adventure Awaits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover a unique blend of tradition and innovation in a country that bridges continents
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`${activeFeature === index ? 'ring-2 ring-primary shadow-glow' : ''}`}
              >
                <Card className="p-6 h-full bg-white hover:shadow-xl transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gradient-bg shadow-glow hover-bounce">
              <Link href="/why-turkiye">
                Discover More About Türkiye
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/30">
              <Building2 className="mr-2 h-4 w-4 text-primary" />
              Top Universities
            </Badge>
            <h2 className="text-4xl font-bold mb-4">World-Class Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with prestigious institutions that will shape your future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={university.image} 
                      alt={university.name}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm">
                      {university.ranking}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{university.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Globe2 className="h-4 w-4 mr-2" />
                        <span>{university.international}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span>{university.programs}</span>
                      </div>
                    </div>
                    <Button asChild variant="default" className="w-full gradient-bg text-white hover:opacity-90 hover-shake">
                      <Link href={`/universities/${university.id}`}>
                        Explore Programs
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="hover-bounce">
              <Link href="/universities">
                View All Universities
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-white/30 text-white">
              <Users className="mr-2 h-4 w-4" />
              Student Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Hear From Our Students</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Real experiences from students just like you
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="relative h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  activeTestimonial === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border-white/20">
                        <div className="flex flex-col md:flex-row gap-8 h-full">
                          <div className="md:w-1/3 flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-40 md:h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-2/3 flex flex-col justify-center">
                            <div className="mb-6">
                              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
                              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
                              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
                              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
                              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
                            </div>
                            <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                            <div>
                              <h3 className="text-xl font-bold">{testimonial.name}</h3>
                              <p className="text-white/80">{testimonial.program}, {testimonial.university}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/30">
              <Heart className="mr-2 h-4 w-4 text-primary" />
              Student Life
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Life Beyond Classes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a vibrant and enriching student lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentLife.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button asChild variant="outline" className="w-full hover-bounce">
                      <Link href="/student-life">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Interests Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/30">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              Your Interests
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Pursue Your Passions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect balance between academics and your interests
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Card className="p-6 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover-tilt">
                  <interest.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-medium">{interest.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gradient-bg shadow-glow hover-bounce">
              <Link href="/student-life">
                Explore Student Activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/30">
              <Rocket className="mr-2 h-4 w-4 text-primary" />
              How It Works
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Your Journey Starts Here</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make studying abroad simple with our step-by-step process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 hover-tilt">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Step {index + 1}</h3>
                  <h4 className="text-lg font-medium mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gradient-bg shadow-glow hover-bounce">
              <Link href="/how-to-apply">
                Learn More About the Process
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Chat with Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-none">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }}
                  >
                    <MessageCircle className="h-32 w-32 text-primary" />
                  </motion.div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our education advisors are ready to help you 24/7. Get instant answers to all your questions about studying in Türkiye.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button className="gradient-bg shadow-glow hover-shake">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat Now
                    </Button>
                    <Button variant="outline">
                      <Headphones className="mr-2 h-5 w-5" />
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 turkish-title">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">Take the first step towards your international education adventure</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow hover-shake">
                <Link href="/apply">
                  Apply Now <ChevronRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover-bounce">
                <Link href="/contact">
                  Talk to an Advisor <Zap className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Vibrant Culture",
    description: "Experience a unique blend of Eastern and Western cultures in a country that bridges continents.",
    icon: Heart
  },
  {
    title: "Quality Education",
    description: "Access world-class education at internationally recognized universities with modern facilities.",
    icon: GraduationCap
  },
  {
    title: "Affordable Living",
    description: "Enjoy high quality of life with reasonable living costs compared to other study destinations.",
    icon: DollarSign
  },
  {
    title: "Career Growth",
    description: "Connect with global opportunities and build your future with internships and job placements.",
    icon: Rocket
  }
];

const universities = [
  {
    id: 'istanbul-technical-university',
    name: "Istanbul Technical University",
    location: "Istanbul",
    ranking: "Top 500",
    international: "5000+ Int'l Students",
    programs: "100+ Programs",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 'middle-east-technical-university',
    name: "Middle East Technical University",
    location: "Ankara",
    ranking: "Top 600",
    international: "4000+ Int'l Students",
    programs: "80+ Programs",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80"
  },
  {
    id: 'bogazici-university',
    name: "Boğaziçi University",
    location: "Istanbul",
    ranking: "Top 800",
    international: "3000+ Int'l Students",
    programs: "70+ Programs",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  }
];

const studentLife = [
  {
    title: "Cultural Activities",
    description: "Immerse yourself in Turkish culture through festivals, art exhibitions, music events, and traditional celebrations.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Campus Life",
    description: "Experience vibrant campus communities with student clubs, sports facilities, and social events throughout the year.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Travel & Adventure",
    description: "Explore breathtaking landscapes, historical sites, and beautiful beaches across Türkiye during your study breaks.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  }
];

const testimonials = [
  {
    name: "Alex Chen",
    program: "Computer Engineering",
    university: "Istanbul Technical University",
    quote: "Studying in Türkiye was the best decision I've ever made! The tech scene here is incredible, and I've made friends from all over the world. The professors are super supportive and the campus vibe is amazing!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Sophia Martinez",
    program: "International Business",
    university: "Boğaziçi University",
    quote: "The international exposure here is unmatched! I've improved my language skills, built an amazing network, and gained real-world experience through internships. Plus, Istanbul is such a vibrant city to live in!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Mohammed Al-Rahman",
    program: "Architecture",
    university: "Middle East Technical University",
    quote: "The blend of traditional and modern architecture in Türkiye is perfect for my studies. The campus facilities are state-of-the-art, and I've had opportunities to work on real projects in the city!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
  }
];

const interests = [
  { name: "Music & Arts", icon: Music },
  { name: "Sports", icon: Trophy },
  { name: "Technology", icon: Laptop },
  { name: "Gaming", icon: Gamepad },
  { name: "Travel", icon: Plane },
  { name: "Coffee Culture", icon: Coffee },
  { name: "Social Media", icon: Smartphone },
  { name: "Photography", icon: Camera }
];

const steps = [
  {
    title: "Find Your Program",
    description: "Browse our partner universities and find the perfect program that matches your interests and career goals.",
    icon: Search
  },
  {
    title: "Apply with Ease",
    description: "Our team handles the entire application process, from document preparation to submission, making it stress-free.",
    icon: FileCheck
  },
  {
    title: "Start Your Journey",
    description: "Get accepted, receive visa support, and prepare for an amazing educational experience in Türkiye.",
    icon: Rocket
  }
];