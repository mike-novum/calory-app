import styled from "styled-components";

export const Button = styled.button<{ $isActive?: boolean }>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.8em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #ffffff;
  cursor: pointer;
  transition: 200ms box-shadow;
  background-color: ${(props) => (props.$isActive ? "#1ac696" : "#1a1a1a")};

  &:active {
    opacity: 0.7;
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 118px 7px rgba(45, 255, 196, 0.26);
    -moz-box-shadow: 0px 0px 118px 7px rgba(45, 255, 196, 0.26);
    box-shadow: 0px 0px 118px 7px rgba(45, 255, 196, 0.26);
    background-color: ${(props) => (props.$isActive ? "#28d2a2" : "#202020")};
  }

  &:focus-visible {
    outline-style: solid;
    outline-offset: 0px;
    outline-color: #2dffc4;
    outline-width: 2px;
  }

  @media (prefers-color-scheme: light) {
    background-color: ${(props) => (props.$isActive ? "#1ac696" : "#e1e1e1")};
    color: ${(props) => (props.$isActive ? "#ffffff" : "#213547")};

    &:focus-visible {
      outline-color: #75d5bb;
    }
    &:hover {
      background-color: ${(props) => (props.$isActive ? "#28d2a2" : "#e4e4e4")};
    }
    &:active {
      background-color: ${(props) => (props.$isActive ? "#1cb68b" : "#dadada")};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
