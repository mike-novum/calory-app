import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 1024px;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 375px) {
    padding: 24px 16px 24px;
  }
`;
