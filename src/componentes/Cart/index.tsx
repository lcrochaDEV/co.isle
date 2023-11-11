import { styled } from "styled-components";

interface Props {
    _color?: string,
    _margin?: string,
    onClick?: () => void
}

const Icon = styled.a<Props>`
    color:${Props => Props._color ? Props._color : "#000"};
    text-decoration:none;
    margin: ${Props => Props._margin};
    text-align: center; 
    display: inline-flex;
    cursor: pointer;
    &:hover {
        transform: scale(1.06);
        transition: all 0.9s;
    }  
`
const Cart = ({ onClick, _color, _margin } : Props) => {
    return (
      <Icon onClick={onClick} _color={_color} _margin={_margin} className="material-symbols-outlined">shopping_cart</Icon>
    );
}
export default Cart;