import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({
  border = false,
  padding,
  maxWidth,
  children,
}: ContainerProps) => (
  <StyledContainer
    border={border}
    padding={padding}
    maxWidth={maxWidth}
  >
    {children}
  </StyledContainer>
);

export default Container;
