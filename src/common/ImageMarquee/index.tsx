import React, { lazy, Suspense, useRef, useEffect, useState, useCallback } from "react";
import { useAnimation } from "framer-motion";
import { MarqueeContainer, MarqueeTrack, MarqueeItem } from "./style";

const LazyImage = lazy(() => import('../../common/LazyImage'));

interface ImageMarqueeProps {
    images: string[];
    imageWidth: number;
    imageHeight: number;
    imageMargin: number;
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images, imageWidth, imageHeight, imageMargin }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const controls = useAnimation();
    const trackRef = useRef<HTMLDivElement>(null);

    const totalWidth = images.length * (imageWidth + imageMargin * 2);
    const tripleBuffer = [...images, ...images];
    
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = tripleBuffer.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            await Promise.all(imagePromises);
            setImagesLoaded(true);
        };

        preloadImages();
    }, [tripleBuffer]);

    useEffect(() => {
        const animateMarquee = async () => {
            if( trackRef.current ){
                await controls.start({
                    x: [-totalWidth, 0],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 100,
                            ease: 'linear'
                        },
                    },
                });
            }
        }
        
        animateMarquee();
    }, [controls, totalWidth])

    if (!imagesLoaded) {
        return <div>Loading images...</div>
    }

    return (
        <MarqueeContainer height={imageHeight}>
            <MarqueeTrack ref={trackRef} animate={controls} style={{ width: `${totalWidth * 2}px` }}>
                {tripleBuffer.map((src, index) => (
                    <MarqueeItem className="marquee-item" key={index} style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, margin: `0 ${imageMargin}px` }}>
                        <Suspense fallback={<div>loading...</div>}>
                            <LazyImage src={src} alt={`Image ${index}`} />
                        </Suspense>
                    </MarqueeItem>
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    );
};
    
export default ImageMarquee;