import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      }, options);
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [options]);
  
    return { isInView, elementRef };
};

export default useIntersectionObserver;