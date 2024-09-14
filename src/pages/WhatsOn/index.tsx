import { lazy, Suspense, useMemo } from "react";
import { ImageContainer, WhatsOnContainer } from './styles';
import { Slide } from "react-awesome-reveal";
import Carousel from "../../components/Carousel";
import Spinner from "../../common/Spinner";


const Container = lazy(() => import("../../common/Container"));
const LazyImage = lazy(() => import("../../common/LazyImage"));

interface WhatsOnImage {
    src: string,
    alt: string
}

const WhatsOn = () => {
    const directions: ("left" | "right")[] = ['left', 'right'];

    const whatsOnImages = useMemo<WhatsOnImage[]>(
        () => [
          {
            src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-main.png",
            alt: "What's On Header Image (What's On)"
          },
          {
            src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-openmic.png",
            alt: "Every Tuesday Queen's Head Hosts an Open Mic night for upcoming talent!"
          },
          {
            src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-quiz-karaoke.png",
            alt: "The Queens Head Karaoake Evening is on Thursdays from 9:30"
          },
          {
            src: "https://assets.thequeensheadfarnham.co.uk/images/whatson-livemusic.png",
            alt: "Live Music Every Sunday from 20:30 till midnight!"
          }
        ],
        []
      );
    

    return (
        <WhatsOnContainer>
            <Carousel height="20vh" />
            <Container padding="0 2%">
                {whatsOnImages.map((image, index) => (
                    <Slide key={index} direction={directions[index % 2] || "right"} triggerOnce={true}>
                        <ImageContainer>
                            <Suspense fallback={<Spinner />}>
                                <LazyImage src={image.src} alt={image.alt} />
                            </Suspense>
                        </ImageContainer>
                    </Slide>
                ))}
            </Container>
        </WhatsOnContainer>
    );
}

export default WhatsOn;