import { FC } from "react";
import styled from "styled-components";
import { useCalories } from "../../store";

const Container = styled.div`
  border-radius: 16px;
  padding: 16px;
  background: #1b1b1b;
  width: fit-content;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (prefers-color-scheme: light) {
    background-color: #f1f1f1;
  }

  @media (max-width: 1024px) {
    position: fixed;
    bottom: 0px;
    width: 100%;
    left: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

const Header = styled.h2`
  margin: 0px;
`;

const EmptyBlock = styled.div`
  height: 0px;
  @media (max-width: 1024px) {
    height: 128px;
  }
`;

const ResultText = styled.p`
  margin: 0px;
  font-weight: 700;
  font-size: 32px;
  color: #2dffc4;

  @media (prefers-color-scheme: light) {
    color: #1ac696;
  }
`;

const CalText = styled.span`
  color: #ffffff;
  font-size: 20px;

  @media (prefers-color-scheme: light) {
    color: #2b3b48;
  }
`;

export const ResultCard: FC = () => {
  const calories = useCalories();

  return (
    <>
      <EmptyBlock />
      <Container>
        <Header>Сколько нужно тебе хавать</Header>
        <ResultText>
          {Math.round(calories)} <CalText>ккал</CalText>
        </ResultText>
      </Container>
    </>
  );
};
