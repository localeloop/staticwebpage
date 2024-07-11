import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import FoodContent from "../../content/FoodContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/ContentBlock/MiddleContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const WhatsOn = () => {
    return (
        <Container padding="10% 0" maxWidth="1700px">
            <ContentBlock
                type="right"
                title={IntroContent.title}
                id="intro"
            />
        </Container>
    )
}

export default WhatsOn;