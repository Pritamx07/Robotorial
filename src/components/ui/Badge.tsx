import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'primary', 
  children, 
  className = '' 
}) => {
  const variants = {
    primary: 'bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary))]',
    secondary: 'bg-[rgb(var(--secondary))]/20 text-[rgb(var(--secondary))]',
    accent: 'bg-[rgb(var(--accent))]/20 text-[rgb(var(--accent))]',
    success: 'bg-[rgb(var(--success))]/20 text-[rgb(var(--success))]',
    warning: 'bg-[rgb(var(--warning))]/20 text-[rgb(var(--warning))]',
    error: 'bg-[rgb(var(--error))]/20 text-[rgb(var(--error))]',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};