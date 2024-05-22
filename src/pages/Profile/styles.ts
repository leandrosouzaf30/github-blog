import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: -6rem  auto 0;
    padding: 0 1.5rem;
    display: flex;
    background: ${props=>props.theme['base-profile']};

    img{
        width: 148px;
        height: 148px;
        margin: 2rem 1rem;
        border-radius: 0.5rem;
    }
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    flex-wrap: wrap;
    row-gap: 1rem;
    width: 100%;
`;

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;

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




