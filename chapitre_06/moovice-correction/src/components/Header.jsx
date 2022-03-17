import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (
        <header>
            <nav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/popular">Popular</NavLink>
                </li>
                <li>
                    <NavLink to="/popular-battle">Popular Battle</NavLink>
                </li>
                <li>
                    <NavLink to="/weekly">Weekly</NavLink>
                </li>
                <li>
                    <NavLink to="/weekly-battle">Weekly Battle</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorite</NavLink>
                </li>
            </nav>
        </header>
        )
    }
}