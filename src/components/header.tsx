import styled from "styled-components"

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
    padding: 120px 0 0 160px;
`

const MainTitle = styled.h1`
    font-size: 80px;
    font-weight: 900;
    color: var(--darkblue);
    filter: var(--white-shadow);
`
const MainText = styled.p`
    text-align: justify;
    color:white;
    font-family: 'Geologica', sans-serif;
    font-size: 20px;
    max-width: 400px;
`

export function Header (){
    return (
        <>
            <HeaderTag>
                <HeaderMainText>
                    <MainTitle> E-SPORT </MainTitle>
                    <MainText>
                        Inscreva-se 
                    </MainText>
                </HeaderMainText>
                    <button> aqui</button>
            </HeaderTag>
        </>
    )
}