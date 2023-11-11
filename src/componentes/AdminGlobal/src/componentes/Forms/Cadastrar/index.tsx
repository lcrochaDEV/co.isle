import styled from "styled-components";
import Input from "../Input";
import Botton from "../Button";
import CadastrosLogo from "./cadastro.png"
import { useState } from "react";
import Selection from "../Select";

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Article = styled.article`
    display: flex;
    justify-content:flex-start;
    background-color: #fff;
    margin: 20px;
    box-shadow: 1px 1px 6px #aeafaf;
    border-radius: 9px;
`;
const Logo = styled.img`
    width: 300px;
    height: 450px;
    margin: 15px;
`;
const Form = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const H1 = styled.h1`
    text-align: center;
    color: #0086e4;
`;
const Label = styled.label`
    margin:0;
    padding: 3px;
    width: 140px;
    position: relative;
    z-index: 1;
    color: #0086e4;
    font-size: 16px;
`;
const stylesStys = {
    _height: "20px",
    _width: "500px",
    _valid: true
};

interface Props {
    name?: string;
    size?: string;
    model?: string;
    color?: string;
    image?: string;
}
//React.FormEvent<HTMLFormElement>
const Cadastrar = ({name, size, model, color, image}: Props) => {
    const [url, setUrl] = useState('');
    const eventInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { 
        setUrl(event.target.value)
    }
    return (
        <Section>
            <Article>
                <Logo src={url || CadastrosLogo}/>
                <Form>
                    <H1>CADASTRO DE PRODUTOS</H1>
                    <Label>PRODUTO:</Label>
                    <Input type="text" name="name" {... stylesStys} value={name}/>
                    <Label>TAMANHO:</Label>
                    <Input type="text" name="size" {... stylesStys} value={size}/>
                    <Label>MODELO:</Label>
                    <Input type="text" name="model" {... stylesStys} value={model}/>
                    <Label>CORES:</Label>
                    <Input type="text" name="color" {... stylesStys} value={color}/>
                    <Label>URL DA IMAGEM:</Label>
                    <Input type="text" name="url" onChange={(eventInput)} {... stylesStys} value={image}/>
                    <Label>CATEGORIA:</Label>
                    <Selection/>
                    <Label>LOGIN:</Label>
                    <Input type="text" name="login" {... stylesStys} />
                    <Botton type="submit" _width="100px" _height="40px" _margin="10px">Enviar</Botton>
                </Form>
            </Article>
        </Section>
    );
}

export default Cadastrar;


// onChange={() => setUrl('e')}