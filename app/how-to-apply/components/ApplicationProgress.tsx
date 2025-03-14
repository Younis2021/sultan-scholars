'use client';

import { Progress } from "@/components/ui/progress";

type ApplicationProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export default function ApplicationProgress({ currentStep, totalSteps }: ApplicationProgressProps) {
  return (
    <div className="mb-8">
      <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      <div className="mt-4 text-sm text-muted-foreground text-center">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
}