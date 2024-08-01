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
        <Image src={`svg/${src}`} width="25px" height="25px" />
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
              <Para>No. 9 The Burrow</Para>
              <Para>Farnham, Surrey</Para>
              <Para>UK GU9 7NA</Para>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Opening Hours")}</Language>
              <Row justify="space-between">
                <Col lg={8} md={8} sm={12} xs={12}>
                  <Para>Mon - Fri: </Para>
                  <Para>10:00 - 23:00</Para>
                  <Para>Sat - Sun: </Para>
                  <Para>10:00 - 00:00</Para>
                </Col>
              </Row>
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
                  src="svg/logo.png"
                  aria-label="homepage"
                  width="100%"
                  height="100%"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/the_queens_head_/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/TheQueensHeadFarnham"
                src="facebook.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
