'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  GraduationCap,
  FileCheck,
  Plane,
  DollarSign,
  Heart,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  Globe2,
  Home,
  Coffee,
  BookOpen,
  Users,
  Wallet,
  Clock,
  MapPin,
  Shield,
  Lightbulb,
  Building2,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredQuestions = faqData.flatMap(category => 
    category.questions.filter(q => 
      (activeCategory === 'all' || category.id === activeCategory) &&
      (q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
       q.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    ).map(q => ({ ...q, category: category.id }))
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            Frequently Asked <span className="text-red-500">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Everything you need to know about studying in Türkiye
          </motion.p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search questions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {faqData.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={activeCategory === category.id ? "gradient-bg" : ""}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              ))}
              <Button
                variant={activeCategory === 'all' ? "default" : "outline"}
                onClick={() => setActiveCategory('all')}
                className={activeCategory === 'all' ? "gradient-bg" : ""}
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                All Questions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredQuestions.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredQuestions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="bg-white rounded-lg border">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-start text-left">
                          <span className="text-lg font-medium">{question.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="prose max-w-none">
                          <p className="text-muted-foreground">{question.answer}</p>
                          {question.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {question.links.map((link, linkIndex) => (
                                <Button
                                  key={linkIndex}
                                  variant="outline"
                                  size="sm"
                                  asChild
                                >
                                  <Link href={link.url}>
                                    {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                                    {link.text}
                                  </Link>
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            ) : (
              <Card className="p-8 text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Questions Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter to find what you're looking for.
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 turkish-title">Still Have Questions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Us
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const faqData = [
  {
    id: 'admission',
    name: 'Admission Process',
    icon: GraduationCap,
    questions: [
      {
        question: "What are the basic requirements for admission?",
        answer: "Basic requirements include a high school diploma, language proficiency (English or Turkish), valid passport, and application fee. Specific programs may have additional requirements.",
        links: [
          { text: "View Requirements", url: "/how-to-apply", icon: FileCheck },
          { text: "Start Application", url: "/apply", icon: ChevronRight }
        ]
      },
      {
        question: "How long does the application process take?",
        answer: "The application process typically takes 4-6 weeks from submission to decision. We recommend starting at least 3-4 months before your intended start date.",
        links: [
          { text: "Application Timeline", url: "/timeline", icon: Clock }
        ]
      },
      {
        question: "Can I apply to multiple universities?",
        answer: "Yes, you can apply to multiple universities through our platform. We recommend applying to 2-3 universities to increase your chances of acceptance.",
        links: [
          { text: "Compare Universities", url: "/universities", icon: Building2 }
        ]
      }
    ]
  },
  {
    id: 'visa',
    name: 'Visa & Documents',
    icon: FileCheck,
    questions: [
      {
        question: "What documents do I need for a student visa?",
        answer: "Required documents include acceptance letter, passport, financial statements, health insurance, and visa application form. All documents must be translated and notarized.",
        links: [
          { text: "Visa Checklist", url: "/visa-guide", icon: FileCheck }
        ]
      },
      {
        question: "How long does visa processing take?",
        answer: "Visa processing typically takes 15-20 working days. We recommend applying as soon as you receive your acceptance letter.",
        links: [
          { text: "Track Application", url: "/track", icon: Plane }
        ]
      }
    ]
  },
  {
    id: 'scholarships',
    name: 'Scholarships',
    icon: DollarSign,
    questions: [
      {
        question: "What types of scholarships are available?",
        answer: "Available scholarships include Türkiye Scholarships, university-specific scholarships, merit-based awards, and research grants.",
        links: [
          { text: "Browse Scholarships", url: "/scholarships", icon: Wallet }
        ]
      },
      {
        question: "How do I apply for scholarships?",
        answer: "Each scholarship has its own application process. Türkiye Scholarships applications open in January and close in February each year.",
        links: [
          { text: "Apply Now", url: "/scholarships/apply", icon: ChevronRight }
        ]
      }
    ]
  },
  {
    id: 'life',
    name: 'Life in Türkiye',
    icon: Heart,
    questions: [
      {
        question: "What is the cost of living in Türkiye?",
        answer: "Monthly living costs range from $400-600, including accommodation, food, and transportation. Costs vary by city and lifestyle.",
        links: [
          { text: "Cost Calculator", url: "/cost-of-living", icon: DollarSign }
        ]
      },
      {
        question: "Can international students work while studying?",
        answer: "Yes, international students can work part-time (20 hours/week) during studies and full-time during holidays with proper permits.",
        links: [
          { text: "Work Opportunities", url: "/work-study", icon: Briefcase }
        ]
      },
      {
        question: "What accommodation options are available?",
        answer: "Options include university dormitories, private student housing, shared apartments, and homestays. Prices range from $150-400 per month.",
        links: [
          { text: "Find Housing", url: "/accommodation", icon: Home }
        ]
      }
    ]
  }
];