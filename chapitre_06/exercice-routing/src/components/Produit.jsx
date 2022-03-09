import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
    return (props) => { return <Component params={useParams()} {...props} />}
}

class Produit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produit: {}
        }
    }
    componentDidMount() {
        axios('https://fakestoreapi.com/products/' + this.props.params.produitId).then(
            (reponse) => {
            const produit = reponse.data;
            this.setState({
                produit: produit
            })
        })
    }
    render() {
        return (
        <>
            <h1>Un produit: {this.props.params.produitId}</h1>
            <p>Description: {this.state.produit.description}</p>
        </>
        )
    }
}

export default withRouter(Produit);
