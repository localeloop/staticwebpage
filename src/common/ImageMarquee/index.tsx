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

interface PreloadObserverProps {
    images: string[],
    onPreload: (index: number) => void,
    preloadAhead: number
}

const PreloadObserver: React.FC<PreloadObserverProps> = ({ images, onPreload, preloadAhead }) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.001,  // Trigger the observer when the element is about 10% visible
      };
  
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    for (let i = 0; i < preloadAhead; i++) {
                        onPreload(index + i); // Preload the current and next few images
                    }
                }
            });
        }, options);
  
        // Attach observer to all image containers
        const imageElements = document.querySelectorAll('.marquee-item');
        imageElements.forEach((el, index) => {
            el.setAttribute('data-index', String(index));
            observerRef.current?.observe(el);
        });
  
        // Cleanup observer on component unmount
        return () => {
            if (observerRef.current) {
            observerRef.current.disconnect();
            }
        };
    }, [images, onPreload, preloadAhead]);
  
    return null;
};

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images, imageWidth, imageHeight, imageMargin }) => {
    const [preloadedImages, setPreloadedImages] = useState<number[]>([]);
    const controls = useAnimation();
    const trackRef = useRef<HTMLDivElement>(null);

    const totalWidth = images.length * (imageWidth + imageMargin * 2);

    const preloadImages = useCallback((index: number) => {
        if (!preloadedImages.includes(index)){
            setPreloadedImages(prev => [...prev, index]);
        }
    }, [preloadedImages, setPreloadedImages]);

    useEffect(() => {
        const animateMarquee = async () => {
            if( trackRef.current ){
                await controls.start({
                    x: [-totalWidth, 0],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 200,
                            ease: 'linear'
                        },
                    },
                });
            }
        }
        
        animateMarquee();
    }, [controls, totalWidth])

    console.log( preloadedImages )

    return (
        <MarqueeContainer height={imageHeight}>
            <MarqueeTrack ref={trackRef} animate={controls} style={{ width: `${totalWidth * 2}px` }}>
                {[...images, ...images].map((src, index) => (
                    <MarqueeItem className="marquee-item" key={index} style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, margin: `0 ${imageMargin}px` }}>
                        <Suspense fallback={<div>loading...</div>}>
                            {preloadedImages.includes(index) ? (
                                <LazyImage src={src} alt={`Image ${index}`} />
                                ) : (
                                <></>
                            )}
                        </Suspense>
                    </MarqueeItem>
                ))}
            </MarqueeTrack>
            <PreloadObserver
                images={images}
                onPreload={preloadImages}
                preloadAhead={6} // Preload 3 images ahead
            />
        </MarqueeContainer>
    );
};
    
export default ImageMarquee;