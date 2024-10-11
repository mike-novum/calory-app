import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  height: 44px;
  border-radius: 4px;
  border: none;
  padding: 0px 8px;
  font-weight: 600;
  font-size: 18px;

  width: 100%;

  &:focus,
  &:focus-visible {
    outline-style: solid;
    outline-offset: 0px;
    outline-color: #2dffc4;
    outline-width: 2px;
  }

  @media (prefers-color-scheme: light) {
    &:focus,
    &:focus-visible {
      outline-color: #75d5bb;
    }
  }
`;
