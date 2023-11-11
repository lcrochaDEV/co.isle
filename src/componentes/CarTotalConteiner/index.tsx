import BackgroundStyled from "./CarListBackground";
import Input from "componentes/Input";
import { styled } from "styled-components";

interface Props {
  total?: string | number
}
const TotalNegociation = styled.div`
    background: #fff;
    color: #555555;
    font-weight: bold;
    margin: 10px 0;
    border-radius: 10px;
    padding:10px 0;
    font-size: 19px;
    text-align: center;
    width: 100%;
`;
const TotalStyles = styled.div`
    display: flex;
    justify-content: space-between;
`;
const stylesStys = {
    _radius:"10px",
    _width: "100%",
    _backgroundcolor: "#FFF",
    _backgroundcolorhover: "aqua",
    _border: "1px solid #fff",
    _fontsize: "20px",
    _fontweight: "bold", 
    _hover: true
};

const CarTotalConteiner = ({ total } :Props) => {
    return (
      <>
        <TotalNegociation>
          <BackgroundStyled />
          {!total 
          ? <p>Sem produtos no carrinho</p> 
          : <TotalStyles>
                <p>Total: </p>
                <p>R${total}</p> 
            </TotalStyles>}
        </TotalNegociation>
        <Input type="submit" value='Comprar' {...stylesStys} />
      </>
    );
};
export default CarTotalConteiner