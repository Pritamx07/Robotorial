import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
  glowing?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children,
  interactive = false,
  glowing = false,
}) => {
  return (
    <div
      className={`
        glass rounded-2xl overflow-hidden
        ${interactive ? 'cursor-pointer transform transition-all duration-300 hover:-translate-y-2' : ''}
        ${glowing ? 'glow shadow-lg' : 'shadow'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`p-5 ${className}`}>{children}</div>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`px-5 py-4 border-t border-white/5 ${className}`}>{children}</div>;
};