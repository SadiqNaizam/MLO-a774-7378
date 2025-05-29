import React from 'react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainLayout provides the outermost structure for the application pages.
 * For the login screen, it implements a full-height, centered layout 
 * with a background color defined by the 'bg-background' Tailwind class.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex items-center justify-center h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainLayout;