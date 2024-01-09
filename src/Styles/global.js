import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
   
    };

    html {
        font-size: 62.5%;
    };

    body, textarea, button{
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    };

    a{
        text-decoration: none;
    };

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

`;