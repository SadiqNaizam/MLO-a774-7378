import React from 'react';
import { cn } from '@/lib/utils';
import { Card as ShadcnCard } from '@/components/ui/card';

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, className }) => {
  return (
    <ShadcnCard
      className={cn(
        'w-[320px] p-6 shadow-md',
        // Shadcn Card default styling includes:
        // - rounded-lg (which maps to var(--radius) = 0.375rem, equivalent to Tailwind's rounded-md)
        // - border (using hsl(var(--border)))
        // - bg-card (hsl(var(--card)) which is #FFFFFF)
        // - text-card-foreground (hsl(var(--card-foreground)))
        // We override the default shadow-sm to shadow-md as per layout requirements
        // and set specific width and padding.
        className
      )}
    >
      {children}
    </ShadcnCard>
  );
};

export default CardContainer;