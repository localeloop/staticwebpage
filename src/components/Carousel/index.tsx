import React from 'react';
import { CarouselContainer, CarouselSlide, CarouselContent } from './styles';

interface ImageProps {
  src: string;
  alt?: string;
  title?: string;
}

interface CarouselProps {
  height?: string;
  images: ImageProps[];
  children: React.ReactNode;
  isGrayscale?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ height = "100vh", images, children , isGrayscale = false}) => {
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