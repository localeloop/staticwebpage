import React from 'react';
import { CarouselContainer, CarouselContent } from './styles';

import LazyCarouselSlide from './CarouselSlide';
import { getDeviceType } from '../../common/utils/getDeviceType';

interface ImageProps {
  src: string;
  alt?: string;
  title?: string;
}

interface CarouselProps {
  height?: string;
  images?: ImageProps[];
  children?: React.ReactNode;
  isGrayscale?: boolean;
}

const defaultImages = [
  { src: 'images/carousel-1.webp', alt: 'farnham queens head right side bar', title: 'right side bar' },
  { src: 'images/carousel-3.webp', alt: 'farnham queens head nook area fullers', title: 'nook area' },
  { src: 'images/carousel-5.webp', alt: 'farnham queens head public house statue head plantlife', title: 'public house farnham' },
  { src: 'images/carousel-6.webp', alt: 'farnham queens head public house guinness amstel stowford press', title: 'tap house' },
  { src: 'images/carousel-7.webp', alt: 'queens head farnham ale taps hsb london pride', title: 'ale taps' },
  { src: 'images/carousel-8.webp', alt: 'queens head farnham entrance welcome', title: 'entrance' },
  { src: 'images/carousel-9.webp', alt: 'queens head farnham outside area plant life outside seating', title: 'outside area' },
]

const Carousel: React.FC<CarouselProps> = ({ height, images, children , isGrayscale = false}) => {
  const deviceType = getDeviceType();

  if (!images) {
    images = defaultImages;
  }

  const heights: Record<string, string> = {
    'tablet': '680px',
    'phones': '480px',
    'default': height || '100vh'
  }

  const carouselHeight = heights[deviceType] || heights['default']

  return (
    <CarouselContainer height={carouselHeight}>
      {images.map((image, index) => (
        <LazyCarouselSlide
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ animationDelay: `${index * 6}s` }}
        />
      ))}
      <CarouselContent>{children}</CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;