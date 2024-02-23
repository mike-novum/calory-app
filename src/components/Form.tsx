/** @jsx jsx */
import { FC } from "react"
import { $caloryStore, ActivityType, changedActivity, changedAge, changedHeight, changedMode, changedSex, changedWeight } from "../store"
import styled from "styled-components"
import { useUnit } from "effector-react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Input = styled.input`
    position: relative;
    height: 44px;
    border-radius: 4px;
    border:none;
    padding: 0px 8px;
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
    margin: 12px 0px 0px;
`

const Button = styled.button`

    transition: 200ms;
    outline-color: rgb(45,255,196);

    &:active{

    }
    &:hover{
        -webkit-box-shadow:0px 0px 118px 7px rgba(45,255,196,0.26);
-moz-box-shadow: 0px 0px 118px 7px rgba(45,255,196,0.26);
box-shadow: 0px 0px 118px 7px rgba(45,255,196,0.26);


    }
`
const activityList:{title:string,activity: ActivityType}[] = [
    {
        activity:1.2,
        title:'Я и диван - монолит',
    },
    {
        activity:1.375,
        title:'Иногда хожу в магаз и погулять с корешами',
    },
    {
        activity:1.55,
        title:'Чучуть хожу в качалку',
    },
    {
        activity:1.725,
        title:'Активно хожу в качалку, часто нахожусь в движении',
    },
    {
        activity:1.9,
        title:'Гигаспорстмен',
    },
]

export const Form: FC = () => {
    const store = useUnit($caloryStore);

    return (
        <Container>
            <Label>Пол</Label>
            <Wrapper>
                <Button onClick={() => {
                    changedSex('female')
                }}>Посудомойка</Button>
                <Button onClick={() => {
                    changedSex('male')
                }}>Мужлан</Button>
            </Wrapper>
            <Wrapper>
                <Field>
                    <label>Возраст</label>
                    <Input type="number" value={store.age} onChange={(e)=>changedAge(+e.target.value)} placeholder="Возраст"/>
                </Field>
                <Field>
                    <label>Рост (не члена)</label>
                    <Input type="number" value={store.height} onChange={(e)=>changedHeight(+e.target.value)} placeholder="Укажи рост"/>
                </Field>
                <Field>
                    <label>Вес</label>
                    <Input type="number" value={store.weight} onChange={(e)=>changedWeight(+e.target.value)} placeholder="Ахах на весы встань"/>
                </Field>
            </Wrapper>
            <Label>Активность:</Label>            
            <Wrapper>
                {
                    activityList.map(item=>{
                        return(
                            <Button key={item.activity} onClick={() => {
                                changedActivity(item.activity);
                            }}>{item.title}</Button>
                        )
                    })
                }                             
            </Wrapper>
            <Label>Формула рассчета (это для умных):</Label>
            <Wrapper>
                <Button onClick={() => {
                    changedMode('harris');
                }}>harris</Button>
                <Button onClick={() => {
                    changedMode('mifflin');
                }}>Mifflin</Button>
            </Wrapper>
        </Container>
    )
}
