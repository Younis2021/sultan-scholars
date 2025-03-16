'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { testimonials } from '@/data/home';
import { Star } from 'lucide-react';
import { peopleImages } from '@/data/images';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 turkish-title">Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            Hear from our students who achieved their academic dreams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={peopleImages[`student${index + 1}`]} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                    <p className="text-sm text-primary">{testimonial.university}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}