import { Col, Row } from "antd";
import { lazy, Suspense  } from "react";
import Carousel from '../../components/Carousel';
import { BackgroundImageContainer } from "../../common/BackgroundImage/styles";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import { Slide } from "react-awesome-reveal";

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
          <HeaderBlock
            fontSize="5rem"
            flexStyle="flex-end"
            href={IntroContent.href}
            title={IntroContent.title}
            button={IntroContent.button}
            content={IntroContent.content}
          />
        </Row>
        <ScrollDown targetId={"about"} />
      </Carousel>
      <div id="about" style={{ padding: '50% 0' }}>
          <BackgroundImageContainer 
            src="https://assets.thequeensheadfarnham.co.uk/images/background.jpg"
            height="60vh"
            width="100%"
            fixed={true}
          >
          <Slide direction="up" triggerOnce={true}>
            <MiddleContentBlock
              height='60vh'
              title={MiddleBlockContent.title}
              content={MiddleBlockContent.text}
              fontSize='1rem'
            />
          </Slide>
        </BackgroundImageContainer>
      </div>
      <Container>
        <Contact title="Contact Us" content="Get in touch with us" id=""/>
      </Container>
    </>
  );
};

export default Home;
