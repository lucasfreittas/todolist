import styled from "styled-components";

export const Container = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    width: 25.6rem;
    border-radius: 8px;
    height: fit-content;
    background-color: ${({theme}) => theme.COLORS.GRAY_800};
    

    .userCover {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        height: 7.2rem;
        border-radius: 8px 8px 0 0 ;
    };

    
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        box-sizing: content-box;
        width: 5.8rem;
        margin-bottom: 2.4rem;
        margin-top: -13%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 8px;
        border: 4px solid ${({theme}) => theme.COLORS.GRAY_800};
        outline: 2px solid ${({theme}) => theme.COLORS.GREEN_300};
        
    };

    > p {
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-weight: 700;
        margin-bottom: 0.4rem;
    };

    > span {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_500};
        font-weight: 400;
        margin-bottom: 2.4rem;
    }


`;

export const EditUser = styled.div`
    width: 100%;
    padding: 3.2rem;
    border-top: 1px solid ${({theme}) => theme.COLORS.GRAY_700};

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        border: 1px solid ${({theme}) => theme.COLORS.GREEN_300};
        border-radius: 8px;
        color: ${({theme}) => theme.COLORS.GREEN_300};
        font-size: 1.6rem;
        font-weight: 700;
        background-color: transparent;
        padding: 1.6rem 2rem;
        width: 100%;
        transition: all 0.1s ease-in-out;
    };

   :hover{
        background-color: ${({theme}) => theme.COLORS.GREEN_600};
        color: ${({theme}) => theme.COLORS.WHITE};
        border:  1px solid ${({theme}) => theme.COLORS.GREEN_600};
    }
        
`;
