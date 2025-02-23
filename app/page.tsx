'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [count, setCount] = useState({ students: 0, universities: 0, success: 0 });
  
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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Star className="w-20 h-20 mx-auto text-red-500 mb-4" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-6 turkish-title"
          >
            Discover Your Future in <span className="text-red-500">Türkiye</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Where ancient traditions meet modern excellence in education
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-red-500 text-white hover:bg-red-600 border-2 border-white/20">
              Begin Your Journey <ChevronRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              Explore Universities <Building2 className="ml-2" size={16} />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: GraduationCap, text: "World-Class Education" },
              { icon: Globe2, text: "Rich Cultural Heritage" },
              { icon: Heart, text: "Warm Hospitality" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center card-hover border-2 border-red-500/20">
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
            >
              <Card className="p-6 text-center card-hover border-2 border-blue-500/20">
                <Building2 className="mx-auto mb-4 text-blue-500 h-12 w-12" />
                <h3 className="text-4xl font-bold mb-2">{count.universities}+</h3>
                <p className="text-muted-foreground">Partner Universities</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 text-center card-hover border-2 border-cyan-500/20">
                <Trophy className="mx-auto mb-4 text-cyan-500 h-12 w-12" />
                <h3 className="text-4xl font-bold mb-2">{count.success}+</h3>
                <p className="text-muted-foreground">Success Stories</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Turkey Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Türkiye?</h2>
            <p className="text-xl opacity-90">Discover a unique blend of tradition and innovation</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white/10 backdrop-blur-lg border-white/20 card-hover">
                  <feature.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-4">Top Universities</h2>
            <p className="text-xl text-muted-foreground">Partner with world-class institutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden card-hover">
                  <div className="relative">
                    <img 
                      src={university.image} 
                      alt={university.name}
                      className="w-full h-48 object-cover"
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
                    <Button variant="default" className="w-full gradient-bg text-white hover:opacity-90">
                      Explore Programs
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Student Life in Türkiye</h2>
            <p className="text-xl text-muted-foreground">Experience a vibrant and enriching student lifestyle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentLife.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden card-hover">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
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
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">Take the first step towards your international education adventure</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply Now <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Rich Heritage",
    description: "Experience a unique blend of Eastern and Western cultures spanning millennia.",
    icon: Heart
  },
  {
    title: "Quality Education",
    description: "Access world-class education at internationally recognized universities.",
    icon: GraduationCap
  },
  {
    title: "Affordable Living",
    description: "Enjoy high quality of life with reasonable living costs.",
    icon: DollarSign
  },
  {
    title: "Career Growth",
    description: "Connect with global opportunities and build your future.",
    icon: Lightbulb
  }
];

const universities = [
  {
    name: "Istanbul Technical University",
    location: "Istanbul",
    ranking: "Top 500",
    international: "5000+ Int'l Students",
    programs: "100+ Programs",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Middle East Technical University",
    location: "Ankara",
    ranking: "Top 600",
    international: "4000+ Int'l Students",
    programs: "80+ Programs",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80"
  },
  {
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
    description: "Immerse yourself in Turkish culture through festivals, art, and music events.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Modern Campus Life",
    description: "Experience state-of-the-art facilities and vibrant campus communities.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Student Support",
    description: "Access comprehensive support services for international students.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  }
];