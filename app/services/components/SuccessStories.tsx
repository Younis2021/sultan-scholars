'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { successStories } from './data';

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Success Stories</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Success Stories</h2>
          <p className="text-xl text-muted-foreground">See how we've helped students achieve their dreams</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{story.name}</h3>
                      <p className="text-muted-foreground">{story.university}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{story.quote}</p>
                  <div className="text-sm text-primary">
                    {story.currentRole}
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