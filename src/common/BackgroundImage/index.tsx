import React, { useEffect, useState, useCallback, useMemo } from 'react';
import BackgroundImageContainer from './styles';
import { BackgroundImageProps } from '../types';
import { getDeviceType } from '../../common/utils/getDeviceType';
import getFullPath from '../../common/utils/imageUtils';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const BackgroundImage: React.FC<BackgroundImageProps> = React.memo(({
  src = "",
  children,
  fixed = false,
  height,
  width,
  fetchPriority = 'auto'
}) => {
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const { isInView, elementRef } = useIntersectionObserver({
    rootMargin: '200px',
    threshold: 0,
  });

  const handleResize = useCallback(() => {
    const newDeviceType = getDeviceType();
    if (newDeviceType !== deviceType) {
      setDeviceType(newDeviceType);
    }
  }, [deviceType]);

  useEffect(() => {
    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, [handleResize]);

  const backgroundImage = useMemo(() => getFullPath(src, deviceType, false), [src, deviceType]);

  return (
    <BackgroundImageContainer
      ref={elementRef}
      fixed={fixed}
      width={width}
      height={height}
      style={{
        backgroundImage: isInView ? `url(${backgroundImage})` : 'none',
      }}
    >
      {children}
    </BackgroundImageContainer>
  );
});

export default BackgroundImage;