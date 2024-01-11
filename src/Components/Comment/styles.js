import styled from "styled-components";

export const Container = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.GRAY_800};
   

    & ~ & {
        margin-top: 3.6rem;
  }
    
`;

export const CommentWrapper = styled.div`
    display: flex;
`;

export const Text = styled.div`
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        background-color: #29292E;
        font-weight: 400;
        padding-bottom: 2.4rem;
        line-height: 160%;
        width: 100%;
        padding: 1.6rem 1.6rem 2.4rem 1.6rem;
        border-radius: 8px;
        margin-left: 1.6rem;

        > a {
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }

        > .hashtags {
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GREEN_300};
        }

        > .profile{
            display: flex;
            align-items: flex-start;
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            font-weight: 700;
            gap: 1rem;
            width: 100%;
            white-space: nowrap;

            > span{
                color: ${({theme}) => theme.COLORS.GRAY_500};
                font-weight: 300;
                width: 100%;
            }

            > button {
                border: none;
                box-shadow: none;
                background: transparent;
                font-size: 0;

                :hover{
                    color: ${({theme}) => theme.COLORS.RED_500}
                }
            }}

            .timeDate{
                font-size: 1.2rem;
                color: ${({theme}) => theme.COLORS.GRAY_500};

            }

            > p{
                font-size: 1.4rem;
                margin-top: 1.6rem;
            }
`;

export const Textarea = styled.div`
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
        }

        > button:hover{
            background-color: ${({theme}) => theme.COLORS.GREEN_300};
        }
`;

export const Actions = styled.button`
    background:  transparent;
    border: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 7rem;
    margin-top: 1rem;
    color: ${({theme}) => theme.COLORS.GRAY_500};

    > div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    > div:hover{
        color: ${({theme}) => theme.COLORS.GREEN_300};
    }

    p, span {
        font-size: 1.4rem;
    }

    

`;