'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Calendar, FileCheck, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

type ApplyTabProps = {
  university: any;
  applicationSteps: any[];
};

export default function ApplyTab({ university, applicationSteps }: ApplyTabProps) {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    startDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! Our advisors will contact you shortly.");
    setShowInterestForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      startDate: '',
      message: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {showInterestForm ? (
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Express Your Interest</h2>
          <p className="text-muted-foreground mb-6">
            Complete this form to receive personalized guidance for your application to {university.name}.
            Our education consultants will contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Program of Interest</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select a program</option>
                  {university.programs.map((program: any, index: number) => (
                    <option key={index} value={program.name}>{program.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Start Date</label>
                <select
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select start date</option>
                  <option value="Fall 2024">Fall 2024</option>
                  <option value="Spring 2025">Spring 2025</option>
                  <option value="Fall 2025">Fall 2025</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Additional Information</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or requirements?"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={() => setShowInterestForm(false)}>
                Cancel
              </Button>
              <Button type="submit" className="gradient-bg">
                Submit Request
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Application Process</h2>
          <p className="text-muted-foreground mb-6">
            Ready to join {university.name}? Follow these steps to complete your application.
            Our admissions team is here to support you throughout the process.
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Application Timeline</h3>
              <Badge variant="outline">Next Deadline: May 31, 2024</Badge>
            </div>
            <Progress value={60} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Application Opens</span>
              <span>Document Submission</span>
              <span>Review Process</span>
              <span>Decision</span>
            </div>
          </div>

          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild className="gradient-bg flex-1">
              <Link href="/apply">
                Start Full Application
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button onClick={() => setShowInterestForm(true)} variant="outline" className="flex-1">
              Express Interest First
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Scholarships</h3>
          <div className="space-y-4">
            {university.scholarships.map((scholarship: any, index: number) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{scholarship.name}</h4>
                  <Badge>{scholarship.amount}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium">Criteria:</span> {scholarship.criteria}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Deadline:</span> {scholarship.deadline}
                </p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Check Scholarship Eligibility
            <FileCheck className="ml-2 h-4 w-4" />
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Housing Options</h3>
          <div className="space-y-4">
            {university.housingOptions.map((housing: any, index: number) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{housing.type}</h4>
                  <Badge variant="outline">{housing.availability}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Cost:</span> {housing.cost}
                </p>
                <div className="flex flex-wrap gap-2">
                  {housing.features.map((feature: string, fIndex: number) => (
                    <Badge key={fIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Housing Assistance
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>

      <Card className="p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Our Application Support Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applicationServices.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium mb-1">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" asChild className="gradient-bg">
          <Link href="/apply">
            Start Your Application
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

const applicationServices = [
  {
    title: "Document Preparation",
    description: "We'll help you prepare and organize all required application documents."
  },
  {
    title: "Application Review",
    description: "Our experts will review your application to ensure it meets all requirements."
  },
  {
    title: "Personal Statement Assistance",
    description: "Get help crafting a compelling personal statement that stands out."
  },
  {
    title: "Interview Preparation",
    description: "Comprehensive preparation for admission interviews with mock sessions."
  },
  {
    title: "Visa Support",
    description: "Complete assistance with student visa application and documentation."
  },
  {
    title: "Translation Services",
    description: "Professional translation of documents to meet university requirements."
  }
];