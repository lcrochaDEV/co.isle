import { styled } from "styled-components";

interface Props {
    _radius?: string,
    _width?: string,
    _backgroundcolor?: string,
    _backgroundcolorhover?: string,
    _fontsize?: string,
    _color?: string,
    _border?: string,
    _fontweight?: string,
    _hover?: boolean,
    _focus?: boolean
 }
const Input = styled.input<Props>`
    width: ${Props => Props._width ? Props._width : "210px"};
    border-radius: ${Props => Props._radius ? Props._radius : "15px"};
    padding: 7px;
    background-color: ${Props => Props._backgroundcolor ? Props._backgroundcolor : ""};
    color: ${Props => Props._color ? Props._color : "#000"};
    font-weight: ${Props => Props._fontweight ? Props._fontweight : ""};
    font-size: ${Props => Props._fontsize ? Props._fontsize : ""};
    border: ${Props => Props._border ? Props._border : "1px solid transparent"};

    ${Props => Props._hover ?
        `&:hover {
            background-color: ${Props._backgroundcolorhover};
            transform: scale(1.03);
            transition: all 0.9s;
            cursor: pointer;
        }`
        : null
    }
    ${Props => !Props._focus ?
        `&:focus{
            border: 1px solid aqua;
            box-shadow: 0 0 0 0;
            outline: 0;
        }`
        : null
    }

`;
export default Input;
