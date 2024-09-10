import styled from "styled-components";
import { motion } from 'framer-motion';

export const MarqueeContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  padding-top: 2%;

  @media (max-width: 768px){
    padding-top: 10%;
  }
`;

export const MarqueeTrack = styled(motion.div)`
  display: flex;
  white-space: nowrap;
`;

export const MarqueeItem = styled.img`
  height: 500px;
  width: 500px;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;