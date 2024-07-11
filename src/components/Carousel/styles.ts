import styled, { keyframes, css} from 'styled-components';

interface CarouselContainerProps {
  height?: string;
}

interface CarouselSlideProps {
  backgroundImage: string;
  isGrayscale?: string;
}
const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const CarouselContainer = styled.div<CarouselContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '500px'};
  overflow: hidden;
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/img/images/${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${fadeAnimation} 18s infinite;

  ${(props) =>
    props.isGrayscale &&
    css`
      filter: grayscale(100%) contrast(150%);
    `}
`;

export const CarouselContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: #fff;
`;