import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";

import { goals } from "../../../utils/constants";
import { useGoal } from "../../../store";

export const GoalPicker: FC = () => {
  const [goal, setGoal] = useGoal();

  return (
    <>
      <Label>Цель:</Label>
      <Wrapper>
        {goals.map((item) => {
          return (
            <Button
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
