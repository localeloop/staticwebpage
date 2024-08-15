import styled from "styled-components";

interface Props {
  color?: string;
  direction?: string;
}

export const Content = styled("p")<Props>`
  color: ${(props) => props.color ? props.color : "#161616"};
  margin-top: 1.5rem;
`;

export const Container = styled("div")<Props>`
  position: relative;
  max-width: 700px;

  h6 {
    color: ${(props) => props.color ? props.color : "#161616"};
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;
