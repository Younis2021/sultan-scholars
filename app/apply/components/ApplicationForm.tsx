'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ChevronRight, FileCheck, GraduationCap, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

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

export default function ApplicationForm() {
  const [step, setStep] = useState(1);

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<FormData>({
    mode: 'onChange'
  });

  const nextStep = () => {
    if (isValid) {
      setStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  return (
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

      {/* Step 1: Personal Information */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
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
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <doc.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">{doc.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                <Badge variant="secondary">{doc.note}</Badge>
              </div>
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
    </div>
  );
}

const steps = [
  { title: 'Personal Info' },
  { title: 'Academic' },
  { title: 'Documents' },
  { title: 'Motivation' }
];

const documents = [
  {
    title: 'Passport',
    description: 'A clear scan of your valid passport (photo page)',
    note: "We'll help ensure your passport meets all requirements",
    icon: FileCheck
  },
  {
    title: 'Academic Records',
    description: 'Official transcripts and diplomas from your previous education',
    note: "We provide translation and certification services",
    icon: GraduationCap
  },
  {
    title: 'English Proficiency',
    description: 'TOEFL, IELTS, or equivalent English language certification',
    note: "Don't have one? We can help you prepare and register for tests",
    icon: Globe2
  }
];