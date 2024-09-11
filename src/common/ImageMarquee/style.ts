import styled from "styled-components";
import { motion } from 'framer-motion';

export const MarqueeContainer = styled.div`
  width: 100%;
  height: ${(props: {height: number}) => props.height}px;
  overflow-x: hidden;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const MarqueeTrack = styled(motion.div)`
  display: flex;
  white-space: nowrap;
`;

export const MarqueeItem = styled.div`
  margin: 0 3%;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: cover;
  }
`;