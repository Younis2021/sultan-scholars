'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ChevronRight, ChevronLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type TourStop = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
};

type University360TourProps = {
  tourStops?: TourStop[];
  stops?: TourStop[];
};

export default function University360Tour({ tourStops, stops }: University360TourProps) {
  // Use either tourStops or stops prop, with fallback to empty array
  const allStops = tourStops || stops || [];
  
  const [currentStop, setCurrentStop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // If no stops are provided, render a placeholder
  if (allStops.length === 0) {
    return (
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">Virtual Tour Coming Soon</h3>
        <p className="text-sm text-muted-foreground">
          Our 360° virtual tour is currently being updated. Check back soon for an immersive campus experience.
        </p>
      </div>
    );
  }

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % allStops.length);
    setIsPlaying(false);
  };

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + allStops.length) % allStops.length);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
          onClick={prevStop}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
          onClick={nextStop}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <motion.div
          key={currentStop}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              {isPlaying ? (
                <iframe
                  src={allStops[currentStop].videoUrl}
                  title={allStops[currentStop].title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : (
                <div className="w-full h-full relative">
                  <img 
                    src={allStops[currentStop].thumbnail} 
                    alt={allStops[currentStop].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full w-16 h-16"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{allStops[currentStop].title}</h3>
                <Badge variant="secondary">
                  Stop {currentStop + 1} of {allStops.length}
                </Badge>
              </div>
              <p className="text-muted-foreground">{allStops[currentStop].description}</p>
            </div>
          </Card>
        </motion.div>

        {allStops.length > 1 && (
          <div className="flex justify-center mt-8 gap-4">
            {allStops.map((stop, index) => (
              <button
                key={stop.id}
                onClick={() => {
                  setCurrentStop(index);
                  setIsPlaying(false);
                }}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all ${
                  index === currentStop ? 'ring-2 ring-primary' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <img
                  src={stop.thumbnail}
                  alt={stop.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}