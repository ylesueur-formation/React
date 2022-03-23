import { useContext } from "react";
import styled from "styled-components";
import { TitreContext } from "./Contexte";

const Wrapper = styled.nav`
    border: 1px solid black;
    padding: 10px;
`;

export function NavBar() {
    const contexte = useContext(TitreContext);
    console.log("Contexte: ", contexte);
    return (
        <Wrapper>
            <p>Composant NavBar.jsx</p>
            <input type="text" onChange={contexte.setTitre}/>
        </Wrapper>
    );
}