import React, {useState } from 'react';
import { HeaderBlockContainer, ContentWrapper } from './styles';

import { Slide } from 'react-awesome-reveal';
import Container from '../../../common/Container';

interface HeaderBlockProps {
  t?: any;
  id?: string;
  img?: string;
  href?: string;
  title?: string;
  button?: string;
  content?: string;
  fontSize?: string;
  className?: string;
  flexStyle?: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({
  className,
  id,
  title,
  content,
  button,
  href,
  flexStyle,
  fontSize = "1.5rem",
}) => {

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  return (
    <HeaderBlockContainer id="intro" flexStyle={flexStyle}>
      <Slide triggerOnce delay={isPageLoaded ? 100000 : 1500}>
        <Container>
          <ContentWrapper fontSize={fontSize}>
            {title && <h2>{title}</h2>}
            {content && <p>{content}</p>}
          </ContentWrapper>
        </Container>
      </Slide>
    </HeaderBlockContainer>
  );
};

export default HeaderBlock;