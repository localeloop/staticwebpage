// CarouselSlide.tsx
import React from 'react';
import { CarouselSlide } from './styles'; // Assuming this is where the styled-component CarouselSlide is defined.
import BackgroundImage from '../../common/BackgroundImage';

interface LazyCarouselSlideProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LazyCarouselSlide: React.FC<LazyCarouselSlideProps> = ({ src, alt, className, style }) => {
  return (
    <CarouselSlide className={className} style={style} aria-label={alt}>
      <BackgroundImage src={src} height="100%" width="100%" />
    </CarouselSlide>
  );
};

export default LazyCarouselSlide;