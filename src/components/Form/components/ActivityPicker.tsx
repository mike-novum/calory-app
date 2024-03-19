import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";
import { FemaleActivityList, MaleActivityList } from "../../../utils/constants";
import { useActivity, useSex } from "../../../store";

export const ActivityPicker: FC = () => {
  const [activity, setActivity] = useActivity();

  const [sex] = useSex();
  const activityList = sex == "male" ? MaleActivityList : FemaleActivityList;

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
