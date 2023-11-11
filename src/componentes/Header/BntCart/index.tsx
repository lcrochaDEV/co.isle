import { styled } from "styled-components";
import { useState } from "react";
import CarTotalConteiner from "componentes/CarTotalConteiner";
import Cart from "componentes/Cart";

interface Props {
    right?: string
}
  
const BtnPosition = styled.div`
    text-decoration:none;
    background-color: #444c60;
`;
const CarListConteiner = styled.aside<Props>`
    right: ${Props => Props.right};
    width: 370px;
    height: 100%;
    top: 64px;
    color: #fff;
    transition-duration: 1s;
    position: absolute;
    z-index: 1;
    padding:10px 12px;
    background: rgba(0, 11, 23, 0.1);
`;
const PStyles = styled.p`
    color: #ffffff;
    background-image: linear-gradient(to right, rgba(255 ,255 ,255,0.2), rgb(0, 255, 255, 0.4));
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
    border-radius: 2px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const BtnCart = () => {
    const [btnCick, setBtnClcik] = useState('0');
    const eventClick = () => {
        btnCick === '0' ? setBtnClcik('-400px'): setBtnClcik('0');
    };
    
    return(
    <>
        <BtnPosition>
            <Cart _color='#ffffff' _margin='20px' onClick={eventClick}/>
        </BtnPosition>
        <CarListConteiner right={btnCick}>
            <CarTotalConteiner total={''} />
            <PStyles>©Isle Company</PStyles>
        </CarListConteiner>
    </>

    )
}
export default BtnCart;
