'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

type ChecklistItem = {
  title: string;
  description: string;
  icon: any;
};

type ApplicationChecklistProps = {
  checklist: ChecklistItem[];
};

export default function ApplicationChecklist({ checklist }: ApplicationChecklistProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 turkish-title">Application Checklist</h2>
            <p className="text-xl text-muted-foreground">
              Ensure you have all required documents ready
            </p>
          </motion.div>

          <Card className="p-8">
            <div className="grid gap-6">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button size="lg">
                Download Complete Checklist
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}