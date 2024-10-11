import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";
import { useSex } from "../../../store";

export const SexPicker: FC = () => {
  const [sex, setSex] = useSex();

  return (
    <>
      <Label>Пол</Label>
      <Wrapper style={{ flexWrap: "nowrap" }}>
        <Button
          aria-label="Посудомойка"
          $isActive={sex === "female"}
          onClick={() => {
            setSex("female");
          }}
        >
          Посудомойка
        </Button>
        <Button
          aria-label="Мужлан"
          $isActive={sex === "male"}
          onClick={() => {
            setSex("male");
          }}
        >
          Мужлан
        </Button>
      </Wrapper>
    </>
  );
};
