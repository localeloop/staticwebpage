import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";

import UnderConstruction from "../../content/UnderConstruction.json";
import { Carousel } from "antd";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/ContentBlock/MiddleContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Food = () => {
    return (
        <Container padding="20% 15%" maxWidth="1700px">
            <ScrollToTop />
            <Carousel />
        </Container>
    )
}

export default Food;