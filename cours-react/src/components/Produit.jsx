import React from 'react';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
    return (props) => { return <Component params={useParams()} {...props} />}
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
    }invoices
}

export default withRouter(Produit)