import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Produits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produits: []
        }
    }

    componentDidMount() {
        axios('https://fakestoreapi.com/products').then((reponse) => {
            const produits = reponse.data;
            this.setState({
                produits: produits
            })
        })
    }

    render() {

        return (
        <>
            <h1>Produits</h1>
            {
                this.state.produits.map(produit => (
                    <p>{produit.title} 
                    {/* /product/1 */}
                    {/* /product/123 */}
                        <Link to={"/product/" + produit.id}>En savoir plus</Link>
                    </p>)
                )
            }
        </>
        )
    }
}