'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import {
  GraduationCap,
  FileCheck,
  ChevronRight,
  Globe2,
  Building2,
  Calendar,
  Mail,
  Phone,
  User,
  Flag,
  BookOpen,
  Heart,
  Upload,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Clock,
  Shield,
  Headphones,
  Plane,
  Home,
  MessageCircle,
  X,
  Loader2
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
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  birthDate: string;
  gender: string;
  program: string;
  university: string;
  startDate: string;
  educationLevel: string;
  englishLevel: string;
  motivation: string;
};

type UploadedFile = {
  name: string;
  size: number;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
};

export default function Apply() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile>>({});

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<FormData>({
    mode: 'onChange'
  });

  const onDrop = useCallback((acceptedFiles: File[], documentType: string) => {
    acceptedFiles.forEach(file => {
      // Simulate file upload
      setUploadedFiles(prev => ({
        ...prev,
        [documentType]: {
          name: file.name,
          size: file.size,
          progress: 0,
          status: 'uploading'
        }
      }));

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setUploadedFiles(prev => ({
          ...prev,
          [documentType]: {
            ...prev[documentType],
            progress,
            status: progress === 100 ? 'completed' : 'uploading'
          }
        }));

        if (progress === 100) {
          clearInterval(interval);
          toast.success(`${file.name} uploaded successfully`);
        }
      }, 500);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: files => onDrop(files, 'default'),
    maxSize: 5000000 // 5MB
  });

  const removeFile = (documentType: string) => {
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      delete newFiles[documentType];
      return newFiles;
    });
    toast.info('File removed');
  };

  const onSubmit = (data: FormData) => {
    // Check if all required documents are uploaded
    const requiredDocuments = documents.map(doc => doc.type);
    const uploadedDocuments = Object.keys(uploadedFiles);
    const missingDocuments = requiredDocuments.filter(doc => !uploadedDocuments.includes(doc));

    if (missingDocuments.length > 0) {
      toast.error(`Please upload all required documents: ${missingDocuments.join(', ')}`);
      return;
    }

    // Submit form
    console.log('Form submitted:', data);
    setShowSuccess(true);
  };

  const nextStep = () => {
    if (isValid) {
      setStep(prev => Math.min(prev + 1, 4));
    } else {
      toast.error('Please fill in all required fields correctly');
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const renderFileUpload = (documentType: string, title: string) => {
    const file = uploadedFiles[documentType];

    if (file) {
      return (
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">{file.name}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeFile(documentType)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {file.status === 'uploading' && (
            <div className="space-y-2">
              <Progress value={file.progress} className="h-2" />
              <div className="flex items-center text-sm text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading... {file.progress}%
              </div>
            </div>
          )}
          {file.status === 'completed' && (
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Upload complete
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
      >
        <input {...getInputProps()} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-sm text-muted-foreground mb-1">
          Drag & drop your {title} here, or click to select
        </p>
        <p className="text-xs text-muted-foreground">
          PDF, DOC, DOCX, JPG, JPEG, PNG (max 5MB)
        </p>
      </div>
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden turkish-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 turkish-title"
          >
            Your Dream Education <span className="text-red-500">Made Easy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Let us handle everything while you focus on your future
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              Trusted by 5000+ Students
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Clock className="mr-2 h-4 w-4" />
              Save 100+ Hours
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <DollarSign className="mr-2 h-4 w-4" />
              Best Value Guarantee
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <Progress value={(step / 4) * 100} className="h-2" />
              <div className="mt-4 grid grid-cols-4 gap-4">
                {steps.map((s, index) => (
                  <div 
                    key={index}
                    className={`text-center ${step > index ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    <div className="text-sm font-medium">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold">Personal Information</h2>
                        <p className="text-muted-foreground">Basic details to get started</p>
                      </div>
                      <Button variant="outline" onClick={() => setShowSupport(true)}>
                        <Headphones className="mr-2 h-4 w-4" />
                        Need Help?
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input
                          {...register('firstName', { required: true })}
                          placeholder="Your first name"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-500">First name is required</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input
                          {...register('lastName', { required: true })}
                          placeholder="Your last name"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-500">Last name is required</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                          })}
                          placeholder="Your email address"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">Valid email is required</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input
                          {...register('phone', { required: true })}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500">Phone number is required</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Nationality</Label>
                        <Input
                          {...register('nationality', { required: true })}
                          placeholder="Your nationality"
                        />
                        {errors.nationality && (
                          <p className="text-sm text-red-500">Nationality is required</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select
                          onValueChange={value => setValue('gender', value)}
                          value={watch('gender')}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.gender && (
                          <p className="text-sm text-red-500">Gender is required</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Academic Preferences */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold">Academic Preferences</h2>
                        <p className="text-muted-foreground">Choose your ideal program</p>
                      </div>
                      <Button variant="outline" onClick={() => setShowSupport(true)}>
                        <Headphones className="mr-2 h-4 w-4" />
                        Need Guidance?
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Preferred University</Label>
                        <Select
                          onValueChange={value => setValue('university', value)}
                          value={watch('university')}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select university" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="istanbul-technical">Istanbul Technical University</SelectItem>
                            <SelectItem value="bogazici">Boğaziçi University</SelectItem>
                            <SelectItem value="metu">Middle East Technical University</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground mt-1">
                          Don't worry if unsure - our experts will help you choose the best fit
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label>Program Level</Label>
                        <Select
                          onValueChange={value => setValue('educationLevel', value)}
                          value={watch('educationLevel')}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Field of Study</Label>
                        <Select
                          onValueChange={value => setValue('program', value)}
                          value={watch('program')}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="business">Business Administration</SelectItem>
                            <SelectItem value="science">Natural Sciences</SelectItem>
                            <SelectItem value="arts">Arts & Humanities</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>English Proficiency</Label>
                        <Select
                          onValueChange={value => setValue('englishLevel', value)}
                          value={watch('englishLevel')}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="native">Native</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground mt-1">
                          We offer language preparation courses if needed
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Documents */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold">Required Documents</h2>
                        <p className="text-muted-foreground">
                          We'll help with translation and certification
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setShowSupport(true)}>
                        <Headphones className="mr-2 h-4 w-4" />
                        Document Help
                      </Button>
                    </div>
                    <div className="space-y-6">
                      {documents.map((doc, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-start gap-4">
                            <doc.icon className="h-6 w-6 text-primary mt-1" />
                            <div className="flex-1">
                              <h3 className="font-medium mb-1">{doc.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                              <p className="text-xs text-primary mb-4">{doc.note}</p>
                              {renderFileUpload(doc.type, doc.title)}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Motivation */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold">Motivation</h2>
                        <p className="text-muted-foreground">
                          Tell us about your goals
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setShowSupport(true)}>
                        <Headphones className="mr-2 h-4 w-4" />
                        Writing Tips
                      </Button>
                    </div>
                    <Card className="p-4 bg-primary/5 mb-6">
                      <div className="flex gap-4">
                        <AlertCircle className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium mb-1">Pro Tip</p>
                          <p className="text-sm text-muted-foreground">
                            Our experts will help refine your statement to maximize your chances of acceptance.
                            Focus on your genuine interests and goals.
                          </p>
                        </div>
                      </div>
                    </Card>
                    <div className="space-y-4">
                      <Label>Why do you want to study in Türkiye?</Label>
                      <Textarea
                        {...register('motivation', { required: true, minLength: 100 })}
                        placeholder="Share your motivation and goals..."
                        rows={6}
                      />
                      {errors.motivation && (
                        <p className="text-sm text-red-500">
                          Please write at least 100 characters about your motivation
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous Step
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button type="button" className="ml-auto" onClick={nextStep}>
                      Next Step
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto gradient-bg">
                      Submit Application
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Application Submitted Successfully!</DialogTitle>
            <DialogDescription>
              Congratulations on taking the first step! Here's what happens next:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Application Review</h4>
                <p className="text-sm text-muted-foreground">
                  Our experts will review your application within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">Personal Consultation</h4>
                <p className="text-sm text-muted-foreground">
                  We'll schedule a call to discuss your options and next steps
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <FileCheck className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">Document Preparation</h4>
                <p className="text-sm text-muted-foreground">
                  We'll begin preparing your documents for submission
                </p>
              </div>
            </div>
          </div>
          <Button onClick={() => setShowSuccess(false)} className="w-full mt-4">
            Got it, thanks!
          </Button>
        </DialogContent>
      </Dialog>

      {/* Support Dialog */}
      <Dialog open={showSupport} onOpenChange={setShowSupport}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Need Assistance?</DialogTitle>
            <DialogDescription>
              Our education consultants are here to help you 24/7
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Card className="p-4">
              <div className="flex items-start gap-4">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium mb-1">Live Chat</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get instant answers to your questions
                  </p>
                  <Button size="sm" className="w-full">
                    Start Chat
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium mb-1">Schedule a Call</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Book a personal consultation
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </DialogContent> </Dialog>

      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="fixed bottom-8 right-8 shadow-lg gradient-bg"
        onClick={() => window.open('https://wa.me/901234567890', '_blank')}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Chat on WhatsApp
      </Button>
    </main>
  );
}

const steps = [
  { title: 'Personal Info', icon: User },
  { title: 'Academic', icon: GraduationCap },
  { title: 'Documents', icon: FileCheck },
  { title: 'Motivation', icon: Heart }
];

const documents = [
  {
    title: 'Passport',
    type: 'passport',
    description: 'A clear scan of your valid passport (photo page)',
    note: "We'll help ensure your passport meets all requirements",
    icon: Flag
  },
  {
    title: 'Academic Records',
    type: 'academic',
    description: 'Official transcripts and diplomas from your previous education',
    note: "We provide translation and certification services",
    icon: GraduationCap
  },
  {
    title: 'English Proficiency',
    type: 'english',
    description: 'TOEFL, IELTS, or equivalent English language certification',
    note: "Don't have one? We can help you prepare and register for tests",
    icon: Globe2
  },
  {
    title: 'CV/Resume',
    type: 'cv',
    description: 'Your current curriculum vitae or resume',
    note: "Our experts will help optimize your CV for maximum impact",
    icon: FileCheck
  },
  {
    title: 'Recommendation Letters',
    type: 'recommendations',
    description: 'At least two letters of recommendation from academic references',
    note: "We provide templates and guidance for obtaining strong recommendations",
    icon: Mail
  }
];