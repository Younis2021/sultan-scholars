import {
  Trophy,
  Globe2,
  Building2,
  Users,
} from 'lucide-react';

export const universities = [
  {
    id: 'istanbul-technical-university',
    name: 'Istanbul Technical University',
    city: 'Istanbul',
    established: 1773,
    ranking: 'Top 500',
    tuitionRange: [3000, 8000],
    internationalStudents: 5000,
    coverImage: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80',
    description: 'Istanbul Technical University is one of Turkey\'s leading research universities, known for its excellence in engineering and architecture education.',
    highlights: [
      {
        icon: Trophy,
        title: 'Research Excellence',
        description: 'Leading research output in engineering and technology fields with numerous patents and publications.'
      },
      {
        icon: Globe2,
        title: 'International Community',
        description: 'Home to students from over 100 countries, creating a diverse and multicultural learning environment.'
      },
      {
        icon: Building2,
        title: 'Modern Facilities',
        description: 'State-of-the-art laboratories, research centers, and modern campus facilities.'
      },
      {
        icon: Users,
        title: 'Alumni Network',
        description: 'Strong alumni network with successful graduates in leading positions worldwide.'
      }
    ],
    programs: [
      {
        name: 'Computer Engineering',
        duration: '4 years',
        degree: 'Bachelor of Science',
        language: 'English'
      },
      {
        name: 'Civil Engineering',
        duration: '4 years',
        degree: 'Bachelor of Science',
        language: 'English'
      },
      {
        name: 'Architecture',
        duration: '4 years',
        degree: 'Bachelor of Architecture',
        language: 'English'
      },
      {
        name: 'Industrial Engineering',
        duration: '4 years',
        degree: 'Bachelor of Science',
        language: 'English'
      }
    ],
    applicationDeadline: 'May 31, 2024',
    academicCalendar: 'Semester-based',
    events: [
      {
        date: '15 Apr',
        title: 'Virtual Open Day',
        time: '10:00 AM - 2:00 PM'
      },
      {
        date: '20 Apr',
        title: 'Engineering Workshop',
        time: '2:00 PM - 5:00 PM'
      },
      {
        date: '25 Apr',
        title: 'Campus Tour',
        time: '11:00 AM - 1:00 PM'
      }
    ]
  },
  {
    id: 'middle-east-technical-university',
    name: 'Middle East Technical University',
    city: 'Ankara',
    established: 1956,
    ranking: 'Top 600',
    tuitionRange: [2500, 7000],
    internationalStudents: 4000,
    coverImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    description: 'Middle East Technical University is a leading institution known for research excellence and innovation in engineering and social sciences.',
    highlights: [
      {
        icon: Trophy,
        title: 'Research Impact',
        description: 'Leading research institution with high impact publications and international collaborations.'
      },
      {
        icon: Globe2,
        title: 'Global Recognition',
        description: 'Internationally recognized degrees and strong global partnerships.'
      },
      {
        icon: Building2,
        title: 'Campus Excellence',
        description: 'Modern campus with state-of-the-art research facilities and laboratories.'
      },
      {
        icon: Users,
        title: 'Strong Network',
        description: 'Extensive alumni network in leading positions worldwide.'
      }
    ],
    programs: [
      {
        name: 'Electrical Engineering',
        duration: '4 years',
        degree: 'Bachelor of Science',
        language: 'English'
      },
      {
        name: 'Computer Science',
        duration: '4 years',
        degree: 'Bachelor of Science',
        language: 'English'
      },
      {
        name: 'Industrial Design',
        duration: '4 years',
        degree: 'Bachelor of Industrial Design',
        language: 'English'
      },
      {
        name: 'Business Administration',
        duration: '4 years',
        degree: 'Bachelor of Business Administration',
        language: 'English'
      }
    ],
    applicationDeadline: 'June 30, 2024',
    academicCalendar: 'Semester-based',
    events: [
      {
        date: '10 Apr',
        title: 'Campus Open Day',
        time: '9:00 AM - 3:00 PM'
      },
      {
        date: '18 Apr',
        title: 'Research Symposium',
        time: '1:00 PM - 5:00 PM'
      },
      {
        date: '22 Apr',
        title: 'International Student Orientation',
        time: '10:00 AM - 2:00 PM'
      }
    ]
  }
];