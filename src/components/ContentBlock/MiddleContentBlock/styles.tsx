import styled from 'styled-components';

interface ContentWrapperProps {
  fontSize?: string;
  flexStyle?: string;
  height?: string;
}

export const MiddleBlockContainer = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: ${( props ) => props.flexStyle || 'center'};
  justify-content: center;
  width: 100%;
  height: ${( props ) => props.height || '100vh'};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  font-size: ${props => props.fontSize || '1.5rem'};
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  color: #161616;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  button {
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  h2, h1, p {
    color: #161616;
  }

  h2 {
    font-size: ${props => props.fontSize || '1rem'};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 0.5rem;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 414px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 375px){
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 320px){

    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Padding = styled.div`
  padding: 10% 0;

  @media (max-width: 768px) {
    padding: 50% 0 ;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;