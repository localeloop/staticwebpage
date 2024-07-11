import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
    position: relative;
    padding: 15% 0 8rem;
`

export const ContentWrapper = styled("div")`
    position: relative;
    max-width: 540px;

    @media only screen and (max-width: 575px) {
        padding-bottom: 4rem;
    }
`

export const ImageContainer = styled("div")`
    top: -100px;
    width: 130%;
    height: auto;
    position: relative;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;