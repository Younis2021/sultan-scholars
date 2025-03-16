'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Globe2, 
  Heart, 
  DollarSign, 
  Users, 
  MapPin,
  Sun,
  Coffee
} from 'lucide-react';

export default function WhyTurkiyeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Why Türkiye</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Your Ideal Study Destination</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the unique advantages of studying in Türkiye
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <reason.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">A Bridge Between East and West</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Study in a country that combines rich cultural heritage with modern innovation. 
                Experience a unique blend of traditions while receiving a world-class education.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg"
                alt="Istanbul"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <div className="font-bold">Student Satisfaction</div>
                    <div className="text-sm text-muted-foreground">4.8/5 Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "Quality Education",
    description: "Access to internationally recognized universities and programs",
    icon: GraduationCap
  },
  {
    title: "Cultural Experience",
    description: "Immerse yourself in a rich blend of traditions and modernity",
    icon: Globe2
  },
  {
    title: "Affordable Living",
    description: "Lower cost of living compared to other study destinations",
    icon: DollarSign
  },
  {
    title: "Student Life",
    description: "Vibrant campus culture and diverse student community",
    icon: Users
  },
  {
    title: "Strategic Location",
    description: "Gateway between Europe and Asia with excellent connectivity",
    icon: MapPin
  },
  {
    title: "Mediterranean Climate",
    description: "Enjoy sunny weather and mild temperatures year-round",
    icon: Sun
  },
  {
    title: "Rich Heritage",
    description: "Experience thousands of years of history and culture",
    icon: Heart
  },
  {
    title: "Modern Lifestyle",
    description: "Contemporary cities with traditional charm",
    icon: Coffee
  }
];

const stats = [
  {
    value: "200+",
    label: "Partner Universities"
  },
  {
    value: "250K+",
    label: "International Students"
  },
  {
    value: "60K+",
    label: "Study Programs"
  },
  {
    value: "180+",
    label: "Countries Represented"
  }
];