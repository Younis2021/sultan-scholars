"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import UniversityReviews from "@/components/university-reviews";
import { CheckCircle2, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type ReviewsTabProps = {
  university: any;
  reviews: any[];
  reviewStats: {
    averageRating: number;
    totalReviews: number;
    ratingDistribution: number[];
  };
};

export default function ReviewsTab({
  university,
  reviews,
  reviewStats,
}: ReviewsTabProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Thank you for your review! It will be published after moderation."
    );
    setShowReviewForm(false);
    setRating(0);
    setReviewText("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
            <p className="text-muted-foreground">
              Read authentic reviews from current and former students about
              their experiences at {university.name}. These insights provide
              valuable perspectives on academic quality, campus life, and
              overall student satisfaction.
            </p>
          </div>
          <Button
            onClick={() => setShowReviewForm(true)}
            className="gradient-bg"
          >
            Write a Review
          </Button>
        </div>
      </Card>

      <UniversityReviews
        reviews={reviews}
        averageRating={reviewStats.averageRating}
        totalReviews={reviewStats.totalReviews}
        ratingDistribution={reviewStats.ratingDistribution}
      />

      {/* Student Testimonials */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Featured Student Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {featuredTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {testimonial.program} • Class of {testimonial.year}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center text-sm text-primary">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    <span>{testimonial.currentRole}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Review Form Dialog */}
      <Dialog open={showReviewForm} onOpenChange={setShowReviewForm}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Write a Review for {university.name}</DialogTitle>
            <DialogDescription>
              Share your experience to help future students make informed
              decisions.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Program/Major</label>
              <select className="w-full p-2 border rounded-md" required>
                <option value="">Select your program</option>
                {university.programs.map((program: any, index: number) => (
                  <option key={index} value={program.name}>
                    {program.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Year of Study/Graduation
              </label>
              <select className="w-full p-2 border rounded-md" required>
                <option value="">Select year</option>
                <option>Current Student</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>Earlier</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Review</label>
              <Textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience at this university..."
                rows={6}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pros & Cons</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Pros</p>
                  <Textarea placeholder="What did you like?" rows={3} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Cons</p>
                  <Textarea placeholder="What could be improved?" rows={3} />
                </div>
              </div>
            </div>
            <div className="pt-4 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowReviewForm(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="gradient-bg"
                disabled={rating === 0 || reviewText.length < 10}
              >
                Submit Review
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Additional data
const featuredTestimonials = [
  {
    name: "Sophia Martinez",
    program: "International Business",
    year: "2022",
    quote:
      "My experience at this university transformed my career prospects completely. The international exposure, industry connections, and practical learning approach gave me a competitive edge in the job market. The professors were not just teachers but mentors who guided me throughout my academic journey.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    currentRole: "Now working as Marketing Manager at Amazon",
  },
  {
    name: "Ahmed Khan",
    program: "Computer Engineering",
    year: "2023",
    quote:
      "The cutting-edge research facilities and innovation-focused curriculum prepared me for the rapidly evolving tech industry. I had opportunities to work on real-world projects with leading tech companies, which directly led to my current position. The support for international students was exceptional.",
    image:
      "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
    currentRole: "Now working as Software Engineer at Google",
  },
];
