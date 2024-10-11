import { FC } from "react";

import { Container } from "./ui";
import {
  ActivityPicker,
  GoalPicker,
  SexPicker,
  BodyParamsPicker,
} from "./components";
import { FunctionPicker } from "./components/FunctionPicker";

export const Form: FC = () => {
  return (
    <Container>
      <SexPicker />
      <BodyParamsPicker />
      <ActivityPicker />
      <GoalPicker />
      <FunctionPicker />
    </Container>
  );
};
