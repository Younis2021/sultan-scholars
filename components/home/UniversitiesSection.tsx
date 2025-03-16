'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, MapPin, Star, Users, Globe2, DollarSign } from 'lucide-react';
import { universityImages } from '@/data/images';

export default function UniversitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Top Universities</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title animate-heading">
            World-Class Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-up">
            Choose from over 200 prestigious universities offering international programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group animate-card"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="secondary" className="bg-white/90">
                      {university.ranking}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/90">
                      {university.established}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {university.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {university.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {university.students}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Globe2 className="w-4 h-4 mr-2" />
                      {university.international}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {university.tuition}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < university.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({university.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {university.programs.map((program, pIndex) => (
                      <Badge 
                        key={pIndex} 
                        variant="outline"
                        className="group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                      >
                        {program}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full gradient-bg opacity-90 group-hover:opacity-100">
                    Explore University
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="hover:scale-105 transition-transform duration-300"
          >
            View All Universities
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const universities = [
  {
    name: "Istanbul Technical University",
    location: "Istanbul",
    ranking: "Top 500",
    established: "Est. 1773",
    rating: 5,
    reviews: "1,245",
    students: "32,000+",
    international: "15% Int'l",
    tuition: "$3K-8K/yr",
    image: universityImages.istanbulTechnical,
    programs: ["Engineering", "Architecture", "Science"]
  },
  {
    name: "Boğaziçi University",
    location: "Istanbul",
    ranking: "Top 600",
    established: "Est. 1863",
    rating: 5,
    reviews: "987",
    students: "15,000+",
    international: "20% Int'l",
    tuition: "$4K-9K/yr",
    image: universityImages.bogazici,
    programs: ["Business", "Economics", "Engineering"]
  },
  {
    name: "Middle East Technical University",
    location: "Ankara",
    ranking: "Top 500",
    established: "Est. 1956",
    rating: 5,
    reviews: "1,102",
    students: "28,000+",
    international: "18% Int'l",
    tuition: "$3K-7K/yr",
    image: universityImages.metu,
    programs: ["Engineering", "Social Sciences", "Education"]
  }
];