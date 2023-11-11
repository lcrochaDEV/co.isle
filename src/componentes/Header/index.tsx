import styled from 'styled-components';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import BtnCart from './BntCart';
import Search from './Search/index';

const HeaderStyles = styled.header`
    width: 100%;
    background-color: #fff;
    background: rgba(100, 100, 100, 0.2);
    display: flex;
    justify-content: space-between;
    color: #000;
`;
const Conteiner = styled.nav`
    display: flex;
    justify-content: flex-start;
`;
const LogoStyles = styled.img`
    width: 50px;
    height: 40px;
    padding: 0;
    padding: 10px 10px 0;
`;
const LinkStyles = styled(Link)`
    padding: 15px 10px;
    font-size: 20px;
    display: inline-block;
    text-decoration: none;
    color:  #ffffff;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #ffffff;
        background-image: linear-gradient(to left, rgba(255,0,0,0), #ffffff);
        transition: width .4s ease-in;
        position: relative;
        top: 20px;
        transform: scale(1.1);
        transition: all 0.9s;
    }

    &:hover::after {
        width: 100%;
    } 
`;

const Header = () => {
    const UrlArray = ['Masculino', 'Feminino', 'Kids', 'Sobre']
    return(
        <HeaderStyles>
            <Conteiner>
                <Link to={'/'} ><LogoStyles src={Logo} alt="logo" /></Link>
                <LinkStyles to={'' || '/' || 'home'} >Início</LinkStyles> 
                {UrlArray.map((url) => {
                    return (
                        <LinkStyles to={`/${url.toLowerCase()}`} >{url}</LinkStyles>
                    );
                })}               
            </Conteiner>
            <Conteiner>
                <Search />    
                <BtnCart/>
            </Conteiner>
        </HeaderStyles>
    )
} 
export default Header;
