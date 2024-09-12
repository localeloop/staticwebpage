import React from 'react';

// Styles
import { 
    MainBody, 
    StyledBird1,
    StyledBird2,
    BirdContainer,
    StyledSnake,
    SnakeImageContainer,
    StyledCandle,
 } from './styles';

import { ReactComponent as Bird1 } from './images/bird1.svg';
import { ReactComponent as Snake } from './images/snake.svg';
import { ReactComponent as Candle } from './images/candle.svg';


const Container = React.lazy(() => import('../../common/Container'));
const ImageMarquee = React.lazy(() => import('../../common/ImageMarquee'));
const ContactForm = React.lazy(() => import('../../components/ContactForm'));
const EventsCalendar = React.lazy(() => import('../../components/EventsCalendar'));


const images = [
    'bandphotos/bandphotos-1-min.jpg',
    'bandphotos/bandphotos-2-min.jpg',
    'bandphotos/bandphotos-3-min.jpg',
    'bandphotos/bandphotos-4-min.jpg',
    'bandphotos/bandphotos-5-min.jpg',
    'bandphotos/bandphotos-6-min.jpg',
    'bandphotos/bandphotos-7-min.jpg',
    'bandphotos/bandphotos-8-min.jpg',
    'bandphotos/bandphotos-9-min.jpg',
    'bandphotos/bandphotos-10-min.jpg',
    'bandphotos/bandphotos-11-min.jpg',
    'bandphotos/bandphotos-12-min.jpg',
    'bandphotos/bandphotos-13-min.jpg',
    'bandphotos/bandphotos-14-min.jpg',
    'bandphotos/bandphotos-15-min.jpg',
    'bandphotos/bandphotos-16-min.jpg',
    'bandphotos/bandphotos-17-min.jpg',
    'bandphotos/bandphotos-18-min.jpg',
    'bandphotos/bandphotos-19-min.jpg',
    'bandphotos/bandphotos-20-min.jpg',
    'bandphotos/bandphotos-21-min.jpg',
]

const LiveMusic = () => {

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