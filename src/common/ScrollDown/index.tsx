import React, { useState, useEffect } from "react";
import { FaArrowDown } from 'react-icons/fa';
import { useTranslation } from'react-i18next';

import { 
    ScrollDownContainer,
    Span
} from './styles';

interface ScrollDownProps {
    targetId?: string;
}

const ScrollDown: React.FC<ScrollDownProps> = ({ targetId }) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.pageYOffset > 0);
            setIsAnimating(window.pageYOffset === 0);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScrollDown = () => {
       if (targetId) {
            const element = document.getElementById(targetId) as HTMLDivElement;
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    }

    return (
        <ScrollDownContainer
            isScrolling={isScrolling}
            isAnimating={isAnimating}
            onClick={handleScrollDown}
        >  
            <FaArrowDown fontSize={"1.5rem"}/>
        </ScrollDownContainer>
    );
}

export default ScrollDown;