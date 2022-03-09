import React from 'react';

export class LocalStorage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "Jacques",
            prenom: ""
        }
    }

    componentDidMount() {
        let prenom = localStorage.getItem("nom");
        if (prenom == null) {
            prenom = "Salut";
        }
        this.setState({
            prenom,
        })
    }
    stockData = () => {
        localStorage.setItem("nom", this.state.nom);
        // On ne peut pas stocker un objet directement 
        localStorage.setItem("mauvaisState", this.state);
        const objectString = JSON.stringify(this.state);
        console.log(objectString);
        localStorage.setItem("state", objectString);
    }

    getData() {
        const reponse = localStorage.getItem("nom");
        console.log("Reponse: ", reponse);

        const stringState = localStorage.getItem("state");
        const object = JSON.parse(stringState);
        console.log(object);
        
    }

    removeData() {
        localStorage.removeItem("nom");
    }

    clearData() {
        localStorage.clear();
    }

    render() {
        return (
        <>
            <h2>Local Storage</h2>
            <p>Prénom: {this.state.prenom}</p>
            <button onClick={this.stockData}>Stocker la valeur</button>
            <button onClick={this.getData}>Récupérer la valeur</button>
            <button onClick={this.removeData}>Supprimer la valeur</button>
            <button onClick={this.removeData}>Tout supprimer</button>
        </>
        )
    }
}