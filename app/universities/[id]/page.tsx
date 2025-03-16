"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileCheck,
  Globe2,
  Heart,
  MessageCircle,
  Phone,
  Rocket,
  Sparkles,
  Apple as WhatsApp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { reviews, reviewStats, tourStops, universities } from "./data";

// Import components
import ApplyTab from "./components/ApplyTab";
import CTASection from "./components/CTASection";
import FacilitiesTab from "./components/FacilitiesTab";
import HeroSection from "./components/HeroSection";
import OverviewTab from "./components/OverviewTab";
import ProgramsTab from "./components/ProgramsTab";
import QuickStats from "./components/QuickStats";
import ReviewsTab from "./components/ReviewsTab";
import UniversityGallery from "./gallery";

// Application steps data
const applicationSteps = [
  {
    title: "Check Eligibility Requirements",
    description:
      "Review program-specific requirements including academic qualifications, language proficiency, and required documents.",
  },
  {
    title: "Prepare Application Documents",
    description:
      "Gather all necessary documents including transcripts, diplomas, language certificates, and identification documents.",
  },
  {
    title: "Complete Online Application",
    description:
      "Fill out the online application form with your personal information, academic history, and program preferences.",
  },
  {
    title: "Pay Application Fee",
    description:
      "Submit the non-refundable application fee to process your application.",
  },
  {
    title: "Track Application Status",
    description:
      "Monitor your application status through our online portal and respond to any additional requests.",
  },
  {
    title: "Receive Admission Decision",
    description:
      "Admission decisions are typically made within 4-6 weeks after the application deadline.",
  },
];

