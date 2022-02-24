import React from 'react';

let utilisateurs = ["Hochet", "Rick", "Neymar", "Jean"];

export class Liste extends React.Component {
    constructor(props) {
        super(props);
    }

    creatationLiElement() {
        let liElements = [];
        for (let [index, utilisateur] of utilisateurs.entries()) {
            let liElement = <li key={utilisateur+index}>{utilisateur}</li>
            liElements.push(liElement);
        }
        return liElements;
    }
    render() {
        return (
            <div>
                <h1>Les listes</h1>
                <ul>
                    {
                        this.creatationLiElement()
                    }
                </ul>
            </div>
        );
    }
}
