import { FC } from "react";
import { Field, Input, Label, Wrapper } from "../../../ui";

import { useBodyParams, useSex } from "../../../store";

export const BodyParamsPicker: FC = () => {
  const { weight, age, height, changedAge, changedHeight, changedWeight } =
    useBodyParams();

  const [sex] = useSex();

  return (
    <>
      <Label>Параметры тела</Label>
      <Wrapper>
        <Field>
          <Label style={{ marginTop: 0 }}>Возраст</Label>
          <Input
            name="test"
            type="number"
            value={age}
            onChange={(e) => changedAge(e.target.value)}
            placeholder="Возраст"
          />
        </Field>
        <Field>
          <Label style={{ marginTop: 0 }}>
            Рост {sex === "male" && "(не члена)"}
          </Label>
          <Input
            type="number"
            value={height}
            onChange={(e) => changedHeight(e.target.value)}
            placeholder="Укажи рост"
          />
        </Field>
        <Field>
          <Label style={{ marginTop: 0 }}>Вес</Label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => changedWeight(e.target.value)}
            placeholder="Ахах на весы встань"
          />
        </Field>
      </Wrapper>
    </>
  );
};
