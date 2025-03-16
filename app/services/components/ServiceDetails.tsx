'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle2, Star } from 'lucide-react';
import { serviceDetails } from './data';

const testimonialCard = (testimonial: any) => (
  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 mt-6">
    <div className="flex items-start gap-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="italic text-sm mb-2">"{testimonial.quote}"</p>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.university}</p>
      </div>
    </div>
  </div>
);

const interactiveFeatures = (service: any) => (
  <div className="mt-6 space-y-4">
    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300">
      <h4 className="font-semibold mb-2">Interactive Tools</h4>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full">
          Cost Calculator
        </Button>
        <Button variant="outline" className="w-full">
          Eligibility Check
        </Button>
      </div>
    </div>
  </div>
);

export default function ServiceDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Our Expertise</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Comprehensive Support Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of specialized services designed to support your educational journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <service.icon className="h-12 w-12 text-primary" />
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg mb-6">{service.description}</p>
                    <div className="space-y-4 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, tIndex) => (
                        <Badge key={tIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Button className="gradient-bg">
                      Learn More About {service.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    {service.testimonial && testimonialCard(service.testimonial)}
                    {interactiveFeatures(service)}
                  </div>
                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Why Choose Our {service.title}</h4>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-start gap-2">
                            <Star className="h-5 w-5 text-yellow-500 mt-1" />
                            <p className="text-sm">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {service.stats && (
                      <div className="grid grid-cols-2 gap-4">
                        {service.stats.map((stat, sIndex) => (
                          <Card key={sIndex} className="p-4 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}