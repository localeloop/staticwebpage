import React from 'react';
import { NavLink } from "react-router-dom";
import { ContentBlockProps } from '../types';
import { MiddleBlockContainer, ContentWrapper } from './styles';
import { Button } from "../../../common/Button";
import { AnimatedContainer } from '../../../components/Slider/styles';

import {
  ButtonContainer,
} from './styles';

interface MiddleBlockProps {
  t?: any;
  id?: string;
  img?: string;
  href?: string;
  title?: string;
  height?: string;
  button?: string;
  content?: string;
  fontSize?: string;
  className?: string;
  flexStyle?: string;
}

const MiddleBlock: React.FC<MiddleBlockProps> = ({
  t,
  id,
  img,
  href,
  title,
  button,
  height,
  content,
  className,
  flexStyle,
  fontSize = "1.5rem",
}) => {
  return (
    <div id={id} className={className}>
      <MiddleBlockContainer flexStyle={flexStyle} height={height}>
        <AnimatedContainer>
          <ContentWrapper fontSize={fontSize}>
            {title && <h1>{title}</h1>}
            {content && <p>{content}</p>}
            <ButtonContainer>
              {button && <Button>{ href && <NavLink to={href} style={{ textDecoration: 'none' }}>{(button)}</NavLink> } </Button>}
            </ButtonContainer>  
          </ContentWrapper>
        </AnimatedContainer>
      </MiddleBlockContainer>
    </div>    
  );
};

export default MiddleBlock;