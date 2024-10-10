import React from "react";

interface LazyImageProps {
  src: string;
  srcSet?: string,
  sizes?: string,
  alt: string;
  className?: string,
  style?: React.CSSProperties
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  srcSet,
  sizes,
  alt,
  className,
  style
}) => {
  return (
    <img 
      alt={alt}
      loading="lazy"
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      className={className}
      style={style}
    />
  )
};

export default LazyImage;