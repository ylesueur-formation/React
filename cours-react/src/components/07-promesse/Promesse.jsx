import React from 'react';

export class Promesse extends React.Component {
    // Les promesses sont des objets JavaScript qui permettent de gerer les traitements asynchrones.
    constructor(props) {
        super(props);
    }

    promesses() {
        console.log("John va ranger ta chambre !");
        let promesseDeJohn = new Promise(function(resolve, reject) {
            console.log("Je te promet de ranger, mais ca va prendre du temps");
            // le traitement qui prend du temps.

            // Code qui permet d'illustrer la promesse
            let nombre = Math.random();
            if (nombre > 0.5) {
                setTimeout(() => {
                    resolve(nombre);
                }, 2000);
            } else {
                reject("Le nombre est inferieur à 0.5");
            }
        });

        promesseDeJohn.then(function(resultat) {
            console.log(resultat);
        }).catch(error => console.error(error));
    }
    render() {
        return (
        <>
            { this.promesses() }
        </>
        )
    }
}