import styled from 'styled-components';

interface WrapperProps {
  $hasTitle: boolean;
}

export const VideoWrapper = styled.div < WrapperProps > `
  width: 100%;
  margin: ${props => props.$hasTitle ? '2rem 0' : '1rem 0'};

  .iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    background: #000; /* Prevents white flash while loading */

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      border: 0;
    }
  }
`;

export const VideoTitle = styled.p`
  margin-top: 12px;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  text-align: center;
`;