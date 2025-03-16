'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { studyDestinations } from '@/data/home';
import { cityImages } from '@/data/images';

export default function StudyDestinationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 turkish-title">Popular Study Destinations</h2>
          <p className="text-xl text-muted-foreground">
            Explore top educational destinations with world-class universities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyDestinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={index === 0 ? cityImages.istanbul : 
                         index === 1 ? cityImages.ankara :
                         index === 2 ? cityImages.izmir :
                         cityImages.culturalEvent} 
                    alt={destination.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.country}</h3>
                    <p className="text-sm">{destination.universities}+ Universities</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {destination.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-muted-foreground">
                        <feature.icon className="w-4 h-4 mr-2 text-primary" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">
                    Explore Universities
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}