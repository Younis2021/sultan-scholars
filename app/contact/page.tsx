'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe2,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ChevronRight,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setShowSuccess(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
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
            Get in <span className="text-red-500">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            We're here to help you with your educational journey
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+90 (212) 123 4567</p>
              <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@sultanscholars.com</p>
              <p className="text-muted-foreground">support@sultanscholars.com</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Istiklal Street, No:123</p>
              <p className="text-muted-foreground">Beyoglu, Istanbul, Türkiye</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Inquiry Type</label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={value => setFormData({...formData, inquiryType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admission">Admission Inquiry</SelectItem>
                        <SelectItem value="program">Program Information</SelectItem>
                        <SelectItem value="scholarship">Scholarship Information</SelectItem>
                        <SelectItem value="visa">Visa Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {/* Success Dialog */}
              <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Message Sent Successfully!</DialogTitle>
                    <DialogDescription>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center py-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                  </div>
                  <Button onClick={() => setShowSuccess(false)}>Close</Button>
                </DialogContent>
              </Dialog>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-muted-foreground">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span>YouTube</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1375984075864!2d28.97661651541928!3d41.03421797929828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sIstiklal%20St.%2C%20Beyoglu%2FIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1647887574275!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-8 right-8 shadow-lg gradient-bg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>WhatsApp Support</DialogTitle>
            <DialogDescription>
              Get instant answers to your questions via WhatsApp
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-muted-foreground">
              Our support team is available Monday-Friday, 9:00 AM - 6:00 PM (GMT+3)
            </p>
            <Button
              className="w-full"
              onClick={() => window.open('https://wa.me/901234567890', '_blank')}
            >
              Start Chat
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}