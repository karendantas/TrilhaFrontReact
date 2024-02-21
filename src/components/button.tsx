import styled from "styled-components";

interface ButtonProps{
    isPrimary:boolean;
    title:string;
}

const ButtonTag = styled.a<{$isPrimary?:boolean;}>`
    //props
    width: ${props => props.$isPrimary ? "200px" : "150px" };
    padding: ${props => props.$isPrimary ? "20px": "10px"};

    color:white;
    background-color: var(--darkblue);
    filter: ${props => props.$isPrimary ? "var(--white-shadow)": ""};

    border:none;
    border-radius: 40px;

    text-align: center;
    font-size: ${props => props.$isPrimary ? "20px": "15px"};
    font-weight: bolder;
    
    ${props => props.$isPrimary ? 
        "&:hover {filter:none; transform:translateY(7px)}"
        :""
    }
    
`
export function Button ({isPrimary, title}: ButtonProps){
    return (
        <>
            <ButtonTag $isPrimary = {isPrimary}>
                {title}
            </ButtonTag>
        </>
    )   

}