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
    background: linear-gradient(50deg, lch(70% 80 60) 50%, lch(75% 40 180) 50%);

    @media only screen and ( max-width: 750px ){
        background: linear-gradient(80deg, lch(71% 85 59) 50%, lch(75% 40 180) 50%);
    }
`;