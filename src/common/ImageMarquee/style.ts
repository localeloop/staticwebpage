import styled from "styled-components";
import { motion } from 'framer-motion';

export const MarqueeContainer = styled.div`
  width: 100%;
  height: ${(props: { height: number }) => props.height}px;
  overflow: hidden;
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50px; // Adjust width for the fade effect
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.5), transparent);
  }
`;

export const MarqueeTrack = styled(motion.div)`
  display: flex;
  white-space: nowrap;
`;

export const MarqueeItem = styled(motion.div)`
  margin: 0 3%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;