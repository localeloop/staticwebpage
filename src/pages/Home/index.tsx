import { Col, Row } from "antd";
import { lazy, Suspense  } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import { BackgroundImageContainer } from "../../common/BackgroundImage/styles";
import Carousel from '../../components/Carousel';
import { Spin } from "antd";

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
const BookingWidget = lazy(() => import("../../common/BookingWidget"));


const images = [
  { src: 'carousel-1.jpg', alt: 'Image 1', title: 'Item No. 1' },
  { src: 'carousel-2.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-3.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-4.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-6.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-7.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-8.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-9.jpg', alt: 'Image 2', title: 'Item No. 2' },
  { src: 'carousel-10.jpg', alt: 'Image 2', title: 'Item No. 2' },
];

const Home = () => {
  return (
    <>
      <ScrollToTop />
        <Carousel images={images} isGrayscale={false}>
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <MiddleContentBlock
                title={IntroContent.title}
                content={IntroContent.content}
                button={IntroContent.button}
                fontSize="5rem"
              />
            </Col>
            <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "2%"}}>
              <BookingWidget />
            </Col>
          </Row>
          <ScrollDown targetId={"about"} />
        </Carousel>
      <Container padding="10% 0" maxWidth="1700px">
        <BackgroundImageContainer 
          fixed={true}
          backgroundImage="/images/couch-area.jpg" >
        <MiddleContentBlock
          id="about"
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />
        </BackgroundImageContainer>
      </Container>

      <BackgroundImageContainer backgroundImage="/images/background.jpg" fixed={true}></BackgroundImageContainer>
      
      <Container padding="10% 0" maxWidth="2000px">
      </Container>
    </>
  );
};

export default Home;
