'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Globe2, Users, FileCheck, CheckCircle2, Download, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import University360Tour from '@/components/university-360-tour';
import { toast } from 'sonner';

type OverviewTabProps = {
  university: any;
  tourStops: any[];
};

export default function OverviewTab({ university, tourStops }: OverviewTabProps) {
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const handleDownloadBrochure = () => {
    toast.success("Brochure download started. You'll also receive it in your email.");
    setShowBrochure(false);
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">About {university.name}</h2>
              <Badge variant="outline" className="text-xs">Est. {university.established}</Badge>
            </div>
            <p className="text-muted-foreground mb-6">{university.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {university.highlights.map((highlight: any, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="outline" size="sm" onClick={() => setShowBrochure(true)}>
                <Download className="mr-2 h-4 w-4" />
                Download University Profile
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Research Excellence</h2>
            <div className="space-y-6">
              {university.researchCenters.map((center: any, index: number) => (
                <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-2">{center.name}</h3>
                  <p className="text-muted-foreground mb-4">{center.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Projects</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {center.projects.map((project: string, pIndex: number) => (
                          <li key={pIndex} className="flex items-start">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Publications</h4>
                      <div className="flex items-center gap-2">
                        <Progress value={(center.publications / 200) * 100} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground">{center.publications}+</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Student Testimonials</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {university.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.program}, {testimonial.year}</p>
                    </div>
                  </div>
                  <p className="text-sm italic text-muted-foreground">"{testimonial.quote}"</p>
                  <p className="text-xs text-primary">{testimonial.currentRole}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="p-6 border-2 border-primary/20">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-primary" />
              Speak with an Advisor
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about {university.name}? Our education consultants are here to help you.
            </p>
            <Button onClick={() => setShowAdvisor(true)} className="w-full gradient-bg">
              Request Free Consultation
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Key Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Application Deadline</h3>
                  <p className="text-sm text-muted-foreground">{university.applicationDeadline}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Academic Calendar</h3>
                  <p className="text-sm text-muted-foreground">{university.academicCalendar}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Language of Instruction</h3>
                  <p className="text-sm text-muted-foreground">English, Turkish</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Student/Faculty Ratio</h3>
                  <p className="text-sm text-muted-foreground">15:1</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Virtual Tour</h2>
            <University360Tour stops={tourStops} />
          </Card>
        </div>
      </div>
    </div>
  );
}