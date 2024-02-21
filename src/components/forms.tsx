import styled from "styled-components"
import { Button } from "./button"

const OrangeBg = styled.div`
    background-color: rgb(255,167,93);
    width: 100%;
    height: 900px;

    display:flex;
    justify-content: center;
    align-items: center;

`

const FormTag = styled.form`
    width: 650px;
    height: 800px;

    background-color: #fcf6f6;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    

`
const FormContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    height: 800px;
    gap: 20px;

  
`
const FormGroup = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
`

const InputTag = styled.input`
    padding: 20px;
    background-color: #fcf6f6;
    outline:none;
    border:none;
    border-radius: 5px;
    box-shadow: rgba(58, 57, 57, 0.19) 0px 10px 20px, rgba(58, 57, 57, 0.23) 0px 6px 6px;
`

const LabelTag = styled.label`
    padding-left: 15px;
`


export function Form (){
    return (
        <OrangeBg>
        <FormTag>
            <FormContent>
                <h1> Formulário</h1>
                <FormGroup>
                    <LabelTag htmlFor="name">Nome</LabelTag>
                    <InputTag type="text" />
                </FormGroup>
                <FormGroup>
                    <LabelTag htmlFor="login">Nome</LabelTag>
                    <InputTag type="text" />
                </FormGroup>
                <FormGroup>
                    <LabelTag htmlFor="email">Nome</LabelTag>
                    <InputTag type="text" />
                </FormGroup>
                <FormGroup>
                    <LabelTag htmlFor="password">Nome</LabelTag>
                    <InputTag type="text" />
                </FormGroup>
                <FormGroup>
                    <LabelTag htmlFor="password">Nome</LabelTag>
                    <InputTag type="text" />
                </FormGroup>
                <Button isPrimary ={false} title={"Confirmar"}/>
            </FormContent>
        </FormTag>
        </OrangeBg>
    )
}