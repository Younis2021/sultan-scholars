'use client';

import { useState } from 'react';
import { Clock, GraduationCap, Globe2, BookOpen, Briefcase, FileCheck, ChevronRight, Search, Filter, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

type ProgramsTabProps = {
  university: any;
};

export default function ProgramsTab({ university }: ProgramsTabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [showInterestForm, setShowInterestForm] = useState(false);

  const filteredPrograms = university.programs.filter((program: any) => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || program.degree.toLowerCase().includes(selectedLevel.toLowerCase());
    return matchesSearch && matchesLevel;
  });

  const handleProgramClick = (program: any) => {
    setSelectedProgram(program);
  };

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thank you for your interest in ${selectedProgram.name}! Our advisors will contact you shortly.`);
    setShowInterestForm(false);
  };

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Academic Programs</h2>
          <p className="text-muted-foreground">
            {university.name} offers a wide range of undergraduate and graduate programs across various disciplines. 
            Explore our programs below to find the perfect fit for your academic and career goals.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search programs..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedLevel === 'all' ? "default" : "outline"}
                onClick={() => setSelectedLevel('all')}
                className={selectedLevel === 'all' ? "gradient-bg" : ""}
              >
                <Filter className="mr-2 h-4 w-4" />
                All Levels
              </Button>
              <Button
                variant={selectedLevel === 'bachelor' ? "default" : "outline"}
                onClick={() => setSelectedLevel('bachelor')}
                className={selectedLevel === 'bachelor' ? "gradient-bg" : ""}
              >
                Bachelor's
              </Button>
              <Button
                variant={selectedLevel === 'master' ? "default" : "outline"}
                onClick={() => setSelectedLevel('master')}
                className={selectedLevel === 'master' ? "gradient-bg" : ""}
              >
                Master's
              </Button>
            </div>
          </div>
        </Card>

        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program: any, index: number) => (
            <Card key={index} className="overflow-hidden mb-6">
              <div className="border-b p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">
                        <Clock className="mr-2 h-3 w-3" />
                        {program.duration}
                      </Badge>
                      <Badge variant="outline">
                        <GraduationCap className="mr-2 h-3 w-3" />
                        {program.degree}
                      </Badge>
                      <Badge variant="outline">
                        <Globe2 className="mr-2 h-3 w-3" />
                        {program.language}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => handleProgramClick(program)}>
                      Program Details
                    </Button>
                    <Button onClick={() => {
                      setSelectedProgram(program);
                      setShowInterestForm(true);
                    }}>
                      Apply Now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                <div className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <BookOpen className="mr-2 h-4 w-4 text-primary" />
                    Key Courses
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {program.courses.map((course: string, cIndex: number) => (
                      <li key={cIndex} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-primary" />
                    Career Opportunities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {program.careers.map((career: string, cIndex: number) => (
                      <li key={cIndex} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FileCheck className="mr-2 h-4 w-4 text-primary" />
                    Requirements
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">GPA:</span>
                      <span className="text-muted-foreground ml-2">{program.requirements.gpa}+</span>
                    </div>
                    <div>
                      <span className="font-medium">Language:</span>
                      <span className="text-muted-foreground ml-2">{program.requirements.language}</span>
                    </div>
                    <div>
                      <span className="font-medium">Documents:</span>
                      <ul className="mt-1 space-y-1 text-muted-foreground">
                        {program.requirements.documents.map((doc: string, dIndex: number) => (
                          <li key={dIndex} className="flex items-start">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No Programs Found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria to find programs.
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedLevel('all');
            }}>
              Reset Filters
            </Button>
          </Card>
        )}

        {/* Program Details Dialog */}
        {selectedProgram && (
          <Dialog open={!!selectedProgram && !showInterestForm} onOpenChange={(open) => {
            if (!open) setSelectedProgram(null);
          }}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedProgram.name}</DialogTitle>
                <DialogDescription>
                  {selectedProgram.degree} • {selectedProgram.duration} • {selectedProgram.language}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Program Overview</h3>
                  <p className="text-muted-foreground">{selectedProgram.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Courses</h3>
                    <ul className="space-y-2">
                      {selectedProgram.courses.map((course: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Career Opportunities</h3>
                    <ul className="space-y-2">
                      {selectedProgram.careers.map((career: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Admission Requirements</h3>
                  <Card className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-1">Academic</h4>
                        <p className="text-sm text-muted-foreground">GPA: {selectedProgram.requirements.gpa}+</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Language</h4>
                        <p className="text-sm text-muted-foreground">{selectedProgram.requirements.language}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Application Fee</h4>
                        <p className="text-sm text-muted-foreground">$50 (non-refundable)</p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setSelectedProgram(null)}>
                    Close
                  </Button>
                  <Button className="gradient-bg" onClick={() => setShowInterestForm(true)}>
                    Apply for This Program
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Interest Form Dialog */}
        <Dialog open={showInterestForm} onOpenChange={setShowInterestForm}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apply for {selectedProgram?.name}</DialogTitle>
              <DialogDescription>
                Submit your information to start the application process.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleInterestSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Your email address" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input placeholder="Your phone number" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Start Date</label>
                <select className="w-full p-2 border rounded-md" required>
                  <option value="">Select start date</option>
                  <option>Fall 2024</option>
                  <option>Spring 2025</option>
                  <option>Fall 2025</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Information</label>
                <textarea 
                  className="w-full p-2 border rounded-md" 
                  rows={3}
                  placeholder="Any specific questions or requirements?"
                />
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setShowInterestForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="gradient-bg">
                  Submit Application
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}