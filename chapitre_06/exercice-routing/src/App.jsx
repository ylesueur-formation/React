import React from 'react';
import { Home } from './components/Home';
import { Produits } from './components/Produits';
import Produit from './components/Produit';
import { Routes, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
            <header>
                <nav>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/products">Produits</Link></li>
                    <li></li>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Produits />}/>
                <Route path="/product/:produitId" element={<Produit />}/>
            </Routes>
        </>
        )
    }
}