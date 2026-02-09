import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'opacity-100 transform-none' : 'opacity-0'} transition-all duration-1000`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;