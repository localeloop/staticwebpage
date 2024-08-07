import React from 'react';
import { HeaderBlockContainer, ContentWrapper } from './styles';

import { Slide } from 'react-awesome-reveal';

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

  return (
    <HeaderBlockContainer id="intro" flexStyle={flexStyle}>
      <Slide triggerOnce>
        <ContentWrapper fontSize={fontSize}>
          {title && <h2>{title}</h2>}
          {content && <p>{content}</p>}
        </ContentWrapper>
      </Slide>
    </HeaderBlockContainer>
  );
};

export default HeaderBlock;