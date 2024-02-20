import styled from "styled-components";
import css from "styled-components";

interface ButtonProps{
    isPrimary:boolean;
}

const ButtonTag = styled.a<{$isPrimary?:boolean;}>`
    //props
    width: ${props => props.$isPrimary ? "200px" : "150px" };
    padding: 20px;

    color:white;
    background-color: var(--darkblue);
    filter: ${props => props.$isPrimary ? "var(--white-shadow)": ""};

    border:none;
    border-radius: 40px;

    text-align: center;
    font-weight: 800px;
    
    ${props => props.$isPrimary ? 
        "&:hover {filter:none; transform:translateY(7px)}"
        :""
    }
    
`
export function Button ({isPrimary}: ButtonProps){
    return (
        <>
            <ButtonTag $isPrimary = {isPrimary}>
                INSCREVER-SE 
            </ButtonTag>
        </>
    )   

}