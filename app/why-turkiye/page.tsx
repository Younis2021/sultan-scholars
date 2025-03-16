'use client';

import { motion } from 'framer-motion';
import {
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
  Shield,
  Coffee,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cityImages } from '@/data/images';

export default function WhyTurkiye() {
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
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            Why Choose <span className="text-red-500">Türkiye</span>?
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto"
          >
            Discover a unique blend of rich cultural heritage, world-class education, and modern innovation
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Key Benefits</h2>
            <p className="text-xl text-muted-foreground">Experience the advantages of studying in Türkiye</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover border-2 border-red-500/10">
                  <benefit.icon className="mx-auto mb-4 text-red-500 h-12 w-12" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Global Comparison</h2>
            <p className="text-xl text-muted-foreground">See how Türkiye compares to other popular study destinations</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead className="text-red-500">Türkiye</TableHead>
                    <TableHead>UK</TableHead>
                    <TableHead>USA</TableHead>
                    <TableHead>Germany</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell>{row.turkiye}</TableCell>
                      <TableCell>{row.uk}</TableCell>
                      <TableCell>{row.usa}</TableCell>
                      <TableCell>{row.germany}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Top Student Cities</h2>
            <p className="text-xl text-muted-foreground">Explore Türkiye's vibrant educational hubs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city, index) => (
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
                      src={index === 0 ? cityImages.istanbul :
                           index === 1 ? cityImages.ankara :
                           cityImages.izmir}
                      alt={city.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                      <div className="flex items-center text-sm">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span>{city.universities} Universities</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{city.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {city.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm text-muted-foreground">
                          <feature.icon className="w-4 h-4 mr-2 text-red-500" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
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
            <h2 className="text-4xl font-bold mb-6 turkish-title">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of international students who have chosen Türkiye as their educational destination</p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-red-500 hover:bg-white/90">
                Apply Now <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Download Guide <BookOpen className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const benefits = [
  {
    title: "Quality Education",
    description: "Access to internationally recognized universities and programs",
    icon: GraduationCap
  },
  {
    title: "Affordable Living",
    description: "Lower cost of living compared to other popular destinations",
    icon: DollarSign
  },
  {
    title: "Rich Culture",
    description: "Immerse yourself in a unique blend of Eastern and Western traditions",
    icon: Globe2
  },
  {
    title: "Safe Environment",
    description: "Modern infrastructure and welcoming atmosphere for students",
    icon: Shield
  },
  {
    title: "Career Growth",
    description: "Opportunities for internships and post-graduation employment",
    icon: Lightbulb
  },
  {
    title: "Student Life",
    description: "Vibrant campus culture and diverse student community",
    icon: Users
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art campuses and research centers",
    icon: Building2
  },
  {
    title: "Strategic Location",
    description: "Gateway between Europe and Asia with excellent connectivity",
    icon: Plane
  }
];

const comparisonData = [
  {
    feature: "Average Tuition (USD/year)",
    turkiye: "$3,000-8,000",
    uk: "$20,000-35,000",
    usa: "$25,000-45,000",
    germany: "$0-5,000"
  },
  {
    feature: "Living Cost (USD/month)",
    turkiye: "$400-600",
    uk: "$1,200-1,800",
    usa: "$1,000-2,000",
    germany: "$800-1,200"
  },
  {
    feature: "Work During Study",
    turkiye: "Yes (20hrs/week)",
    uk: "Yes (20hrs/week)",
    usa: "Limited",
    germany: "Yes (20hrs/week)"
  },
  {
    feature: "Post-Study Work Visa",
    turkiye: "Available",
    uk: "2 years",
    usa: "Optional 1-3 years",
    germany: "18 months"
  },
  {
    feature: "English Programs",
    turkiye: "Many",
    uk: "All",
    usa: "All",
    germany: "Limited"
  }
];

const cities = [
  {
    name: "Istanbul",
    universities: "50+",
    description: "A vibrant metropolis where history meets modernity, offering diverse educational opportunities.",
    features: [
      { icon: Building2, text: "Top-ranked universities" },
      { icon: Globe2, text: "Cultural hub" },
      { icon: Coffee, text: "Rich student life" },
      { icon: Plane, text: "Global connectivity" }
    ]
  },
  {
    name: "Ankara",
    universities: "20+",
    description: "The capital city with prestigious institutions and a focus on research and innovation.",
    features: [
      { icon: Building2, text: "Research centers" },
      { icon: Shield, text: "Safe environment" },
      { icon: Users, text: "Student-friendly" },
      { icon: DollarSign, text: "Affordable living" }
    ]
  },
  {
    name: "Izmir",
    universities: "15+",
    description: "A coastal city offering excellent education with a Mediterranean lifestyle.",
    features: [
      { icon: Building2, text: "Modern campuses" },
      { icon: Heart, text: "Quality of life" },
      { icon: Globe2, text: "International community" },
      { icon: Lightbulb, text: "Innovation focus" }
    ]
  }
];