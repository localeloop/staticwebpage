import React, { lazy, Suspense, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MarqueeContainer, MarqueeTrack, MarqueeItem } from "./style";

const LazyImage = lazy(() => import('../../common/LazyImage'));

interface ImageMarqueeProps {
    images: string[];
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
    const controls = useAnimation();
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animate = async () => {
            if (trackRef.current){
                const trackWidth = trackRef.current.offsetWidth;
                await controls.start({
                    x: [-trackWidth, 0],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear"
                        }
                    }
                });
            }
        };
        animate();
    }, [controls]);

    return (
        <MarqueeContainer>
            <MarqueeTrack ref={trackRef} animate={controls}>
               {[...images, ...images].map((src, index) => (
                    <MarqueeItem key={index}> 
                        <Suspense fallback={<div>loading...</div>}>
                            <LazyImage src={src} alt={`Queen's head band photos ${index}`}/>
                        </Suspense>
                    </MarqueeItem>
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    )
}

export default ImageMarquee;