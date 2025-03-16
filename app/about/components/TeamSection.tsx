"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileCheck, GraduationCap, Heart } from "lucide-react";

// Move data outside of component
const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Education Director",
    description:
      "15+ years experience in international education and student counseling",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    specialties: ["University Admissions", "Career Guidance"],
  },
  {
    name: "Michael Chen",
    role: "Senior Counselor",
    description: "Expert in scholarship applications and academic planning",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    specialties: ["Scholarships", "Academic Planning"],
  },
  {
    name: "Ayşe Yılmaz",
    role: "Visa Specialist",
    description: "Specialized in student visa applications and documentation",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    specialties: ["Visa Support", "Documentation"],
  },
  {
    name: "David Wilson",
    role: "Student Success Manager",
    description: "Dedicated to ensuring smooth transition and student support",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    specialties: ["Student Support", "Cultural Integration"],
  },
];

const expertiseAreas = [
  {
    title: "University Admissions",
    description:
      "Expert guidance for university selection and application process",
    icon: GraduationCap,
    skills: [
      "Application Strategy",
      "Document Preparation",
      "Interview Coaching",
    ],
  },
  {
    title: "Visa Processing",
    description: "Comprehensive support for student visa applications",
    icon: FileCheck,
    skills: ["Documentation", "Embassy Interview", "Travel Planning"],
  },
  {
    title: "Student Support",
    description: "Complete assistance for comfortable student life",
    icon: Heart,
    skills: ["Accommodation", "Cultural Integration", "Academic Support"],
  },
];

// Create ExpertiseAreas as a regular function component
function ExpertiseAreas() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Our Areas of Expertise
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <area.icon className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-semibold mb-2">{area.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, sIndex) => (
                  <Badge key={sIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Main TeamSection component
export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Team</Badge>
          <h2 className="text-4xl font-bold mb-6 turkish-title">
            Meet Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of education specialists brings years of experience
            and passion to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>
                  <div className="flex gap-2">
                    {member.specialties.map((specialty, sIndex) => (
                      <Badge key={sIndex} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <ExpertiseAreas />
      </div>
    </section>
  );
}
