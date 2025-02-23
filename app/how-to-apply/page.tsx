'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, FileCheck, Plane, ChevronRight, Download, MessageCircle, CheckCircle2, Building2, Globe2, FileText, Mail, Import as Passport, Home, HelpCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

export default function HowToApply() {
  const [activeStep, setActiveStep] = useState(1);
  const [showChat, setShowChat] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            How to <span className="text-red-500">Apply</span>
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your step-by-step guide to studying in Türkiye
          </motion.p>
        </div>
      </section>

      {/* Application Progress */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Progress value={(activeStep / 5) * 100} className="h-2" />
              <div className="mt-4 text-sm text-muted-foreground text-center">
                Step {activeStep} of 5
              </div>
            </div>

            <div className="grid gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-6 ${activeStep === index + 1 ? 'ring-2 ring-primary' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">
                          Step {index + 1}: {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <Accordion type="single" collapsible>
                          <AccordionItem value="details">
                            <AccordionTrigger>View Details</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4">
                                {step.details.map((detail, dIndex) => (
                                  <div key={dIndex} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                                    <p>{detail}</p>
                                  </div>
                                ))}
                                {step.requirements && (
                                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                                    <h4 className="font-semibold mb-2">Requirements:</h4>
                                    <ul className="list-disc list-inside space-y-2">
                                      {step.requirements.map((req, rIndex) => (
                                        <li key={rIndex}>{req}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <div className="mt-4 flex gap-4">
                          {step.actions.map((action, aIndex) => (
                            <Button
                              key={aIndex}
                              variant={action.primary ? "default" : "outline"}
                              className={action.primary ? "gradient-bg" : ""}
                              onClick={() => action.onClick?.(setActiveStep)}
                            >
                              {action.label}
                              {action.icon && <action.icon className="ml-2 h-4 w-4" />}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              {...fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 turkish-title">Application Checklist</h2>
              <p className="text-xl text-muted-foreground">
                Ensure you have all required documents ready
              </p>
            </motion.div>

            <Card className="p-8">
              <div className="grid gap-6">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button size="lg">
                  Download Complete Checklist
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              {...fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 turkish-title">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common application questions
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Live Chat Support */}
      <Dialog open={showChat} onOpenChange={setShowChat}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-8 right-8 shadow-lg gradient-bg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Need Help?
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Live Chat Support</DialogTitle>
            <DialogDescription>
              Our admission counselors are here to help you with your application.
            </DialogDescription>
          </DialogHeader>
          <div className="h-[400px] flex items-center justify-center border rounded-lg">
            <p className="text-muted-foreground">Chat interface would go here</p>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

const applicationSteps = [
  {
    title: "Choose Your Program",
    description: "Select your desired university and program of study",
    icon: Building2,
    details: [
      "Browse through our partner universities",
      "Compare programs and requirements",
      "Consider location and campus facilities",
      "Review tuition fees and scholarship opportunities"
    ],
    requirements: [
      "Academic transcripts for program eligibility",
      "Language proficiency scores (if required)",
      "Budget planning for tuition and living costs"
    ],
    actions: [
      {
        label: "Browse Universities",
        icon: ChevronRight,
        primary: true,
        onClick: () => {}
      },
      {
        label: "Compare Programs",
        icon: Globe2,
        onClick: () => {}
      }
    ]
  },
  {
    title: "Prepare Documents",
    description: "Gather and prepare all required application documents",
    icon: FileCheck,
    details: [
      "Collect academic transcripts and diplomas",
      "Prepare language proficiency test results",
      "Get documents translated if needed",
      "Prepare a statement of purpose"
    ],
    requirements: [
      "Original or certified copies of academic records",
      "Valid passport with at least 1 year validity",
      "Passport-size photographs",
      "Language proficiency certificates"
    ],
    actions: [
      {
        label: "Document Checklist",
        icon: Download,
        primary: true,
        onClick: () => {}
      },
      {
        label: "Translation Service",
        icon: Globe2,
        onClick: () => {}
      }
    ]
  },
  {
    title: "Submit Application",
    description: "Complete and submit your application online",
    icon: FileText,
    details: [
      "Fill out the online application form",
      "Upload required documents",
      "Pay application fee",
      "Review application before submission"
    ],
    requirements: [
      "Completed application form",
      "All required documents in PDF format",
      "Application fee payment",
      "Valid email address for communication"
    ],
    actions: [
      {
        label: "Start Application",
        icon: ChevronRight,
        primary: true,
        onClick: () => {}
      },
      {
        label: "Save Draft",
        icon: FileText,
        onClick: () => {}
      }
    ]
  },
  {
    title: "Visa Process",
    description: "Apply for your student visa after receiving acceptance",
    icon: Passport,
    details: [
      "Receive acceptance letter",
      "Prepare visa application documents",
      "Schedule visa appointment",
      "Attend visa interview"
    ],
    requirements: [
      "University acceptance letter",
      "Valid passport",
      "Financial documents",
      "Health insurance"
    ],
    actions: [
      {
        label: "Visa Guide",
        icon: ChevronRight,
        primary: true,
        onClick: () => {}
      },
      {
        label: "Book Appointment",
        icon: Calendar,
        onClick: () => {}
      }
    ]
  },
  {
    title: "Arrival & Settlement",
    description: "Plan your arrival and settle into your new life in Türkiye",
    icon: Plane,
    details: [
      "Book your flight",
      "Arrange accommodation",
      "Plan airport pickup",
      "Attend orientation program"
    ],
    requirements: [
      "Valid visa",
      "Travel insurance",
      "Accommodation arrangements",
      "Emergency contact information"
    ],
    actions: [
      {
        label: "Arrival Guide",
        icon: ChevronRight,
        primary: true,
        onClick: () => {}
      },
      {
        label: "Book Housing",
        icon: Home,
        onClick: () => {}
      }
    ]
  }
];

const checklist = [
  {
    title: "Academic Documents",
    description: "Transcripts, diplomas, and certificates from previous education",
    icon: GraduationCap
  },
  {
    title: "Identity Documents",
    description: "Valid passport, ID photos, birth certificate",
    icon: Passport
  },
  {
    title: "Language Certificates",
    description: "TOEFL, IELTS, or Turkish language proficiency",
    icon: Globe2
  },
  {
    title: "Financial Documents",
    description: "Bank statements, scholarship letters, or sponsorship documents",
    icon: FileText
  },
  {
    title: "Additional Requirements",
    description: "CV, statement of purpose, recommendation letters",
    icon: FileCheck
  },
  {
    title: "Health Documents",
    description: "Medical check-up reports, vaccination records",
    icon: FileText
  }
];

const faqs = [
  {
    question: "What are the basic requirements for applying?",
    answer: "Basic requirements include a high school diploma or equivalent, language proficiency proof (English or Turkish), valid passport, and application fee payment. Specific programs may have additional requirements."
  },
  {
    question: "How long does the application process take?",
    answer: "The application process typically takes 4-6 weeks from submission to decision. Visa processing can take an additional 2-4 weeks. We recommend starting the process at least 3-4 months before your intended start date."
  },
  {
    question: "Can I apply to multiple universities?",
    answer: "Yes, you can apply to multiple universities through our platform. We recommend applying to 2-3 universities to increase your chances of acceptance while managing application fees effectively."
  },
  {
    question: "What language requirements are there?",
    answer: "For English-taught programs, you typically need IELTS (6.0+) or TOEFL (75+). For Turkish-taught programs, you need Turkish proficiency (TÖMER) at B2 level or higher. Some universities offer preparatory language years."
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, various scholarships are available including Türkiye Scholarships, university-specific scholarships, and merit-based awards. Each has different requirements and deadlines."
  }
];