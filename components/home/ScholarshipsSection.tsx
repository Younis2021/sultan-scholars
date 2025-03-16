'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, DollarSign, FileCheck, Calendar, Star } from 'lucide-react';

export default function ScholarshipsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Scholarships</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Financial Support Options</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities to fund your education in Türkiye
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <scholarship.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{scholarship.name}</h3>
                    <p className="text-sm text-muted-foreground">{scholarship.type}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Amount:</span>
                    <Badge variant="secondary">{scholarship.amount}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Deadline:</span>
                    <span className="text-sm font-medium">{scholarship.deadline}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {scholarship.requirements.map((req, rIndex) => (
                    <div key={rIndex} className="flex items-start gap-2">
                      <FileCheck className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full gradient-bg">
                  Apply Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-6">
                  Our scholarship experts are here to help you find and apply for the best financial aid options.
                </p>
                <Button className="gradient-bg">
                  Get Free Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

const scholarships = [
  {
    name: "Türkiye Scholarships",
    type: "Full Scholarship",
    amount: "Full Coverage",
    deadline: "Feb 20, 2024",
    icon: Star,
    requirements: [
      "Academic Excellence (GPA 3.0+)",
      "Language Proficiency",
      "Under 30 years old"
    ]
  },
  {
    name: "Merit Scholarship",
    type: "Partial Scholarship",
    amount: "50% Tuition",
    deadline: "Mar 15, 2024",
    icon: DollarSign,
    requirements: [
      "GPA 3.5+",
      "Extracurricular achievements",
      "Leadership qualities"
    ]
  },
  {
    name: "Research Grant",
    type: "Research Funding",
    amount: "$5,000/year",
    deadline: "Apr 1, 2024",
    icon: Calendar,
    requirements: [
      "Research proposal",
      "Academic references",
      "Published works"
    ]
  }
];

const stats = [
  {
    value: "$10M+",
    label: "Scholarships Awarded"
  },
  {
    value: "1000+",
    label: "Students Funded"
  },
  {
    value: "90%",
    label: "Success Rate"
  },
  {
    value: "24/7",
    label: "Support"
  }
];