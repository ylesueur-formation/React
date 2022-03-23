import { useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: wheat;
    border: 1px solid black;
    padding: 10px;
`;

export function Contexte() {
    const [titreRecherche, setTitreRechercher] = useState();

    const onTitleChange = (e) => {
        setTitreRechercher(e.target.value);
    }

    return (
        <Wrapper>
            <Header onTitleChange={onTitleChange}/>
            <Body titreRecherche={titreRecherche}/>
        </Wrapper>
    );
}