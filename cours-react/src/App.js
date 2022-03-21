import { Router } from './router/Router';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
      // Le JSX ne doit avoir qu'une seule balise racine
      <div>
            <header>
                <h1>Mon super site</h1>
                <nav>
                    <Link to="/" >Accueil</Link> | 
                    <Link to="/products" >Produits</Link> | 
                    <Link to="/produits" >Inexistante</Link> | 
                    <Link to="/event-class" >Evenement Class</Link> | 
                    <Link to="/styled-component" >Style Component</Link> |
                    <Link to="/google-map" >Map</Link> |
                    <Link to="/func-compo" >Fonction Composant</Link> |
                    <Link to="/use-state" >State</Link> |
                    <Link to="/use-effect" >Effect</Link> |
                </nav>
            </header>
            <Router />
      </div>
  )
}