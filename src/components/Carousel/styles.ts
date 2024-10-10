import styled, { keyframes, css} from 'styled-components';

interface CarouselContainerProps {
  height?: string;
}

interface CarouselSlideProps {
  isGrayscale?: string;
  isFirstSlide?: boolean;
}
const fadeAnimation = keyframes`
  0%, 20%, 100%{
    opacity: 0;
  }
  25%, 95% {
    opacity: 1;
  }
`;

export const CarouselContainer = styled.div<CarouselContainerProps>`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: ${props => props.isFirstSlide ? 1 : 0};
  animation: ${props => props.isFirstSlide ? 'none' : css`${fadeAnimation} 15s infinite`};
  animation-delay: ${props => props.isFirstSlide ? '0s' : props.style?.animationDelay};

  ${(props) =>
    props.isGrayscale &&
    css`
      filter: grayscale(100%) contrast(150%);
    `}
`;

export const SingleCarouselSlide = styled.div<CarouselSlideProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
`;

export const CarouselContent = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
`;