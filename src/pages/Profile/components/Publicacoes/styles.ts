import styled from "styled-components";

export const PublicacoesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    gap: 2rem;
    
`

export const PublicacoesHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`

export const PublicacoesList = styled.li`
    display: flex;
    border-radius: 0.5rem;
    @media(min-width: 70rem) {
        width: 48%;
    }

    a{
        display: flex;
        padding: 1rem;
        text-decoration:none;
        color: inherit;

        &:hover {
            border: 1px solid ${props => props.theme["base-border"]};
        }
    }
  
    background: ${props=>props.theme['base-profile']};
`

export const CardContent = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1.5rem;

    div{
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: baseline;

        h1{
            max-width: 18rem;
            overflow: hidden; // Removendo barra de rolagem
            text-overflow: ellipsis; // Adicionando "..." ao final
            display: -webkit-box;
            -webkit-line-clamp: 2; // Quantidade de linhas
            -webkit-box-orient: vertical; 
        }
    }

    span{
        margin-top: 2rem;
        pre{
            white-space: normal;
            word-break: break-all;
            overflow: hidden; // Removendo barra de rolagem
            text-overflow: ellipsis; // Adicionando "..." ao final
            display: -webkit-box;
            -webkit-line-clamp: 4; // Quantidade de linhas
            -webkit-box-orient: vertical; 
        }
    }
`