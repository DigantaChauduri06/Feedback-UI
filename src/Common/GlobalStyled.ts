import { createGlobalStyle } from "styled-components";

import { colorsDark } from "./Colors";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: ${colorsDark.BACKGROUND_COLOR};
        color: ${colorsDark.TEXT_COLOR}
    }
    #root{
        margin:0 auto;
    }
 `;
