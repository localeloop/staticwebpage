import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isBefore, startOfToday, format } from "date-fns";
import { fetchEventData } from "./data";
import { EventCardType } from "./types";
import { Title } from "../Footer/styles";
import LineBreaker from "../../common/LineBreaker";

const Container = styled.section`
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const Card = styled.div`
    background: #222;
    border-radius: 12px;
    margin-bottom: 2rem;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

const CardHeader = styled.div`
    padding: 1rem;
    color: #eee;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const EventDate = styled.div`
    font-weight: bold;
`;

const Time = styled.div`
    opacity: 0.8;
`;

const Price = styled.div`
    font-weight: bold;
`;

const BandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  grid-column: 1 / -1;
  transition: opacity 1s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  font-size: 1rem;
  font-weight: 500;

  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;

  pointer-events: none;
  z-index: 1000;

  ${ImageWrapper}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    transition: all 1s ease;
  }
`;

const Arrow = styled.div`
  margin-top: 4px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #fff;
`;

const Band = styled.div`
    display: flex;
    flex-direction: column;
`;

const Description = styled.div`
    padding: 1rem;
    font-size: 1rem;
    color: #fff;
`;

const FullWidthDescription = styled.div`
  grid-column: 1 / -1;
  padding: 1rem 3em;

  color: #fff;
`;

const FullWidthButton = styled.a`
  grid-column: 1 / -1;
  display: block;
  text-align: center;

  margin: 1rem auto;
  padding: 0.6rem 1rem;

  color: #fff;
  background: #444;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    background: #666;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 1px solid #555;
  margin: 0 auto;
  color: #eee;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: #333;
  }
`;

const EventsCalendar: React.FC = () => {
  const [events, setEvents] = useState<EventCardType[]>([]);
  useEffect(() => {
    fetchEventData()
      .then(setEvents)
      .catch(console.error);
  }, []);

  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const today = startOfToday();
  const filteredEvents = events
    .filter(e => !isBefore(new Date(e.date), today))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  console.log(filteredEvents);

  return (
    <Container>
      {filteredEvents.map((event, i) => {
        const dateObj = new Date(event.date);
        const isExpanded = expandedCards.includes(i);
        const formattedDate = format(dateObj, "EEEE, do MMMM yyyy");
        const price = event.entryPrice
          ? `£${event.entryPrice}`
          : "Free Entry";

        // If only ONE description exists, reuse it
        const sharedDescription =
          event.bands.length === 1
            ? event.bands[0].description
            : undefined;

        console.log(event);

        return (
          <Card key={i}>
            <CardHeader>
              <EventDate>{formattedDate}</EventDate>
              <Time>{event.time}</Time>
              <Price>{price}</Price>
            </CardHeader>
            <ImageWrapper onClick={() => toggleCard(i)}>
              <FullWidthImage src={"/img/images/piano-background.jpg"} alt="" />

              {!isExpanded && (
                <HoverOverlay className="overlay">
                  Show more
                  <Arrow />
                </HoverOverlay>
              )}
            </ImageWrapper>

            {isExpanded && (
              <div>
                <BandsGrid>
                  {event.bands.slice(0, 3).map((band, idx) => (
                    <Band key={idx}>
                      <Description>
                        {band.description || sharedDescription}
                      </Description>
                    </Band>
                  ))}

                  <FullWidthButton href="https://tableagent.com/surrey/the-queens-head/">
                    Reserve A Table
                  </FullWidthButton>
                </BandsGrid>
              </div>
            )}
          </Card>
        );
      })}
    </Container >
  );
};

export default EventsCalendar;