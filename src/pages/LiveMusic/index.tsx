import React, {useEffect, useRef} from 'react';
import Container from '../../common/Container';
import EventsCalendar from '../../components/EventsCalendar';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

// Styles
import { 
    MainBody, 
    ImageContainer,
    StyledBird1
 } from './styles';

import { ReactComponent as Bird1 } from './images/bird1.svg';
import ContactForm from '../../components/ContactForm';

 
const LiveMusic = () => {

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [-10, 100] );
    const x = useTransform(scrollY, [0, 1000], [10, -10] );

    return (
        <MainBody>
            <Container>
                <EventsCalendar />
                <ContactForm 
                    title="Are you a band?"
                    content="We'd love to hear from you!"
                    color="#fff"
                />
            </Container>
        </MainBody>
    )
}

export default LiveMusic;