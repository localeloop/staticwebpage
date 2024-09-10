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

export const BirdContainer = styled.div`
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const StyledSVG = styled(motion.div)`
    svg {
        fill: #555;
        stroke: #555;
    }
`;

export const StyledBird1 = styled(StyledSVG)`
    position: absolute;
    width: 25%;
    transition: ease-in 0.2s;
    top: 250%;

    svg {
        transform: rotateY(180deg);
    }

    @media (min-width: 768px){
        width: 13%;
        top: -5%;
    }
`;

export const StyledBird2 = styled(StyledBird1)`
    right: 0%;

    @media (min-width: 768px){
        right: 5%;
    }

    svg {
        transform: rotateY(0deg);
    }
`;

export const SnakeImageContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledSnake = styled(StyledSVG)`
    position: absolute;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 0;
    bottom: 0;

    svg {
        width: 100%;
        height: 100%;
        fill: #444;
        stroke: #444;
    }

`;

export const StyledCandle = styled(StyledSVG)`
    width: 161px;
    height: 699px;
    position: absolute;
    bottom: -12%;
    right: 45%;
    transform: rotate(90deg);
    svg {
        height: 100%;
        width: 100%;
    }
    @media screen and (max-width: 768px){
        transform: rotate(90deg) scale(0.5);    
        bottom: -15%;
        right: 30%;
    }
`;

export const Flower1Container = styled(StyledSVG)`
    width: 10%;
    position: absolute;
    left: 50%;

    svg:nth-child(1){
        left: 25%;
    }
`;