import styled from "styled-components"
import { Button } from "./button"

const img = "/src/assets/headerimg.png"
const HeaderTag = styled.header `
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
`

const HeaderMainText = styled.div`
    max-width: 800px;
    display:grid;
    padding: 100px 0 0 160px;
`

const MainTitle = styled.h1`
    font-size: 80px;
    font-weight: 900;
    color: var(--darkblue);
    filter: var(--white-shadow);
`
const MainText = styled.p`
    max-width: 500px;

    text-align: justify;
    color:white;
    font-family: 'Geologica', sans-serif;
    font-size: 20px;

    margin-top: 20px;
    padding-bottom: 20px;
`

export function Header (){
    return (
        <>
            <HeaderTag>
                <HeaderMainText>
                    <MainTitle> E-SPORT </MainTitle>
                    <MainText>
                        ESports é o maior campeonato de jogos online da fenda
                        do Bikini. Vagas limitadas, cadastre-se já!
                    </MainText>
                    <Button isPrimary={true} title = {"INSCREVA-SE"}/>
                </HeaderMainText>
            </HeaderTag>
        </>
    )
}