export default function UniversityPage({ params }: { params: { id: string } }) {
  const university =
    universities.find((u) => u.id === params.id) || universities[0];
  const [showVideo, setShowVideo] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Thank you for your interest! Our advisors will contact you shortly."
    );
    setShowContact(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  const handleDownloadBrochure = () => {
    toast.success(
      "Brochure download started. You'll also receive it in your email."
    );
    setShowBrochure(false);
  };

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/901234567890", "_blank");
    setShowWhatsApp(false);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        name={university.name}
        city={university.city}
        established={university.established}
        ranking={university.ranking}
        coverImage={university.coverImage}
        onWatchVideo={() => setShowVideo(true)}
      />

      {/* Quick Stats */}
      <QuickStats
        internationalStudents={university.internationalStudents}
        programsCount={university.programs.length}
        tuitionRange={university.tuitionRange}
        averageRating={reviewStats.averageRating}
      />

      {/* Quick Action Buttons */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setShowContact(true)}
                className="gradient-bg shadow-glow"
                size="lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Request a Call Back
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setShowBrochure(true)}
                variant="outline"
                size="lg"
                className="hover-bounce"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setShowWhatsApp(true)}
                variant="outline"
                size="lg"
                className="text-green-600 border-green-600 hover:bg-green-50 hover-shake"
              >
                <WhatsApp className="mr-2 h-4 w-4" />
                WhatsApp Advisor
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex justify-center">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="apply">Apply</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <OverviewTab university={university} tourStops={tourStops} />
            </TabsContent>

            {/* Programs Tab */}
            <TabsContent value="programs">
              <ProgramsTab university={university} />
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities">
              <FacilitiesTab university={university} />
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <UniversityGallery />
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews">
              <ReviewsTab
                university={university}
                reviews={reviews}
                reviewStats={reviewStats}
              />
            </TabsContent>

            {/* Apply Tab */}
            <TabsContent value="apply">
              <ApplyTab
                university={university}
                applicationSteps={applicationSteps}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{university.name}</DialogTitle>
            <DialogDescription>
              Experience our campus and academic excellence
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="University Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Call Back</DialogTitle>
            <DialogDescription>
              Our education advisors will contact you to discuss your options at{" "}
              {university.name}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
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
                onChange={handleFormChange}
                placeholder="Your email address"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Program of Interest</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleFormChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select a program</option>
                {university.programs.map((program, index) => (
                  <option key={index} value={program.name}>
                    {program.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message (Optional)</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Any specific questions or requirements?"
                rows={3}
              />
            </div>
            <div className="pt-4 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowContact(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="gradient-bg">
                Submit Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Brochure Dialog */}
      <Dialog open={showBrochure} onOpenChange={setShowBrochure}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Download University Brochure</DialogTitle>
            <DialogDescription>
              Get detailed information about programs, facilities, and admission
              requirements.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleDownloadBrochure();
            }}
            className="space-y-4 py-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="Your email address" required />
            </div>
            <div className="pt-4 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowBrochure(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="gradient-bg">
                Download Now
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Dialog */}
      <Dialog open={showWhatsApp} onOpenChange={setShowWhatsApp}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connect via WhatsApp</DialogTitle>
            <DialogDescription>
              Get instant answers to your questions about {university.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-4">
                <WhatsApp className="h-10 w-10 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">
                    WhatsApp Education Advisor
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Our advisors are available Monday-Friday, 9:00 AM - 6:00 PM
                    (GMT+3)
                  </p>
                  <p className="text-sm font-medium">+90 123 456 7890</p>
                </div>
              </div>
            </div>
            <Button
              onClick={handleWhatsAppContact}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Start WhatsApp Chat
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upcoming Events Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-primary/30"
            >
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              Upcoming Events
            </Badge>
            <h2 className="text-3xl font-bold mb-4 turkish-title">
              Join Us at {university.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with our representatives and learn more about the
              university through these special events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary p-4 text-white text-center">
                    <h3 className="font-bold text-lg">{event.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Globe2 className="h-5 w-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <Button className="w-full gradient-bg hover-bounce">
                      Register Now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Opportunities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-primary/30"
            >
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              Scholarships
            </Badge>
            <h2 className="text-3xl font-bold mb-4 turkish-title">
              Financial Support Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities to fund your education at {university.name}
              .
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg">{scholarship.name}</h3>
                      <Badge className="gradient-bg text-white">
                        {scholarship.amount}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {scholarship.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">
                          Deadline: {scholarship.deadline}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">
                          Eligibility: {scholarship.eligibility}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full hover-bounce">
                      Check Eligibility
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-primary/30"
            >
              <Heart className="mr-2 h-4 w-4 text-primary" />
              Student Support
            </Badge>
            <h2 className="text-3xl font-bold mb-4 turkish-title">
              We're Here For You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to ensure your success throughout
              your academic journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary hover-bounce"
                      >
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-primary/30"
            >
              <Rocket className="mr-2 h-4 w-4 text-primary" />
              Student Life
            </Badge>
            <h2 className="text-3xl font-bold mb-4 turkish-title">
              Life at {university.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a vibrant campus life with endless opportunities for
              growth and fun.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {studentLifeHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{highlight.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {highlight.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {highlight.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full hover-bounce">
                      Explore {highlight.title}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection universityName={university.name} />

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={() => setShowContact(true)}
            className="gradient-bg shadow-glow rounded-full p-4"
            size="lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}

// Additional data for new sections
const upcomingEvents = [
  {
    title: "Virtual Open Day",
    date: "April 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    description:
      "Join our virtual campus tour and information session to learn about programs, admission requirements, and student life.",
  },
  {
    title: "Application Workshop",
    date: "April 20, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    description:
      "Get hands-on guidance for completing your application, preparing documents, and maximizing your chances of acceptance.",
  },
  {
    title: "Meet Our Alumni",
    date: "April 25, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Online",
    description:
      "Connect with successful graduates who will share their experiences and answer your questions about studying at our university.",
  },
];

const scholarships = [
  {
    name: "Merit Scholarship",
    amount: "Full Tuition",
    deadline: "May 31, 2024",
    eligibility: "GPA 3.8+",
    description:
      "Awarded to exceptional students with outstanding academic achievements and demonstrated leadership potential.",
  },
  {
    name: "International Student Grant",
    amount: "50% Tuition",
    deadline: "June 15, 2024",
    eligibility: "All International Students",
    description:
      "Designed to support international students with strong academic backgrounds and financial need.",
  },
  {
    name: "Research Fellowship",
    amount: "$10,000/year",
    deadline: "July 1, 2024",
    eligibility: "Graduate Students",
    description:
      "For graduate students interested in conducting research in priority areas with faculty mentorship.",
  },
];

const supportServices = [
  {
    title: "Visa & Immigration Support",
    description:
      "Our dedicated team assists with student visa applications, residence permits, and all immigration-related matters.",
    icon: FileCheck,
  },
  {
    title: "Accommodation Services",
    description:
      "We help you find comfortable and affordable housing options, both on-campus and in the surrounding areas.",
    icon: Building2,
  },
  {
    title: "Academic Advising",
    description:
      "Personalized guidance to help you select courses, meet degree requirements, and achieve your academic goals.",
    icon: BookOpen,
  },
  {
    title: "Career Development",
    description:
      "Comprehensive career services including resume workshops, interview preparation, and job placement assistance.",
    icon: Rocket,
  },
];

const studentLifeHighlights = [
  {
    title: "Campus Activities",
    description:
      "Join over 50 student clubs and organizations covering interests from robotics to photography, music to debate.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_2.jpg",
    tags: ["Student Clubs", "Events", "Workshops"],
  },
  {
    title: "Sports & Recreation",
    description:
      "Stay active with state-of-the-art sports facilities, competitive teams, and recreational activities for all levels.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_3.jpg",
    tags: ["Fitness", "Team Sports", "Competitions"],
  },
  {
    title: "City Exploration",
    description:
      "Experience the vibrant culture, cuisine, and attractions of the city with organized trips and student discounts.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
    tags: ["Cultural Tours", "Local Cuisine", "Weekend Trips"],
  },
];
