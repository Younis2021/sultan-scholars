'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { 
  GraduationCap, 
  Globe2,
  ChevronRight,
  Star,
  Trophy,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  BookOpen,
  Heart,
  MessageCircle,
  Rocket,
  FileCheck,
  Plane,
  DollarSign,
  MapPin,
  Clock,
  HomeIcon,
  Play,
  Shield,
  Briefcase,
  Lightbulb,
  Zap,
  Coffee,
  Camera,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

export default function HomePage() {
  const [count, setCount] = useState({ students: 0, universities: 0, success: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center"
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
                #1 Education Consultancy in Türkiye
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6"
            >
              Your Future Begins in <span className="text-gradient animate-glow">Türkiye</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
            >
              Join <CountUp end={5000} suffix="+" className="font-bold" /> international students who trusted us to guide their educational journey. Expert admission support, personalized counseling, and guaranteed university placement.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setShowConsultation(true)}
              >
                Get Free Consultation
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
                onClick={() => setShowVideo(true)}
              >
                Watch Video
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

      {/* Universities Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Building2 className="mr-2 h-4 w-4" />
              Top Universities
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Partner Universities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access to prestigious institutions with world-class education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={university.image} 
                      alt={university.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90">
                        {university.ranking}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {university.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {university.programs}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {university.students}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 gradient-bg">
                        <Link href={`/universities/${university.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-shrink-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/universities">
                View All Universities
                <Building2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Trophy className="mr-2 h-4 w-4" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Your Success is Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support throughout your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Target className="mr-2 h-4 w-4" />
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold mb-4">How We Help You Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven 4-step process to guide you from application to acceptance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2">
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary rounded-full transform -translate-y-1/2" />
                  </div>
                )}
                
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex justify-center">
                    <Button variant="link" className="text-primary">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              <Star className="mr-2 h-4 w-4" />
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied students who achieved their dreams
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                activeTestimonial === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                          <div>
                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                            <p className="text-white/80">{testimonial.program}</p>
                            <p className="text-white/60">{testimonial.university}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

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

      {/* Student Life Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Heart className="mr-2 h-4 w-4" />
              Student Life
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Life in Türkiye</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a vibrant student life in a country where tradition meets modernity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentLife.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full hover-bounce">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards your dream education in Türkiye
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => setShowConsultation(true)}
              >
                Get Free Consultation
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/universities">
                  Browse Universities
                  <Building2 className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Welcome to Sultan Scholars</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Welcome Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Consultation Dialog */}
      <Dialog open={showConsultation} onOpenChange={setShowConsultation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Free Consultation</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="Your email address" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input placeholder="Your phone number" />
            </div>
            <div>
              <label className="text-sm font-medium">Study Level</label>
              <select className="w-full p-2 border rounded-md">
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
              </select>
            </div>
            <Button className="w-full gradient-bg">
              Schedule Consultation
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Contact Button */}
      <Button
        size="lg"
        className="fixed bottom-8 right-8 shadow-lg gradient-bg"
        onClick={() => window.open('https://wa.me/901234567890', '_blank')}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Chat with Us
      </Button>
    </main>
  );
}

const achievements = [
  {
    icon: Users,
    value: 5000,
    label: "Students Placed"
  },
  {
    icon: Building2,
    value: 50,
    label: "Partner Universities"
  },
  {
    icon: Trophy,
    value: 98,
    label: "Success Rate"
  },
  {
    icon: Globe2,
    value: 120,
    label: "Countries"
  }
];

const features = [
  {
    title: "Expert Guidance",
    description: "Personalized support from experienced education consultants",
    icon: GraduationCap,
    benefits: [
      "One-on-one counseling",
      "University selection assistance",
      "Career path planning",
      "Application strategy"
    ]
  },
  {
    title: "Guaranteed Placement",
    description: "We ensure your acceptance at a top Turkish university",
    icon: CheckCircle2,
    benefits: [
      "100% acceptance rate",
      "Multiple university options",
      "Program matching",
      "Scholarship opportunities"
    ]
  },
  {
    title: "Complete Support",
    description: "Comprehensive assistance throughout your journey",
    icon: Heart,
    benefits: [
      "Visa application help",
      "Accommodation support",
      "Airport pickup",
      "Cultural orientation"
    ]
  }
];

const process = [
  {
    title: "Free Consultation",
    description: "Discuss your goals and explore available options with our experts",
    icon: MessageCircle
  },
  {
    title: "University Selection",
    description: "Choose from our partner universities based on your preferences",
    icon: Building2
  },
  {
    title: "Application Process",
    description: "Complete assistance with documentation and submission",
    icon: FileCheck
  },
  {
    title: "Visa & Travel",
    description: "Support with visa application and travel arrangements",
    icon: Plane
  }
];

const universities = [
  {
    id: "istanbul-technical-university",
    name: "Istanbul Technical University",
    location: "Istanbul",
    ranking: "Top 500 Worldwide",
    programs: "100+ Programs",
    students: "5000+ International Students",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
  },
  {
    id: "bogazici-university",
    name: "Boğaziçi University",
    location: "Istanbul",
    ranking: "Top 600 Worldwide",
    programs: "80+ Programs",
    students: "3000+ International Students",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3"
  },
  {
    id: "middle-east-technical-university",
    name: "Middle East Technical University",
    location: "Ankara",
    ranking: "Top 800 Worldwide",
    programs: "70+ Programs",
    students: "4000+ International Students",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    program: "Computer Engineering",
    university: "Istanbul Technical University",
    quote: "Sultan Scholars made my dream of studying in Türkiye a reality. Their support throughout the process was invaluable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
  },
  {
    name: "Mohammed Al-Rahman",
    program: "Business Administration",
    university: "Boğaziçi University",
    quote: "The personalized guidance and attention to detail made the application process smooth and stress-free.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
  },
  {
    name: "Elena Petrova",
    program: "Architecture",
    university: "Middle East Technical University",
    quote: "From university selection to visa application, they supported me every step of the way. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
  }
];

const studentLife = [
  {
    title: "Campus Life",
    description: "Experience vibrant campus communities with modern facilities and diverse student activities.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3",
    tags: ["Student Clubs", "Sports Facilities", "Events", "Libraries"]
  },
  {
    title: "City Experience",
    description: "Explore the rich culture and history of Turkish cities while enjoying modern amenities.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3",
    tags: ["Cultural Sites", "Shopping", "Nightlife", "Transportation"]
  },
  {
    title: "Student Support",
    description: "Access comprehensive support services designed to help you thrive in your new environment.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
    tags: ["Healthcare", "Counseling", "Career Services", "Language Support"]
  }
];