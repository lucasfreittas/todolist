import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;

    background-color: ${({theme}) => theme.COLORS.GRAY_800};

    img {
        height: 6rem;
    }
`;