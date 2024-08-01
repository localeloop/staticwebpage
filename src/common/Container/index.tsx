import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({
  border = false,
  padding,
  maxWidth,
  children,
  height
}: ContainerProps) => (
  <StyledContainer
    border={border}
    padding={padding}
    maxWidth={maxWidth}
    height={height}
  >
    {children}
  </StyledContainer>
);

export default Container;
