import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: auto;
    justify-items: center;
    grid-template-rows: 10rem 100vh;
    grid-template-areas:
    "header"
    "content";

`;

export const Content = styled.section`
    display: flex;
    gap: 3.2rem;
    width: 100%;
    padding: 3.2rem 16rem;
    align-items: flex-start;
    justify-content: center;
    
`;

export const TimeLine = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;    
    max-width: 83.2rem;
`;


