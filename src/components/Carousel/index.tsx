import React, { useEffect, useState } from 'react';
import { CarouselContainer, CarouselContent, SingleCarouselSlide } from './styles';
import BackgroundImage from '../../common/BackgroundImage';

import LazyCarouselSlide from './CarouselSlide';
import { getDeviceType } from '../../common/utils/getDeviceType';
import getFullPath from '../../common/utils/imageUtils';

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

const Carousel: React.FC<CarouselProps> = ({ height, images=defaultImages, children , isGrayscale = false}) => {
  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <LazyCarouselSlide
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ 
            animationDelay: `${index * 3}s`,
          }}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          index={index}
        />
      ))}
      <CarouselContent>{children}</CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;