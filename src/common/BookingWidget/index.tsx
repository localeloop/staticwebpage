import React, { useState } from 'react';
import styled from 'styled-components';

interface BookingWidgetProps {
  src?: string;
  width?: string;
  height?: string;
}

const WidgetContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transform: translateY(-50%);
  transition: right 0.5s ease-in-out;
  z-index: 9999;
`;

const ToggleButton = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  left: -0px;
  transform: translateY(-50%) rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  width: 30px;
  height: 30px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
`;

const BookingWidget: React.FC<BookingWidgetProps> = ({
  src,
  width = '20%',
  height = '20%',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WidgetContainer isOpen={isOpen}>
      <ToggleButton isOpen={isOpen} onClick={toggleWidget}>
        &rarr;
      </ToggleButton>
      <iframe
        src="https://tableagent.com/iframe/the-queens-head/"
        style={{ border: '0px none', minWidth: '375px', minHeight: '736px', zIndex: 10000 }}
        sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        width={width}
        height={height}
      />
    </WidgetContainer>
  );
};

export default BookingWidget;

{/* <iframe
  src="https://tableagent.com/iframe/the-queens-head/"
  style="border:0px none;min-width:375px;min-height:736px"
  sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
  width="100%"
  height="100%">
</iframe> */}