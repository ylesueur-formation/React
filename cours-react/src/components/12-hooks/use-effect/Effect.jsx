import { useEffect, useState } from "react";
import styled from "styled-components";
import { Clock } from "./Clock";
import { User } from "./User";

const Wrapper = styled.div`
    padding: 10px;
    border: 1px solid black;
`;

export function Effect() {
    const [compteur, setCompteur] = useState(0);
    const [exemple, setExemple] = useState(0);

    /**
     * Simule la méthode du cycle de vie: ComponentDidUpdate + ComponentDidMount
     */
    useEffect( () => {
        console.log("Appelé à chaque changement");
    });

    useEffect( () => {
        console.log("Appelé uniquement lorsque la valeur de compteur change");
    }, [compteur]);


    /**
     * Simule la méthode du cycle de vie: ComponentDidMount
     */
    useEffect( () => {
        console.log("Appelé une seule fois, lorsque le composant est monté");
    }, []);


    /**
     * Simule la méthode du cycle de vie: ComponentWillUmount
     */
    useEffect( () => {
        return function cleaner() {
            console.log("Appelé uniquement lorsque le composant est démonté");
        }
    });


    return (
        <Wrapper>
            <h1>Use Effect</h1>
            <button onClick={() => setExemple(exemple + 1)}>Mettre à jour</button>
            <button onClick={() => setCompteur(compteur + 1)}>Incrementer</button>
            <User />
            <Clock />
        </Wrapper>
    );
}