import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";
import { activityList } from "../../../utils/constants";
import { useActivity } from "../../../store";

export const ActivityPicker: FC = () => {
  const [activity, setActivity] = useActivity();

  return (
    <>
      <Label>Активность:</Label>
      <Wrapper>
        {activityList.map((item) => {
          return (
            <Button
              $isActive={activity === item.activity}
              key={item.activity}
              onClick={() => {
                setActivity(item.activity);
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
