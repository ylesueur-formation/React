import React from 'react';

export class Reference extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Salut"
        }
        // Ajoute le "this" du constructeur dans la fonction afficherMessage.
        // Resultat: on pourra utiliser toutes les variables du constructeur et les fonctions de la classe. le state inclus
        console.log(this)
        this.afficherMessageContext = this.afficherMessageContext.bind(this);
    }

    afficherMessagePerteContext() {
        // On ne peut pas utiliser this.
        console.log(this.state.message);
    }

    afficherMessageContext() {
        console.log(this.state.message);
    }


    afficherMessageFlechee = () => {
        console.log(this.state.message);
    }


    render() {
        return(
            <>
                <button onClick={this.afficherMessagePerteContext}>Perte du contexte.</button>
                <button onClick={this.afficherMessageContext}>Garde le contexte (Bind).</button>
                <button onClick={this.afficherMessageFlechee}>Garde le contexte (Flechée).</button>
                <button onClick={() => { console.log(this.state.message); }}>
                    Garde le contexte (Flechée).
                </button>
            </>
        );
    }
}