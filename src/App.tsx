import styled from 'styled-components'
import './App.css'
import { Form } from './components/Form'
import { ResultCard } from './components/ResultCard'


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

function App() {  

  return (
    <AppContainer>      
      <h1>Сколько надо жрать калорий</h1>
     <Form />
     <ResultCard />
    </AppContainer>
  )
}

export default App
