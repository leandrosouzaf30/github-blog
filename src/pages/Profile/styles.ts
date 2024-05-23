import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: -8rem  auto 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
`;

export const ProfileContent = styled.div`
    display: flex;
    width: 100%;
    background: #0B1B2B;
    flex: 1;
    gap: 1rem;
    padding: 2rem;
    background: ${props=>props.theme['base-profile']};
    border-radius: 0.5rem;


    img{
        width: 148px;
        height: 148px;
        border-radius: 0.5rem;
    }
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 1.5rem;

    head{
        display: flex;
        justify-content: space-between;
    }

    a{
        color: ${props=>props.theme['blue']};
        text-decoration:none;
        display: flex;
        align-items: flex-end;
        gap: 0.2rem;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex: 1;
    gap: 2rem;
    span{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;




