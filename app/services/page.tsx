'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  FileCheck,
  Home,
  Plane,
  Trophy,
  Briefcase,
  ChevronRight,
  Building2,
  Globe2,
  BookOpen,
  Users,
  Clock,
  CheckCircle2,
  MapPin,
  Wallet,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CheckCircle2 className="w-20 h-20 mx-auto text-white mb-4" />
          </motion.div>
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            How We Help You <span className="text-red-500">Succeed</span>
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto"
          >
            Your journey to academic excellence in Türkiye starts here
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden group">
                  <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 z-10">
                    <service.icon className="h-12 w-12 text-red-500 group-hover:text-white transition-colors duration-300 mb-4" />
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="features" className="border-none">
                        <AccordionTrigger className="group-hover:text-white transition-colors duration-300">
                          What we offer
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 group-hover:text-white/90 transition-colors duration-300">
                            {service.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Your Journey With Us</h2>
            <p className="text-xl text-muted-foreground">Simple steps to your academic success in Türkiye</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Success Stories</h2>
            <p className="text-xl text-muted-foreground">See how we've helped students achieve their dreams</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-muted-foreground">{story.university}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{story.quote}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>{story.program}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 turkish-title">Start Your Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">Let us help you achieve your academic goals in Türkiye</p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-red-500 hover:bg-white/90">
                Get Started <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule Consultation <Clock className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Admission Assistance",
    description: "Expert guidance through the entire university application process",
    icon: GraduationCap,
    features: [
      "University selection guidance",
      "Application document preparation",
      "Personal statement review",
      "Interview preparation",
      "Fast-track applications"
    ]
  },
  {
    title: "Visa & Documentation",
    description: "Comprehensive support for all your visa and permit needs",
    icon: FileCheck,
    features: [
      "Student visa application support",
      "Residence permit assistance",
      "Document translation services",
      "Legal requirements guidance",
      "Application tracking"
    ]
  },
  {
    title: "Accommodation Support",
    description: "Find your perfect home away from home in Türkiye",
    icon: Home,
    features: [
      "University dormitory placement",
      "Private housing assistance",
      "Area safety assessment",
      "Lease agreement review",
      "Utility setup support"
    ]
  },
  {
    title: "Scholarship Guidance",
    description: "Access to various scholarship opportunities in Türkiye",
    icon: Trophy,
    features: [
      "Scholarship eligibility assessment",
      "Application assistance",
      "Document preparation",
      "Interview coaching",
      "Alternative funding advice"
    ]
  },
  {
    title: "Airport & Orientation",
    description: "Smooth transition to your new life in Türkiye",
    icon: Plane,
    features: [
      "Airport pickup service",
      "City orientation tour",
      "Campus familiarization",
      "Local transportation guide",
      "Essential services setup"
    ]
  },
  {
    title: "Career Support",
    description: "Jumpstart your career with our professional guidance",
    icon: Briefcase,
    features: [
      "Internship placements",
      "Part-time job assistance",
      "CV/Resume preparation",
      "Interview skills training",
      "Networking opportunities"
    ]
  }
];

const timeline = [
  {
    title: "Initial Consultation",
    description: "We understand your goals and create a personalized plan for your success."
  },
  {
    title: "University Selection",
    description: "Choose from our partner universities based on your academic interests and career goals."
  },
  {
    title: "Application Process",
    description: "We handle the complete application process, ensuring all documents are perfect."
  },
  {
    title: "Visa Support",
    description: "Get expert assistance with your student visa application and documentation."
  },
  {
    title: "Pre-Departure Prep",
    description: "Comprehensive orientation about life in Türkiye and what to expect."
  },
  {
    title: "Arrival & Settlement",
    description: "Warm welcome at the airport and support in settling into your new home."
  }
];

const successStories = [
  {
    name: "Sarah Johnson",
    university: "Istanbul Technical University",
    program: "Computer Engineering",
    quote: "Sultan Scholars made my dream of studying in Türkiye a reality. Their support was invaluable!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Mohammed Al-Rahman",
    university: "Boğaziçi University",
    program: "Business Administration",
    quote: "From application to graduation, they supported me every step of the way. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Elena Petrova",
    university: "Middle East Technical University",
    program: "Architecture",
    quote: "The scholarship guidance was exceptional. I'm now living my dream in Türkiye!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  }
];