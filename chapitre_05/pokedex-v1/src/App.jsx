import axios from 'axios';
import React from 'react';
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonSelected: null,
            pokemons: []
        }
    }
    componentDidMount() {
        const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
        axios(URL).then(reponse => {
            const pokemons = reponse.data.results;
            pokemons.forEach((pokemon, index) => {
                axios(pokemon.url).then((reponse) => {
                    let newPokemons = [...this.state.pokemons]; // On copie le tableau
                    const pokemonDetail = reponse.data
                    // newPokemons.push(pokemonDetail)
                    newPokemons[index] = pokemonDetail
                    console.log("Index", index);
                    this.setState({
                        pokemons: newPokemons,
                        pokemonSelected: newPokemons[0]
                    })
                });
            })
        })
    }
    render() {
        return (
        <>
            {
                this.state.pokemonSelected ? 
                <div className="pokemon-detail">
                    <div className="img-container">
                        <img src={this.state.pokemonSelected.sprites.other.dream_world.front_default} alt={`pokemon ${this.state.pokemonSelected.name}`}/>
                    </div>
                    <div className="pokemon-infos">
                        <p>Name: {this.state.pokemonSelected.name}</p>
                        <p>Heigth: {this.state.pokemonSelected.height}</p>
                        <p>Weight: {this.state.pokemonSelected.weight}</p>
                    </div>
                </div> : 
                null
            }
                {/* <p>Type: {this.state.pokemonSelected?.types.map(type => <span>{type}&nbsp;</span>)}</p> */}
            <div className="cards">
                {
                    this.state.pokemons.map((pokemon) => {
                        // pokemon?.name : chainage optionnel https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
                        //  si l'objet pokemon est null, alors on ne fera pas pokemon.name pour eviter les erreurs.
                        return (
                            <div key={pokemon?.id} className="card" onClick={() => this.setState({pokemonSelected: pokemon})}>
                                <img src={pokemon?.sprites.front_default} alt={`pokemon ${pokemon?.name}`}/>
                                <p>{pokemon?.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
        )
    }
}