import React from 'react';
import styled, { keyframes } from 'styled-components';

const data = []

// Styles from the provided code
const animationTiming = 27000; // 27 seconds
const carouselItems = data.length;
const animationDelayFraction = animationTiming / carouselItems;
const animationStepsFraction = 100 / carouselItems;
const slideChangeTiming = 3; // percentage of total animation cycle

const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
`;

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1000%;
    color: #fff;
`;

export const ArrowLeft = styled(Arrow)`
    left: -10%;
`

export const ArrowRight = styled(Arrow)`
    right: -10%;
`

interface CarouselProps {
    scrollPosition: number;
}

export const Carousel = styled.div<CarouselProps>`
    display: flex;
    transform: translateX(-${({ scrollPosition }) => scrollPosition * 100}%);
    transition: transform 0.5s ease-in-out;
`;

const carouselAnimate = keyframes`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
  ${slideChangeTiming}%,
  ${animationStepsFraction}% {
    transform: translateY(100%) scale(0.7);
    opacity: 0.4;
    visibility: visible;
  }
  ${animationStepsFraction + slideChangeTiming}%,
  ${animationStepsFraction * 2}% {
    transform: translateY(0) scale(1);
    opacity: 1;
    visibility: visible;
  }
  ${(animationStepsFraction * 2) + slideChangeTiming}%,
  ${animationStepsFraction * 3}% {
    transform: translateY(-100%) scale(0.7);
    opacity: 0.4;
    visibility: visible;
  }
  ${(animationStepsFraction * 3) + slideChangeTiming}% {
    transform: translateY(-100%) scale(0.5);
    opacity: 0;
    visibility: visible;
  }
  100% {
    transform: translateY(-100%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
`;

interface CarouselItemProps {
    isActive: boolean;
}

const CarouselItem = styled.div<CarouselItemProps>`
    min-width: 100%;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(0.9)')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ItemHead = styled.div`
    border-radius: 50%;
    background-color: #d7f7fc;
    width: 90px;
    height: 90px;
    padding: 14px;
    position: relative;
    margin-right: -45px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20%;
`;

const ItemBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 2% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 10px;
    color: #000;
    border-bottom: 1px solid #999;
`;

const Text = styled.p`
    height: 100%;
    font-size: 14px;
    color: #000;
`;

export {
    Text,
    CarouselContainer,
    CarouselItem,
    ItemHead,
    ItemBody,
    Title,
    animationTiming,
    carouselItems,
    animationDelayFraction,
    animationStepsFraction,
    slideChangeTiming,
    carouselAnimate,
}