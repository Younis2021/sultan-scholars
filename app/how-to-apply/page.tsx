'use client';

import { useState } from 'react';
import { FileCheck, GraduationCap, Globe2, Plane, Download, FileText, ChevronRight, Calendar, Import as Passport, Home } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ApplicationProgress from './components/ApplicationProgress';
import ApplicationStep from './components/ApplicationStep';
import ApplicationChecklist from './components/ApplicationChecklist';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const applicationSteps = [
  {
    title: "Check Eligibility Requirements",
    description: "Review program-specific requirements including academic qualifications, language proficiency, and required documents.",
    details: [
      "Review academic requirements",
      "Check language proficiency requirements",
      "Verify document requirements",
      "Understand application deadlines"
    ],
    requirements: [
      "High school diploma or equivalent",
      "Language proficiency test scores",
      "Valid passport"
    ],
    actions: [
      {
        label: "Check Requirements",
        primary: true
      },
      {
        label: "Contact Advisor"
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
    title: "Language Certificates",
    description: "TOEFL, IELTS, or Turkish language proficiency",
    icon: Globe2
  },
  {
    title: "Official Documents",
    description: "Passport, ID photos, birth certificate",
    icon: FileCheck
  },
  {
    title: "Travel Documents",
    description: "Visa requirements and travel insurance",
    icon: Plane
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

export default function HowToApply() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ApplicationProgress currentStep={activeStep} totalSteps={applicationSteps.length} />

            <div className="grid gap-8">
              {applicationSteps.map((step, index) => (
                <ApplicationStep
                  key={index}
                  step={step}
                  index={index}
                  isActive={activeStep === index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ApplicationChecklist checklist={checklist} />
      <FAQSection faqs={faqs} />
      <CTASection />
    </main>
  );
}