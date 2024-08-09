import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Image } from "../../common/Image";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <Image src={`${src}`} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
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
                <Col lg={8} md={8} sm={12} xs={12}>
                  <Para>Mon - Wed: </Para>
                  <Para>10:00 - 23:00</Para>
                  <Para>Thursday: </Para>
                  <Para>10:00 - 00:00</Para>
                  <Para>Fri - Sat:</Para>
                  <Para>10:00 - 00:30</Para>
                  <Para>Sunday:</Para>
                  <Para>10:00 - 23:30</Para>
                </Col>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact Us")}</Language>
              <Para>e-Mail: </Para>
              <Para>thequeensheadfarnham@gmail.com</Para>
              <Para>musicqueensheadfarnham@gmail.com</Para>
              <Para>Tel: </Para>
              <Para>01252 726524</Para>
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
                <Image
                  src="https://assets.thequeensheadfarnham.co.uk/logo.png"
                  aria-label="homepage"
                  width="100%"
                  height="100%"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/the_queens_head_/"
                src="/img/svg/instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/TheQueensHeadFarnham"
                src="/img/svg/facebook.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
