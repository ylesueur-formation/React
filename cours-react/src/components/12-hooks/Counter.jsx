import { useState } from "react";

export function Counter() {
    // const resultat = useState(0);
    // const compteur = resultat[0];
    // const setCompteur = resultat[1];
    const [compteur, setCompteur] = useState(0);
    const [prenom, setPrenom] = useState("Prenom");
    const [state, setState] = useState({});

    const onIncrementation = () => {
        // setCompteur(compteur =>  compteur + 1);
        setCompteur(compteur + 1);
    }
    
    function decrementer() {
        // setCompteur(compteur =>  compteur - 1);
        setCompteur(compteur - 1);
    }

    return (
        <>
            <h2>Compteur: {compteur}</h2>
            <button onClick={onIncrementation}>Incrementer</button>
            <button onClick={decrementer}>Décrementer</button>
        </>
    );
}