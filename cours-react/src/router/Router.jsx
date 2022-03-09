import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Liste } from '../routes/Liste';
import { EventClasse } from '../routes/Event';
import { Produits } from '../routes/Produits';
import Produit from '../components/10-router/Produit';
import ProduitVersionLongue from '../components/10-router/ProduitVersionLong';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
            <Routes>
                <Route path="/" element={<Liste />}/>
                <Route path="/event-class" element={<EventClasse />}/>
                <Route path="/products" element={<Produits />} />
                <Route path="/products/:produitId" element={<Produit />} />
                <Route path="/products/long/:produitId" element={<ProduitVersionLongue />} />
                <Route path="*" element={ <h1>Cette page n'existe pas</h1>}/>
            </Routes>
        </>
        )
    }
}