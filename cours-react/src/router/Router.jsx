import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Liste } from '../pages/Liste';
import { EventClasse } from '../pages/Event';
import { Produits } from '../pages/Produits';
import Produit from '../components/Produit';
import { Styled } from '../components/10-style-component/Styled';
import { Map } from '../components/11-localisation/Map';
import { FonctionComposant } from '../pages/FonctionComposant'
import { State } from '../components/12-hooks/use-state/State';
import { Effect } from '../components/12-hooks/use-effect/Effect';
import { Formulaires } from '../components/13-forms/Formulaires';
import { Contexte as WithoutContext} from '../components/14-contexte/without-context/Contexte'
import { Contexte as WithContext} from '../components/14-contexte/with-context/Contexte'
import { Counter as CounterRedux } from '../components/15-redux/Counter';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
            <Routes>
                <Route path="/" element={<Liste />}/>
                {/* <Route path="/promesse" element={<Promesse />}/> */}
                <Route path="/event-class" element={<EventClasse />}/>
                <Route path="/products" element={<Produits />} />
                <Route path="/products/:produitId" element={<Produit />} />
                <Route path="/styled-component" element={<Styled />} />
                <Route path="/google-map" element={< Map />} />
                <Route path="/func-compo" element={< FonctionComposant />} />
                <Route path="/use-state" element={ <State/> } />
                <Route path="/use-effect" element={<Effect/>} />
                <Route path="/forms" element={<Formulaires />} />
                <Route path="/without-context" element={<WithoutContext />} />
                <Route path="/with-context" element={<WithContext/>} />
                <Route path="/redux" element={<CounterRedux/>} />
                <Route path="*" element={ <h1>Cette page n'existe pas</h1>}/>
                {/* <Rout   e path="/personnage" element={<Personne name="Jean" salut="toto"/>}/>
                <Route path="/personnage-render" element={<Personne name={name} salut="toto"/> }/> */}
            </Routes>
        </>
        )
    }
}