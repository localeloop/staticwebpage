import React from 'react';
import { CarouselContainer, CarouselSlide, CarouselContent } from './styles';

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
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-1.JPG', alt: 'farnham queens head right side bar', title: 'right side bar' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-3.JPG', alt: 'farnham queens head nook area fullers', title: 'nook area' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-5.JPG', alt: 'farnham queens head public house statue head plantlife', title: 'public house farnham' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-6.JPG', alt: 'farnham queens head public house guinness amstel stowford press', title: 'tap house' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-7.JPG', alt: 'queens head farnham ale taps hsb london pride', title: 'ale taps' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-8.JPG', alt: 'queens head farnham entrance welcome', title: 'entrance' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-9.JPG', alt: 'queens head farnham outside area plant life outside seating', title: 'outside area' },
]

const Carousel: React.FC<CarouselProps> = ({ height = "100vh", images, children , isGrayscale = false}) => {
  if (!images) {
    images = defaultImages;
  }

  return (
    <CarouselContainer height={height}>
      {images.map((image, index) => (
        <CarouselSlide
          key={index}
          backgroundImage={image.src}
          style={{ animationDelay: `${index * 6}s` }}
        />
      ))}
      <CarouselContent>{children}</CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;