import axios from 'axios';
import React from 'react';
import { Button } from './components/Button';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            capital: '',
            flag: '',
            population: '',
            region: '',
        }
    }
    
    componentDidMount = () => {
        this.getCountry("france");
    }

    getCountry = (country) => {
        const URL = 'https://restcountries.com/v3.1/name/' + country;
        axios(URL).then((resultat) => {
            console.log(resultat);
            const city = resultat.data[0];
            const name = city.name.common;
            const capital = city.capital[0];
            const flag = city.flags.svg;
            const population = city.population;
            const region = city.region;
            
            this.setState({
                name: name,
                capital,
                flag,
                population,
                region
            });
        })
    }
    
    render() {
        return (
        <>
            <p>{this.state.name}</p>
            <p>{this.state.capital}</p>
            <p>{this.state.flag}</p>
            <p>{this.state.population}</p>
            <p>{this.state.region}</p>
            <Button onClick={this.getCountry}>France</Button>
            <Button onClick={this.getCountry}>Brazil</Button>
            <Button onClick={this.getCountry}>Croatia</Button>
        </>
        )
    }
}