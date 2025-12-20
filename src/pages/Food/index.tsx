import { lazy, useEffect, useMemo, useState } from "react";
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
import { fetchFoodPageData } from "./data";

const LazyImage = lazy(() => import("../../common/LazyImage"));
const Container = lazy(() => import("../../common/Container"));
const ScrollDown = lazy(() => import("../../common/ScrollDown"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ImageMarquee = lazy(() => import("../../common/ImageMarquee"));

const fallbackCards = [
    {
        label: "Main Menu",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/pdf/qh-main-menu.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/images/qh-main-menu.webp", alt: "main menu the queens head farnham" },
    },
    {
        label: "Burgers",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/pdf/qh-main-menu.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/images/qh-main-menu-2.webp", alt: "burgers menu the queens head farnham" },
    },
    {
        label: "Breakfast",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/pdf/breakfast-menu.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/images/breakfast-menu.webp", alt: "breakfast menu the queens head farnham" },
    },
    {
        label: "Kids Menu",
        pdfUrl: "https://assets.thequeensheadfarnham.co.uk/pdf/kids-menu.pdf",
        image: { src: "https://assets.thequeensheadfarnham.co.uk/images/kids-menu.webp", alt: "kids menu the queens head farnham" },
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

    const [pageTitle, setPageTitle] = useState("Believe it or Not");
    const [bodyText, setBodyText] = useState(FoodContent.text);
    const [flipText, setFlipText] = useState(FoodContent.flip);
    const [cards, setCards] = useState(fallbackCards);
    const [carouselImages, setCarouselImages] = useState<string[] | null>(null);

    const handleFlip = () => setIsFlipped((v) => !v);

    useEffect(() => {
        let mounted = true;

        fetchFoodPageData()
            .then((data) => {
                if (!mounted) return;

                setPageTitle(data.title || "Believe it or Not");
                setBodyText(data.body || FoodContent.text);
                setFlipText(data.flip || FoodContent.flip);

                // If Strapi returns replacement cards with images, use them;
                // otherwise keep fallbacks.
                const apiCards = data.cards
                    .map((c) => ({
                        label: c.label,
                        pdfUrl: c.pdfUrl,
                        image: c.image ?? null,
                    }))
                    .filter((c) => c.pdfUrl && c.image?.src);

                if (apiCards.length) setCards(apiCards as any);

                if (data.carouselImages?.length) setCarouselImages(data.carouselImages);
            })
            .catch((e) => console.error("Failed to load food page content:", e));

        return () => {
            mounted = false;
        };
    }, []);

    // Only replace carousel images if Strapi provides them
    const marqueeImages = useMemo(() => {
        return carouselImages?.length ? carouselImages : images;
    }, [carouselImages]);

    return (
        <div>
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

            <ImageMarquee images={marqueeImages} />

            <Container maxWidth="1700px">
                <ScrollToTop />
                <ImageContainer>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        {cards.slice(0, 2).map((card, i) => (
                            <Col key={card.label} xs={24} sm={24} md={12} lg={12} xl={12}>
                                <LineBreaker text={card.label} />
                                {card.pdfUrl ? (
                                    <a href={card.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        {/* Use <img> for responsive formats; fallback to LazyImage if you prefer */}
                                        <img
                                            src={card.image.src}
                                            srcSet={(card.image as any).srcSet}
                                            sizes={(card.image as any).sizes}
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                            alt={card.image.alt}
                                            loading="lazy"
                                        />
                                    </a>
                                ) : (
                                    <LazyImage src={card.image.src} style={{ width: "100%" }} alt={card.image.alt} />
                                )}
                            </Col>
                        ))}
                    </Row>

                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        {cards.slice(2, 4).map((card) => (
                            <Col key={card.label} xs={24} sm={24} md={12} lg={12} xl={12}>
                                <LineBreaker text={card.label} />
                                {card.pdfUrl ? (
                                    <a href={card.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={card.image.src}
                                            srcSet={(card.image as any).srcSet}
                                            sizes={(card.image as any).sizes}
                                            style={{ marginTop: "5%", width: "100%", height: "auto", display: "block" }}
                                            alt={card.image.alt}
                                            loading="lazy"
                                        />
                                    </a>
                                ) : (
                                    <LazyImage src={card.image.src} style={{ marginTop: "5%", width: "100%" }} alt={card.image.alt} />
                                )}
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
