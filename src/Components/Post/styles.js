import styled from "styled-components";

export const Container = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    height: 100%;
    width: 100%;
    padding: 4rem;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.GRAY_800};

    
`;

export const User = styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    
    > div {
        width: 100%;
    }
    > div p {
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-weight: 700;
        margin-bottom: 0.4rem;
    };

    > div span {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_500};
        font-weight: 400;
        margin-bottom: 2.4rem;
    }

    >  span {
        align-self: right;
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_500};
        font-weight: 400;
        white-space: nowrap;
    }
`;

export const Text = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-weight: 400;
        padding-bottom: 2.4rem;
        line-height: 160%;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_700};

        > a {
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }

        > .hashtags {
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }

        > .hashtag-container {
            display: flex;
            gap: 0.8rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GREEN_300};
            width: fit-content;
        }
`;

export const Textarea = styled.form`
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        > p {
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            font-weight: 700;
            margin-bottom: 0.4rem;
        };

        > textarea{
            width: 100%;
            height: 9.6rem;
            background-color: ${({theme}) => theme.COLORS.GRAY_900};
            color: ${({theme}) => theme.COLORS.GRAY_300};
            font-size: 1.6rem;
            padding: 1.6rem;
            border-radius: 8px;
            border: none;
            resize: none;
            
        }

        textarea::placeholder{
                color: ${({theme}) => theme.COLORS.GRAY_600};
            }
        
        textarea:focus{
            outline: 1px solid ${({theme}) => theme.COLORS.GREEN_300};
        }

       

        > button{
            border: none;
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            background-color: ${({theme}) => theme.COLORS.GREEN_600};
            font-weight: 700;
            padding: 1.6rem 2.4rem;
            width: fit-content;
            border-radius: 8px;
            transition: all 0.1s ease-in-out;
            display: none;
            
        }

        > button:hover{
            background-color: ${({theme}) => theme.COLORS.GREEN_300};
        }

         &:focus-within > button{
            display: block;
        }
`;

export const CommentList = styled.div`

`;