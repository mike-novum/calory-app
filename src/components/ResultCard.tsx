import { FC } from "react";
import { $calories } from "../store";
import { useUnit } from "effector-react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 16px;
    padding: 16px;
    background: #1b1b1b;
    width: fit-content;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Header = styled.h2`
    margin: 0px;
`

const ResultText = styled.p`
    margin: 0px;
    font-weight: 700;
    font-size: 32px;
    color:#2dffc4;
`
const CalText = styled.span`
    color:#ffffff;
    font-size: 20px;
`

export const ResultCard:FC  = ()=>{
    const calories = useUnit($calories);

    return(
        <Container>
            <Header>Сколько нужно тебе хавать</Header>
            <ResultText>{Math.round(calories)} <CalText>ккал</CalText></ResultText>
        </Container>
    )
}