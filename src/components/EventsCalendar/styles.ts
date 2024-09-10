import styled, { css, keyframes } from 'styled-components';

const fontColour = '#fff';

export const EventsContainer = styled.section`
    padding-top: 5%;
    padding-bottom: 20%;
    h1 {
        text-align: center;
    }

    @media (max-width: 768px){
        padding-top: 50%;
        padding-bottom: 40%;
        width: 80%;
        margin: 0 auto;

        h1 {
            font-size: 1.2rem;
        }
    }
`;

export const CarouselContainer = styled.div`
    position: relative;
    overflow: visible;
`;

export const EventContainer = styled.div`
    background-color: #222;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.14);
    margin-bottom: 2em;
    overflow: visible;
`;

export const EventHeader = styled.div`
    text-align: center;
    padding: 1em;
`;

export const EventHeaderTitle = styled.h1`
    font-size: 2.5em;
    font-weight: 900;
    text-transform: uppercase;
    color: ${fontColour};

    @media (min-width: 768px) {
        font-size: 5rem;
    }
`;

export const EventItemContainer = styled.div`
`;

export const EventItem = styled.div`
    min-height: 200px;
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
    background-color: #333;
    padding-top: 2%;
    padding-bottom: 2%;
    border-radius: 10px;
    overflow: visible;
    transition: transform 0.5s ease-in-out;

    :hover {
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        padding: 10% 0;
        flex-direction: column;
        text-align: center;
    }
`;

export const EntryPrice = styled.div`
    margin: auto 0;
    width: 100%;
    color: ${fontColour};
    font-size: 2.5em;
    text-align: center;
`;

export const PerformersAndPriceContainer = styled.div`
    display: flex;
    min-width: 50%;
    align-items: center;
`;

export const PerformersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 100%;
`;

export const EventDate = styled.div`
    min-width: 22%;
    text-align: center;
    border-right: 1px dashed #565;
    padding: 0 5%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const EventDateNumber = styled.h1`\
    color: ${fontColour};
    font-size: 6em;
    margin: 0 auto;
    font-weight: 900;
    position: relative;
    display: inline-block;

    @media screen and (max-width: 768px) {
        font-size: 4em;
    }
`;

export const DateSuffix = styled.span`
    position: absolute;
    top: 0;
    right: -1.5em;
    font-size: 0.3em;
    line-height: 1;
`;

export const EventDateDay = styled.span`
    color: ${fontColour};
    font-size: 18px;
`;

export const EventDesc = styled.div`
    text-align: center;
    padding-left: 5em;

    @media screen and (max-width: 768px) {
        text-align: left;
        padding-left: 0;
    }
`;

export const EventTitle = styled.li`
    min-height: 10%;
    font-size: 2rem;
    display: inline-block;
    color: ${fontColour};
    margin-right: 1em;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const EventDescription = styled.p`
    min-height: 50%;
    margin-bottom: 10%;
    color: ${fontColour};
`;

export const MoreInfoLink = styled.a`
    cursor: pointer;
`;

export const EventAdditional = styled.div`
    display: none;
    hr {
        margin: 1em 0;
    }

    h4 {
        margin-bottom: 0.5em;
    }
`;

export const CarouselControl = styled.div<{ direction: 'prev' | 'next' }>`
    position: absolute;
    top: 25px;
    ${props => props.direction === 'prev' ? css`left: 10%;` : css`right: 10%;`}
    width: 30px;
    height: 30px;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: ${props =>
        props.direction === 'prev'
            ? 'rotate(-135deg) translate(-50%, -50%)'
            : 'rotate(45deg) translate(50%, 50%)'};
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        width: 50px;
        height: 50px;

        &::before {
            width: 20px;
            height: 20px;
        }
    }
`;

export const CarouselInner = styled.div<{ animating: boolean }>`
    display: flex;
    overflow: hidden;
    overflow: visible;
`;

export const CarouselItem = styled.div<{ active: boolean, animating: boolean }>`
    flex: 0 0 100%;
    opacity: ${({active}) => (active ? 1 : 0)};
    transition: ${({animating}) => (animating ? 'none' : 'opacity 0.3s ease-in-out')};
    display: ${({animating, active}) => (animating || active ? 'block' : 'none')};
`;