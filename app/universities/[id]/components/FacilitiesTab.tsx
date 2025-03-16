'use client';

import { useState } from 'react';
import { CheckCircle2, ChevronRight, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

type FacilitiesTabProps = {
  university: any;
};

export default function FacilitiesTab({ university }: FacilitiesTabProps) {
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [showTourForm, setShowTourForm] = useState(false);

  const handleTourRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tour request submitted! We'll contact you to confirm the details.");
    setShowTourForm(false);
  };

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Campus Facilities</h2>
              <p className="text-muted-foreground">
                {university.name} provides state-of-the-art facilities to enhance your academic experience and campus life.
                Explore our modern infrastructure designed to support your learning, research, and personal development.
              </p>
            </div>
            <Button onClick={() => setShowTourForm(true)}>
              Schedule Campus Tour
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>

        {university.facilities.map((facility: any, index: number) => (
          <Card key={index} className="overflow-hidden mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {facility.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" onClick={() => setSelectedFacility(facility)}>
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        ))}

        {/* Additional Facilities */}
        <h2 className="text-2xl font-bold mb-4 mt-12">Additional Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {additionalFacilities.map((facility, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <facility.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Facility Details Dialog */}
        <Dialog open={!!selectedFacility} onOpenChange={(open) => {
          if (!open) setSelectedFacility(null);
        }}>
          <DialogContent className="max-w-4xl">
            {selectedFacility && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedFacility.name}</DialogTitle>
                  <DialogDescription>
                    Explore our state-of-the-art {selectedFacility.name.toLowerCase()}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={selectedFacility.image}
                      alt={selectedFacility.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">{selectedFacility.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Features & Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedFacility.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {facilityExtras.map((extra, index) => (
                        <div key={`extra-${index}`} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>{extra}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Weekdays:</p>
                        <p className="text-muted-foreground">7:00 AM - 10:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Weekends:</p>
                        <p className="text-muted-foreground">9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setSelectedFacility(null)}>
                      Close
                    </Button>
                    <Button className="gradient-bg" onClick={() => {
                      setSelectedFacility(null);
                      setShowTourForm(true);
                    }}>
                      Schedule a Tour
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Tour Request Dialog */}
        <Dialog open={showTourForm} onOpenChange={setShowTourForm}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule a Campus Tour</DialogTitle>
              <DialogDescription>
                Visit {university.name} and experience our facilities firsthand.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleTourRequest} className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input className="w-full p-2 border rounded-md" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input className="w-full p-2 border rounded-md" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Tour Date</label>
                <input type="date" className="w-full p-2 border rounded-md" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Time</label>
                <select className="w-full p-2 border rounded-md" required>
                  <option value="">Select time</option>
                  <option>Morning (9AM - 12PM)</option>
                  <option>Afternoon (12PM - 3PM)</option>
                  <option>Evening (3PM - 5PM)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Areas of Interest</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Which facilities are you most interested in seeing?"
                />
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setShowTourForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="gradient-bg">
                  Request Tour
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

// Additional data
const facilityExtras = [
  "24/7 Security",
  "Wheelchair Accessible",
  "Free Wi-Fi",
  "Cafeteria Access",
  "Student Support Staff",
  "Modern Technology"
];

const additionalFacilities = [
  {
    name: "Student Dormitories",
    description: "Modern, comfortable housing options with all necessary amenities for a productive student life.",
    icon: CheckCircle2
  },
  {
    name: "Dining Facilities",
    description: "Multiple dining options offering diverse, nutritious meals catering to various dietary preferences.",
    icon: CheckCircle2
  },
  {
    name: "Health Center",
    description: "Comprehensive healthcare services including medical consultations, emergency care, and wellness programs.",
    icon: CheckCircle2
  },
  {
    name: "Career Center",
    description: "Resources and guidance for career development, internships, and job placement assistance.",
    icon: CheckCircle2
  },
  {
    name: "International Student Office",
    description: "Dedicated support for international students, including visa assistance and cultural integration programs.",
    icon: CheckCircle2
  },
  {
    name: "Transportation Services",
    description: "Campus shuttle services and connections to public transportation for easy commuting.",
    icon: CheckCircle2
  }
];
