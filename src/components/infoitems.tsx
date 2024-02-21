import styled from "styled-components"

const InfoContainer = styled.div`
    width: 100%;
    height: 100vh;
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 100px;

`
const InfoTitle = styled.h2`
    font-size: 40px;
    font-family: 'Inter', sans-serif;
    color: var(--dark-blue);
`


const UlTag = styled.ul`
    display:flex;
    flex-direction: row ;
    list-style: none;

    gap: 40px;
    
    `
const LiTag = styled.li`
    display:flex;
    font-size: 30px;
    flex-direction : column;

    `
    interface InfoProps {
        title: string;
        local: string;
        hour: string; 
        data: string;
    }
export function InfoItems(props: InfoProps){

    return (

        <InfoContainer>
            <InfoTitle> {props.title} </InfoTitle>
            <UlTag>
                <LiTag>{props.local}</LiTag>
                <LiTag>{props.hour}</LiTag>
                <LiTag>{props.data}</LiTag>
            </UlTag>
        </InfoContainer>
    )
}