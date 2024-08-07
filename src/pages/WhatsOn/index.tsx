import { lazy, Suspense } from "react";
import { ImageContainer, WhatsOnContainer } from './styles';
import { Slide } from "react-awesome-reveal";
import Carousel from "../../components/Carousel";


const Container = lazy(() => import("../../common/Container"));
const LazyImage = lazy(() => import("../../common/LazyImage"));

const whatsOnImages = [
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-main.png",
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-openmic.png",
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-quiz-karaoke.png",
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-livemusic.png"
]

const WhatsOn = () => {

    const directions: ("left" | "right")[] = ['left', 'right'];

    return (
        <WhatsOnContainer>
            <Carousel height="50vh" />
            <Container padding="0 2%">
            { whatsOnImages.map((image, index) => (
                <Slide key={index} direction={directions[index % 2] || "right"} triggerOnce={true}>
                    <ImageContainer>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyImage src={image} alt={"What's On " + index} />
                        </Suspense>
                    </ImageContainer>
                </Slide>
            ))}
            </Container>
        </WhatsOnContainer>
    )
}

export default WhatsOn;