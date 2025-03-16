'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Heart, Sparkles, Globe2, Users, Target, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, ensuring the highest standards of quality and professionalism.",
    icon: Star,
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    title: "Integrity",
    description: "We maintain the highest level of honesty and ethical standards in all our dealings with students and partners.",
    icon: Shield,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Student-Centric",
    description: "Our students' success and well-being are at the heart of everything we do.",
    icon: Heart,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "Innovation",
    description: "We continuously evolve our services to meet the changing needs of international education.",
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Global Perspective",
    description: "We embrace diversity and foster cross-cultural understanding in education.",
    icon: Globe2,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Empowerment",
    description: "We empower students to make informed decisions about their educational future.",
    icon: Users,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Goal-Oriented",
    description: "We focus on achieving measurable results and concrete outcomes for our students.",
    icon: Target,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Quality Assurance",
    description: "We maintain rigorous quality standards in all our services and partnerships.",
    icon: Award,
    color: "bg-teal-500/10 text-teal-500"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Values</Badge>
          <h2 className="text-4xl font-bold mb-6 turkish-title">What We Stand For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our core values guide everything we do, ensuring we deliver the best possible service to our students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 rounded-full ${value.color} mx-auto mb-6 flex items-center justify-center`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partner Universities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}