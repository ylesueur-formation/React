import axios from 'axios';
import React from 'react';
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.offset = 0;
        this.limit = 20;
        this.state = {
            pokemonSelected: null,
            pokemons: [],
            count: 0,
            next: null,
            previous: null,
            totalPage: 0,
            currentPage: 0,
            isLoading: false,
        }
    }

    getPokemons = async (url) => {
        this.setState({isLoading: true});
        const response = await axios(url)
        const pokemons = response.data.results;
        const count = response.data.count;
        const next = response.data.next;
        const previous = response.data.previous;
        let newPokemons = [];
        for (let pokemon of pokemons) {
            let response = await axios(pokemon.url.replace('pokemon', 'pokemon-species'));
            const pokemonFrName = response.data.names[4].name;
            response = await axios(pokemon.url);
            const pokemonDetail = response.data
            pokemonDetail.name = pokemonFrName;
            for(let type of pokemonDetail.types) {
                const response = await axios(type.type.url)
                type.type.name = response.data.names[3].name 
                console.log(type.type.name, type.type.url.split('/').reverse()[1]);
            }
            newPokemons.push(pokemonDetail);
        }
        // const totalPage = this.getTotalPageNumber();
        const totalPage = Math.floor(count / this.limit);
        const params = (new URL(next)).searchParams;
        const nextOffSet = params.get('offset')
        const currentPage = nextOffSet / this.limit;

        this.setState({
            pokemons: newPokemons,
            pokemonSelected: newPokemons[0],
            count,
            next,
            previous,
            totalPage,
            currentPage,
            isLoading: false
        })
    }

    componentDidMount() {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`;
        this.getPokemons(URL);
    }

    getThreeDigitNumber(number) {
        return  `00${number}`.substr(-3); 
    }

    getIdFromUrl(url) {
        let id = +url.split('/').reverse()[1];
        return id;
    }

    renderPaginationLink = () => {
        let links = [];
        const totalPage = this.state.currentPage
        const start = totalPage > 1 ?  totalPage - 1 : 1;
        for (let i = start; i <= totalPage+1; i++) {
            links.push(<li class="page-item"><a class="page-link" href="#">{i}</a></li>)
        }
        return links;
    }

    loadPokemon(url) {
        this.setState({pokemons: []})
        this.getPokemons(url);
    }

    render() {
        return (
        <>
            <div className="pokemon-detail">
                <div className="img-container">
                    <img src={this.state.pokemonSelected?.sprites.other["official-artwork"].front_default} alt={`pokemon ${this.state.pokemonSelected?.name}`}/>
                </div>
                <div className="pokemon-infos">
                    <p>Nom: {this.state.pokemonSelected?.name}</p>
                    <p>Taille: {this.state.pokemonSelected?.height / 10}m</p>
                    <p>Poids: {this.state.pokemonSelected?.weight / 10}kg</p>
                </div>
            </div>
            {
                this.state.isLoading ? 
                    <div className="loader">
                        <img src="https://i1.wp.com/static.helpjuice.com/helpjuice_production/uploads/upload/image/6076/497049/loader.gif" alt="is loading" />
                    </div> 
                    :
                    null
            }
            <div className="cards">
                {
                    this.state.pokemons.map((pokemon) => {
                        // pokemon?.name : chainage optionnel https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
                        //  si l'objet pokemon est null, alors on ne fera pas pokemon.name pour eviter les erreurs.
                        return (
                            <div key={pokemon?.id} className="card" onClick={() => this.setState({pokemonSelected: pokemon})}>
                                <div className="img-container preview">
                                    <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={`pokemon ${pokemon?.name}`}/>
                                </div>
                                <p>No.{this.getThreeDigitNumber(pokemon?.id)}</p>
                                <p>{pokemon?.name}</p>
                                <ul>
                                    { pokemon?.types.map((type, i) => <li key={type+i} className={`type${this.getIdFromUrl(type.type.url)}`}>{type.type.name}</li>) }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" disabled={!this.state.previous} onClick={() => this.loadPokemon(this.state.previous) }>
                            Précédent
                        </button>
                    </li>
                    <li>
                        {
                            `${this.state.currentPage} / ${this.state.totalPage}`
                        }
                    </li>
                    <li class="page-item">
                        <button class="page-link" disabled={!this.state.next}  onClick={() => this.loadPokemon(this.state.next)}>
                            Suivant
                        </button>
                    </li>
                </ul>
            </nav>
        </>
        )
    }
}