import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        background-color: ${props=> props.theme['base-background']};
        color: ${props=> props.theme['base-text']};
        -web-kit-font-smoothing: antialiased;
    }

    body, input, texarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`
;