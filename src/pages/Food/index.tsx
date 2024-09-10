import { lazy, useState } from "react";
import Carousel from '../../components/Carousel';
import ImageContainer, { CenteredContent, 
    TextContainer, PreservedText, StyledImage,
    FlippedContainer, InitialText, ImageWrapper } from "./styles";
import { Row, Col} from "antd";
import LineBreaker from "../../common/LineBreaker";
import FoodContent from "../../content/FoodContent.json";
import ScrollDown from "../../common/ScrollDown";
import ImageMarquee from "../../common/ImageMarquee";

import { FoodDeliveryLinks, StyledLogoContainer, StyledLink } from "../Home/styles";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const images = [
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image1.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image2.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image3.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image4.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image5.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image6.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image7.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image8.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image11.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image12.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image13.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image14.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image15.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image16.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image17.jpeg',
    'https://assets.thequeensheadfarnham.co.uk/FoodPhotos/image18.jpeg',
]

const Food = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div id="intro" >
            <Carousel height="100vh">
                <FoodDeliveryLinks>
                    <StyledLogoContainer style={{ display: "flex", justifyContent: "space-between" }}>
                    <StyledLink href="https://deliveroo.co.uk/menu/camberley/farnham/the-queens-head-the-borough" target="_blank" rel="noopener noreferrer">
                        <img style={{ height: "100%", width: "100%" }} src="/img/svg/deliveroo.svg" alt="Deliveroo Queens Head"/>
                    </StyledLink>
                    <StyledLink href="https://www.just-eat.co.uk/restaurants-thequeenshead-farnham/menu" target="_blank" rel="noopener noreferrer">
                        <img style={{ height: "100%", width: "100%" }} src="/img/svg/justeat.svg" alt="Just Eat Queens Head"/>
                    </StyledLink>
                    </StyledLogoContainer>
                </FoodDeliveryLinks>
                <Container>
                    <CenteredContent>
                        <TextContainer className={isFlipped ? "flipped" : ""}>
                            {
                                isFlipped ? (
                                    <FlippedContainer>
                                        <PreservedText><p>{FoodContent.flip}</p></PreservedText>
                                        <PreservedText><h1>Did you know?</h1></PreservedText>
                                    </FlippedContainer>
                                ) : (
                                    
                                    <InitialText><h1>Believe it or Not</h1>{FoodContent.text}</InitialText>
                                )
                            }
                        </TextContainer>
                    </CenteredContent>
                </Container>
                <ImageWrapper className={isFlipped ? "flipped" : ""}>
                    <StyledImage onClick={handleFlip} className={isFlipped ? "flipped" : ""} src="/img/svg/vegan.svg" alt="Food" />
                    <p>Click Me!</p>
                </ImageWrapper>
                <ScrollDown />
            </Carousel>
            <ImageMarquee images={images}/>
            <Container maxWidth="1700px">
                <ScrollToTop />
                <ImageContainer>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Main Menu" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-main-menu.pdf" target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-main-menu.png" style={{width: '100%'}} />
                            </a>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Burgers" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-main-menu.pdf" target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-sunday-menu-2.png" style={{width: '100%'}} />
                            </a>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Roast" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-sunday-menu.pdf"  target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-sunday-menu-1.png" style={{marginTop: '5%', width:'100%'}} />
                            </a>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Sandwiches" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/sandwich-menu.pdf"  target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/sandwich-menu.png" style={{marginTop: '5%', width:'100%'}} />
                            </a>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Breakfast" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/breakfast-menu.pdf"  target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/breakfast-menu.jpg" style={{marginTop: '5%', width:'100%'}} />
                            </a>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Kids Menu" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/kids-menu.pdf"  target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/kids-menu.jpg" style={{marginTop: '5%', width:'100%'}} />
                            </a>
                        </Col>
                    </Row>
                </ImageContainer>
                <LineBreaker />  
            </Container>
        </div>
    )
}

export default Food;