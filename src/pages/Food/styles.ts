import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    display: flex
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    img {
        height: 50%;
        width: 50%;
    }
`

export default ImageContainer;