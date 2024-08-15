import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    padding-bottom: 5%;
    h1 {
        text-align: center;
    }
`;


export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const ReviewerName = styled.div`
    display: flex;
    flex-direction: row;

    h3 {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        margin: auto 0;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

export const ShowMore = styled.div`
    cursor: pointer;
    color: rgb(26, 77, 46);
    text-align: center;
    margin-top: 10px;
    font-size: 1rem;
`;

export const ReviewCard = styled.div.withConfig({ shouldForwardProp: (prop) => !['ref'].includes(prop) })`
    width: 250px;
    height: 100%;
    background-color: #eee;
    border-radius: 10px;
    color: #161616;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;
    
    h1,h2,h3,h4,h5,h6, p {
        color: #161616;
    }

`;
