import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ConnectFetch from "componentes/ClassFetch/ClassFetch";

interface IProdutos{
    src?: string,
    nome?: string,
    tamanhos?: string,
    cores?: string
    valor?: string,
    disponivel?: string
}
const LinkStyles = styled(Link)`
    display: flex;
    box-shadow: 1px 1px 6px #aeafaf;
    border-radius: 10px;
    margin: 10px;
    text-decoration: none;
    text-align: center;
    &:hover{
        background-color: rgba(133, 125, 252, 0.4);
    }

`;
const ProdutoTable = styled.table`
    width: 100%;
    max-width: 100%;
    position: relative;
    right: 40px;
    bottom: 10px;
    font-weight: bold;
`;
const Img = styled.img`
    width: 50px;
    height: 70px;
    border-radius: 5px;
`;
const Th = styled.th`
    position: relative;
    top: 20px;
`;
const Td = styled.td`
    width: 0;
`;
const Table = () => {
    const URLFETCH = 'http://192.168.1.252:3000/home/';
    const [produtos, setprodutos] = useState([] as IProdutos[]);
        async function conectJson() {
            try{
                let data = new ConnectFetch(URLFETCH);
                let comandList = await data.conectJsonUrlJson();
                setprodutos(comandList);
            }catch(error){
                console.log('Url não encontrada!')
            }
        }
    useEffect(() => {   
        conectJson();
    }, []); 
    return(
        <>
            {produtos.map(produtos => 
            <LinkStyles to={'#'}>
            <ProdutoTable>
                <tr>
                    <Th></Th>
                    <Th></Th>
                    <Th>TAMANHO</Th>
                    <Th>CORES</Th>
                    <Th>PREÇO</Th>
                    <Th>DISPONÍVEIS</Th>
                </tr>
                <tr>
                    <Td><Img src={produtos.src}/></Td>
                    <Td>{produtos.nome}</Td>
                    <Td>{produtos.tamanhos}</Td>
                    <Td>{produtos.cores}</Td>
                    <Td>R${produtos.valor}</Td>
                    <Td>{produtos.disponivel}</Td>
                </tr>
            </ProdutoTable>
            </LinkStyles>
            )}
        </>
    );
}

export default Table;
