import { Form, ResultCard } from "./components";
import { AppContainer, Header } from "./ui";

function App() {
  return (
    <AppContainer>
      <Header>Сколько надо жрать калорий</Header>
      <Form />
      <ResultCard />
    </AppContainer>
  );
}

export default App;
