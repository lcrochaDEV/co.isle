import { Email, Facebook, Instagram, Twitter, Whatsapp } from "componentes/Redes";
import { styled } from "styled-components";

const FooterStyles = styled.footer`
    background-color: #444c56;
    width: 100%;
    padding: 0;
    margin: 0;
    color: #fff;
    padding: 10px;
`
const Redes = styled.div`
    width: 25px;
    margin: 2px;
`
const svgColor = "currentColor"
const Footer = () => {
    return (
        <FooterStyles>
            <Redes>
                <Facebook fill={svgColor} />
                <Instagram fill={svgColor}/>
                <Twitter fill={svgColor}/>
                <Whatsapp fill={svgColor}/>
                <Email fill={svgColor}/>
            </Redes>
        </FooterStyles>
    );
}

export default Footer;

