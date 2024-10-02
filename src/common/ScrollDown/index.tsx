import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

import { 
    ScrollDownContainer
} from './styles';

interface ScrollDownProps {
    targetId?: string;
    children?: React.ReactNode;
}

const ScrollDown: React.FC<ScrollDownProps> = ({ targetId, children }) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
            setIsAnimating(window.scrollY === 0);
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
           <SlArrowDown fontSize={"1.5rem"}/>
        </ScrollDownContainer>
    );
}

export default ScrollDown;