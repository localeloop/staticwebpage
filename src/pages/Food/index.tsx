import { lazy, useState } from "react";
import Carousel from "../../components/Carousel";
import ImageContainer, {
    CenteredContent,
    TextContainer,
    PreservedText,
    StyledImage,
    FlippedContainer,
    InitialText,
    ImageWrapper,
} from "./styles";
import { Row, Col } from "antd";
import LineBreaker from "../../common/LineBreaker";
import FoodContent from "../../content/FoodContent.json";
import { FoodDeliveryLinks, StyledLogoContainer, StyledLink } from "../Home/styles";

const LazyImage = lazy(() => import("../../common/LazyImage"));
const Container = lazy(() => import("../../common/Container"));
const ScrollDown = lazy(() => import("../../common/ScrollDown"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ImageMarquee = lazy(() => import("../../common/ImageMarquee"));

const fallbackCards = [
    {
        label: "Main Menu",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/MAIN_MENU_2026_April_FINAL_08b7ae684a.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/qh-main-menu-1.png", alt: "main menu the queens head farnham" },
    },
    {
        label: "Main Menu 2",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/pdf/qh-main-menu.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/qh-main-menu-1-1.png", alt: "burgers menu the queens head farnham" },
    },
    {
        label: "Bar Menu",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/pdf/breakfast-menu.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/BAR_MENU_APRIL_2026_FINAL_1f7cfd8bf4.png", alt: "breakfast menu the queens head farnham" },
    },
];

const images = [
    "FoodPhotos/image1.jpg",
    "FoodPhotos/image2.jpg",
    "FoodPhotos/image3.jpg",
    "FoodPhotos/image4.jpg",
    "FoodPhotos/image6.jpg",
    "FoodPhotos/image7.jpg",
    "FoodPhotos/image8.jpg",
    "FoodPhotos/image11.jpg",
    "FoodPhotos/image12.jpg",
    "FoodPhotos/image13.jpg",
    "FoodPhotos/image14.jpg",
    "FoodPhotos/image15.jpg",
    "FoodPhotos/image16.jpg",
    "FoodPhotos/image17.jpg",
    "FoodPhotos/image18.jpg",
];

const Food = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => setIsFlipped((v) => !v);

    // Hardcoded to use local content and fallbackCards only
    const pageTitle = "Believe it or Not";
    const bodyText = FoodContent.text;
    const flipText = FoodContent.flip;
    const cards = fallbackCards;

    return (
        <div>
            <ScrollToTop />
            <Carousel height="100vh">
                <Container>
                    <CenteredContent>
                        <TextContainer className={isFlipped ? "flipped" : ""}>
                            {isFlipped ? (
                                <FlippedContainer>
                                    <PreservedText><p>{flipText}</p></PreservedText>
                                    <PreservedText><h1>Did you know?</h1></PreservedText>
                                </FlippedContainer>
                            ) : (
                                <InitialText>
                                    <h1>{pageTitle}</h1>
                                    {bodyText}
                                </InitialText>
                            )}
                        </TextContainer>
                    </CenteredContent>
                </Container>

                <ImageWrapper className={isFlipped ? "flipped" : ""}>
                    <StyledImage onClick={handleFlip} className={isFlipped ? "flipped" : ""} src="/img/svg/vegan.svg" alt="Food" />
                    <p>Click Me!</p>
                </ImageWrapper>

                <ScrollDown />
            </Carousel>

            <FoodDeliveryLinks>
                <StyledLogoContainer style={{ display: "flex", justifyContent: "space-between" }}>
                    <StyledLink href="https://deliveroo.co.uk/menu/camberley/farnham/the-queens-head-the-borough" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" style={{ height: "100%", width: "100%" }} src="/img/svg/deliveroo.svg" alt="Deliveroo Queens Head" />
                    </StyledLink>
                    <StyledLink href="https://www.just-eat.co.uk/restaurants-thequeenshead-farnham/menu" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" style={{ height: "100%", width: "100%" }} src="/img/svg/justeat.svg" alt="Just Eat Queens Head" />
                    </StyledLink>
                </StyledLogoContainer>
            </FoodDeliveryLinks>

            <ImageMarquee images={images} />

            <Container maxWidth="1700px">
                <ImageContainer>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        {cards.map((card, i) => (
                            <Col key={`${card.label}-${i}`} xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div style={{ marginBottom: i < 2 ? "0" : "5%" }}>
                                    <LineBreaker text={card.label} />
                                    <a href={card.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={card.image.src}
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                            alt={card.image.alt}
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </ImageContainer>
                <LineBreaker />
            </Container>
        </div>
    );
};

export default Food;