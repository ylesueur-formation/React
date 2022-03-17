import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { Popular } from './routes/Popular';
import { PopularBattle } from './routes/PopularBattle';
import { Weekly } from './routes/Weekly';
import { WeeklyBattle } from './routes/WeeklyBattle';
import { Favorites } from './routes/Favorites';

export class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/popular" element={<Popular />}/>
            <Route path="/popular-battle" element={<PopularBattle />}/>
            <Route path="/weekly" element={<Weekly />}/>
            <Route path="/weekly-battle" element={<WeeklyBattle />}/>
            <Route path="/favorites" element={<Favorites />}/>
        </Routes>
        )
    }

}