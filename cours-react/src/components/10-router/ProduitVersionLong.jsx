import React from 'react';
import { useParams } from 'react-router-dom';

function convertClassToFunction(Produit) {
    function ComposantIntermediaire(props) {
        const params = useParams();
        return (
            <Produit params={params} {...props} />
        );
    }
    return ComposantIntermediaire
}

class Produit extends React.Component {
    constructor(props) {
        super(props);
        console.log("Params: ", this.props.params);
    }
    render() {
        return (
        <>
            <p>Produit: {this.props.params.produitId}</p>
        </>
        )
    }
}

let ComponentConverted = convertClassToFunction(Produit);
export default ComponentConverted


// Avec une fonction composant:

// function Produit(props) {
//     const params = useParams();
//     return (
//         <p>params: {params.produitId}</p>
//     );
// }