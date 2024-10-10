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
    box-shadow: 0 5px 30px 0 rgba(22,22,22,0.5);

    @media only screen and ( max-width: 750px ){
        background: linear-gradient(80deg, lch(71% 85 59) 50%, lch(75% 40 180) 50%);
    }
`;

export const About = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    height: 100vh;
    width: 100%;
`;