import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}   // css reset 시킴 no base
    html{
        font-size: 10px;
    }
`;

export default GlobalStyles;
