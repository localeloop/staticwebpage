import { BackgroundImageContainer } from "./styles";
import { BackgroundImageProps } from '../types';

const BackgroundImage = (
  {
    backgroundImage = "", 
    children,
    fixed = false,
    height,
    width,
  }: BackgroundImageProps ) => (
  <BackgroundImageContainer
    fixed={fixed}
    width={width}
    height={height}
    backgroundImage={backgroundImage}
  >
    {children}
  </BackgroundImageContainer>
);

export default BackgroundImage;
