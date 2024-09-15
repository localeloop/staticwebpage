import { Row } from "antd";
import { lazy, Suspense } from "react";
import { Slide } from "react-awesome-reveal";
import Carousel from '../../components/Carousel';
import LineBreaker from "../../common/LineBreaker";
import { StyledImage, StyledLink, StyledLogoContainer, FoodDeliveryLinks  } from "./styles";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import Spinner from "../../common/Spinner";

const Container = lazy(() => import("../../common/Container"));
const ScrollDown = lazy(() => import("../../common/ScrollDown"));
const Contact = lazy(() => import("../../components/ContactForm"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const GoogleMapComponent = lazy(() => import('../../common/GoogleMap'));
const HeaderBlock = lazy(() => import("../../components/ContentBlock/HeaderBlock"));
const MiddleContentBlock = lazy(() => import("../../components/ContentBlock/MiddleContentBlock"));
const BackgroundImage = lazy(() => import('../../common/BackgroundImage'));

const Home = () => {
  return (
    <>
      {/* Render critical content immediately */}
      <ScrollToTop />
      <Carousel isGrayscale={false}>
        <Row justify="space-between" align="middle">
          <Suspense fallback={<Spinner />}>
            <HeaderBlock
              href={IntroContent.href}
              title={IntroContent.title}
              button={IntroContent.button}
              content={IntroContent.content}
            />
          </Suspense>
        </Row>
        <Suspense fallback={<div></div>}>
          <ScrollDown targetId={"about"} />
        </Suspense>
      </Carousel>
      <FoodDeliveryLinks>
        <StyledLogoContainer style={{ display: "flex", justifyContent: "space-between" }}>
          <StyledLink href="https://deliveroo.co.uk/menu/camberley/farnham/the-queens-head-the-borough" target="_blank" rel="noopener noreferrer">
            <StyledImage loading="lazy" src="/img/svg/deliveroo.svg" alt="Deliveroo Queens Head"/>
          </StyledLink>
          <StyledLink href="https://www.just-eat.co.uk/restaurants-thequeenshead-farnham/menu" target="_blank" rel="noopener noreferrer">
            <StyledImage loading="lazy" src="/img/svg/justeat.svg" alt="Just Eat Queens Head"/>
          </StyledLink>
        </StyledLogoContainer>
      </FoodDeliveryLinks>
      <LineBreaker text="About Us"/>
      <BackgroundImage 
        src="images/background.jpg"
        height="60vh"
        width="100%"
        fixed={true}
      >
        <Slide direction="up" triggerOnce={true}>
          <Suspense fallback={<div></div>}>
            <MiddleContentBlock
              height='60vh'
              fontSize='1rem'
              title={MiddleBlockContent.title}
              content={MiddleBlockContent.text}
              button="See Our Menus"
              href="/food"
            />
          </Suspense>
        </Slide>
      </BackgroundImage>
      <Suspense fallback={<div></div>}>
        <Container>
          <Contact title="Contact Us" content="Get in touch with us" id="" color="#161616"/>
        </Container>
      </Suspense>
      <GoogleMapComponent />
    </>
  );
};

export default Home;
