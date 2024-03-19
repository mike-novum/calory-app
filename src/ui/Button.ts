import styled from "styled-components";

export const Button = styled.button<{ $isActive?: boolean }>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.8em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  transition: 200ms;
  outline-color: rgb(45, 255, 196);

  &:active {
  }
  &:hover {
    border-color: #2dffc4;
    -webkit-box-shadow: 0px 0px 118px 7px rgba(45, 255, 196, 0.26);
    -moz-box-shadow: 0px 0px 118px 7px rgba(45, 255, 196, 0.26);
    box-shadow: 0px 0px 118px 7px rgba(45, 255, 196, 0.26);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto #2dffc4;
  }

  background-color: ${(props) => (props.$isActive ? "#1ac696" : undefined)};

  @media (max-width: 768px) {
    width: 100%;
  }
`;
