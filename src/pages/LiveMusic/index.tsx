import React, {useEffect, useRef} from 'react';
import Container from '../../common/Container';
import EventsCalendar from '../../components/EventsCalendar';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import ImageMarquee from '../../common/ImageMarquee';

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

const images = [
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-1-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-2-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-3-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-4-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-5-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-6-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-7-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-8-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-9-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-10-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-11-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-12-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-13-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-14-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-15-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-16-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-17-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-18-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-19-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-20-min.jpg',
    'https://qh-store.nyc3.digitaloceanspaces.com/bandphotos/bandphotos-21-min.jpg',
]

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
            <ImageMarquee 
                images={images} 
                imageHeight={400}
                imageWidth={500}
                imageMargin={20}
            />
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