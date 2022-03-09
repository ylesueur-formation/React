import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Liste } from '../routes/Liste';
import { EventClasse } from '../routes/Event';
import { Produits } from '../routes/Produits';
import Produit from '../components/10-router/Produit';
import ProduitVersionLongue from '../components/10-router/ProduitVersionLong';
import { CycleDeVie } from '../components/09-cycle-de-vie/CycleDeVie';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
            <Routes>
                <Route path="/" element={<Liste />}></Route>
                <Route path="/event-class" element={<EventClasse />}/>
                <Route path="/lifecycle" element={<CycleDeVie />}/>
                <Route path="/products" element={<Produits />} >
                    <Route path=":produitId" element={<Produit />} />
                    <Route path="exemple/:nom" element={<Produit />} />
                </Route>
                <Route path="/products/long/:produitId" element={<ProduitVersionLongue />} />
                <Route path="*" element={ <h1>Cette page n'existe pas</h1>}/>
            </Routes>
        </>
        )
    }
}