'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageSquare, Flag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { peopleImages } from '@/data/images';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Review = {
  id: number;
  author: string;
  program: string;
  rating: number;
  date: string;
  content: string;
  likes: number;
  replies: number;
  verified: boolean;
};

type UniversityReviewsProps = {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingDistribution: number[];
};

export default function UniversityReviews({
  reviews: initialReviews,
  averageRating,
  totalReviews,
  ratingDistribution
}: UniversityReviewsProps) {
  const [sortBy, setSortBy] = useState('recent');
  const [filterBy, setFilterBy] = useState('all');
  const [reviews, setReviews] = useState(initialReviews);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sortedReviews = [...reviews];
    
    switch (value) {
      case 'recent':
        sortedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'highest':
        sortedReviews.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        sortedReviews.sort((a, b) => a.rating - b.rating);
        break;
      case 'helpful':
        sortedReviews.sort((a, b) => b.likes - a.likes);
        break;
    }
    
    setReviews(sortedReviews);
  };

  const handleFilter = (value: string) => {
    setFilterBy(value);
    let filteredReviews = [...initialReviews];
    
    switch (value) {
      case 'verified':
        filteredReviews = filteredReviews.filter(review => review.verified);
        break;
      case '5star':
        filteredReviews = filteredReviews.filter(review => review.rating === 5);
        break;
      case 'critical':
        filteredReviews = filteredReviews.filter(review => review.rating <= 3);
        break;
    }
    
    setReviews(filteredReviews);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rating Summary */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">{averageRating.toFixed(1)}</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {totalReviews} reviews
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {ratingDistribution.map((count, index) => (
                <div key={5 - index} className="flex items-center gap-2">
                  <div className="text-sm w-6">{5 - index}</div>
                  <Progress
                    value={(count / totalReviews) * 100}
                    className="h-2"
                  />
                  <div className="text-sm w-10">{count}</div>
                </div>
              ))}
            </div>
          </div>
          <Button className="w-full">
            Write a Review
            <MessageSquare className="ml-2 h-4 w-4" />
          </Button>
        </Card>

        {/* Filters */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Filter & Sort Reviews</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Sort by
              </label>
              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort reviews" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                  <SelectItem value="helpful">Most Helpful</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Filter by
              </label>
              <Select value={filterBy} onValueChange={handleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter reviews" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reviews</SelectItem>
                  <SelectItem value="verified">Verified Students</SelectItem>
                  <SelectItem value="5star">5 Star Reviews</SelectItem>
                  <SelectItem value="critical">Critical Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={peopleImages[`student${(index % 4) + 1}`]}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{review.author}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Student
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.program}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{review.date}</div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4">{review.content}</p>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful ({review.likes})
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Reply ({review.replies})
                </Button>
                <Button variant="ghost" size="sm">
                  <Flag className="mr-2 h-4 w-4" />
                  Report
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}