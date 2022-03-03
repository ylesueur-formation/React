import axios from 'axios';
import React from 'react';
import { Button } from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            // console.log(resultat);
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
            <div className='container d-flex flex-row justify-content-center'>
                <Button onCountry={this.getCountry}>France</Button>
                <Button onCountry={this.getCountry}>Brésil</Button>
                <Button onCountry={this.getCountry}>Croatie</Button>
            </div>

            <div className="cards container center mt-5">
                <div className="card m-auto" style={{width: "18rem"}}>
                    <img className="card-img-top" src={this.state.flag} alt="Card image cap" />
                    <div className="card-body"> 
                        <p className="card-text"><b>Pays: {this.state.name}</b></p>
                        <p className="card-text">Capitale: {this.state.capital}</p>
                        <p className="card-text d-flex">
                            <span class="material-icons">public</span>
                            Région: {this.state.region}
                        </p>
                        <p className="card-text d-flex">
                            <span class="material-icons">supervisor_account</span>
                            Population: {this.state.population.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </>
        )
    }
}