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
  
    @media (max-width: 768px) {
        grid-template-rows: 1fr;
        grid-area: content;
    }
`;

export const Content = styled.section`
    display: flex;
    gap: 3.2rem;
    width: 100%;
    padding: 3.2rem 2.4rem;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 3.2rem 2.4rem;
    }
    
`;

export const TimeLine = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;    
    max-width: 83.2rem;
`;


