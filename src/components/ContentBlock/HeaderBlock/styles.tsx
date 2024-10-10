import styled from 'styled-components';

interface ContentWrapperProps {
  fontSize?: string;
  flexStyle?: string;
}

export const HeaderBlockContainer = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  width: 100%;
  height: 100vh;
  text-wrap: balance;

  position: relative;
  bottom: 0;
  left: 0;
  right: 0;



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
  height: 100%;
  max-width: 1200px;
  color: #fff;
  background-color: lch(100% 0 0 / 0.8);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


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
    color: #111;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
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