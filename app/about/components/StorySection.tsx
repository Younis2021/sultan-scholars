"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const Timeline = () => (
  <div className="mt-16">
    <h3 className="text-2xl font-bold mb-8 text-center">Our Journey</h3>
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`relative flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          } mb-8`}
        >
          <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
            <Card className="p-6">
              <div className="font-bold text-primary mb-2">
                {milestone.year}
              </div>
              <h4 className="font-semibold mb-2">{milestone.title}</h4>
              <p className="text-sm text-muted-foreground">
                {milestone.description}
              </p>
            </Card>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-2"></div>
        </motion.div>
      ))}
    </div>
  </div>
);

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    description:
      "Started with a small team of 3 dedicated education consultants",
  },
  {
    year: "2016",
    title: "First Major Partnership",
    description: "Established partnerships with top 10 universities in Türkiye",
  },
  {
    year: "2018",
    title: "International Expansion",
    description:
      "Opened offices in 5 countries to better serve international students",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online counseling platform during global pandemic",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Awarded Best Education Consultancy in Türkiye",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description:
      "Celebrating 10 years of excellence with 5000+ successful placements",
  },
];

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4">Our Story</Badge>
            <h2 className="text-4xl font-bold mb-6 turkish-title">
              A Decade of Excellence in Education
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2014, Sultan Scholars has grown from a small
              consultancy to one of Türkiye's leading international education
              agencies. Our journey began with a simple mission: to make quality
              education accessible to students worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Over the years, we've helped thousands of students achieve their
              academic dreams, building strong partnerships with top
              universities and establishing a reputation for excellence in
              educational consulting.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  5000+
                </div>
                <p className="text-muted-foreground">Students Placed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Partner Universities</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">120+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
            <Timeline />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/virtual_tour_image_3.jpg"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="font-bold">#1 Rated</div>
                  <div className="text-sm text-muted-foreground">
                    Education Agency
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
