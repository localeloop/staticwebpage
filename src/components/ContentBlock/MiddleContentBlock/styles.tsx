import styled from 'styled-components';

interface ContentWrapperProps {
  fontSize?: string;
  flexStyle?: string;
}

export const MiddleBlockContainer = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: ${( props ) => props.flexStyle || 'center'};
  justify-content: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  font-size: ${props => props.fontSize || '1.5rem'};
  padding: 2rem;
  text-align: center;
  width: 80%;
  color: #161616;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
  }

  button {
    color: #fff;
  }

  h2, p {
    color: #161616;
  }

  h2 {
    font-size: ${props => props.fontSize || '1.5rem'}; // Use the received fontSize prop or default to 1.5rem
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;