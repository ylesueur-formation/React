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
                    <Link to="/event-class" >Evenement Class</Link>
                </nav>
            </header>
            <Router />
      </div>
  )
}