import { lazy } from "react";
import { ImageContainer, WhatsOnContainer } from './styles';

const Container = lazy(() => import("../../common/Container"));

const whatsOnImages = [
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-main.png",
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-openmic.png",
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-quiz-karaoke.png",
    "https://assets.thequeensheadfarnham.co.uk/images/whatson-livemusic.png"
]

const WhatsOn = () => {
    return (
        <WhatsOnContainer>
            <Container padding="0 2%">
            { whatsOnImages.map((image, index) => (
                <ImageContainer>
                    <img key={index} src={image} alt={"What's On " + index} />
                </ImageContainer>
            ))}
            </Container>
        </WhatsOnContainer>
    )
}

export default WhatsOn;