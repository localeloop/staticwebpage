import styled, { css, keyframes } from 'styled-components';

export const SlideContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2c302e;
  display: flex;
  position: relative;
`;

export const LeftCol = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: calc(100% - 4rem);
  overflow: hidden;
  background-size: cover;
  background-position: center top;
  margin: 2rem;
  position: relative;
`;

export const slideAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Slide = styled.div<{ isCurrentSlide: boolean, isNextSlide: boolean, isPreviousSlide: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: left top !important;
  background-size: cover !important;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  z-index: -1;
  ${({ isCurrentSlide, isNextSlide, isPreviousSlide }) => css`
    opacity: ${isCurrentSlide ? 1 : 0};
    transform: ${isCurrentSlide
      ? 'translateY(0) scale(1.25)'
      : isNextSlide
      ? 'translateY(-100%)'
      : isPreviousSlide
      ? 'translateY(50%)'
      : 'none'};
    clip-path: ${isCurrentSlide
      ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
      : isNextSlide
      ? 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)'
      : isPreviousSlide
      ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      : 'none'};
    transition: ${isCurrentSlide || isNextSlide
      ? '1000ms cubic-bezier(1.000, 0.040, 0.355, 1.000) transform, 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550) clip-path'
      : isPreviousSlide
      ? '3s ease transform'
      : 'none'};
    animation: ${isPreviousSlide ? slideAnimation : 'none'} 1s forwards;
    will-change: ${isPreviousSlide ? 'transform' : 'none'};
  `}
`;

export const Caption = styled.div<{ isCurrentCaption: boolean, isPreviousCaption: boolean }>`
  position: absolute;
  top: 50%;
  left: 8rem;
  z-index: 9;
  transform: translateY(-50%);
  opacity: 0;
  transition: 500ms ease opacity, 500ms ease transform;
  transform: translateY(60px);
  ${({ isCurrentCaption }) => isCurrentCaption && css`
    transition-delay: 1000ms;
    opacity: 1;
    transform: translateY(0);
  `}
  ${({ isPreviousCaption }) => isPreviousCaption && css`
    transform: translateY(-60px);
  `}
`;

export const CaptionHeading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-indent: -0.2rem;
  letter-spacing: 0.2rem;
  font-weight: 300;
  transition: 500ms ease-in all;
`;

export const CaptionSubhead = styled.span`
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  letter-spacing: 4px;
  word-spacing: 0.1rem;
  margin-bottom: 2.5rem;
  display: block;
`;

export const Button = styled.a`
  color: #333;
  font-size: 0.8rem;
  text-decoration: none;
  background-color: white;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  position: relative;
  z-index: 9;
  transition: 250ms ease-in background-color, 500ms ease-in color;
  &:hover {
    background-color: black;
    color: white;
  }
`;