'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Users,
  Trophy,
  DollarSign,
  Globe2,
  BookOpen,
  Building2,
  ChevronRight,
  Clock,
  Heart,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { universities } from './data';

export default function UniversityDetails() {
  const { id } = useParams();
  const university = universities.find(u => u.id === id);

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6 max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">University Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The university you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <a href="/universities">
              View All Universities
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={university.coverImage} 
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge variant="secondary" className="mb-4">
              {university.ranking}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 turkish-title">
              {university.name}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                {university.city}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Est. {university.established}
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                {university.internationalStudents.toLocaleString()}+ International Students
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Button size="lg" className="gradient-bg">
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request Information
                <BookOpen className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  <TabsTrigger value="admissions">Admissions</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-4">About {university.name}</h2>
                    <p className="text-muted-foreground">{university.description}</p>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {university.highlights.map((highlight, index) => (
                      <Card key={index} className="p-6">
                        <highlight.icon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="programs" className="space-y-8">
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Available Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {university.programs.map((program, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-bold mb-2">{program.name}</h3>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {program.duration}
                            </div>
                            <div className="flex items-center">
                              <GraduationCap className="mr-2 h-4 w-4" />
                              {program.degree}
                            </div>
                            <div className="flex items-center">
                              <Globe2 className="mr-2 h-4 w-4" />
                              {program.language}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Key Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Tuition Fee Range (Annual)</div>
                    <div className="font-bold">
                      ${university.tuitionRange[0].toLocaleString()} - ${university.tuitionRange[1].toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Application Deadline</div>
                    <div className="font-bold">{university.applicationDeadline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Academic Calendar</div>
                    <div className="font-bold">{university.academicCalendar}</div>
                  </div>
                  <Button className="w-full">
                    Download Brochure
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {university.events.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 text-center">
                        <div className="font-bold text-lg">{event.date.split(' ')[0]}</div>
                        <div className="text-xs text-muted-foreground">{event.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}