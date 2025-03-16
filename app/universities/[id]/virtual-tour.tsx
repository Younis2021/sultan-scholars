'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Play, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { virtualTourStops } from './gallery-data';

export default function VirtualTour() {
  const [selectedStop, setSelectedStop] = useState<typeof virtualTourStops[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStop = () => {
    setCurrentIndex((prev) => (prev + 1) % virtualTourStops.length);
  };

  const prevStop = () => {
    setCurrentIndex((prev) => (prev - 1 + virtualTourStops.length) % virtualTourStops.length);
  };

  return (
    <div className="relative py-12">
      <div className="absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold mb-4">Virtual Campus Tour</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our campus from anywhere in the world. Take a virtual tour and explore our facilities.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={prevStop}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={nextStop}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="max-w-4xl mx-auto px-12"
          >
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={virtualTourStops[currentIndex].thumbnail}
                  alt={virtualTourStops[currentIndex].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16"
                    onClick={() => setSelectedStop(virtualTourStops[currentIndex])}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{virtualTourStops[currentIndex].title}</h3>
                <p className="text-muted-foreground">{virtualTourStops[currentIndex].description}</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {virtualTourStops.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedStop} onOpenChange={() => setSelectedStop(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedStop?.title}</DialogTitle>
            <DialogDescription>{selectedStop?.description}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video">
            {selectedStop && (
              <iframe
                width="100%"
                height="100%"
                src={selectedStop.videoUrl}
                title="Virtual Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}