import React, { useState } from 'react';
import EventData from './data';
import { isBefore, startOfToday } from 'date-fns';
import {
    EventsContainer,
    CarouselContainer,
    CarouselInner,
    CarouselItem,
    EventContainer,
    EventHeader,
    EventHeaderTitle,
    EventItem,
    EventDate,
    EventDateNumber,
    EventDateDay,
    EventItemContainer,
    PerformersAndPriceContainer,
    DateSuffix,
    EventTitle,
    PerformersList,
    EntryPrice,
    CarouselControl,
} from './styles';


const EventsCalendar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const getMonthNumber = (monthName: string): number => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.indexOf(monthName);
  }

  // filter dates
  const currentDate = startOfToday();
  const futureEvents = EventData.map( monthData => ({
    ...monthData,
    performances: monthData.performances.filter((performance) => {
      const eventDate = new Date(new Date().getFullYear(), getMonthNumber(monthData.month), performance.date);
      return !isBefore(eventDate, currentDate);
    })
  })).filter(monthData => monthData.performances.length > 0 );

  const handlePrevClick = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(( prevIndex ) => ( prevIndex === 0 ? futureEvents.length - 1 : prevIndex - 1 ));
    setTimeout(() => { setAnimating(false); }, 300);
  };

  const handleNextClick = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex(( prevIndex ) => ( prevIndex === futureEvents.length - 1 ? 0 : prevIndex + 1 ));
    setTimeout(() => { setAnimating(false); }, 300);
  };

  const getDateSuffix = (day: number) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return (
    <EventsContainer>
        <h1>Live Music Calendar</h1>
        <CarouselContainer>
            <CarouselInner animating={animating} >
                {futureEvents.map((eventData, index) => (
                    <CarouselItem key={`${index}-carousel-item`} active={index === activeIndex} animating={animating}>
                        <EventContainer>
                            <EventHeader>
                                <EventHeaderTitle>{eventData.month}</EventHeaderTitle>
                            </EventHeader>
                            {eventData.performances.map((performance, performanceIndex) => (
                                <EventItemContainer>
                                    <EventItem key={`${index}-${performanceIndex}`}>
                                        <EventDate>
                                            <EventDateDay>{performance.day}</EventDateDay>
                                            <EventDateNumber>
                                                {performance.date}
                                                <DateSuffix>{getDateSuffix(performance.date)}</DateSuffix>
                                            </EventDateNumber>
                                        </EventDate>
                                        <PerformersAndPriceContainer>
                                            <PerformersList>
                                                {performance.performers.map((performer, i) => (
                                                    <EventTitle key={`${performanceIndex}-${performer}`}>{performer}</EventTitle>
                                                ))}
                                            </PerformersList>
                                        </PerformersAndPriceContainer>
                                        { 'price' in performance ? <EntryPrice>Entry £{performance.price}</EntryPrice> : <EntryPrice>Free Entry</EntryPrice> }
                                    </EventItem>
                                </EventItemContainer>
                            ))}
                    </EventContainer>
                    </CarouselItem>
                ))}
            </CarouselInner>
          <CarouselControl direction="prev" onClick={handlePrevClick} />
          <CarouselControl direction="next" onClick={handleNextClick} />
        </CarouselContainer>
    </EventsContainer>
  );
};

export default EventsCalendar;