import { BackgroundImageContainer } from "./styles";
import { BackgroundImageProps } from '../types';

const BackgroundImage = (
  {
    src = "", 
    children,
    fixed = false,
    height,
    width,
  }: BackgroundImageProps ) => (

  <BackgroundImageContainer
    fixed={fixed}
    width={width}
    height={height}
    src={src}
  >
    {children}
  </BackgroundImageContainer>
);

export default BackgroundImage;
