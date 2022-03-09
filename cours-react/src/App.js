import { Router } from './router/Router';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
      // Le JSX ne doit avoir qu'une seule balise racine
      <div>
            <header>
                <h1>Mon super site</h1>
                <nav>
                    <Link to="/" >Accueil</Link> |
                     {/* Ajoute une classe "active" sur votre élément HT?L lorsqu'on clique dessus  */}
                    <NavLink to="/products">Produits</NavLink> | 
                    <NavLink to="/lifecycle">Cycle de vie</NavLink> | 
                    <NavLink to="/produits">Inexistante</NavLink> | 
                    <NavLink to="/products/1">Produit</NavLink> | 
                    <Link to="/products/long/1">Produit Long</Link> | 
                    <Link to="/event-class">Evenement Class</Link>
                </nav>
            </header>
            <Router />
      </div>
  )
}