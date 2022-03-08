import './Personne.css';
import React from 'react';
import { Link } from 'react-router-dom';

// Un composant c'est une fonction qui vous renvoie du JSX
// props contient tous nos attributs HMTL personnalisés
export function Personne(props) {
    // let {name, salut} = props;
    console.log(props);
    console.log(props.salut);
    console.log(props.name);
    return (    
        <div>
            <p>Nom: {props.name}</p>
        </div>
    )
}

// Les classes composants
export class Personnage extends React.Component {
    // render (nom obligatoire) c'est la fonction qui sera appellé pour afficher notre composant.
    render() {
        return (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum blanditiis, vitae, consequatur magni cumque laboriosam veritatis nesciunt error est recusandae praesentium corrupti laborum? Sunt doloribus dolor excepturi facilis eligendi!</p>
        )
    }
}


// Les classes composants
export class PersonnageAvecProps extends React.Component {
    constructor(props) {
        // On appelle le constructeur de la classe Mere (React.Component)'
        super(props); // this.props = props;
    }

    // render (nom obligatoire) c'est la fonction qui sera appellé pour afficher notre composant.
    render() {
        return (
            <div>
            {/* <p>
                {
                    (this.props.name) ? this.props.name : "Undefined"
                }
            </p> */}
                <p>props: {this.props.name}</p>
            </div>
        )
    }
}