'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Phone, FileCheck } from 'lucide-react';

type SuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Application Submitted Successfully!</DialogTitle>
          <DialogDescription>
            Congratulations on taking the first step! Here's what happens next:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">Application Review</h4>
              <p className="text-sm text-muted-foreground">
                Our experts will review your application within 24 hours
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium">Personal Consultation</h4>
              <p className="text-sm text-muted-foreground">
                We'll schedule a call to discuss your options and next steps
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <FileCheck className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium">Document Preparation</h4>
              <p className="text-sm text-muted-foreground">
                We'll begin preparing your documents for submission
              </p>
            </div>
          </div>
        </div>
        <Button onClick={() => onOpenChange(false)} className="w-full mt-4">
          Got it, thanks!
        </Button>
      </DialogContent>
    </Dialog>
  );
}