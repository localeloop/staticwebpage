import { BackgroundImageContainer } from "./styles";
import { BackgroundImageProps } from '../types';


const Container = ({
  backgroundImage = "",
  children,
}: BackgroundImageProps ) => (
  <BackgroundImageContainer
    backgroundImage={backgroundImage}
  >
    {children}
  </BackgroundImageContainer>
);

export default Container;
