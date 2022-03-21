import { useState } from "react";
import { Counter } from "../Counter";

export function State() {
    // useState(valeurInitiale);
    // console.log(useState("John"));
    const resultat = useState("John");
    const prenom = resultat[0];
    const setPrenom = resultat[1];

    const onClickHandler = () => {
        // prenom = "Pierre"; <- on ne peut pas faire ça
        setPrenom("Pierre"); // equivalent à this.setState({})
    }
    return (
        <>
        <h1>Hook Use State</h1>
        <p>Prénom: {prenom}</p>
        <button onClick={onClickHandler}>Changer de prenom</button>
        <Counter />
        </>
    );
}