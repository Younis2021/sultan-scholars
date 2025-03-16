'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  GraduationCap,
  MapPin,
  Star,
  Quote,
  ChevronRight,
  ChevronLeft,
  Globe2,
  Briefcase,
  Heart,
  Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { successStoryImages, transformationImages, activityImages } from '@/data/images';

export default function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

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
            Success <span className="text-red-500">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Meet our happy students and discover their inspiring journeys
          </motion.p>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              onClick={prevStory}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={nextStory}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="max-w-6xl mx-auto px-12"
            >
              <Card className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={successStories[currentStory].image}
                      alt={successStories[currentStory].name}
                      className="rounded-lg w-full h-[400px] object-cover"
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Student Testimonial</DialogTitle>
                          <DialogDescription>
                            Watch {successStories[currentStory].name}'s journey in Türkiye
                          </DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={successStories[currentStory].videoUrl}
                            title="Student Testimonial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                      <p className="text-xl italic text-muted-foreground">
                        {successStories[currentStory].quote}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{successStories[currentStory].name}</h3>
                      <p className="text-muted-foreground mb-4">{successStories[currentStory].program}</p>
                      <div className="flex flex-wrap gap-4">
                        <Badge variant="secondary">
                          <MapPin className="mr-2 h-4 w-4" />
                          {successStories[currentStory].university}
                        </Badge>
                        <Badge variant="secondary">
                          <GraduationCap className="mr-2 h-4 w-4" />
                          Class of {successStories[currentStory].graduationYear}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Life After Graduation</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="text-sm">{successStories[currentStory].currentRole}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm">{successStories[currentStory].currentLocation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Transformative Journeys</h2>
            <p className="text-xl text-muted-foreground">See how studying in Türkiye changed their lives</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <img
                        src={story.beforeImage}
                        alt="Before"
                        className="w-full h-48 object-cover"
                      />
                      <img
                        src={story.afterImage}
                        alt="After"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90">Before & After</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <p className="text-muted-foreground mb-4">{story.program}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">Before</h4>
                        <p className="text-sm text-muted-foreground">{story.before}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">After</h4>
                        <p className="text-sm text-muted-foreground">{story.after}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Campus Life Gallery</h2>
            <p className="text-xl text-muted-foreground">Glimpses of student life in Türkiye</p>
          </motion.div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="flex justify-center">
              <TabsTrigger value="all">All Photos</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <Camera className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Image Viewer Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Campus Life Photo</DialogTitle>
                <DialogDescription>
                  A glimpse into student life at our universities
                </DialogDescription>
              </DialogHeader>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Gallery"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 turkish-title">Start Your Success Story</h2>
            <p className="text-xl mb-8 opacity-90">Join our community of successful international students in Türkiye</p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Apply Now
                <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule Consultation
                <Globe2 className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const successStories = [
  {
    name: "Sarah Johnson",
    program: "Computer Engineering",
    university: "Istanbul Technical University",
    graduationYear: 2023,
    quote: "Studying in Türkiye was the best decision of my life. The blend of culture, education, and opportunity is unmatched.",
    image: successStoryImages.story1.portrait,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    currentRole: "Software Engineer at Google",
    currentLocation: "Istanbul, Türkiye"
  },
  {
    name: "Mohammed Al-Rahman",
    program: "Business Administration",
    university: "Boğaziçi University",
    graduationYear: 2022,
    quote: "The international exposure and quality of education in Türkiye prepared me perfectly for my global career.",
    image: successStoryImages.story2.portrait,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    currentRole: "Management Consultant",
    currentLocation: "Dubai, UAE"
  }
];

const transformations = [
  {
    name: "Alex Chen",
    program: "International Relations",
    beforeImage: transformationImages.before1,
    afterImage: transformationImages.after1,
    before: "Fresh graduate with limited international exposure",
    after: "Confident global professional with multicultural expertise"
  },
  {
    name: "Maria Santos",
    program: "Medicine",
    beforeImage: transformationImages.before2,
    afterImage: transformationImages.after2,
    before: "Aspiring medical student with language barriers",
    after: "Multilingual doctor with international certification"
  },
  {
    name: "James Wilson",
    program: "Engineering",
    beforeImage: transformationImages.before3,
    afterImage: transformationImages.after3,
    before: "Local engineering graduate seeking global opportunities",
    after: "Lead engineer at an international tech company"
  }
];

const galleryImages = [
  {
    url: activityImages.campusActivities,
    caption: "Graduation Day Celebrations",
    category: "academic"
  },
  {
    url: activityImages.sports,
    caption: "International Student Festival",
    category: "cultural"
  },
  {
    url: activityImages.cityExploration,
    caption: "Campus Study Groups",
    category: "academic"
  },
  {
    url: activityImages.graduation,
    caption: "Turkish Cultural Night",
    category: "cultural"
  }
];