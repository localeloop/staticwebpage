import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Image } from "../../../common/Image";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";

import {
  RightBlockContainer,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

import {
  ImageContainer
} from '../commonStyles';

const RightBlock = ({
  t,
  id,
  icon,
  title,
  image,
  button,
  content,

}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
    <Fade triggerOnce={true}>
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={icon ? 11 : 12} md={icon ? 11 : 24} sm={icon ? 11 : 24} xs={24}>
          <ContentWrapper>
            <h6>{t(title)}</h6>
          </ContentWrapper>
          <ButtonWrapper>
            <Button onClick={() => scrollTo("contact")}>{t(button)}</Button>
          </ButtonWrapper>
        </Col>
        <Col lg={icon ? 13 : 12} md={icon ? 13 : 24} sm={icon ? 13 : 24} xs={24}>
          { image ? (
            <ImageContainer>
              <Image src={image} width="100%" height="100%" />
            </ImageContainer>
          )
        : null}
        </Col>
      </Row>
    </Fade>
  </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
