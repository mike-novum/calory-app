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

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BZHU = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const BZHUValue = styled.span`
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  color: #2dffc4;

  @media (prefers-color-scheme: light) {
    color: #1ac696;
  }
`;

const BZHULabel = styled.span`
  color: #ffffff;
  font-size: 12px;

  @media (prefers-color-scheme: light) {
    color: #2b3b48;
  }
`;

const calculateBZHU = (calories: number) => {
  if (!(calories > 0))
    return {
      b: 0,
      zh: 0,
      u: 0,
    };
  else
    return {
      b: Math.round((calories * 0.3) / 4),
      zh: Math.round((calories * 0.3) / 9),
      u: Math.round((calories * 0.4) / 4),
    };
};

export const ResultCard: FC = () => {
  const calories = useCalories();
  const bzhu = calculateBZHU(calories);

  return (
    <>
      <EmptyBlock />
      <Container>
        <Header>Сколько нужно тебе хавать</Header>
        <Footer>
          <ResultText>
            {Math.round(calories)} <CalText>ккал</CalText>
          </ResultText>
          <BZHU>
            <BZHUValue>
              {bzhu.b}/{bzhu.zh}/{bzhu.u}
            </BZHUValue>
            <BZHULabel>Б/Ж/У</BZHULabel>
          </BZHU>
        </Footer>
      </Container>
    </>
  );
};
