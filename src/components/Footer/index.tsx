import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Image } from "../../common/Image";
import Container from "../../common/Container";
import LazyImage from "../../common/LazyImage";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src, alt }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <Image src={`${src}`} width="25px" height="25px" alt={alt} />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact Us")}</Language>
              <Para>e-Mail: thequeensheadfarnham@gmail.com</Para>
              <Para>e-Mail: musicqueensheadfarnham@gmail.com</Para>
              <Para>Tel: 01252 726524</Para>
              <Para></Para>
            </Col>
          </Row>
          <Extra />
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>The Queen's Head</Para>
              <Para>No. 9 The Borough</Para>
              <Para>Farnham, Surrey</Para>
              <Para>UK GU9 7NA</Para>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Opening Hours")}</Language>
              <Col lg={10} md={8} sm={12} xs={12}>
                <Para>Mon - Wed: 10:00 - 23:00</Para>
                <Para>Thursday: 10:00 - 00:00</Para>
                <Para>Fri - Sat: 10:00 - 00:30</Para>
                <Para>Sunday: 10:00 - 23:30</Para>

                <Para style={{ marginTop: "0.75rem" }}>
                  <strong>Kitchen open:</strong>
                </Para>
                <Para>Monday - Friday: 12–9.30pm</Para>
                <Para>Saturday & Sunday: 10am–9.30pm</Para>
              </Col>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <LazyImage
                  src="https://assets.thequeensheadfarnham.co.uk/logo.png"
                  aria-label="homepage"
                  alt="Queens head logo"
                />
              </LogoContainer>
            </NavLink>
            <Col>
              <FooterContainer>
                <SocialLink
                  href="https://www.instagram.com/the_queens_head_/"
                  alt="Queens head Instagram"
                  src="/img/svg/instagram.svg"
                />
                <SocialLink
                  href="https://www.facebook.com/TheQueensHeadFarnham"
                  alt="Queens head facebook"
                  src="/img/svg/facebook.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
