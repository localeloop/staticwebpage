import styled, { css, keyframes } from "styled-components";

const scrollAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const ScrollDownContainer = styled.div<{ isScrolling: boolean, isAnimating: boolean }>`
    color: #fff;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    cursor: pointer;
    ${({ isAnimating }) =>
        isAnimating &&
        css`
        animation: ${scrollAnimation} 1s infinite;
        `}
    opacity: ${({ isScrolling }) => (isScrolling ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
`;

export const Span = styled.span`
    font-size: 14px;
    font-weight: bold;
`;