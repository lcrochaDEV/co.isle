import styled from "styled-components";

const Select = styled.select`   
    border-color: #0086e4;
    padding: 5px;
`;

let categoria = [
    'Masculino',
    'Feminina',
    'Kids'
];

const Selection = () => {
    return(
        <Select name="produtos" >
            <option selected disabled>Selecione uma Categoria</option>
            {categoria.map(itens =>
                <option value="volvo">{itens}</option>           
            )}
        </Select>
    );
};
export default Selection;