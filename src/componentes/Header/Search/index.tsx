import Input from "componentes/Input";
import { styled } from "styled-components";

const SearchForm = styled.form`
    display: flex;
    justify-content: end;
    align-items: center;
    margin:0 10px;
`;
const SearchStyles = styled.span`
    color: aqua;
    position: relative;
    left: 1px;
    font-size: 30px;
    font-style: italic;
`;

//event: React.FormEvent<EventTarget>
// React.FormEvent<HTMLFormElement>
const eventBtn = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    console.log(event);
    console.log(event);
}

const stylesStys = {
    _width:"40px",
    _backgroundcolor:"transparent",
    _fontsize:"35px",
    _color:"aqua",
    _hover: true,
    _focus: true
};

const Search = () => {
    return (
        <SearchForm onClick={eventBtn}>
            <Input type="text" placeholder="Digite sua Pesquisa" _border="1px solid #fff"/>
            <Input type="submit" className="material-symbols-outlined" value="Search" {...stylesStys} />
            <SearchStyles>Buscar</SearchStyles>
        </SearchForm>
    );
}
export default Search; 