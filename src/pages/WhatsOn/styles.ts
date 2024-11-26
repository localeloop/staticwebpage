import styled, { keyframes } from'styled-components';

export const WhatsOnContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(to top, lch(11% 1 360), lch(5% 1 270));
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ImageContainer = styled.div`
    img {
        width: 100%;
        height: auto;
        object-fit: contain;

        margin-top: 5%;

        @media (max-width: 768px) {
            max-width: 400px;
        }
    }
`;


const generateMultipleBoxShadows = () => {
    const particles = 50;
    const colors = Array.from({ length: particles }, () => {
      const x = Math.floor(Math.random() * 500 - 250);
      const y = Math.floor(Math.random() * 500 - 250);
      const hue = Math.floor(Math.random() * 360);
      return `${x}px ${y}px hsl(${hue}, 100%, 50%)`;
    });
    return colors.join(',');
};
  
const bang = keyframes`
    from {
        box-shadow: 0 0 #fff;
    }
    to {
      box-shadow: ${generateMultipleBoxShadows()};
    }
`;
  
const gravity = keyframes`
    to {
      transform: translateY(200px);
      opacity: 0;
    }
`;
  
const position = keyframes`
    0%, 19.9% {
      margin-top: 5%;
      margin-left: 40%;
    }
    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%, 59.9% {  
      margin-top: 20%;
      margin-left: 70%
    }
    60%, 79.9% {  
      margin-top: 30%;
      margin-left: 20%;
    }
    80%, 99.9% {  
      margin-top: 30%;
      margin-left: 80%;
    }
`;
  
export const PyroElement = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    > .before, > .after {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        box-shadow: ${generateMultipleBoxShadows()};
        animation: ${bang} 1.2s ease-out infinite backwards,
                ${gravity} 1.2s ease-in infinite backwards,
                ${position} 5s linear infinite backwards;
    }
    
    > .after {
        animation-delay: 1.8s, 1.8s, 1.8s;
        animation-duration: 1.8s, 1.8s, 6.8s;
    }
`;