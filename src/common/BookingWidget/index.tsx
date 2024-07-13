import React, { useState } from 'react';
import styled from 'styled-components';

interface BookingWidgetProps {
  src?: string;
  width?: string;
  height?: string;
  isVisible: boolean;
}

const WidgetContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
  transform: translateY(-50%);
  transition: right 0.5s ease-in-out;
  z-index: 9999;
`;

const BookingWidget: React.FC<BookingWidgetProps> = ({
  src,
  width = '20%',
  height = '20%',
  isVisible
}) => {

  return (
    <WidgetContainer isOpen={isVisible}>
      <iframe
        src="https://tableagent.com/iframe/the-queens-head/"
        style={{ borderRadius:'0 0 0 20px', border:'none', minWidth: '375px', minHeight: '690px', zIndex: 10000 }}
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