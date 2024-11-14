import { lazy, Suspense, useMemo } from "react";
import { ImageContainer, WhatsOnContainer } from './styles';
import { Slide } from "react-awesome-reveal";
import Carousel from "../../components/Carousel";
import Spinner from "../../common/Spinner";
import LineBreaker from "../../common/LineBreaker";


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
        <WhatsOnContainer className="whats on container">
            {/* <Carousel height="20vh" /> */}
            {/* <Container padding="">
            <LineBreaker text="This Month" color="#cccccc"/>
              <ImageContainer>
                <LazyImage src="https://assets.thequeensheadfarnham.co.uk/images/desktop/halloween.png" alt="halloween at the queens head"/>
              </ImageContainer>
            </Container> */}
            <Container padding="0 2% 10% 2%">
                <LineBreaker text="Every Week" color="#cccccc"/>
                {whatsOnImages.map((image, index) => (
                    <Slide key={index} direction={"up"} triggerOnce={true}>
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