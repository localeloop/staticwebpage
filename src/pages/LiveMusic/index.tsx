import React, { Suspense } from 'react';

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
import Spinner from '../../common/Spinner';


const Container = React.lazy(() => import('../../common/Container'));
const ImageMarquee = React.lazy(() => import('../../common/ImageMarquee'));
const ContactForm = React.lazy(() => import('../../components/ContactForm'));
const EventsCalendar = React.lazy(() => import('../../components/EventsCalendar'));


const images = [
    'bandphotos/bandphotos-1-min.webp',
    'bandphotos/bandphotos-2-min.webp',
    'bandphotos/bandphotos-3-min.webp',
    'bandphotos/bandphotos-4-min.webp',
    'bandphotos/bandphotos-5-min.webp',
    'bandphotos/bandphotos-6-min.webp',
    'bandphotos/bandphotos-7-min.webp',
    'bandphotos/bandphotos-8-min.webp',
    'bandphotos/bandphotos-9-min.webp',
    'bandphotos/bandphotos-10-min.webp',
    'bandphotos/bandphotos-11-min.webp',
    'bandphotos/bandphotos-12-min.webp',
    'bandphotos/bandphotos-13-min.webp',
    'bandphotos/bandphotos-14-min.webp',
    'bandphotos/bandphotos-15-min.webp',
    'bandphotos/bandphotos-16-min.webp',
    'bandphotos/bandphotos-17-min.webp',
    'bandphotos/bandphotos-18-min.webp',
    'bandphotos/bandphotos-19-min.webp',
    'bandphotos/bandphotos-20-min.webp',
    'bandphotos/bandphotos-21-min.webp',
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
                    <Bird1 aria-label="Traditional Tattoo Flash Art of a Swallow"/>
                </StyledBird1>
                <StyledBird2>
                    <Bird1 aria-label="Traditional Tattoo Flash Art of a Swallow"/>
                </StyledBird2>
            </BirdContainer>
            <Suspense fallback={<Spinner/>}>
                <Container>
                    <EventsCalendar />
                    <StyledCandle>
                        <Candle aria-label="Traditional Tattoo Flash Art of a Candle Burning at Both Ends"/>
                    </StyledCandle>
                </Container>
                <ImageMarquee 
                    images={images}
                    />
                <SnakeImageContainer>
                    <StyledSnake>
                        <Snake aria-label="Traditional Tattoo Flash Art of a Snake"/>
                    </StyledSnake>
                    <Container>

                    <ContactForm 
                        title="Are you a band?"
                        content="We'd love to hear from you!"
                        color="#fff"
                        />
                    </Container>
                </SnakeImageContainer>
            </Suspense>

        </MainBody>
    )
}

export default LiveMusic;