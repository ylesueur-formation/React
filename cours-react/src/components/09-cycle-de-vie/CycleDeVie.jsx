import React from 'react';

export class CycleDeVie extends React.Component {
    constructor(props) {
        // Uniquement de l'affection de variables
        console.log("1 - Initialisation du composant");
        super(props);
        this.state = {
            date: new Date()
        }
        this.timerId = null;
    }

    updateDate = () => {
        this.setState({date: new Date()});
    }

    componentDidMount = () => {
        // On peut mettre de la logique
        // Axios, boucle, condition etc... 
        console.log("3 - Le composant est monté");
        this.timerId = setInterval(this.updateDate, 1000);
    }

    componentDidUpdate(old, new_) {
        console.log("Le composant a été mis à jour: ");
        console.log("Old: ", old);
        console.log("New: ", new_);
    }

    componentWillUnmount() {
        console.log("4 - Le composant va être démonté");
        clearInterval(this.timerId);
    }

    render() {
        console.log("2 - Rendu du composant");
        return (
            <>
                <h2>Cycle de vie</h2>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </>
        )
    }
}