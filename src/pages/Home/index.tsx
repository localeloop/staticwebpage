import { Row } from "antd";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Carousel from "../../components/Carousel";
import LineBreaker from "../../common/LineBreaker";
import { StyledImage, StyledLink, StyledLogoContainer, FoodDeliveryLinks, About } from "./styles";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import Spinner from "../../common/Spinner";
import { fetchFrontPage, HomeApiData } from "./data";

const Container = lazy(() => import("../../common/Container"));
const ScrollDown = lazy(() => import("../../common/ScrollDown"));
const Contact = lazy(() => import("../../components/ContactForm"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const GoogleMapComponent = lazy(() => import("../../common/GoogleMap"));
const HeaderBlock = lazy(() => import("../../components/ContentBlock/HeaderBlock"));
const MiddleContentBlock = lazy(() => import("../../components/ContentBlock/MiddleContentBlock"));
const BackgroundImage = lazy(() => import("../../common/BackgroundImage"));

const Home = () => {
  const [apiData, setApiData] = useState<HomeApiData | null>(null);

  useEffect(() => {
    let mounted = true;

    fetchFrontPage()
      .then((data) => {
        if (mounted) setApiData(data);
      })
      .catch((e) => console.error("Failed to load front page content:", e));

    return () => {
      mounted = false;
    };
  }, []);

  // Defaults (existing)
  const defaultIntro = IntroContent;
  const defaultMiddle = MiddleBlockContent;

  // Effective values (API overrides)
  const introProps = useMemo(() => {
    return {
      href: defaultIntro.href,
      title: apiData?.header ?? defaultIntro.title,
      button: apiData?.buttonText ?? defaultIntro.button,
      content: apiData?.text ?? defaultIntro.content,
      // If HeaderBlock supports image props, you can pass apiData?.image here.
      // If it doesn't, leave it out and we can update HeaderBlock later.
    };
  }, [apiData, defaultIntro]);

  const middleProps = useMemo(() => {
    return {
      title: defaultMiddle.title,
      content: defaultMiddle.text,
      button: "See Our Menus",
      href: "/food",
    };
  }, [defaultMiddle]);

  return (
    <>
      <ScrollToTop />

      <Carousel isGrayscale={false}>
        <Suspense fallback={<Spinner />}>
          <Row justify="space-between" align="middle">
            <HeaderBlock
              href={introProps.href}
              title={introProps.title}
              button={introProps.button}
              content={introProps.content}
            // If HeaderBlock has an image prop, pass it:
            // imageSrc={apiData?.image?.src}
            // imageAlt={apiData?.image?.alt}
            // imageSrcSet={apiData?.image?.srcSet}
            // imageSizes={apiData?.image?.sizes}
            />
          </Row>
        </Suspense>

        <Suspense fallback={<div></div>}>
          <ScrollDown targetId={"about"} />
        </Suspense>
      </Carousel>

      <FoodDeliveryLinks>
        <StyledLogoContainer style={{ display: "flex", justifyContent: "space-between" }}>
          <StyledLink
            href="https://deliveroo.co.uk/menu/camberley/farnham/the-queens-head-the-borough"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage loading="lazy" src="/img/svg/deliveroo.svg" alt="Deliveroo Queens Head" />
          </StyledLink>
          <StyledLink
            href="https://www.just-eat.co.uk/restaurants-thequeenshead-farnham/menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage loading="lazy" src="/img/svg/justeat.svg" alt="Just Eat Queens Head" />
          </StyledLink>
        </StyledLogoContainer>
      </FoodDeliveryLinks>

      <LineBreaker text="About Us" />

      <About id="about">
        <BackgroundImage
          // If API image exists, use it; else fallback to your default
          src={apiData?.image?.src ?? "images/background.webp"}
          height="100vh"
          width="100%"
          fixed={true}
        >
          <Slide direction="up" triggerOnce={true}>
            <Suspense fallback={<div></div>}>
              <MiddleContentBlock
                height="60vh"
                title={middleProps.title}
                content={middleProps.content}
                button={middleProps.button}
                href={middleProps.href}
              />
            </Suspense>
          </Slide>
        </BackgroundImage>
      </About>

      <Suspense fallback={<div></div>}>
        <Container>
          <Contact title="Contact Us" content="Get in touch with us" id="" color="#161616" />
        </Container>
      </Suspense>

      <GoogleMapComponent />
    </>
  );
};

export default Home;
