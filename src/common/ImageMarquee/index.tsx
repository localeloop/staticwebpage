import React, { lazy, Suspense, useRef, useEffect, useState, useCallback, useMemo } from "react";
import { getDeviceType } from "../utils/getDeviceType";
import { MarqueeContainer, MarqueeTrack, MarqueeItem } from "./style";
import { useAnimation } from "framer-motion";

const Spinner = lazy(() => import("../Spinner"));

interface ImageMarqueeProps {
    images: string[];
}

const sizes = {
  desktop: {
    height: 500,
    width: 500,
    margin: 20
  },
  tablet: {
    height: 450,
    width: 450,
    margin: 15
  },
  phones: {
    height: 250,
    width: 250,
    margin: 10
  },
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [deviceType, setDeviceType] = useState(getDeviceType());
    const [imagesLoaded, setImagesLoaded] = useState<HTMLImageElement[]>([]);
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [imageMargin, setImageMargin] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
      const setSizes = sizes[getDeviceType()]
      setImageWidth( setSizes.width );
      setImageHeight( setSizes.height );
      setImageMargin( setSizes.margin );
    }, [getDeviceType] )

    const getFullPath = useCallback(( partialPath: string )=> {
      const parts = partialPath.split('/');
      parts.splice(1, 0, deviceType);
      return `https://qh-store.nyc3.digitaloceanspaces.com/${parts.join('/')}`;
    }, [ deviceType ])

    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];

            const imagePromises = images.map(partialPath => {
              return new Promise<void>((resolve, reject) => {
                  const img = new Image();
                  const fullPath = getFullPath( partialPath );
                  img.src = fullPath;
                  console.log('Full image path:', fullPath);
                  img.onload = () => {
                    loadedImages.push(img); // Push the full path of the loaded image
                    resolve();
                  };
                  img.onerror = reject;
              });
            });

            await Promise.all(imagePromises);
            console.log('Loaded images:', loadedImages);
            setImagesLoaded(loadedImages);
        };

        preloadImages();
    }, [images, getFullPath]);
    
    const tripleBuffer = useMemo(() => [...imagesLoaded,...imagesLoaded,...imagesLoaded], [imagesLoaded]);
    
    const totalWidth = images.length * (imageWidth + imageMargin * 2);

    useEffect(() => {
        if (tripleBuffer.length === imagesLoaded.length * 3) {
          const animateMarquee = async () => {
            if (trackRef.current) {
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
      }
    }, [totalWidth, imagesLoaded, tripleBuffer.length]);
    
    useEffect(() => {
      const handleResize = () => {
        setDeviceType( getDeviceType() );
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [])

    if (!imagesLoaded) {
      return <Spinner />
    }
    
    return (
        <MarqueeContainer height={imageHeight}>
            <MarqueeTrack ref={trackRef} animate={controls} style={{ width: `${totalWidth * 2}px` }}>
                {tripleBuffer.map((src, index) => (
                    <MarqueeItem 
                      key={index}
                      style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, margin: `0 ${imageMargin}px` }}>
                        <Suspense fallback={<div>loading...</div>}>
                          <img src={ src.src } alt={`Image ${index}`} />
                        </Suspense>
                    </MarqueeItem>
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    );
};
    
export default ImageMarquee;