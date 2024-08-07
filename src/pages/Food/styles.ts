import styled from "styled-components";
import { Image } from "../../common/Image";

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    display: flex
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const PreservedText = styled.div`
    white-space: pre-wrap;
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const CenteredContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const TextContainer = styled.div`
    text-align: center;
    width: 100%;
    max-width: 1200px;
    color: #161616;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s;

    button {
        color: #fff;
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }

    &.flipped {
        transform: rotateY(180deg);
    }

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const InitialText = styled.div`
    padding: 5%;
`;

export const FlippedContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6a9167;
    backface-visibility: hidden;
    border-radius: 10px;
`;


export const StyledImage = styled.img`
    position: absolute;
    bottom: 10%;
    right: 5%;
    padding: 1.5%;
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    fill: green;

    :hover, &.flipped{
        border-radius: 10px;
        background-color: #6a9167;
    }
`;

export default ImageContainer;