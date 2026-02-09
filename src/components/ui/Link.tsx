import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'button' | 'underline';
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ 
  href = '#', 
  className = '', 
  variant = 'default', 
  children, 
  ...props 
}) => {
  const baseStyles = 'transition-all duration-300';
  
  const variantStyles = {
    default: 'hover:text-[rgb(var(--primary))]',
    button: 'inline-flex items-center justify-center rounded-lg bg-[rgb(var(--primary))] px-4 py-2 text-sm font-medium text-white hover:bg-[rgb(var(--primary))]/90',
    underline: 'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[rgb(var(--primary))] after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'
  };
  
  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </a>
  );
};