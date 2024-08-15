import styled from'styled-components';

export const WhatsOnContainer = styled.div`
    min-height: 80vh;

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