import styled from "styled-components";
import * as themeStyle from './global/theme';

export default styled.section<{theme:string}>`
    height:100vh;
    transition:all 0.3s ease-in-out;
    ${({theme})=>theme==="white"&&themeStyle.WhiteTheme}
    ${({theme})=>theme==="black"&&themeStyle.BlackTheme}
`;