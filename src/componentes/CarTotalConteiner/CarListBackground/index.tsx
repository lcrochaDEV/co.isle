import { styled } from "styled-components";
import Logo from './logo.png';

const BackgroundStyled = styled.div`
    background: url('${Logo}') no-repeat;
    background-size: cover;
    background-position-x: 5%;
    position: absolute;
    z-index: -1;
    opacity: 0.4;
    width: 100%;
    height: 100%;
`;

export default BackgroundStyled;
