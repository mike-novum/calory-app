import { FC } from "react";
import { Button, Label, Wrapper } from "../../../ui";
import { useMode } from "../../../store";

export const FunctionPicker: FC = () => {
  const [mode, setMode] = useMode();

  return (
    <>
      <Label>Формула рассчета (это для умных):</Label>
      <Wrapper>
        <Button
          aria-label="harris"
          $isActive={mode === "harris"}
          onClick={() => {
            setMode("harris");
          }}
        >
          harris
        </Button>
        <Button
          aria-label="Mifflin"
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
