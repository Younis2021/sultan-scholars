'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { galleryCategories, galleryImages } from './gallery-data';

export default function UniversityGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = galleryImages.filter(image => 
    (activeCategory === 'all' || image.category === activeCategory) &&
    (image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     image.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold mb-4">Campus Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our campus through our extensive photo gallery showcasing facilities, student life, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search gallery..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={activeCategory === 'all' ? "default" : "outline"}
                onClick={() => setActiveCategory('all')}
                className={activeCategory === 'all' ? "gradient-bg" : ""}
              >
                <Filter className="mr-2 h-4 w-4" />
                All
              </Button>
              {galleryCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={activeCategory === category.id ? "gradient-bg" : ""}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Gallery>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <Item
                    original={image.image}
                    thumbnail={image.image}
                    width={image.width}
                    height={image.height}
                  >
                    {({ ref, open }) => (
                      <div
                        className="relative cursor-pointer"
                        ref={ref as React.RefObject<HTMLDivElement>}
                        onClick={open}
                      >
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}
                  </Item>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{image.title}</h3>
                      <Badge variant="secondary">
                        {galleryCategories.find(cat => cat.id === image.category)?.name}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Gallery>
      </div>
    </div>
  );
}