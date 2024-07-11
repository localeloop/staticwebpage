import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: #1A4D2E;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 50px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background-color: #4F6F52;
  }
`;
