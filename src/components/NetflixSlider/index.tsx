import React, { useState, useRef, useEffect } from 'react';
import { CarouselContainer, Carousel, CarouselItem, Text, ItemBody, Title, ArrowLeft, ArrowRight } from './styles';

const data = [];

const EventCalendar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);

  const handleScroll = (delta: number) => {
    setScrollPosition((prevPosition) => {
      const newPosition = prevPosition + delta;
      if (newPosition < 0) return data.length - 1;
      if (newPosition >= data.length) return 0;
      return newPosition;
    })
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScroll(e.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const deltaX = startX.current - e.touches[0].clientX;
      if (Math.abs(deltaX) > 30) {
        handleScroll(deltaX > 0 ? 1 : -1);
        startX.current = e.touches[0].clientX;
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('wheel', handleWheel, { passive: false });
      carouselElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      carouselElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('wheel', handleWheel);
        carouselElement.removeEventListener('touchstart', handleTouchStart);
        carouselElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <>
    <ArrowLeft onClick={() => handleScroll(-1)}>&#8249;</ArrowLeft>
    <CarouselContainer className="wrapper">
      <Carousel scrollPosition={scrollPosition} ref={carouselRef}>

        {[].map((event, index) => (
          <CarouselItem key={index} isActive={index === scrollPosition}>
            {/* <ItemHead>{event.icon}</ItemHead> */}
            <ItemBody>
            </ItemBody>
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselContainer>
    <ArrowRight onClick={() => handleScroll(1)}>&#8250;</ArrowRight>
    </>
  );
};

export default EventCalendar;