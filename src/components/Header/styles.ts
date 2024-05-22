import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props=>props.theme['base-header']};
    padding: 2.5rem 0 7.5rem;
    height: 18.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    img{
        margin-top: 1rem;
    }
`;