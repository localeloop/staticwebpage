// BackgroundImage.tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import BackgroundImageContainer from './styles';
import { BackgroundImageProps } from '../types';
import { getDeviceType } from '../../common/utils/getDeviceType';
import getFullPath from '../../common/utils/imageUtils';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src = "",
  children,
  fixed = false,
  height,
  width,
}) => {
  const [hqLoaded, setHqLoaded] = useState(false);
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const [backgroundImage, setBackgroundImage] = useState<string>(getFullPath(src, deviceType, true));
  const {isInView, elementRef} = useIntersectionObserver({
    rootMargin: '1000px',
    threshold: 0
  });

  const handleResize = useCallback(() => {
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    if (isInView && !hqLoaded) {
      const hqImage = new Image();
      hqImage.src = getFullPath(src, deviceType, false);
      hqImage.onload = () => {
        setBackgroundImage(hqImage.src);
        setHqLoaded(true);
      };
    }
  }, [isInView, hqLoaded, src, deviceType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <BackgroundImageContainer
      ref={elementRef}
      fixed={fixed}
      width={width}
      height={height}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        filter: hqLoaded ? 'none' : 'blur(10px)',
        transition: 'background-image 0.3s ease-in-out, filter 0.3s ease-in-out',
      }}
    >
      {children}
    </BackgroundImageContainer>
  );
};

export default BackgroundImage;