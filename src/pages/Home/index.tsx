import { Spin } from "antd";
import { Col, Row } from "antd";
import { lazy, Suspense  } from "react";
import Carousel from '../../components/Carousel';
import { BackgroundImageContainer } from "../../common/BackgroundImage/styles";
import { AnimatedContainer } from "../../components/Slider/styles";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";

// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleContentBlock = lazy(() => import("../../components/ContentBlock/MiddleContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ScrollDown = lazy(() => import("../../common/ScrollDown"));


const images = [
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-1.JPG', alt: 'farnham queens head right side bar', title: 'right side bar' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-3.JPG', alt: 'farnham queens head nook area fullers', title: 'nook area' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-5.JPG', alt: 'farnham queens head public house statue head plantlife', title: 'public house farnham' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-6.JPG', alt: 'farnham queens head public house guinness amstel stowford press', title: 'tap house' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-7.JPG', alt: 'queens head farnham ale taps hsb london pride', title: 'ale taps' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-8.JPG', alt: 'queens head farnham entrance welcome', title: 'entrance' },
  { src: 'https://assets.thequeensheadfarnham.co.uk/images/carousel-9.JPG', alt: 'queens head farnham outside area plant life outside seating', title: 'outside area' },
];

const Home = () => {
  return (
    <>
      <ScrollToTop />
        <Carousel images={images} isGrayscale={false}>
          
          <Row justify="space-between" align="middle">
            <AnimatedContainer>

              <Col xs={24} md={12}>
                <MiddleContentBlock
                  title={IntroContent.title}
                  content={IntroContent.content}
                  button={IntroContent.button}
                  href={IntroContent.href}
                  fontSize="5rem"
                  flexStyle="flex-end"
                  />
              </Col>
            </AnimatedContainer>
            <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "2%"}}>
            </Col>
          </Row>
          <ScrollDown targetId={"about"} />
        </Carousel>
      <Container padding="10% 0" maxWidth="1700px">
        <BackgroundImageContainer 
          fixed={true}
          height="10%"
          backgroundImage="https://assets.thequeensheadfarnham.co.uk/images/background.jpg" 
        >
          <MiddleContentBlock
            id="about"
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
            fontSize='1rem'
          />
        </BackgroundImageContainer>
      </Container>
    </>
  );
};

export default Home;
