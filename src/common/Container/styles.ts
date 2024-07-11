import styled from "styled-components";

export const StyledContainer = styled("div")<{ border?: boolean, padding?: string, maxWidth?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${(p) => (p.maxWidth? p.maxWidth : "1200px")};
  margin-right: auto;
  margin-left: auto;
  padding: ${(p) => (p.padding? p.padding : "0 15px")};
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
