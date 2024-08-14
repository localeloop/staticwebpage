import React, { useEffect } from 'react';
import styled from 'styled-components';

interface BookingWidgetProps {
  src?: string;
  width?: string;
  height?: string;
  isVisible: boolean;
  onClose: () => void;
}

const WidgetContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 47%; // Adjust this value to prevent overlapping with the menu banner
  right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
  transform: translateY(-50%);
  transition: right 0.5s ease-in-out;
  z-index: 9999;

  height: 70%;
  width: 20%;

  @media (max-width: 459px) {
    height: 75%;
    right: ${({ isOpen }) => (isOpen ? '47.8%' : '-100%')};
    top: 49.8%;
  }
`;

const ResponsiveIframe = styled.iframe`
  border-radius: 0 0 0 20px;
  border: none;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 400px;
  max-width: 100%;
  max-height: 100%;
`;

const BookingWidget: React.FC<BookingWidgetProps> = ({
  src = "https://tableagent.com/iframe/the-queens-head/",
  isVisible,
  onClose
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const widget = document.querySelector('.booking-widget');
      if (widget && !widget.contains(event.target as Node) && isVisible) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    <WidgetContainer isOpen={isVisible} className="booking-widget">
      <ResponsiveIframe
        src={src}
        sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
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