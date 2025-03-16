'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Phone } from 'lucide-react';

type SupportDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function SupportDialog({ open, onOpenChange }: SupportDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Need Assistance?</DialogTitle>
          <DialogDescription>
            Our education consultants are here to help you 24/7
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Card className="p-4">
            <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-medium mb-1">Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Get instant answers to your questions
                </p>
                <Button size="sm" className="w-full">
                  Start Chat
                </Button>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-medium mb-1">Schedule a Call</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Book a personal consultation
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}