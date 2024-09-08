import { Col, Row } from "antd";
import { lazy, Suspense  } from "react";
import Carousel from '../../components/Carousel';
import { BackgroundImageContainer } from "../../common/BackgroundImage/styles";
import ReviewsComponent from "../../common/Reviews";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import { Slide } from "react-awesome-reveal";
import LineBreaker from "../../common/LineBreaker";

import { SocialLink } from "../../components/Header/styles";
import { StyledImage, StyledLink } from "./styles";

// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

const HeaderBlock = lazy(() => import("../../components/ContentBlock/HeaderBlock"));

const Container = lazy(() => import("../../common/Container"));
const ScrollDown = lazy(() => import("../../common/ScrollDown"));
const Contact = lazy(() => import("../../components/ContactForm"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleContentBlock = lazy(() => import("../../components/ContentBlock/MiddleContentBlock"));

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Carousel isGrayscale={false}>
        <Row justify="space-between" align="middle">
          <HeaderBlock
            href={IntroContent.href}
            title={IntroContent.title}
            button={IntroContent.button}
            content={IntroContent.content}
          />
        </Row>
        <ScrollDown targetId={"about"} />
      </Carousel>
      <div id="foodordering"> 
        <Container>
          <div style={{ display: "flex", }}>

            <StyledLink href="https://deliveroo.co.uk/menu/camberley/farnham/the-queens-head-the-borough" target="_blank" rel="noopener noreferrer">
              <StyledImage src="/img/svg/deliveroo.svg" alt="Deliveroo Queens Head"/>
            </StyledLink>
            <StyledLink href="https://www.just-eat.co.uk/restaurants-thequeenshead-farnham/menu" target="_blank" rel="noopener noreferrer">
              <StyledImage src="/img/svg/justeat.svg" alt="Just Eat Queens Head"/>
            </StyledLink>
          </div>
        </Container> 
      </div>
      <div id="about" style={{ padding: '1% 0 ' }}>
          <LineBreaker text="About Us"/>
          <BackgroundImageContainer 
            src="https://assets.thequeensheadfarnham.co.uk/images/background.jpg"
            height="60vh"
            width="100%"
            fixed={true}
          >
          <Slide direction="up" triggerOnce={true}>
            <div>
              <MiddleContentBlock
                height='60vh'
                fontSize='1rem'
                title={MiddleBlockContent.title}
                content={MiddleBlockContent.text}
                button="See Our Menus"
                href="/food"
                />
            </div>
          </Slide>
        </BackgroundImageContainer>
      </div>
      {/* <ReviewsComponent /> */}
      <Container>
        <Contact title="Contact Us" content="Get in touch with us" id="" color="#161616"/>
      </Container>
    </>
  );
};

export default Home;
