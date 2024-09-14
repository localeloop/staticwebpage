import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CarouselSlide } from './styles'; // Assuming this is where the styled-component CarouselSlide is defined.
import { getDeviceType } from '../../common/utils/getDeviceType';

interface LazyCarouselSlideProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LazyCarouselSlide: React.FC<LazyCarouselSlideProps> = ({ src, alt, className, style }) => {
    const [deviceType, setDeviceType] = useState(getDeviceType());
    const [hqLoaded, setHqLoaded] = useState(false);
    const slideRef = useRef<HTMLDivElement | null>(null);
    
    
    const getFullPath = useCallback((partialPath: string, isLowQuality: boolean = false) => {
        const parts = partialPath.split('/');
        const deviceFolder = isLowQuality ? 'lq' : deviceType; // Use 'lq' folder for low-quality images
        parts.splice(1, 0, deviceFolder);
        return `https://qh-store.nyc3.digitaloceanspaces.com/${parts.join('/')}`;
    }, [deviceType]);
    
    const [backgroundImage, setBackgroundImage] = useState<string>(getFullPath(src, true));

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hqLoaded ) {
                    const hqImage = new Image();
                    hqImage.src = getFullPath(src, false);
                    hqImage.onload = () => {
                        setBackgroundImage( hqImage.src );
                        setHqLoaded(true);
                    }

                    if (slideRef.current){
                        observer.unobserve(slideRef.current);
                    }
                }   
            });
        },
        { rootMargin: '1000px', threshold: 0 }
        );

        if (slideRef.current) {
        observer.observe(slideRef.current);
        }

        return () => {
        if (slideRef.current) {
            observer.unobserve(slideRef.current);
        }
        };
    }, [src, backgroundImage]);


    useEffect(() => {
        const handleResize = () => {
        setDeviceType( getDeviceType() );
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <CarouselSlide
            ref={slideRef}
            className={className}
            style={{
                ...style,
                backgroundImage: `url(${backgroundImage})`, // Use LQ or HQ image
                filter: hqLoaded ? 'none' : 'blur(10px)', // Apply blur only when LQ image is shown
                transition: 'background-image 0.3s ease-in-out, filter 0.3s ease-in-out', // Smooth transition for both background and blur
            }}
            aria-label={alt}
        />
    );
};
export default LazyCarouselSlide;