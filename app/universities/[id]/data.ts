import { Building2, Globe2, Trophy, Users } from "lucide-react";

export const tourStops = [
  {
    id: 1,
    title: "Main Campus Entrance",
    description: "Experience the grand entrance of our historic main campus",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
  },
  {
    id: 2,
    title: "Engineering Complex",
    description:
      "Tour our state-of-the-art engineering facilities and laboratories",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_4.jpg",
  },
  {
    id: 3,
    title: "Central Library",
    description: "Explore our extensive library and study spaces",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_2.jpg",
  },
  {
    id: 4,
    title: "Student Center",
    description: "Visit the heart of student life and activities",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/success_stories_image_4.jpg",
  },
];

export const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    program: "Computer Engineering",
    rating: 5,
    date: "March 15, 2024",
    content:
      "The quality of education and research opportunities here are exceptional. The professors are highly knowledgeable and always willing to help. The international student community is very welcoming.",
    likes: 45,
    replies: 12,
    verified: true,
  },
  {
    id: 2,
    author: "Mohammed Al-Rahman",
    program: "Business Administration",
    rating: 4,
    date: "March 10, 2024",
    content:
      "Great university with excellent facilities. The career support services are particularly helpful. Only downside is the crowded cafeteria during peak hours.",
    likes: 32,
    replies: 8,
    verified: true,
  },
  {
    id: 3,
    author: "Elena Petrova",
    program: "Architecture",
    rating: 5,
    date: "March 5, 2024",
    content:
      "The architecture program is world-class. The blend of traditional and modern approaches in teaching is unique. The studio facilities are outstanding.",
    likes: 56,
    replies: 15,
    verified: true,
  },
  {
    id: 4,
    author: "John Smith",
    program: "Mechanical Engineering",
    rating: 3,
    date: "February 28, 2024",
    content:
      "Good academic program but some facilities need updating. The research equipment in some labs is a bit outdated. However, the faculty is excellent.",
    likes: 18,
    replies: 6,
    verified: true,
  },
  {
    id: 5,
    author: "Yuki Tanaka",
    program: "International Relations",
    rating: 5,
    date: "February 20, 2024",
    content:
      "Amazing international atmosphere. The diversity of students and cultural exchange opportunities are incredible. The campus location is perfect for exploring the city.",
    likes: 41,
    replies: 9,
    verified: true,
  },
];

export const reviewStats = {
  averageRating: 4.2,
  totalReviews: 1250,
  ratingDistribution: [750, 300, 150, 35, 15],
};

