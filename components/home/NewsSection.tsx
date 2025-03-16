'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { newsImages } from '@/data/images';

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Latest Updates</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">News & Resources</h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest information about studying in Türkiye
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge className="mb-4">{item.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read More
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

const newsItems = [
  {
    title: "2024 Scholarship Opportunities in Türkiye",
    excerpt: "Discover full scholarship opportunities at top Turkish universities for international students.",
    category: "Scholarships",
    image: newsImages.scholarships
  },
  {
    title: "Student Life in Istanbul: A Complete Guide",
    excerpt: "Everything you need to know about living and studying in Istanbul as an international student.",
    category: "Student Life",
    image: newsImages.studentLife
  },
  {
    title: "Top Programs for International Students",
    excerpt: "Explore the most popular and in-demand programs for international students in 2024.",
    category: "Education",
    image: newsImages.programs
  }
];