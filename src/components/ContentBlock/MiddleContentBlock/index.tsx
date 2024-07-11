import React from 'react';
import { ContentBlockProps } from '../types';
import { MiddleBlockContainer, ContentWrapper } from './styles';
import { Button } from "../../../common/Button";

import {
  ButtonContainer,
} from './styles';

interface MiddleBlockProps {
  id?: string;
  title?: string;
  content?: string;
  button?: string;
  img?: string;
  t?: any;
  fontSize?: string;
}

const MiddleBlock: React.FC<MiddleBlockProps> = ({
  id,
  title,
  content,
  button,
  img,
  t,
  fontSize = "1.5rem",
}) => {
  return (
    <div id={id}>
      <MiddleBlockContainer>
        <ContentWrapper fontSize={fontSize}>
          {title && <h2>{title}</h2>}
          {content && <p>{content}</p>}
          <ButtonContainer>
            {button && <Button>{(button)}</Button>}
          </ButtonContainer>
        </ContentWrapper>
      </MiddleBlockContainer>
    </div>    
  );
};

export default MiddleBlock;