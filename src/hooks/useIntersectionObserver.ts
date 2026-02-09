import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function useIntersectionObserver<T extends Element>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (triggerOnce && isElementIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  useEffect(() => {
    const element = elementRef.current;
    const observer = observerRef.current;

    if (element && observer) {
      observer.observe(element);
    }

    return () => {
      if (element && observer) {
        observer.unobserve(element);
      }
    };
  }, [elementRef.current]);

  return { ref: elementRef as RefObject<T>, isIntersecting };
}

export default useIntersectionObserver;