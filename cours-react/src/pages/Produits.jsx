import React from 'react';
import { Link } from 'react-router-dom';

export class Produits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produits: [
                {id: 1, title: 'Riz'},
                {id: 2, title: 'Pates'},
            ]
        }
    }

    render() {
        return (
        <>
            <h1>Composant produits</h1>
            {
                this.state.produits.map(
                    p => <Link to={`/products/${p.id}`}>{p.title}</Link>
                )
            }
            {/* <Link to="produit/1"/> */}
        </>
        )
    }
}