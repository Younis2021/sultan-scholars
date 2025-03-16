'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from 'lucide-react';

type ApplicationStepProps = {
  step: {
    title: string;
    description: string;
    details: string[];
    requirements?: string[];
    actions: {
      label: string;
      icon?: any;
      primary?: boolean;
      onClick?: (setStep: (step: number) => void) => void;
    }[];
  };
  index: number;
  isActive: boolean;
};

export default function ApplicationStep({ step, index, isActive }: ApplicationStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className={`p-6 ${isActive ? 'ring-2 ring-primary' : ''}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
            {index + 1}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
            
            <Accordion type="single" collapsible>
              <AccordionItem value="details">
                <AccordionTrigger>View Details</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                        <p>{detail}</p>
                      </div>
                    ))}
                    {step.requirements && (
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {step.requirements.map((req, rIndex) => (
                            <li key={rIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-4 flex gap-4">
              {step.actions.map((action, aIndex) => (
                <Button
                  key={aIndex}
                  variant={action.primary ? "default" : "outline"}
                  className={action.primary ? "gradient-bg" : ""}
                  onClick={() => action.onClick?.(step => step)}
                >
                  {action.label}
                  {action.icon && <action.icon className="ml-2 h-4 w-4" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}