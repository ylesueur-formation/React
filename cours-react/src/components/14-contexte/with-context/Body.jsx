import { useContext } from "react";
import styled from "styled-components";
import { TitreContext } from "./Contexte";

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin-top: 20px;
`;

export function Body() {
    const { titre } = useContext(TitreContext);
    console.log(titre);
    return (
        <Wrapper>
            <p>Composant Body.jsx</p>
            <h2>Body</h2>
            <p>Titre Recherché: {titre}</p>
        </Wrapper>
    );
}