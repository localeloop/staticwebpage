import React from 'react';
import styled from "styled-components";

import { motion } from 'framer-motion';

// Image props
interface ImageProps {
    fill?   : string;
    width?  : string;
    height? : string;
    rotate? : string;
    stroke? : string;
}

export const MainBody = styled.div`
    background-color: #161616;
    width: 100vw;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
`;

export const StyledBird1 = styled(motion.div)`
    width: 10%;
    transition: ease-in 0.2s;

    svg {
        width: 100%;
        height: auto;
        fill: #eee;
        stroke: #fff;
        transform: rotateY(180deg);
    }
`;

