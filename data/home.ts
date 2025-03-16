import {
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  FileCheck,
  Globe2,
  GraduationCap,
  Headphones,
  Heart,
  HomeIcon,
  Lightbulb,
  MessageCircle,
  Plane,
  Rocket,
  Shield,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export const achievements = [
  {
    icon: Users,
    value: 5000,
    label: "Students Placed",
  },
  {
    icon: Building2,
    value: 50,
    label: "Partner Universities",
  },
  {
    icon: Trophy,
    value: 98,
    label: "Success Rate",
  },
  {
    icon: Globe2,
    value: 120,
    label: "Countries",
  },
];

export const studyDestinations = [
  {
    country: "Türkiye",
    universities: 50,
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
    features: [
      { icon: Building2, text: "Top 500 Universities" },
      { icon: DollarSign, text: "Affordable Education" },
      { icon: Heart, text: "Rich Culture & History" },
      { icon: Briefcase, text: "Work Opportunities" },
    ],
  },
  {
    country: "United Kingdom",
    universities: 130,
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/photo-1513635269975-59663e0ac1ad-min-compressed.jpg",
    features: [
      { icon: Trophy, text: "World-Class Education" },
      { icon: Clock, text: "1-Year Masters" },
      { icon: Globe2, text: "Global Recognition" },
      { icon: Briefcase, text: "Career Growth" },
    ],
  },
  {
    country: "United States",
    universities: 200,
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/photo-1513635269975-59663e0ac1ad-min-compressed.jpg",
    features: [
      { icon: Building2, text: "Top Universities" },
      { icon: Users, text: "Diverse Community" },
      { icon: Lightbulb, text: "Research Excellence" },
      { icon: Rocket, text: "Innovation Hub" },
    ],
  },
  {
    country: "Canada",
    universities: 80,
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/photo-1513635269975-59663e0ac1ad-min-compressed.jpg",
    features: [
      { icon: Globe2, text: "Multicultural" },
      { icon: Shield, text: "Safe Environment" },
      { icon: Briefcase, text: "Post-Study Work" },
      { icon: Heart, text: "Quality of Life" },
    ],
  },
];

export const services = [
  {
    title: "University Admission",
    description:
      "Expert guidance for securing admission to top universities worldwide",
    icon: GraduationCap,
    features: [
      "University selection guidance",
      "Application assistance",
      "Document preparation",
      "Interview preparation",
    ],
  },
  {
    title: "Visa Support",
    description: "Comprehensive visa application assistance and documentation",
    icon: FileCheck,
    features: [
      "Document verification",
      "Application review",
      "Interview preparation",
      "Travel guidance",
    ],
  },
  {
    title: "Accommodation",
    description: "Find the perfect student housing that suits your needs",
    icon: HomeIcon,
    features: [
      "University housing",
      "Private accommodation",
      "Location guidance",
      "Safety assessment",
    ],
  },
  {
    title: "Test Preparation",
    description: "Expert coaching for IELTS, TOEFL, and other tests",
    icon: BookOpen,
    features: [
      "Personalized coaching",
      "Practice materials",
      "Mock tests",
      "Score improvement",
    ],
  },
  {
    title: "Career Support",
    description: "Comprehensive career guidance and placement assistance",
    icon: Briefcase,
    features: [
      "CV preparation",
      "Interview skills",
      "Job search support",
      "Industry connections",
    ],
  },
  {
    title: "Financial Guidance",
    description: "Expert advice on scholarships and financial planning",
    icon: DollarSign,
    features: [
      "Scholarship search",
      "Application support",
      "Budget planning",
      "Financial advice",
    ],
  },
];

export const advantages = [
  {
    title: "Expert Guidance",
    description:
      "Our experienced counselors provide personalized support throughout your journey",
    icon: Star,
  },
  {
    title: "Global Network",
    description: "Strong partnerships with top universities worldwide",
    icon: Globe2,
  },
  {
    title: "Success Rate",
    description: "98% success rate in university placements",
    icon: Trophy,
  },
  {
    title: "Visa Success",
    description: "High visa success rate with expert guidance",
    icon: FileCheck,
  },
  {
    title: "Affordable Service",
    description: "Competitive fees and flexible payment options",
    icon: DollarSign,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your needs",
    icon: Headphones,
  },
];

export const process = [
  {
    title: "Free Consultation",
    description:
      "Discuss your goals and explore available options with our experts",
    icon: MessageCircle,
  },
  {
    title: "University Selection",
    description:
      "Choose from our partner universities based on your preferences",
    icon: Building2,
  },
  {
    title: "Application Process",
    description: "Complete assistance with documentation and submission",
    icon: FileCheck,
  },
  {
    title: "Visa & Travel",
    description: "Support with visa application and travel arrangements",
    icon: Plane,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    program: "Computer Engineering",
    university: "Istanbul Technical University",
    quote:
      "Sultan Scholars made my dream of studying in Türkiye a reality. Their support throughout the process was invaluable.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
  },
  {
    name: "Mohammed Al-Rahman",
    program: "Business Administration",
    university: "Boğaziçi University",
    quote:
      "The personalized guidance and attention to detail made the application process smooth and stress-free.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
  },
  {
    name: "Elena Petrova",
    program: "Architecture",
    university: "Middle East Technical University",
    quote:
      "From university selection to visa application, they supported me every step of the way. Highly recommended!",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
  },
];

export const newsAndResources = [
  {
    title: "2024 Scholarship Opportunities in Türkiye",
    excerpt:
      "Discover full scholarship opportunities at top Turkish universities for international students.",
    category: "Scholarships",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_3.jpg",
  },
  {
    title: "Student Life in Istanbul: A Complete Guide",
    excerpt:
      "Everything you need to know about living and studying in Istanbul as an international student.",
    category: "Student Life",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
  },
  {
    title: "Top Programs for International Students",
    excerpt:
      "Explore the most popular and in-demand programs for international students in 2024.",
    category: "Education",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_1.jpg",
  },
];
