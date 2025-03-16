import {
  BookOpen,
  Building2,
  Coffee,
  Dumbbell,
  Globe2,
  Microscope,
  Users,
} from "lucide-react";

export const galleryCategories = [
  { id: "campus", name: "Campus", icon: Building2 },
  { id: "academic", name: "Academic", icon: BookOpen },
  { id: "student-life", name: "Student Life", icon: Users },
  { id: "sports", name: "Sports", icon: Dumbbell },
  { id: "research", name: "Research", icon: Microscope },
  { id: "events", name: "Events", icon: Coffee },
  { id: "international", name: "International", icon: Globe2 },
];

export const galleryImages = [
  {
    id: 1,
    category: "campus",
    title: "Main Campus Building",
    description: "The iconic main building of our university",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/university_image_3.jpg",
    width: 1366,
    height: 768,
  },
  {
    id: 2,
    category: "academic",
    title: "Engineering Labs",
    description: "State-of-the-art engineering laboratories",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_4.jpg",
    width: 1740,
    height: 960,
  },
  {
    id: 3,
    category: "student-life",
    title: "Student Center",
    description: "The heart of student activities",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_2.jpg",
    width: 1740,
    height: 960,
  },
  {
    id: 4,
    category: "sports",
    title: "Sports Complex",
    description: "Modern sports facilities for students",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_3.jpg",
    width: 1740,
    height: 960,
  },
  {
    id: 5,
    category: "research",
    title: "Research Center",
    description: "Cutting-edge research facilities",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    width: 1740,
    height: 960,
  },
  {
    id: 6,
    category: "events",
    title: "Graduation Ceremony",
    description: "Annual graduation celebrations",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_3.jpg",
    width: 1740,
    height: 960,
  },
  {
    id: 7,
    category: "international",
    title: "International Student Fair",
    description: "Cultural exchange events",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/success_stories_image_2.jpg",
    width: 1740,
    height: 960,
  },
  {
    id: 8,
    category: "campus",
    title: "Library",
    description: "Modern library facilities",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_2.jpg",
    width: 1740,
    height: 960,
  },
  {
    id: 9,
    category: "academic",
    title: "Lecture Hall",
    description: "Modern lecture facilities",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/success_stories_image_2.jpg",
    width: 1740,
    height: 960,
  },
];

export const virtualTourStops = [
  {
    id: 1,
    title: "Main Campus",
    description: "Take a virtual walk through our beautiful main campus",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/university_image_1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Libraries",
    description: "Explore our extensive library facilities",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/university_image_2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Student Center",
    description: "See where students gather, study, and socialize",
    thumbnail:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/campus_image_4.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
