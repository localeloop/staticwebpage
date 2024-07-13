import React from 'react';
import { ContentBlockProps } from '../types';
import { MiddleBlockContainer, ContentWrapper } from './styles';
import { Button } from "../../../common/Button";
import { AnimatedContainer } from '../../../components/Slider/styles';

import {
  ButtonContainer,
} from './styles';

interface MiddleBlockProps {
  className?: string;
  id?: string;
  title?: string;
  content?: string;
  button?: string;
  img?: string;
  t?: any;
  fontSize?: string;
  href?: string;
  flexStyle?: string;
}

const MiddleBlock: React.FC<MiddleBlockProps> = ({
  className,
  id,
  title,
  content,
  button,
  img,
  t,
  href,
  flexStyle,
  fontSize = "1.5rem",
}) => {
  return (
    <div id={id} className={className}>
      <MiddleBlockContainer flexStyle={flexStyle}>
        <AnimatedContainer>
          <ContentWrapper fontSize={fontSize}>
            {title && <h2>{title}</h2>}
            {content && <p>{content}</p>}
            <ButtonContainer>
              {button && <Button>{ href && <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{(button)}</a>}</Button>}
            </ButtonContainer>
          </ContentWrapper>
        </AnimatedContainer>
      </MiddleBlockContainer>
    </div>    
  );
};

export default MiddleBlock;