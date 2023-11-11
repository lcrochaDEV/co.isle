import CardProdutos from "componentes/CardConteiner";
import { styled } from "styled-components";

const HomePage = styled.section`
    background: rgba(255, 255, 255, 0.2);
    margin: 10px;
    border-radius: 10px;
    display: flex;
`;

const Home = () => {
    return(
        <HomePage>
            <CardProdutos />
        </HomePage>
    );

}

export default Home;