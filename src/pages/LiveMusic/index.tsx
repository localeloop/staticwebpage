import React, {useEffect, useRef} from 'react';
import Container from '../../common/Container';
import EventsCalendar from '../../components/EventsCalendar';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

// Styles
import { 
    MainBody, 
    ImageContainer,
    StyledBird1,
    StyledBird2,
    BirdContainer,
    StyledSnake,
    SnakeImageContainer,
    StyledCandle,
    Flower1Container
 } from './styles';

import { ReactComponent as Bird1 } from './images/bird1.svg';
import { ReactComponent as Snake } from './images/snake.svg';
import { ReactComponent as Candle } from './images/candle.svg';
import { ReactComponent as Flower1 } from './images/flower1.svg'
import { ReactComponent as Flower2 } from './images/flower2.svg'
import ContactForm from '../../components/ContactForm';
import { BackgroundImageContainer } from '../../common/BackgroundImage/styles';

const LiveMusic = () => {

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [-10, 100] );
    const x = useTransform(scrollY, [0, 1000], [10, -10] );

    return (
        <MainBody>
            {/* <Flower1Container>
                <Flower1/>
                <Flower2/>
            </Flower1Container> */}
            <BirdContainer>
                <StyledBird1>
                    <Bird1/>
                </StyledBird1>
                <StyledBird2>
                    <Bird1/>
                </StyledBird2>
            </BirdContainer>
            <Container>
                <EventsCalendar />
                <StyledCandle>
                    <Candle/>
                </StyledCandle>
            </Container>
            <SnakeImageContainer>
                <StyledSnake>
                    <Snake/>
                </StyledSnake>
                <Container>

                <ContactForm 
                    title="Are you a band?"
                    content="We'd love to hear from you!"
                    color="#fff"
                    />
                </Container>
            </SnakeImageContainer>

        </MainBody>
    )
}

export default LiveMusic;