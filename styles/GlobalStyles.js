import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face{
    font-family: "FarmWaveFree-Regular";
    src: url("/fonts/FarmWaveFree-Regular.otf") format("truetype");
    font-style:"normal";
    font-weight:100;
 }

    * {
        box-sizing: border-box;
    }
    html,
    body {
        padding: 0;
        margin: 0 0 2rem 0;
        font-family: FarmWaveFree-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: rgb(0, 113, 188);
        background: linear-gradient(
        45deg,
        rgba(0, 113, 188, 1) 25%,
        rgba(63, 143, 213, 1) 35%,
        rgba(53, 87, 117, 1) 90%
  );
  width: 100vw;
  min-height:100vh;
    }
    p {
        margin:0;
        }
`;

export default GlobalStyles;
