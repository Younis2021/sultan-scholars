'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { services } from './data';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Comprehensive Support Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From university selection to settling into your new life, we provide end-to-end support for your educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 z-10">
                  <service.icon className="h-12 w-12 text-primary group-hover:text-white transition-colors duration-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium group-hover:text-white transition-colors duration-300">What we offer:</h4>
                    <ul className="space-y-2 group-hover:text-white/90 transition-colors duration-300">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <ChevronRight className="h-4 w-4 mr-2 text-primary group-hover:text-white transition-colors duration-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags && service.tags.map((tag, tIndex) => (
                      <Badge 
                        key={tIndex} 
                        variant="secondary"
                        className="group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 gradient-bg">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which service you need? Schedule a free consultation with our education experts to discuss your goals.
          </p>
          <Button size="lg" className="gradient-bg">
            Book Free Consultation
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}