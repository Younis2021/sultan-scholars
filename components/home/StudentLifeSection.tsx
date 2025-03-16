'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart, Coffee, Users, MapPin } from 'lucide-react';
import { activityImages } from '@/data/images';

export default function StudentLifeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Student Life</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Life in Türkiye</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience a vibrant student life in one of the world's most culturally rich countries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
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
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full hover-bounce">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Student Support Services</h3>
                <p className="text-muted-foreground mb-6">
                  We provide comprehensive support to ensure you have the best possible experience during your stay in Türkiye.
                </p>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <service.icon className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={activityImages.campusActivities}
                  alt="Student Life"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-500" />
                    <div>
                      <div className="font-bold">Student Satisfaction</div>
                      <div className="text-sm text-muted-foreground">95% Happy Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Campus Activities",
    description: "Join over 50 student clubs and organizations covering interests from robotics to photography, music to debate.",
    image: activityImages.campusActivities,
    tags: ["Student Clubs", "Events", "Workshops"]
  },
  {
    title: "Cultural Experience",
    description: "Immerse yourself in Turkish culture through festivals, events, and daily interactions with local students.",
    image: activityImages.sports,
    tags: ["Cultural Events", "Local Cuisine", "Traditions"]
  },
  {
    title: "City Life",
    description: "Experience the vibrant life in Turkish cities, from modern shopping centers to historic neighborhoods.",
    image: activityImages.cityExploration,
    tags: ["Urban Living", "Entertainment", "Shopping"]
  }
];

const services = [
  {
    title: "Accommodation Support",
    description: "Help finding and securing comfortable student housing",
    icon: Heart
  },
  {
    title: "Social Integration",
    description: "Regular events and activities to help you make friends",
    icon: Users
  },
  {
    title: "City Orientation",
    description: "Guided tours and information about your new city",
    icon: MapPin
  },
  {
    title: "Cultural Activities",
    description: "Organized events to experience Turkish culture",
    icon: Coffee
  }
];