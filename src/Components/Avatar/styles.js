import styled from 'styled-components';

export const Container = styled.img`
    box-sizing: content-box;
    object-fit: cover;
    border-radius: 8px;


    &.withBorder{
        width: 5.2rem;
        height: 5.2rem;
        border: 4px solid ${({theme}) => theme.COLORS.GRAY_800};
        outline: 2px solid ${({theme}) => theme.COLORS.GREEN_300};
    };

    &.withoutBorder{
        width: 5rem;
        height: 5rem;
        border: none;
        outline: none;

    }
        
`;
