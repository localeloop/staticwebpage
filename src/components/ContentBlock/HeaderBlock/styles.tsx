import styled from 'styled-components';

interface ContentWrapperProps {
  fontSize?: string;
  flexStyle?: string;
}

export const HeaderBlockContainer = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  width: 20%;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  font-size: 1rem;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  color: #161616;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }

  button {
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  h2, p {
    color: #161616;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;