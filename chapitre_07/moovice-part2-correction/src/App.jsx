import React from 'react';
import { Header } from './components/Header';
import { Router } from './Router';
import './App.css';
import { Card } from './components/Card';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (
        <>
            <Header/>
            <Router />
        </>
        )
    }
}