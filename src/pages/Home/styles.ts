import styled from "styled-components";

export const StyledLink = styled.a`
    display: block;
    width: 500px;
    height: 100px;
`;

export const StyledImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;

    @media only screen and ( max-width: 750px ){
        margin-left: 5%;
        margin-right: 5%;
    }
`;

export const FoodDeliveryLinks = styled.div`
    width: 100%;
    background: linear-gradient(50deg, #ff8111 50%, #00CCBC 50%);

    @media only screen and ( max-width: 750px ){
        background: linear-gradient(80deg, #ff8000 50%, #00CCBC 50%);
    }
`;