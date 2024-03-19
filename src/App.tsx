import styled from 'styled-components'
import './App.css'
import { Form } from './components/Form'
import { ResultCard } from './components/ResultCard'


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 1024px;
    margin: 0 auto;    
    padding: 32px;    


    @media (max-width: 1024px){
        width: 100%;
        margin: 0;
    }


    @media (max-width: 375px) {
      padding: 24px 16px 24px;
    }
`

const Header  = styled.h1`

  @media (max-width: 1024px){
    font-size: 38px;
  }
  @media (max-width: 375px){
    font-size: 32px;
  }
`

function App() {  

  return (
    <AppContainer>      
      <Header>Сколько надо жрать калорий</Header>
      <Form />
      <ResultCard />
    </AppContainer>
  )
}

export default App
