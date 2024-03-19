/** @jsx jsx */
import { FC } from "react"
import { $caloryStore, changedActivity, changedAge, changedGoal, changedHeight, changedMode, changedSex, changedWeight } from "../store"
import styled from "styled-components"
import { useUnit } from "effector-react"
import { activityList, goals } from "../constants"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: #2b2b2b;
    padding: 16px;
    border-radius:16px;
    gap: 8px;
`

const Input = styled.input`
    position: relative;
    height: 44px;
    border-radius: 4px;
    border:none;
    padding: 0px 8px;
    font-weight: 600;
    font-size: 18px;
    width: 150px;
`

const Field = styled.fieldset`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    gap:4px;
    padding: 0;
    margin: 0;
    border:none;
`
const Label = styled.p`
    font-weight: 600;
    margin: 12px 0px 0px;
`

const Button = styled.button<{isActive?:boolean}>`

    transition: 200ms;
    outline-color: rgb(45,255,196);

    &:active{

    }
    &:hover{
        -webkit-box-shadow:0px 0px 118px 7px rgba(45,255,196,0.26);
        -moz-box-shadow: 0px 0px 118px 7px rgba(45,255,196,0.26);
        box-shadow: 0px 0px 118px 7px rgba(45,255,196,0.26);
    }
    
    background-color: ${props=>props.isActive?'#1ac696':undefined};

    @media (max-width: 768px) {
    width: 100%;
  }
`

export const Form: FC = () => {
    const store = useUnit($caloryStore);

    return (
        <Container>
            <Label>Пол</Label>
            <Wrapper style={{flexWrap:'nowrap'}}>
                <Button isActive={store.sex==='female'} onClick={() => {
                    changedSex('female')
                }}>Посудомойка</Button>
                <Button isActive={store.sex==='male'} onClick={() => {
                    changedSex('male')
                }}>Мужлан</Button>
            </Wrapper>
            <Label>Параметры тела</Label>
            <Wrapper>
                <Field>
                    <Label style={{marginTop:0}}>Возраст</Label>
                    <Input type="number" value={store.age} onChange={(e)=>changedAge(+e.target.value)} placeholder="Возраст"/>
                </Field>
                <Field>
                    <Label style={{marginTop:0}}>Рост {store.sex==='male' && '(не члена)'}</Label>
                    <Input type="number" value={store.height} onChange={(e)=>changedHeight(+e.target.value)} placeholder="Укажи рост"/>
                </Field>
                <Field>
                    <Label  style={{marginTop:0}}>Вес</Label>
                    <Input type="number" value={store.weight} onChange={(e)=>changedWeight(+e.target.value)} placeholder="Ахах на весы встань"/>
                </Field>
            </Wrapper>
            <Label>Активность:</Label>            
            <Wrapper>
                {
                    activityList.map(item=>{
                        return(
                            <Button isActive={store.activity===item.activity} key={item.activity} onClick={() => {
                                changedActivity(item.activity);
                            }}>{item.title}</Button>
                        )
                    })
                }                             
            </Wrapper>
            <Label>Цель:</Label>            
            <Wrapper>
                {
                    goals.map(item=>{
                        return(
                            <Button isActive={store.goal===item.value} key={item.value} onClick={() => {
                                changedGoal(item.value);
                            }}>{item.title}</Button>
                        )
                    })
                }                             
            </Wrapper>
            <Label>Формула рассчета (это для умных):</Label>
            <Wrapper>
                <Button isActive={store.mode==='harris'} onClick={() => {
                    changedMode('harris');
                }}>harris</Button>
                <Button isActive={store.mode==='mifflin'} onClick={() => {
                    changedMode('mifflin');
                }}>Mifflin</Button>
            </Wrapper>
        </Container>
    )
}
