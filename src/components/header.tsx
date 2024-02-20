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
    padding: 160px 0 0 160px;

`
export function Header (){
    return (
        <>
            <HeaderTag>
                <HeaderMainText>
                    <h1> Cadastre-se </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad adipisci tenetur nihil molestias. Incidunt facere ullam voluptatum cumque reiciendis iste quia excepturi? Laudantium, hic consectetur natus officia veniam delectus!</p>
                </HeaderMainText>
                    <button> aqui</button>
            </HeaderTag>
        </>
    )
}