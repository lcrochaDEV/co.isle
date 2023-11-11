import Cart from "componentes/Cart";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const LinkStyles = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: #7c7c7c;
    font-weight: bold;
    font-size: 15px;
    word-spacing: -3px;
`;
const Card = styled.div`
    border-radius: 5px;
    background-color: #fff;
    margin: 10px;
    display: flex;
    justify-content: space-between;
`;
//background: rgba(255, 255, 255, 0.5);

const CardImg = styled.img`
    height: 300px;
    width: 240px;
    border-radius: 3px;
`;
const ConteinerH1 = styled.h3`
    text-align: center;
`
const ConteinerDescricao = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
`
const SpanDescricao = styled.span`
    color: #ff0000;
`
const ConteinerColor = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2px 0;
`;
const ColorProduto = styled.div`
    background-color: #000000;
    width: 20px;
    height: 20px;
`;
const ConteinerNegocios = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    color: #d1d1d1;
    margin: 10px 0;
`;

interface IProdutos{
    src?: string,
    nome?: string,
    tamanhos?: string,
    valor?: string,
    disponivel?: string
}

const URLFETCH = 'http://192.168.1.252:3000/home/';
const CardProdutos = () => {
    const [produtos, setprodutos] = useState([] as IProdutos[]); 
    async function conectJsonUrlJson(){
        try { 
            const response = await fetch(URLFETCH); 
            const apiData = await response.json();
            setprodutos(apiData);
        } catch (error) {
            console.error('Erro:', error); 
        }
    } 
    useEffect(() => {   
        conectJsonUrlJson(); 
    }, []); 

    return (
        <>
        {produtos.map(produtos =>
            <Card>
                <LinkStyles to={'/produto'}>
                    <CardImg src={produtos.src} />
                    <ConteinerH1>{produtos.nome}</ConteinerH1>
                    <ConteinerDescricao>
                        <p>TAMANHOS: <SpanDescricao>{produtos.tamanhos}</SpanDescricao></p>
                        <p>R${produtos.valor}</p>
                    </ConteinerDescricao>
                    <ConteinerColor>
                        <p>CORES: </p>
                        <ColorProduto/>
                    </ConteinerColor>
                    <ConteinerNegocios>
                        <p>DISPONÍVEIS: {produtos.disponivel}</p>
                        <Cart _color='aqua'/>
                    </ConteinerNegocios>
                </LinkStyles>
            </Card>
            )}
        </>
    );
}
export default CardProdutos;