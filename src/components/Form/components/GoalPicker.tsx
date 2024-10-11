import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";

import { FemaleGoals, MaleGoals } from "../../../utils/constants";
import { useGoal, useSex } from "../../../store";

export const GoalPicker: FC = () => {
  const [goal, setGoal] = useGoal();
  const [sex] = useSex();

  const goals = sex === "male" ? MaleGoals : FemaleGoals;

  return (
    <>
      <Label>Цель:</Label>
      <Wrapper>
        {goals.map((item) => {
          return (
            <Button
              aria-label={item.title}
              $isActive={goal === item.value}
              key={item.value}
              onClick={() => {
                setGoal(item.value);
              }}
            >
              {item.title}
            </Button>
          );
        })}
      </Wrapper>
    </>
  );
};
