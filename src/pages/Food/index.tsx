import { lazy } from "react";
import Carousel from '../../components/Carousel';
import ImageContainer from "./styles";
import { Row, Col} from "antd";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Food = () => {
    return (
        <div id="intro" >
            <Carousel height="60vh" />
            <Container padding="5% 5%" maxWidth="1700px">
                <ScrollToTop />
                <ImageContainer>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-main-menu.pdf" target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-main-menu.png" style={{width: '100%'}} />
                            </a>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-sunday-menu-2.pdf" target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-sunday-menu-2.png" style={{width: '100%'}} />
                            </a>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} justify="space-between" align="middle">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/qh-sunday-menu-1.pdf"  target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/qh-sunday-menu-1.png" style={{marginTop: '5%', width:'100%'}} />
                            </a>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <a href="https://assets.thequeensheadfarnham.co.uk/pdf/sandwich-menu.pdf"  target="_blank">
                                <img src="https://assets.thequeensheadfarnham.co.uk/images/sandwich-menu.png" style={{marginTop: '5%', width:'100%'}} />
                            </a>
                        </Col>
                    </Row>
                </ImageContainer>
            </Container>
        </div>
    )
}

export default Food;