'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { pricingPlans } from './data';

const ComparisonTable = () => (
  <div className="mt-16 overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-4 text-left">Features</th>
          {pricingPlans.map((plan) => (
            <th key={plan.name} className="p-4 text-center">
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {comparisonFeatures.map((feature, index) => (
          <tr key={index} className="border-b">
            <td className="p-4">{feature.name}</td>
            {pricingPlans.map((plan) => (
              <td key={`${plan.name}-${feature.name}`} className="p-4 text-center">
                {feature.availability[plan.name.toLowerCase()] ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const comparisonFeatures = [
  {
    name: "University Selection",
    availability: { essential: true, premium: true, vip: true }
  },
  {
    name: "Application Support",
    availability: { essential: true, premium: true, vip: true }
  },
  {
    name: "Document Review",
    availability: { essential: true, premium: true, vip: true }
  },
  {
    name: "Priority Processing",
    availability: { essential: false, premium: true, vip: true }
  },
  {
    name: "Dedicated Counselor",
    availability: { essential: false, premium: false, vip: true }
  },
  {
    name: "24/7 Support",
    availability: { essential: false, premium: true, vip: true }
  },
  {
    name: "Accommodation Support",
    availability: { essential: false, premium: true, vip: true }
  },
  {
    name: "Airport Pickup",
    availability: { essential: false, premium: true, vip: true }
  },
  {
    name: "Cultural Orientation",
    availability: { essential: false, premium: false, vip: true }
  },
  {
    name: "Bank Account Setup",
    availability: { essential: false, premium: false, vip: true }
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Pricing Plans</Badge>
          <h2 className="text-4xl font-bold mb-4 turkish-title">Choose Your Package</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed to meet your specific needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-8 ${plan.featured ? 'border-primary ring-2 ring-primary' : ''}`}>
                {plan.featured && (
                  <Badge className="gradient-bg mb-4">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/package</span>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button className={`w-full ${plan.featured ? 'gradient-bg' : ''}`}>
                  Choose {plan.name}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        <ComparisonTable />
      </div>
    </section>
  );
}