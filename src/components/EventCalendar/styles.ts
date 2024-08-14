import styled from 'styled-components';

// Styles
const CalendarContainer = styled.div`
  padding: 1rem;
  padding: 10% 0;
  padding-bottom: 10rem;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const EventItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  padding: 1.5rem; 
`;

const EventDate = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const EventDetails = styled.div`
  margin-left: 1rem;
`;

export {
  CalendarContainer,
  EventItem,
  EventDate,
  EventDetails,
};