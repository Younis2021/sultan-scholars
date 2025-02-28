'use client';

import { motion } from 'framer-motion';
import { Users, Building2, DollarSign, Star } from 'lucide-react';

type QuickStatsProps = {
  internationalStudents: number;
  programsCount: number;
  tuitionRange: [number, number];
  averageRating: number;
};

export default function QuickStats({
  internationalStudents,
  programsCount,
  tuitionRange,
  averageRating
}: QuickStatsProps) {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Users className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold">{internationalStudents.toLocaleString()}+</div>
            <div className="text-sm text-muted-foreground">International Students</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Building2 className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold">{programsCount}+</div>
            <div className="text-sm text-muted-foreground">Academic Programs</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold">${tuitionRange[0].toLocaleString()} - ${tuitionRange[1].toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Annual Tuition</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Star className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold">{averageRating.toFixed(1)}/5.0</div>
            <div className="text-sm text-muted-foreground">Student Rating</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}