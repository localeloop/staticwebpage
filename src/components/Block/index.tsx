import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  color?: string;
  t: any;
}

const Block = ({ title, content, color, t }: Props) => {
  return (
    <Container color={color}>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content color={color}>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
