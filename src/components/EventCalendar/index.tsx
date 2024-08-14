import React, { useState, useRef, TouchEventHandler } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarContainer, EventDate, EventDetails, EventItem } from './styles';

const events = [
  { date: '7th Jan', details: 'Brobed Stils' },
  { date: '14th Jan', details: 'Scott Freeman\n200 no tab\nEmerson\n100\nArmstrong' },
  { date: '21st Jan (£6 Entry)', details: 'Samual Ashton & the Instincts\n300\nEltel\n150' },
  { date: '26th Jan', details: 'late night vibes - no live music' },
  { date: '28th Jan £4', details: 'glass bridges\n120\nShowza\n100\nBacchanal' },
  { date: '4th Feb £4', details: 'Aqualine\n100\nSell by\n100\nElephants with shotguns' },
  { date: '11th Feb £4', details: 'Twat Attack\n120\nMouser\n100\nSunshine Pony Finger' },
  { date: '18th Feb £5', details: 'Oral Habit\n100\nBroken Noses\n80\nDoops' },
  { date: '23rd Feb', details: 'late night vibes - no live music' },
  { date: '25th Feb £5', details: 'Tribal Jury\n100\nTegalu Cat\n80\nNew Judgement' },
];

const CustomCalendar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [initialTouchY, setInitialTouchY] = useState<number | null>(null);

  const handleScroll = (direction: string) => {
    if (direction === 'up') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    const isOverCalendarItem = Array.from(calendarItemsRef.current).some((item) =>
      item?.contains(e.target as Node)
    );

    if (isOverCalendarItem) {
      e.preventDefault();
      handleScroll(e.deltaY > 0 ? 'up' : 'down');
    }
  };

  const handleMouseEnter = () => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (container) {
      container.removeEventListener('wheel', handleWheel);
    }
  };

  const handleTouchStart: TouchEventHandler = (e) => {
    setInitialTouchY(e.touches[0].clientY);
  };

  const handleTouchMove: TouchEventHandler = (e) => {
    if (initialTouchY === null) {
      return;
    }

    const currentTouchY = e.touches[0].clientY;
    const touchDelta = currentTouchY - initialTouchY;

    if (Math.abs(touchDelta) > 10) {
      handleScroll(touchDelta > 0 ? 'down' : 'up');
      setInitialTouchY(currentTouchY);
    }
  };

  return (
    <CalendarContainer
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        {events.map((event, index) => (
          <motion.div
            key={index}
            ref={(el) => (calendarItemsRef.current[index] = el)}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: Math.max(0, 1 - Math.abs(index - currentIndex) / 10),
              scale: index === currentIndex ? 2 : Math.max(1, 2 - Math.abs(index - currentIndex) / 2),
            }}

            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '5%',
            }}
          >
            <EventDate>{event.date}</EventDate>
            <EventDetails>{event.details}</EventDetails>
          </motion.div>
        ))}
      </AnimatePresence>
    </CalendarContainer>
  );
};

export default CustomCalendar;