export const universities = [
  {
    id: "istanbul-technical-university",
    name: "Istanbul Technical University",
    city: "Istanbul",
    established: 1773,
    ranking: "Top 500",
    tuitionRange: [3000, 8000],
    internationalStudents: 5000,
    coverImage:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/university_image_3.jpg",
    description:
      "Istanbul Technical University is one of Turkey's leading research universities, known for its excellence in engineering and architecture education.",
    highlights: [
      {
        icon: Trophy,
        title: "Research Excellence",
        description:
          "Leading research output in engineering and technology fields with numerous patents and publications.",
      },
      {
        icon: Globe2,
        title: "International Community",
        description:
          "Home to students from over 100 countries, creating a diverse and multicultural learning environment.",
      },
      {
        icon: Building2,
        title: "Modern Facilities",
        description:
          "State-of-the-art laboratories, research centers, and modern campus facilities.",
      },
      {
        icon: Users,
        title: "Alumni Network",
        description:
          "Strong alumni network with successful graduates in leading positions worldwide.",
      },
    ],
    programs: [
      {
        name: "Computer Engineering",
        duration: "4 years",
        degree: "Bachelor of Science",
        language: "English",
        description:
          "A comprehensive program focusing on software development, algorithms, and computer systems.",
        careers: ["Software Engineer", "Systems Analyst", "Data Scientist"],
        courses: [
          "Data Structures and Algorithms",
          "Operating Systems",
          "Database Management",
          "Software Engineering",
        ],
        requirements: {
          gpa: 3.0,
          language: "TOEFL 80+ or IELTS 6.5+",
          documents: [
            "High School Diploma",
            "Transcripts",
            "Language Proficiency",
            "Statement of Purpose",
          ],
        },
      },
      {
        name: "Civil Engineering",
        duration: "4 years",
        degree: "Bachelor of Science",
        language: "English",
        description:
          "Learn to design and construct infrastructure projects with cutting-edge technology.",
        careers: [
          "Structural Engineer",
          "Project Manager",
          "Construction Manager",
        ],
        courses: [
          "Structural Analysis",
          "Construction Management",
          "Geotechnical Engineering",
          "Transportation Engineering",
        ],
        requirements: {
          gpa: 3.0,
          language: "TOEFL 80+ or IELTS 6.5+",
          documents: [
            "High School Diploma",
            "Transcripts",
            "Language Proficiency",
            "Statement of Purpose",
          ],
        },
      },
      {
        name: "Architecture",
        duration: "4 years",
        degree: "Bachelor of Architecture",
        language: "English",
        description:
          "Blend creativity with technical expertise in architectural design and urban planning.",
        careers: ["Architect", "Urban Planner", "Interior Designer"],
        courses: [
          "Architectural Design",
          "Building Technology",
          "Urban Planning",
          "Sustainable Design",
        ],
        requirements: {
          gpa: 3.0,
          language: "TOEFL 80+ or IELTS 6.5+",
          documents: [
            "High School Diploma",
            "Transcripts",
            "Language Proficiency",
            "Portfolio",
          ],
        },
      },
      {
        name: "Industrial Engineering",
        duration: "4 years",
        degree: "Bachelor of Science",
        language: "English",
        description:
          "Optimize complex systems and processes in manufacturing and service industries.",
        careers: [
          "Industrial Engineer",
          "Operations Manager",
          "Quality Engineer",
        ],
        courses: [
          "Operations Research",
          "Quality Management",
          "Supply Chain Management",
          "Production Planning",
        ],
        requirements: {
          gpa: 3.0,
          language: "TOEFL 80+ or IELTS 6.5+",
          documents: [
            "High School Diploma",
            "Transcripts",
            "Language Proficiency",
            "Statement of Purpose",
          ],
        },
      },
    ],
    applicationDeadline: "May 31, 2024",
    academicCalendar: "Semester-based",
    events: [
      {
        date: "15 Apr",
        title: "Virtual Open Day",
        time: "10:00 AM - 2:00 PM",
        description:
          "Join us for a comprehensive virtual tour and information session about our programs.",
        link: "/events/virtual-open-day",
      },
      {
        date: "20 Apr",
        title: "Engineering Workshop",
        time: "2:00 PM - 5:00 PM",
        description:
          "Hands-on workshop showcasing our engineering facilities and research projects.",
        link: "/events/engineering-workshop",
      },
      {
        date: "25 Apr",
        title: "Campus Tour",
        time: "11:00 AM - 1:00 PM",
        description:
          "Experience our campus life with a guided tour of our facilities.",
        link: "/events/campus-tour",
      },
    ],
    facilities: [
      {
        name: "Research Labs",
        description:
          "State-of-the-art research facilities equipped with the latest technology",
        image:
          "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_4.jpg",
        features: ["Advanced Equipment", "24/7 Access", "Technical Support"],
      },
      {
        name: "Library",
        description:
          "Modern library with extensive digital and physical collections",
        image:
          "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_2.jpg",
        features: [
          "24/7 Study Areas",
          "Digital Resources",
          "Group Study Rooms",
        ],
      },
      {
        name: "Sports Complex",
        description: "Comprehensive sports facilities for various activities",
        image:
          "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_3.jpg",
        features: ["Indoor Pool", "Fitness Center", "Sports Courts"],
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        program: "Computer Engineering",
        year: "2023",
        quote:
          "The international exposure and quality of education here prepared me perfectly for my global career.",
        image:
          "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
        currentRole: "Software Engineer at Google",
      },
      {
        name: "Mohammed Al-Rahman",
        program: "Civil Engineering",
        year: "2022",
        quote:
          "The practical experience and industry connections helped me secure my dream job.",
        image:
          "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/success_stories_image_3.jpg",
        currentRole: "Project Manager at AECOM",
      },
      {
        name: "Elena Petrova",
        program: "Architecture",
        year: "2023",
        quote:
          "The blend of traditional and modern approaches in architecture education is unique.",
        image:
          "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
        currentRole: "Architect at Foster + Partners",
      },
    ],
    researchCenters: [
      {
        name: "Center for Advanced Computing",
        description: "Leading research in AI, big data, and cloud computing",
        projects: ["AI in Healthcare", "Smart Cities", "Cloud Security"],
        publications: 150,
      },
      {
        name: "Sustainable Technologies Lab",
        description:
          "Research focused on environmental sustainability and renewable energy",
        projects: ["Solar Energy", "Green Buildings", "Waste Management"],
        publications: 120,
      },
      {
        name: "Innovation Hub",
        description: "Collaborative space for industry-academia partnerships",
        projects: [
          "Industry 4.0",
          "IoT Applications",
          "Digital Transformation",
        ],
        publications: 100,
      },
    ],
    admissionStats: {
      acceptanceRate: "25%",
      averageGPA: 3.5,
      internationalStudentRatio: "20%",
      employmentRate: "95%",
      averageStartingSalary: "$45,000",
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full Tuition",
        criteria: "GPA 3.8+",
        deadline: "March 31, 2024",
      },
      {
        name: "International Student Grant",
        amount: "50% Tuition",
        criteria: "Outstanding Academic Achievement",
        deadline: "April 15, 2024",
      },
      {
        name: "Research Fellowship",
        amount: "$10,000/year",
        criteria: "Research Proposal",
        deadline: "May 1, 2024",
      },
    ],
    housingOptions: [
      {
        type: "University Dormitory",
        cost: "$300/month",
        features: ["Furnished Rooms", "Meal Plan", "Internet"],
        availability: "Limited",
      },
      {
        type: "Student Apartments",
        cost: "$500/month",
        features: ["Private Kitchen", "Study Area", "Gym Access"],
        availability: "Available",
      },
      {
        type: "Homestay",
        cost: "$400/month",
        features: [
          "Cultural Experience",
          "Meals Included",
          "Family Environment",
        ],
        availability: "Available",
      },
    ],
    studentServices: [
      {
        name: "Career Center",
        services: ["Resume Workshops", "Job Fairs", "Interview Preparation"],
      },
      {
        name: "International Office",
        services: ["Visa Support", "Cultural Activities", "Language Exchange"],
      },
      {
        name: "Health Services",
        services: ["Medical Care", "Counseling", "Health Insurance"],
      },
    ],
    virtualTourStops: [
      {
        location: "Main Campus",
        description: "Experience our historic main campus buildings",
        videoUrl: "https://www.youtube.com/embed/example1",
      },
      {
        location: "Engineering Complex",
        description: "Tour our state-of-the-art engineering facilities",
        videoUrl: "https://www.youtube.com/embed/example2",
      },
      {
        location: "Student Center",
        description: "See where students gather and socialize",
        videoUrl: "https://www.youtube.com/embed/example3",
      },
    ],
  },
];
