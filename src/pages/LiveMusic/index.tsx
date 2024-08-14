import React, {useEffect, useRef} from 'react';
import Container from '../../common/Container';
import CustomCalendar from '../../components/EventCalendar';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

// Styles
import { 
    MainBody, 
    ImageContainer,
    StyledBird1
 } from './styles';

import { ReactComponent as Bird1 } from './images/bird1.svg';

 
const LiveMusic = () => {

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [-10, 100] );
    const x = useTransform(scrollY, [0, 1000], [10, -10] );

    return (
        <MainBody>
            <CustomCalendar />
        </MainBody>
    )
}

export default LiveMusic;