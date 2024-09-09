import styled from "styled-components";

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
    color: #ddd;
    text-align: right;

    h1{
        #fff;
    }

    p {
        text-align: justify;
        padding: 0rem 1.5rem;
    }

    @media (max-width: 768px) {
        h1 {
        font-size: 1.5rem;
            text-align: center;
        }
    }
`;

export const CenteredContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const TextContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    color: #161616;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s;

    h1 {
        color: #161616;
    }

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

export const ImageWrapper = styled.div`
    position: relative;

    ::after {
        content: 'click me!';
        position: absolute;
        display: block;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }
`;


export const StyledImage = styled.img`
    top: 75%;
    right: 3%;
    padding: 1%;
    border-radius: 30px;
    position: absolute;
    background-color: #fff;
    animation: pulse 2s infinite;
    height: 10%;

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    :hover, &.flipped{
        padding: 1%;
        animation: none;
        border-radius: 10px;
        background-color: #6a9167;
    }

    @media (max-width: 768px) {
        padding: 4%;
    }
`;

export default ImageContainer;