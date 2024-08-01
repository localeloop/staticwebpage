import styled from 'styled-components';

export const BackgroundImageContainer = styled("div")<{ 
  src?: string, 
  maxWidth?: boolean, 
  fixed?: boolean,
  height?: string,
  width?: string,
}>`
  position: relative;
  height: ${(props) => props.height? props.height : "100vh"};
  width: ${(props) => props.width? props.width : "100%"};
  max-width: ${(props) => (props.maxWidth ? "1200px" : "")};

  background: #161616;
  background-image: ${(props) => props.src ? `url(${props.src})` : "rgba(22,22,22,1)"};
  background-attachment: ${(props) => props.fixed? "fixed" : "scroll"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    height: 80vh;
  }
`;