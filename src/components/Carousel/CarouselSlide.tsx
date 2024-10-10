// CarouselSlide.tsx
import React from 'react';
import { CarouselSlide } from './styles'; // Assuming this is where the styled-component CarouselSlide is defined.
import BackgroundImage from '../../common/BackgroundImage';

interface LazyCarouselSlideProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  fetchPriority?: 'high' | 'low' | 'auto';
  index: number;
}

const LazyCarouselSlide: React.FC<LazyCarouselSlideProps> = ({ src, alt, className, style, fetchPriority, index }) => {
  const isFirstSlide = index === 0;

  return (
    <CarouselSlide 
      className={className} 
      style={style} 
      title={alt}
      isFirstSlide={isFirstSlide}
    >
      <BackgroundImage 
        src={src} 
        height="100%" 
        width="100%" 
        fetchPriority={isFirstSlide ? 'high' : fetchPriority}
      />
    </CarouselSlide>
  );
};

export default LazyCarouselSlide;