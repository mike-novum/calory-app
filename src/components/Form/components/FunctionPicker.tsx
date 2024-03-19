import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";
import { useMode } from "../../../store";

export const FunctionPicker: FC = () => {
  const [mode, setMode] = useMode();

  ("Render");

  return (
    <>
      <Label>Формула рассчета (это для умных):</Label>
      <Wrapper>
        <Button
          $isActive={mode === "harris"}
          onClick={() => {
            setMode("harris");
          }}
        >
          harris
        </Button>
        <Button
          $isActive={mode === "mifflin"}
          onClick={() => {
            setMode("mifflin");
          }}
        >
          Mifflin
        </Button>
      </Wrapper>
    </>
  );
};
