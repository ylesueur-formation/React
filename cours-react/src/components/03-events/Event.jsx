import React, { useState } from "react";

function afficherHeure() {
    console.log("Heure: ", new Date().toLocaleTimeString());
}

function getRandomPrenom(tableau) {
    let nombreRandom = Math.random() * (tableau.length - 1); // nombre entre 0 et 1;
    let nombreRandomInt = Math.round(nombreRandom);
    return tableau[nombreRandomInt]
}

export function Event() {
    const prenoms = ["Marie", "Paul", "Sarah"];
    let randomPrenom = getRandomPrenom(prenoms);
    const state = useState(randomPrenom);
    // const state = useState("Sarah");
    const prenom = state[0];
    const setPrenom = state[1];

    return (
        // C'est une balise container qui ne sera remplacé par rien du tout dans le HTML
        <React.Fragment>
            <button onClick={afficherHeure}>
                Cliquez ici !
            </button>
            <h2>Changer Prenom: {prenom}</h2>
            <button onClick={() => { 
                let prenom = getRandomPrenom(prenoms)
                setPrenom(prenom)
            } }>
                Changer de prénom
            </button>
        </React.Fragment>
    );
}

export class EventClasse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: 'Pierre'
        }
    }

    changerPrenom = () => {
        this.setState({
            prenom: "Marie" 
        })
    }

    onChangeHandler = (event) => {
        // console.log(event); // <- C'est un objet contenant toutes les informations relatif a l'evenement
        // console.log(event.target); // <- C'est l'element HTML qui a déclencher l'événement
        console.log(event.target.value); // <- Ca depend de l'element HTML, Les boutons par exemple, non pas de value.
        let saisitUtilisateur = event.target.value;
        let prenom = saisitUtilisateur;
        if (saisitUtilisateur.length < 2) {
            console.log(event.target.style);
            event.target.style.borderColor = "red";
        } else {
            event.target.style.borderColor = "green";
        }
        this.setState({
            prenom: prenom
            // prenom,
        });
    }
    
    render() {
        return (
            <>
                <h2>Prenom : {this.state.prenom}</h2>
                <button onClick={this.changerPrenom}>Changer de prenom</button>
                <input type="text" onChange={this.onChangeHandler} placeholder="Saisir du texte" />
            </>
        );
    }
}