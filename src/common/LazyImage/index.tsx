import React, { useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  srcSet?: string,
  sizes?: string,
  placeholder?: string,
  alt: string;
  className?: string,
  style?: React.CSSProperties
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  srcSet,
  sizes,
  placeholder,
  alt,
  className,
  style
}) => {

  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach( entry => {
          if ( entry.isIntersecting ){
            const img = imgRef.current;

            if (img) {
              img.src = src;

              if ( srcSet ) img.srcset = srcSet;
              if ( sizes ) img.sizes = sizes;

              img.removeAttribute('data-src');

              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '1000px',
        threshold: 0,
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current){
        observer.unobserve(imgRef.current);
      }
    }
  }, [src, srcSet, sizes]);

  return (
    <img 
      ref={ imgRef }
      data-src={ src }
      src={ placeholder }
      alt={ alt }
      className={ className }
      style={ style }
    />
  )
};

export default LazyImage;