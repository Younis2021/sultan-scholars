import {
  BookOpen,
  Briefcase,
  DollarSign,
  FileCheck,
  GraduationCap,
  Heart,
  Home,
  Plane,
} from "lucide-react";

// Services Grid Data
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
    icon: Home,
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

// Service Details Data
export const serviceDetails = [
  {
    title: "University Admission Support",
    subtitle: "Your Gateway to Top Turkish Universities",
    description:
      "Our comprehensive university admission service helps you navigate the entire application process, from selecting the right university to securing your acceptance letter.",
    icon: GraduationCap,
    features: [
      "Personalized university selection based on your academic profile and career goals",
      "Complete application document preparation and review",
      "Personal statement and essay writing assistance",
      "Interview preparation and mock interviews",
      "Application tracking and follow-up",
    ],
    benefits: [
      "Access to our network of 50+ partner universities",
      "Higher acceptance rate with our proven application strategy",
      "Direct communication with university admissions offices",
      "Expert guidance from experienced counselors",
    ],
    tags: [
      "University Selection",
      "Application Support",
      "Document Preparation",
      "Interview Prep",
    ],
    stats: [
      { value: "98%", label: "Acceptance Rate" },
      { value: "50+", label: "Partner Universities" },
      { value: "24h", label: "Response Time" },
      { value: "5000+", label: "Students Placed" },
    ],
  },
  {
    title: "Visa & Immigration Services",
    subtitle: "Streamlined Student Visa Processing",
    description:
      "Our visa specialists ensure a smooth and successful student visa application process with comprehensive documentation support and guidance.",
    icon: Plane,
    features: [
      "Complete visa application preparation and submission",
      "Document translation and authentication",
      "Visa interview preparation",
      "Travel and arrival assistance",
      "Residence permit support",
    ],
    benefits: [
      "High visa approval rate with our expert guidance",
      "Step-by-step assistance throughout the process",
      "Regular application status updates",
      "Emergency support services",
    ],
    tags: [
      "Student Visa",
      "Documentation",
      "Immigration Support",
      "Travel Assistance",
    ],
    stats: [
      { value: "95%", label: "Visa Success Rate" },
      { value: "7-10", label: "Days Processing" },
      { value: "24/7", label: "Support Available" },
      { value: "1000+", label: "Visas Processed" },
    ],
  },
  {
    title: "Student Life Support",
    subtitle: "Comprehensive Settlement Services",
    description:
      "We ensure a smooth transition to life in Türkiye with our complete student life support services, from accommodation to cultural integration.",
    icon: Heart,
    features: [
      "Accommodation arrangement and support",
      "Airport pickup and welcome service",
      "Bank account setup assistance",
      "Local transportation guidance",
      "Cultural orientation programs",
    ],
    benefits: [
      "Safe and comfortable accommodation options",
      "Smooth transition to Turkish life",
      "Local support network",
      "Cultural integration activities",
    ],
    tags: ["Accommodation", "Settlement", "Cultural Support", "Student Life"],
    stats: [
      { value: "1000+", label: "Students Supported" },
      { value: "48h", label: "Settlement Time" },
      { value: "100%", label: "Safety Record" },
      { value: "24/7", label: "Support Available" },
    ],
  },
];

// Timeline Data
export const timeline = [
  {
    title: "Initial Consultation",
    description:
      "We understand your goals and create a personalized plan for your success.",
  },
  {
    title: "University Selection",
    description:
      "Choose from our partner universities based on your academic interests and career goals.",
  },
  {
    title: "Application Process",
    description:
      "We handle the complete application process, ensuring all documents are perfect.",
  },
  {
    title: "Visa Support",
    description:
      "Get expert assistance with your student visa application and documentation.",
  },
  {
    title: "Pre-Departure Prep",
    description:
      "Comprehensive orientation about life in Türkiye and what to expect.",
  },
  {
    title: "Arrival & Settlement",
    description:
      "Warm welcome at the airport and support in settling into your new home.",
  },
];

// Pricing Plans Data
export const pricingPlans = [
  {
    name: "Essential",
    description: "Perfect for basic admission support",
    price: "999",
    features: [
      "University selection guidance",
      "Basic application support",
      "Document review",
      "Email support",
      "Basic visa guidance",
    ],
    featured: false,
  },
  {
    name: "Premium",
    description: "Most popular comprehensive package",
    price: "1,999",
    features: [
      "All Essential features",
      "Priority application processing",
      "Personal statement assistance",
      "Interview preparation",
      "Accommodation support",
      "24/7 WhatsApp support",
      "Airport pickup service",
    ],
    featured: true,
  },
  {
    name: "VIP",
    description: "Full-service premium support",
    price: "2,999",
    features: [
      "All Premium features",
      "Dedicated counselor",
      "Guaranteed university placement",
      "Full visa processing",
      "Translation services",
      "Cultural orientation program",
      "Bank account setup",
      "Local phone number",
    ],
    featured: false,
  },
];

// Success Stories Data
export const successStories = [
  {
    name: "Sarah Johnson",
    university: "Istanbul Technical University",
    quote:
      "Sultan Scholars made my dream of studying in Türkiye a reality. Their support was invaluable!",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    currentRole: "Now working as Software Engineer at Google",
  },
  {
    name: "Mohammed Al-Rahman",
    university: "Boğaziçi University",
    quote:
      "From application to graduation, they supported me every step of the way. Highly recommended!",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    currentRole: "Now working as Business Analyst at McKinsey",
  },
  {
    name: "Elena Petrova",
    university: "Middle East Technical University",
    quote:
      "The scholarship guidance was exceptional. I'm now living my dream in Türkiye!",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    currentRole: "Now working as Architect at Foster + Partners",
  },
];

// FAQ Data
export const faqs = [
  {
    question: "What are your service fees and payment options?",
    answer:
      "Our service fees vary depending on the package you choose, ranging from $999 to $2,999. We offer flexible payment plans and accept major credit cards, bank transfers, and PayPal. Contact us for detailed pricing based on your specific needs.",
  },
  {
    question: "How long does the university application process take?",
    answer:
      "The typical university application process takes 4-6 weeks from document preparation to submission. However, this can vary depending on the university and program. We recommend starting the process at least 3-4 months before your intended start date.",
  },
  {
    question: "Do you guarantee university admission?",
    answer:
      "While we can't guarantee admission to specific universities, our VIP package includes a guaranteed placement at one of our partner institutions. Our 98% acceptance rate demonstrates our expertise in matching students with suitable programs.",
  },
  {
    question: "What support do you provide after arrival in Türkiye?",
    answer:
      "We offer comprehensive post-arrival support including airport pickup, accommodation assistance, bank account setup, local phone number arrangement, and cultural orientation programs. Our team remains available for support throughout your stay.",
  },
  {
    question: "Can you help with scholarship applications?",
    answer:
      "Yes, we provide complete scholarship application support. This includes identifying suitable scholarships, preparing applications, and ensuring all requirements are met. Our students have received over $2 million in scholarships collectively.",
  },
  {
    question: "What is your visa success rate?",
    answer:
      "We maintain a 95% visa success rate thanks to our experienced visa specialists and thorough application preparation process. We handle all aspects of visa application, from document preparation to interview coaching.",
  },
];
