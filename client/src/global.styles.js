import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Open Sans Condensed", sans-serif;
        margin: 0;
        padding: 0;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: #000;
    }

    * {
        box-sizing: border-box;
    }

`