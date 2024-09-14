import styled from "styled-components";
import { motion } from 'framer-motion';

export const MarqueeContainer = styled.div`
  width: 100%;
  height: ${(props: { height: number }) => props.height}px;
  overflow: hidden;
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;

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