import { createContext, useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: azure;
    border: 1px solid black;
    padding: 10px;
`;


/**
 * Pour créer un contexte on utilise createContexte de la lib react.
 * On va ensuite exporter le contexte, pour pouvoir l'utiliser ailleurs
 */
export const TitreContext = createContext({}); // createContext(valeurInitiale)

export function Contexte() {
    const [titreRecherche, setTitreRechercher] = useState('');

    const onTitleChange = (e) => {
        setTitreRechercher(e.target.value);
    }

    const envoyerAuContexte = {
        titre: titreRecherche,
        setTitre: onTitleChange,
        message: "Salut",
    }

    return (
        // On utilise Provider pour donnée la valeur aux contexte.
        <TitreContext.Provider value={envoyerAuContexte}>
            <Wrapper>
                <Header />
                <Body />
            </Wrapper>
        </TitreContext.Provider >
    );
}