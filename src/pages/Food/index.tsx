import { lazy, useState } from "react";
import Carousel from '../../components/Carousel';
import ImageContainer, { CenteredContent, 
    TextContainer, PreservedText, StyledImage,
    FlippedContainer, InitialText } from "./styles";
import { Row, Col} from "antd";
import LineBreaker from "../../common/LineBreaker";
import FoodContent from "../../content/FoodContent.json";
import ScrollDown from "../../common/ScrollDown";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Food = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div id="intro" >
            <Carousel height="100vh">
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
                <StyledImage onClick={handleFlip} className={isFlipped ? "flipped" : ""} src="/img/svg/vegan.svg" alt="Food" />
                <ScrollDown />
            </Carousel>
            <Container padding="5% 5%" maxWidth="1700px">
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
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-sunday-menu-2.pdf" target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-sunday-menu-2.png" style={{width: '100%'}} />
                            </a>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <LineBreaker text="Roast" />
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-sunday-menu-1.pdf"  target="_blank">
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
                </ImageContainer>
                <LineBreaker />  
            </Container>
        </div>
    )
}

export default Food;